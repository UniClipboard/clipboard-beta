import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import { google } from "googleapis";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SHEETS_SCOPE = "https://www.googleapis.com/auth/spreadsheets";
let cachedSheets: ReturnType<typeof google.sheets> | null = null;

function getEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }
  return value;
}

function getSheetsClient() {
  if (cachedSheets) {
    return cachedSheets;
  }

  const email = getEnv("GOOGLE_SERVICE_ACCOUNT_EMAIL");
  const rawKey = getEnv("GOOGLE_PRIVATE_KEY");
  const key = rawKey.replace(/\\n/g, "\n");

  const auth = new google.auth.JWT({
    email,
    key,
    scopes: [SHEETS_SCOPE],
  });

  cachedSheets = google.sheets({ version: "v4", auth });
  return cachedSheets;
}

async function startServer() {
  const app = express();
  const server = createServer(app);

  app.use(express.json({ limit: "1mb" }));

  app.post("/api/apply", async (req, res) => {
    try {
      const { platforms, deviceCount, reason, acceptBeta, email } = (req.body ||
        {}) as {
        platforms?: string[];
        deviceCount?: string;
        reason?: string;
        acceptBeta?: string;
        email?: string;
      };

      if (
        !Array.isArray(platforms) ||
        platforms.length === 0 ||
        !deviceCount ||
        !reason ||
        !acceptBeta ||
        !email
      ) {
        res.status(400).json({ error: "invalid_payload" });
        return;
      }

      const sheetId = getEnv("GOOGLE_SHEET_ID");
      const sheetTab = process.env.GOOGLE_SHEET_TAB || "Sheet1";
      const timestamp = new Date().toISOString();

      const values = [
        [
          timestamp,
          platforms.join(", "),
          deviceCount,
          reason,
          acceptBeta,
          email,
        ],
      ];

      const sheets = getSheetsClient();
      await sheets.spreadsheets.values.append({
        spreadsheetId: sheetId,
        range: `${sheetTab}!A1`,
        valueInputOption: "USER_ENTERED",
        insertDataOption: "INSERT_ROWS",
        requestBody: { values },
      });

      res.status(200).json({ ok: true });
    } catch (error) {
      console.error("Failed to append application:", error);
      res.status(500).json({ error: "internal_error" });
    }
  });

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
