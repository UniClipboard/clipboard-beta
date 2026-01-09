/**
 * UniClipboard Beta Application Form
 * Swiss International Style - Minimalist Form Design
 *
 * 5 carefully designed questions to filter 50% unsuitable users
 * Question 3 is the soul question - reveals user quality in one sentence
 */

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/i18n";
import { LanguageToggle } from "@/components/LanguageToggle";

export default function Apply() {
  const [, setLocation] = useLocation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    document.title = t(language, "documentTitleApply");
  }, [language]);

  const [formData, setFormData] = useState({
    platforms: [] as string[],
    deviceCount: "",
    reason: "",
    acceptBeta: "",
    email: "",
  });

  const handlePlatformChange = (platform: string) => {
    setFormData(prev => ({
      ...prev,
      platforms: prev.platforms.includes(platform)
        ? prev.platforms.filter(p => p !== platform)
        : [...prev.platforms, platform],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (formData.platforms.length === 0) {
      toast.error(t(language, "validationPlatforms"));
      return;
    }
    if (!formData.deviceCount) {
      toast.error(t(language, "validationDevices"));
      return;
    }
    if (!formData.reason.trim()) {
      toast.error(t(language, "validationReason"));
      return;
    }
    if (!formData.acceptBeta) {
      toast.error(t(language, "validationBeta"));
      return;
    }
    if (!formData.email.trim()) {
      toast.error(t(language, "validationEmail"));
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      // Redirect to success page
      setLocation("/apply-success");
    }, 1000);
  };

  const platformLabels = {
    macOS: t(language, "platformMacOS"),
    Windows: t(language, "platformWindows"),
    Linux: t(language, "platformLinux"),
  };

  const deviceCounts = ["1", "2", "3", "4+"];
  const deviceLabels: Record<string, string> = {
    "1": t(language, "deviceCount1"),
    "2": t(language, "deviceCount2"),
    "3": t(language, "deviceCount3"),
    "4+": t(language, "deviceCount4Plus"),
  };

  const betaOptions = [
    { value: "yes", label: t(language, "answerYes") },
    { value: "no", label: t(language, "answerNo") },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header with language toggle */}
      <div className="border-b border-border py-4">
        <div className="container mx-auto max-w-5xl px-6 flex justify-end">
          <LanguageToggle />
        </div>
      </div>

      {/* Page Header */}
      <section className="border-b border-border py-16">
        <div className="container mx-auto max-w-5xl px-6">
          <div className="max-w-[700px]">
            <p className="text-[14px] font-mono font-medium text-muted-foreground mb-4 tracking-widest">
              {t(language, "taglineApply")}
            </p>
            <h1 className="text-[48px] font-mono font-bold leading-[1.1] tracking-[-0.02em]">
              {t(language, "applyTitle")}
            </h1>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-32">
        <div className="container mx-auto max-w-5xl px-6">
          <div className="max-w-[700px]">
            <p className="text-[16px] leading-[1.6] mb-24 text-muted-foreground">
              {t(language, "applyIntro")}
            </p>

            <form onSubmit={handleSubmit} className="space-y-24">
              {/* Question 1: Platforms */}
              <div>
                <h2 className="text-[18px] font-semibold mb-8">
                  {t(language, "question1")}
                </h2>
                <div className="space-y-4">
                  {["macOS", "Windows", "Linux"].map(platform => (
                    <div key={platform} className="flex items-center gap-3">
                      <Checkbox
                        id={platform}
                        checked={formData.platforms.includes(platform)}
                        onCheckedChange={() => handlePlatformChange(platform)}
                      />
                      <Label
                        htmlFor={platform}
                        className="text-[16px] cursor-pointer"
                      >
                        {
                          platformLabels[
                            platform as keyof typeof platformLabels
                          ]
                        }
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Question 2: Device Count */}
              <div>
                <h2 className="text-[18px] font-semibold mb-8">
                  {t(language, "question2")}
                </h2>
                <RadioGroup
                  value={formData.deviceCount}
                  onValueChange={value =>
                    setFormData(prev => ({ ...prev, deviceCount: value }))
                  }
                >
                  <div className="space-y-4">
                    {deviceCounts.map(count => (
                      <div key={count} className="flex items-center gap-3">
                        <RadioGroupItem value={count} id={`device-${count}`} />
                        <Label
                          htmlFor={`device-${count}`}
                          className="text-[16px] cursor-pointer"
                        >
                          {deviceLabels[count]}
                        </Label>
                      </div>
                    ))}
                  </div>
                </RadioGroup>
              </div>

              {/* Question 3: Reason (Soul Question) */}
              <div>
                <h2 className="text-[18px] font-semibold mb-2">
                  {t(language, "question3")}
                </h2>
                <p className="text-[14px] text-muted-foreground mb-8">
                  {t(language, "question3Hint")}
                </p>
                <Textarea
                  placeholder={t(language, "question3Placeholder")}
                  value={formData.reason}
                  onChange={e =>
                    setFormData(prev => ({ ...prev, reason: e.target.value }))
                  }
                  className="h-24 resize-none text-[16px]"
                  style={{ borderRadius: 0 }}
                />
              </div>

              {/* Question 4: Accept Beta */}
              <div>
                <h2 className="text-[18px] font-semibold mb-8">
                  {t(language, "question4")}
                </h2>
                <RadioGroup
                  value={formData.acceptBeta}
                  onValueChange={value =>
                    setFormData(prev => ({ ...prev, acceptBeta: value }))
                  }
                >
                  <div className="space-y-4">
                    {betaOptions.map(({ value, label }) => (
                      <div key={value} className="flex items-center gap-3">
                        <RadioGroupItem value={value} id={`beta-${value}`} />
                        <Label
                          htmlFor={`beta-${value}`}
                          className="text-[16px] cursor-pointer"
                        >
                          {label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </RadioGroup>
              </div>

              {/* Question 5: Email */}
              <div>
                <h2 className="text-[18px] font-semibold mb-8">
                  {t(language, "question5")}
                </h2>
                <Input
                  type="email"
                  placeholder={t(language, "emailPlaceholder")}
                  value={formData.email}
                  onChange={e =>
                    setFormData(prev => ({ ...prev, email: e.target.value }))
                  }
                  className="h-12 text-[16px]"
                  style={{ borderRadius: 0 }}
                />
              </div>

              {/* Submit Button */}
              <div className="pt-8 border-t border-border">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="h-14 px-12 text-[16px] font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200 disabled:opacity-50"
                  style={{ borderRadius: 0 }}
                >
                  {isSubmitting
                    ? t(language, "submitting")
                    : t(language, "submitButton")}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto max-w-5xl px-6">
          <p className="text-[12px] text-muted-foreground">
            {t(language, "copyright")}
          </p>
        </div>
      </footer>
    </div>
  );
}
