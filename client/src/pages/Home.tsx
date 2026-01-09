/**
 * Swiss International Style - Minimalist Landing
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
import { toast } from "sonner";

export default function Home() {
  const [email, setEmail] = useState("");

  const handleApply = () => {
    toast("功能开发中", {
      description: "内测申请功能即将上线",
    });
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    toast("已记录", {
      description: "我们会在下一轮内测开放时通知你",
    });
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Hero - Immediate clarity */}
      <section className="flex-1 flex items-center border-b border-border">
        <div className="container py-24">
          <div className="max-w-[700px]">
            {/* Tagline - Immediate positioning */}
            <p className="text-[14px] font-mono font-medium text-muted-foreground mb-8 tracking-widest">
              跨设备剪贴板 · 内测招募中
            </p>

            {/* Main headline - Product promise */}
            <h1 className="text-[56px] font-mono font-bold leading-[1.1] mb-8 tracking-[-0.02em]">
              一个以隐私与可靠性为前提的剪贴板同步工具
            </h1>

            {/* Divider */}
            <div className="h-[1px] w-16 bg-primary mb-8" />

            {/* Core value proposition - 3 lines, crystal clear */}
            <div className="space-y-3 mb-16">
              <p className="text-[16px] leading-[1.6]">
                不依赖第三方云，支持端到端加密，专为多设备工作流设计。
              </p>
            </div>

            {/* Primary CTA - Visual anchor */}
            <Button
              onClick={handleApply}
              className="h-14 px-12 text-[16px] font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200 mb-16"
              style={{ borderRadius: 0 }}
            >
              申请加入内测
            </Button>

            {/* Social proof - Minimal */}
            <p className="text-[13px] text-muted-foreground">
              名额有限，优先邀请长期、多设备用户
            </p>
          </div>
        </div>
      </section>

      {/* Why - Rational justification */}
      <section className="border-b border-border py-24">
        <div className="container">
          <div className="max-w-[700px]">
            <h2 className="text-[32px] font-mono font-semibold mb-8 tracking-[-0.01em]">
              为什么做它
            </h2>

            <div className="space-y-6">
              <p className="text-[16px] leading-[1.6]">
                我们不想做一个"能用就行"的工具。
              </p>
              <p className="text-[16px] leading-[1.6]">
                这个产品关注的是：效率是否真实提升，数据是否真正可控。
              </p>
              <p className="text-[16px] leading-[1.6] text-muted-foreground">
                内测阶段，你的使用反馈将直接影响产品方向。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits - Concise list */}
      <section className="border-b border-border py-24 bg-secondary/30">
        <div className="container">
          <div className="max-w-[700px]">
            <h2 className="text-[32px] font-mono font-semibold mb-16 tracking-[-0.01em]">
              内测用户将获得
            </h2>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <span className="text-[20px] flex-shrink-0">🎖</span>
                <div>
                  <p className="text-[16px] font-medium mb-1">创始用户身份</p>
                  <p className="text-[14px] text-muted-foreground">永久保留</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-[20px] flex-shrink-0">🔓</span>
                <div>
                  <p className="text-[16px] font-medium mb-1">核心同步与加密能力永久可用</p>
                  <p className="text-[14px] text-muted-foreground">更高使用上限，正式版不回收</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-[20px] flex-shrink-0">🚀</span>
                <div>
                  <p className="text-[16px] font-medium mb-1">新功能优先体验</p>
                  <p className="text-[14px] text-muted-foreground">部分功能仅在内测阶段开放</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-[20px] flex-shrink-0">🧭</span>
                <div>
                  <p className="text-[16px] font-medium mb-1">功能共创与优先级投票</p>
                  <p className="text-[14px] text-muted-foreground">直接与开发者讨论产品方向</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who - Target audience */}
      <section className="border-b border-border py-24">
        <div className="container">
          <div className="max-w-[700px]">
            <h2 className="text-[32px] font-mono font-semibold mb-12 tracking-[-0.01em]">
              适合谁
            </h2>

            <ul className="space-y-4">
              <li className="text-[16px] leading-[1.6] flex items-start gap-4">
                <span className="text-muted-foreground flex-shrink-0">—</span>
                <span>经常在多台设备间切换</span>
              </li>
              <li className="text-[16px] leading-[1.6] flex items-start gap-4">
                <span className="text-muted-foreground flex-shrink-0">—</span>
                <span>对效率与隐私有更高要求</span>
              </li>
              <li className="text-[16px] leading-[1.6] flex items-start gap-4">
                <span className="text-muted-foreground flex-shrink-0">—</span>
                <span>能接受早期产品的不完美，并愿意反馈</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Status - Trust building */}
      <section className="border-b border-border py-24 bg-secondary/30">
        <div className="container">
          <div className="max-w-[700px]">
            <h2 className="text-[32px] font-mono font-semibold mb-8 tracking-[-0.01em]">
              状态说明
            </h2>

            <div className="space-y-4">
              <p className="text-[16px] leading-[1.6]">
                产品仍在早期阶段，功能与界面可能调整。
              </p>
              <p className="text-[16px] leading-[1.6] text-muted-foreground">
                我们会明确告知重要变更，不做暗改。
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
              如果你认同这个理念——
            </p>

            <Button
              onClick={handleApply}
              className="h-14 px-12 text-[16px] font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200"
              style={{ borderRadius: 0 }}
            >
              申请加入内测
            </Button>
          </div>
        </div>
      </section>

      {/* Email signup - Minimal friction */}
      <section className="border-b border-border py-16 bg-secondary/30">
        <div className="container">
          <div className="max-w-[700px]">
            <p className="text-[14px] text-muted-foreground mb-6">
              不想错过？留下邮箱，下一轮开放时通知你。
            </p>

            <form onSubmit={handleEmailSubmit} className="flex gap-3">
              <Input
                type="email"
                placeholder="your@email.com"
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
                提交
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container">
          <p className="text-[12px] text-muted-foreground">
            © 2026 跨设备剪贴板
          </p>
        </div>
      </footer>
    </div>
  );
}
