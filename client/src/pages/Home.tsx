/**
 * Swiss International Style Design Implementation
 * - Strict grid system with 8px baseline
 * - Near-monochrome palette (charcoal, grays, white)
 * - Single accent color (cold blue #0066cc)
 * - Absolute left alignment, no centering
 * - Minimal transitions (200ms linear fade only)
 * - IBM Plex Mono for headings, IBM Plex Sans for body
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
    <div className="min-h-screen bg-background">
      {/* Hero Section - Asymmetric layout with background */}
      <section 
        className="relative min-h-[600px] border-b border-border"
        style={{
          backgroundImage: 'url(/images/hero-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-background/95" />
        <div className="container relative py-32">
          <div className="max-w-[66.666%]">
            <h1 className="text-[48px] font-bold leading-[1.2] tracking-[-0.02em] mb-16">
              一款正在被认真打磨的<br />跨设备剪贴板
            </h1>
            
            <div className="h-[1px] w-32 bg-primary mb-16" />
            
            <p className="text-[20px] font-medium mb-8">
              正在招募第一批内测共创者
            </p>
            
            <p className="text-[16px] leading-[1.6] mb-32 max-w-[600px]">
              我们正在构建一个真正可靠、可控、以隐私为前提的跨设备剪贴板同步工具。
              如果你对效率、数据安全和产品设计有更高要求,欢迎加入内测。
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

      {/* Product Positioning */}
      <section className="border-b border-border py-32">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8">
              <h2 className="text-[32px] font-semibold mb-16">
                产品定位
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-1 h-12 bg-foreground flex-shrink-0 mt-1" />
                  <p className="text-[16px] leading-[1.6]">
                    不依赖第三方云
                  </p>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-1 h-12 bg-foreground flex-shrink-0 mt-1" />
                  <p className="text-[16px] leading-[1.6]">
                    支持端到端加密
                  </p>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-1 h-12 bg-foreground flex-shrink-0 mt-1" />
                  <p className="text-[16px] leading-[1.6]">
                    专为多设备工作流设计
                  </p>
                </div>
              </div>
              
              <div className="mt-16 pt-16 border-t border-border">
                <p className="text-[16px] leading-[1.6] text-muted-foreground">
                  这是一个给自己用、也给同类人用的工具。
                </p>
              </div>
            </div>
            
            <div className="lg:col-span-4">
              <img 
                src="/images/feature-visual.png" 
                alt="产品功能示意"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Beta Users */}
      <section className="border-b border-border py-32 bg-secondary/30">
        <div className="container">
          <div className="max-w-[66.666%]">
            <h2 className="text-[32px] font-semibold mb-16">
              为什么需要内测用户
            </h2>
            
            <p className="text-[18px] leading-[1.6] mb-16">
              我们不希望这是一个"先做出来再改"的产品。
            </p>
            
            <div className="space-y-8">
              <p className="text-[16px] leading-[1.6]">
                内测阶段,我们更关注的是:
              </p>
              
              <ul className="space-y-4 ml-8">
                <li className="text-[16px] leading-[1.6] flex items-start gap-4">
                  <span className="text-muted-foreground">—</span>
                  <span>剪贴板同步在真实工作流中的合理性</span>
                </li>
                <li className="text-[16px] leading-[1.6] flex items-start gap-4">
                  <span className="text-muted-foreground">—</span>
                  <span>安全与可用性之间的边界</span>
                </li>
                <li className="text-[16px] leading-[1.6] flex items-start gap-4">
                  <span className="text-muted-foreground">—</span>
                  <span>哪些功能应该成为默认,哪些不应该存在</span>
                </li>
              </ul>
            </div>
            
            <div className="mt-16 pt-16 border-t border-border">
              <p className="text-[16px] leading-[1.6] font-medium">
                你的使用习惯和反馈,将直接影响产品的最终形态。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="border-b border-border py-32">
        <div className="container">
          <h2 className="text-[32px] font-semibold mb-32">
            内测用户将获得什么
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-32">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <span className="text-[24px] font-mono">🎖</span>
                <div>
                  <h3 className="text-[20px] font-semibold mb-4">创始用户身份</h3>
                  <p className="text-[14px] leading-[1.5] text-muted-foreground">
                    内测期间注册并持续使用的用户,将获得「创始用户」标识
                  </p>
                  <p className="text-[14px] leading-[1.5] text-muted-foreground mt-2">
                    这是一个永久保留的身份
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <span className="text-[24px] font-mono">🔓</span>
                <div>
                  <h3 className="text-[20px] font-semibold mb-4">永久权益</h3>
                  <p className="text-[14px] leading-[1.5] text-muted-foreground">
                    基础同步能力与端到端加密功能 永久可用
                  </p>
                  <p className="text-[14px] leading-[1.5] text-muted-foreground mt-2">
                    更高的设备数与历史记录上限(正式版不会回收)
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <span className="text-[24px] font-mono">🚀</span>
                <div>
                  <h3 className="text-[20px] font-semibold mb-4">优先体验</h3>
                  <p className="text-[14px] leading-[1.5] text-muted-foreground">
                    新功能将优先向内测用户开放
                  </p>
                  <p className="text-[14px] leading-[1.5] text-muted-foreground mt-2">
                    部分功能只在内测阶段开放体验
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <span className="text-[24px] font-mono">🧭</span>
                <div>
                  <h3 className="text-[20px] font-semibold mb-4">共创权利</h3>
                  <p className="text-[14px] leading-[1.5] text-muted-foreground">
                    你可以参与功能优先级投票
                  </p>
                  <p className="text-[14px] leading-[1.5] text-muted-foreground mt-2">
                    你的反馈可能直接进入 Roadmap
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-8 lg:col-span-2">
              <div className="flex items-start gap-4">
                <span className="text-[24px] font-mono">💬</span>
                <div>
                  <h3 className="text-[20px] font-semibold mb-4">直接沟通渠道</h3>
                  <p className="text-[14px] leading-[1.5] text-muted-foreground">
                    内测用户将进入专属交流群
                  </p>
                  <p className="text-[14px] leading-[1.5] text-muted-foreground mt-2">
                    可以直接与产品开发者讨论设计与取舍
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ideal User */}
      <section className="border-b border-border py-32 bg-secondary/30">
        <div className="container">
          <div className="max-w-[66.666%]">
            <h2 className="text-[32px] font-semibold mb-16">
              我们更希望你是这样的人
            </h2>
            
            <ul className="space-y-8">
              <li className="text-[16px] leading-[1.6] flex items-start gap-4">
                <span className="text-muted-foreground">—</span>
                <span>经常在多台设备之间切换</span>
              </li>
              <li className="text-[16px] leading-[1.6] flex items-start gap-4">
                <span className="text-muted-foreground">—</span>
                <span>对效率工具有自己的判断,而不盲目追新</span>
              </li>
              <li className="text-[16px] leading-[1.6] flex items-start gap-4">
                <span className="text-muted-foreground">—</span>
                <span>能接受早期产品的不完美,并愿意反馈问题</span>
              </li>
            </ul>
            
            <div className="mt-16 pt-16 border-t border-border">
              <p className="text-[16px] leading-[1.6] text-muted-foreground">
                如果你只是想"白嫖一个 Pro",这可能不是合适的内测。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Status */}
      <section className="border-b border-border py-32">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8">
              <h2 className="text-[32px] font-semibold mb-16">
                当前状态说明
              </h2>
              
              <ul className="space-y-8">
                <li className="text-[16px] leading-[1.6] flex items-start gap-4">
                  <span className="text-muted-foreground">—</span>
                  <span>产品仍处于早期阶段,可能存在 Bug</span>
                </li>
                <li className="text-[16px] leading-[1.6] flex items-start gap-4">
                  <span className="text-muted-foreground">—</span>
                  <span>功能会持续调整,界面可能频繁变化</span>
                </li>
                <li className="text-[16px] leading-[1.6] flex items-start gap-4">
                  <span className="text-muted-foreground">—</span>
                  <span>我们会明确告知重要变更,不做暗改</span>
                </li>
              </ul>
              
              <div className="mt-16 pt-16 border-t border-border">
                <p className="text-[16px] leading-[1.6] font-medium">
                  内测的意义在于一起把事情做对,而不是做快。
                </p>
              </div>
            </div>
            
            <div className="lg:col-span-4 flex items-center justify-center">
              <img 
                src="/images/trust-icon.png" 
                alt="信任与透明"
                className="w-48 h-48"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32">
        <div className="container">
          <div className="max-w-[66.666%]">
            <p className="text-[18px] leading-[1.6] mb-16">
              如果你认同上面的理念,<br />
              并愿意花一点时间参与打磨这个工具——
            </p>
            
            <Button 
              onClick={handleApply}
              className="h-14 px-12 text-[16px] font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200 mb-8"
              style={{ borderRadius: 0 }}
            >
              申请加入内测
            </Button>
            
            <p className="text-[14px] leading-[1.5] text-muted-foreground">
              内测名额有限,我们会优先邀请长期使用、多设备用户。
            </p>
          </div>
        </div>
      </section>

      {/* Email Signup Footer */}
      <section className="border-t border-border py-16 bg-secondary/30">
        <div className="container">
          <div className="max-w-[600px]">
            <p className="text-[14px] leading-[1.5] mb-8 text-muted-foreground">
              不想错过?<br />
              留下邮箱,我们会在下一轮内测开放时通知你。
            </p>
            
            <form onSubmit={handleEmailSubmit} className="flex gap-4">
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

      {/* Minimal Footer */}
      <footer className="border-t border-border py-8">
        <div className="container">
          <p className="text-[12px] text-muted-foreground">
            © 2026 跨设备剪贴板
          </p>
        </div>
      </footer>
    </div>
  );
}
