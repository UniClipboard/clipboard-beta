/**
 * UniClipboard Beta Application Success Page
 * Swiss International Style - Status Confirmation
 * 
 * Goal: Reduce user anxiety + Increase email open rate
 */

import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/i18n";
import { LanguageToggle } from "@/components/LanguageToggle";

export default function ApplySuccess() {
  const [, setLocation] = useLocation();
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header with language toggle */}
      <div className="border-b border-border py-4">
        <div className="container flex justify-end">
          <LanguageToggle />
        </div>
      </div>

      {/* Success Message */}
      <section className="flex-1 flex items-center border-b border-border">
        <div className="container py-24">
          <div className="max-w-[700px]">
            {/* Tagline */}
            <p className="text-[14px] font-mono font-medium text-muted-foreground mb-8 tracking-widest">
              {t(language, "taglineApply")}
            </p>

            {/* Main Message */}
            <h1 className="text-[56px] font-mono font-bold leading-[1.1] mb-8 tracking-[-0.02em]">
              {t(language, "successTitle")}
            </h1>

            {/* Divider */}
            <div className="h-[1px] w-16 bg-primary mb-16" />

            {/* Details */}
            <div className="space-y-6 mb-16">
              <p className="text-[18px] leading-[1.6]">
                {t(language, "successMessage")}
              </p>

              <div className="space-y-4 pt-8 border-t border-border">
                <p className="text-[16px] leading-[1.6]">
                  {t(language, "nextSteps")}
                </p>
                <ul className="space-y-3 ml-4">
                  <li className="text-[16px] leading-[1.6] flex items-start gap-4">
                    <span className="text-muted-foreground flex-shrink-0">1.</span>
                    <span>{t(language, "step1")}</span>
                  </li>
                  <li className="text-[16px] leading-[1.6] flex items-start gap-4">
                    <span className="text-muted-foreground flex-shrink-0">2.</span>
                    <span>{t(language, "step2")}</span>
                  </li>
                  <li className="text-[16px] leading-[1.6] flex items-start gap-4">
                    <span className="text-muted-foreground flex-shrink-0">3.</span>
                    <span>{t(language, "step3")}</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* CTA */}
            <Button
              onClick={() => setLocation("/")}
              className="h-14 px-12 text-[16px] font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200"
              style={{ borderRadius: 0 }}
            >
              {t(language, "backHome")}
            </Button>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="border-t border-border py-24 bg-secondary/30">
        <div className="container">
          <div className="max-w-[700px]">
            <h2 className="text-[32px] font-mono font-semibold mb-8 tracking-[-0.01em]">
              {t(language, "faqTitle")}
            </h2>

            <div className="space-y-12">
              <div>
                <h3 className="text-[18px] font-semibold mb-4">
                  {t(language, "faqQ1")}
                </h3>
                <p className="text-[16px] leading-[1.6] text-muted-foreground">
                  {t(language, "faqA1")}
                </p>
              </div>

              <div>
                <h3 className="text-[18px] font-semibold mb-4">
                  {t(language, "faqQ2")}
                </h3>
                <p className="text-[16px] leading-[1.6] text-muted-foreground">
                  {t(language, "faqA2")}
                </p>
              </div>

              <div>
                <h3 className="text-[18px] font-semibold mb-4">
                  {t(language, "faqQ3")}
                </h3>
                <p className="text-[16px] leading-[1.6] text-muted-foreground">
                  {t(language, "faqA3")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container">
          <p className="text-[12px] text-muted-foreground">
            {t(language, "copyright")}
          </p>
        </div>
      </footer>
    </div>
  );
}
