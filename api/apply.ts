import { google } from "googleapis";

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

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    res.status(405).json({ error: "method_not_allowed" });
    return;
  }

  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
    const { platforms, deviceCount, reason, acceptBeta, email } = (body ||
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
    const safeSheetTab = sheetTab.replace(/'/g, "''");
    const timestamp = new Date().toISOString();

    const values = [
      [timestamp, platforms.join(", "), deviceCount, reason, acceptBeta, email],
    ];

    const sheets = getSheetsClient();
    const headerRange = `'${safeSheetTab}'!A1:F1`;

    const headerResponse = await sheets.spreadsheets.values.get({
      spreadsheetId: sheetId,
      range: headerRange,
    });

    const headerValues = headerResponse.data.values?.[0] || [];
    if (headerValues.length === 0) {
      await sheets.spreadsheets.values.update({
        spreadsheetId: sheetId,
        range: headerRange,
        valueInputOption: "USER_ENTERED",
        requestBody: {
          values: [
            [
              "Timestamp",
              "Platforms",
              "DeviceCount",
              "Reason",
              "AcceptBeta",
              "Email",
            ],
          ],
        },
      });
    }

    await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: `'${safeSheetTab}'!A1`,
      valueInputOption: "USER_ENTERED",
      insertDataOption: "INSERT_ROWS",
      requestBody: { values },
    });

    res.status(200).json({ ok: true });
  } catch (error) {
    console.error("Failed to append application:", error);
    res.status(500).json({ error: "internal_error" });
  }
}
