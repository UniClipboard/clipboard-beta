/**
 * Swiss International Style - Technical Landing
 * Goal: 10 seconds to understand who this is for and click CTA
 * 
 * Design Principles:
 * - Absolute clarity and hierarchy
 * - Every element serves a purpose
 * - Visual weight guides attention to CTA
 * - Negative space as active design
 */

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useLocation } from "wouter";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/i18n";
import { LanguageToggle } from "@/components/LanguageToggle";

export default function Home() {
  const [, setLocation] = useLocation();
  const [email, setEmail] = useState("");
  const { language } = useLanguage();

  const handleApply = () => {
    setLocation("/apply");
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    const message = language === "zh" ? "已记录" : "Recorded";
    const description = language === "zh" 
      ? "我们会在下一轮内测开放时通知你" 
      : "We'll notify you when the next beta opens";
    toast(message, {
      description,
    });
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header with language toggle */}
      <div className="border-b border-border py-4">
        <div className="container flex justify-end">
          <LanguageToggle />
        </div>
      </div>

      {/* Hero - Immediate clarity */}
      <section className="flex-1 flex items-center border-b border-border">
        <div className="container py-24">
          <div className="max-w-[700px]">
            {/* Tagline - Immediate positioning */}
            <p className="text-[14px] font-mono font-medium text-muted-foreground mb-8 tracking-widest">
              {t(language, "tagline")}
            </p>

            {/* Main headline - Product promise */}
            <h1 className="text-[56px] font-mono font-bold leading-[1.1] mb-8 tracking-[-0.02em]">
              {t(language, "headline")}
            </h1>

            {/* Divider */}
            <div className="h-[1px] w-16 bg-primary mb-8" />

            {/* Core value proposition - Technical accuracy */}
            <div className="space-y-3 mb-16">
              <p className="text-[16px] leading-[1.6]">
                {t(language, "subheadline")}
              </p>
            </div>

            {/* Primary CTA - Visual anchor */}
            <Button
              onClick={handleApply}
              className="h-14 px-12 text-[16px] font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200 mb-16"
              style={{ borderRadius: 0 }}
            >
              {t(language, "ctaPrimary")}
            </Button>

            {/* Social proof - Minimal */}
            <p className="text-[13px] text-muted-foreground">
              {t(language, "socialProof")}
            </p>
          </div>
        </div>
      </section>

      {/* Problem - Rational justification */}
      <section className="border-b border-border py-24">
        <div className="container">
          <div className="max-w-[700px]">
            <h2 className="text-[32px] font-mono font-semibold mb-8 tracking-[-0.01em]">
              {t(language, "problemTitle")}
            </h2>

            <div className="space-y-6">
              <p className="text-[16px] leading-[1.6]">
                {t(language, "problemIntro")}
              </p>
              
              <p className="text-[16px] leading-[1.6] font-medium">
                {t(language, "problemFocus")}
              </p>

              <ul className="space-y-4 ml-4">
                <li className="text-[16px] leading-[1.6] flex items-start gap-4">
                  <span className="text-muted-foreground flex-shrink-0">—</span>
                  <span>{t(language, "problemPoint1")}</span>
                </li>
                <li className="text-[16px] leading-[1.6] flex items-start gap-4">
                  <span className="text-muted-foreground flex-shrink-0">—</span>
                  <span>{t(language, "problemPoint2")}</span>
                </li>
                <li className="text-[16px] leading-[1.6] flex items-start gap-4">
                  <span className="text-muted-foreground flex-shrink-0">—</span>
                  <span>{t(language, "problemPoint3")}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How it works - Technical details */}
      <section className="border-b border-border py-24 bg-secondary/30">
        <div className="container">
          <div className="max-w-[700px]">
            <h2 className="text-[32px] font-mono font-semibold mb-8 tracking-[-0.01em]">
              {t(language, "howTitle")}
            </h2>

            <ul className="space-y-4 mb-12">
              <li className="text-[16px] leading-[1.6] flex items-start gap-4">
                <span className="text-muted-foreground flex-shrink-0">—</span>
                <span>{t(language, "howPoint1")}</span>
              </li>
              <li className="text-[16px] leading-[1.6] flex items-start gap-4">
                <span className="text-muted-foreground flex-shrink-0">—</span>
                <span>{t(language, "howPoint2")}</span>
              </li>
              <li className="text-[16px] leading-[1.6] flex items-start gap-4">
                <span className="text-muted-foreground flex-shrink-0">—</span>
                <span>{t(language, "howPoint3")}</span>
              </li>
              <li className="text-[16px] leading-[1.6] flex items-start gap-4">
                <span className="text-muted-foreground flex-shrink-0">—</span>
                <span>{t(language, "howPoint4")}</span>
              </li>
            </ul>

            <p className="text-[16px] leading-[1.6] text-muted-foreground">
              {t(language, "howNote")}
            </p>
          </div>
        </div>
      </section>

      {/* Benefits - Concise list */}
      <section className="border-b border-border py-24">
        <div className="container">
          <div className="max-w-[700px]">
            <h2 className="text-[32px] font-mono font-semibold mb-16 tracking-[-0.01em]">
              {t(language, "benefitsTitle")}
            </h2>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-1 h-12 bg-foreground flex-shrink-0 mt-1" />
                <div>
                  <p className="text-[16px] font-medium mb-1">{t(language, "benefitBadge")}</p>
                  <p className="text-[14px] text-muted-foreground">{t(language, "benefitBadgeDesc")}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-1 h-12 bg-foreground flex-shrink-0 mt-1" />
                <div>
                  <p className="text-[16px] font-medium mb-1">{t(language, "benefitEncryption")}</p>
                  <p className="text-[14px] text-muted-foreground">{t(language, "benefitEncryptionDesc")}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-1 h-12 bg-foreground flex-shrink-0 mt-1" />
                <div>
                  <p className="text-[16px] font-medium mb-1">{t(language, "benefitFeatures")}</p>
                  <p className="text-[14px] text-muted-foreground">{t(language, "benefitFeaturesDesc")}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-1 h-12 bg-foreground flex-shrink-0 mt-1" />
                <div>
                  <p className="text-[16px] font-medium mb-1">{t(language, "benefitCocreate")}</p>
                  <p className="text-[14px] text-muted-foreground">{t(language, "benefitCocreateDesc")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who - Target audience */}
      <section className="border-b border-border py-24 bg-secondary/30">
        <div className="container">
          <div className="max-w-[700px]">
            <h2 className="text-[32px] font-mono font-semibold mb-12 tracking-[-0.01em]">
              {t(language, "whoTitle")}
            </h2>

            <ul className="space-y-4">
              <li className="text-[16px] leading-[1.6] flex items-start gap-4">
                <span className="text-muted-foreground flex-shrink-0">—</span>
                <span>{t(language, "whoPoint1")}</span>
              </li>
              <li className="text-[16px] leading-[1.6] flex items-start gap-4">
                <span className="text-muted-foreground flex-shrink-0">—</span>
                <span>{t(language, "whoPoint2")}</span>
              </li>
              <li className="text-[16px] leading-[1.6] flex items-start gap-4">
                <span className="text-muted-foreground flex-shrink-0">—</span>
                <span>{t(language, "whoPoint3")}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Status - Trust building */}
      <section className="border-b border-border py-24">
        <div className="container">
          <div className="max-w-[700px]">
            <h2 className="text-[32px] font-mono font-semibold mb-8 tracking-[-0.01em]">
              {t(language, "statusTitle")}
            </h2>

            <div className="space-y-4">
              <p className="text-[16px] leading-[1.6]">
                {t(language, "statusText1")}
              </p>
              <p className="text-[16px] leading-[1.6] text-muted-foreground">
                {t(language, "statusText2")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Reinforcement */}
      <section className="border-b border-border py-24">
        <div className="container">
          <div className="max-w-[700px]">
            <p className="text-[18px] leading-[1.6] mb-12">
              {t(language, "finalCTAText")}
            </p>

            <Button
              onClick={handleApply}
              className="h-14 px-12 text-[16px] font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200"
              style={{ borderRadius: 0 }}
            >
              {t(language, "ctaPrimary")}
            </Button>
          </div>
        </div>
      </section>

      {/* Email signup - Minimal friction */}
      <section className="border-b border-border py-16 bg-secondary/30">
        <div className="container">
          <div className="max-w-[700px]">
            <p className="text-[14px] text-muted-foreground mb-6">
              {t(language, "emailPrompt")}
            </p>

            <form onSubmit={handleEmailSubmit} className="flex gap-3">
              <Input
                type="email"
                placeholder={t(language, "emailPlaceholder")}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 flex-1 bg-background border-border text-[14px]"
                style={{ borderRadius: 0 }}
              />
              <Button
                type="submit"
                className="h-12 px-8 text-[14px] font-medium bg-foreground text-background hover:bg-foreground/90 transition-colors duration-200"
                style={{ borderRadius: 0 }}
              >
                {t(language, "emailSubmit")}
              </Button>
            </form>
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
