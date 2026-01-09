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
import { useState } from "react";
import { useLocation } from "wouter";
import { toast } from "sonner";

export default function Apply() {
  const [, setLocation] = useLocation();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    platforms: [] as string[],
    deviceCount: "",
    reason: "",
    acceptBeta: "",
    email: "",
  });

  const handlePlatformChange = (platform: string) => {
    setFormData((prev) => ({
      ...prev,
      platforms: prev.platforms.includes(platform)
        ? prev.platforms.filter((p) => p !== platform)
        : [...prev.platforms, platform],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (formData.platforms.length === 0) {
      toast.error("请选择至少一个平台");
      return;
    }
    if (!formData.deviceCount) {
      toast.error("请选择设备数量");
      return;
    }
    if (!formData.reason.trim()) {
      toast.error("请填写使用原因");
      return;
    }
    if (!formData.acceptBeta) {
      toast.error("请确认是否接受早期版本");
      return;
    }
    if (!formData.email.trim()) {
      toast.error("请填写邮箱");
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

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="border-b border-border py-16">
        <div className="container">
          <div className="max-w-[700px]">
            <p className="text-[14px] font-mono font-medium text-muted-foreground mb-4 tracking-widest">
              UniClipboard · 内测申请
            </p>
            <h1 className="text-[48px] font-mono font-bold leading-[1.1] tracking-[-0.02em]">
              加入内测
            </h1>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-32">
        <div className="container">
          <div className="max-w-[700px]">
            <p className="text-[16px] leading-[1.6] mb-24 text-muted-foreground">
              我们会优先邀请真实多设备使用者。请认真填写以下问题，帮助我们了解你的需求。
            </p>

            <form onSubmit={handleSubmit} className="space-y-24">
              {/* Question 1: Platforms */}
              <div>
                <h2 className="text-[18px] font-semibold mb-8">
                  1. 你主要使用哪些平台？
                </h2>
                <div className="space-y-4">
                  {["macOS", "Windows", "Linux"].map((platform) => (
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
                        {platform}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Question 2: Device Count */}
              <div>
                <h2 className="text-[18px] font-semibold mb-8">
                  2. 你日常有几台设备需要同步剪贴板？
                </h2>
                <RadioGroup
                  value={formData.deviceCount}
                  onValueChange={(value) =>
                    setFormData((prev) => ({ ...prev, deviceCount: value }))
                  }
                >
                  <div className="space-y-4">
                    {["1", "2", "3", "4+"].map((count) => (
                      <div key={count} className="flex items-center gap-3">
                        <RadioGroupItem value={count} id={`device-${count}`} />
                        <Label
                          htmlFor={`device-${count}`}
                          className="text-[16px] cursor-pointer"
                        >
                          {count}
                        </Label>
                      </div>
                    ))}
                  </div>
                </RadioGroup>
              </div>

              {/* Question 3: Reason (Soul Question) */}
              <div>
                <h2 className="text-[18px] font-semibold mb-2">
                  3. 你为什么想使用 UniClipboard？
                </h2>
                <p className="text-[14px] text-muted-foreground mb-8">
                  一句话就够（必填）
                </p>
                <Textarea
                  placeholder="例：我需要在 Mac、Linux 和 Windows 之间安全地同步代码片段，不想依赖云服务"
                  value={formData.reason}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, reason: e.target.value }))
                  }
                  className="h-24 resize-none text-[16px]"
                  style={{ borderRadius: 0 }}
                />
              </div>

              {/* Question 4: Accept Beta */}
              <div>
                <h2 className="text-[18px] font-semibold mb-8">
                  4. 是否可以接受早期版本的不稳定，并愿意反馈？
                </h2>
                <RadioGroup
                  value={formData.acceptBeta}
                  onValueChange={(value) =>
                    setFormData((prev) => ({ ...prev, acceptBeta: value }))
                  }
                >
                  <div className="space-y-4">
                    {[
                      { value: "yes", label: "是" },
                      { value: "no", label: "否" },
                    ].map(({ value, label }) => (
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
                  5. 邮箱（用于发送内测邀请）
                </h2>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, email: e.target.value }))
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
                  {isSubmitting ? "提交中..." : "提交申请"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container">
          <p className="text-[12px] text-muted-foreground">
            © 2026 UniClipboard
          </p>
        </div>
      </footer>
    </div>
  );
}
