/**
 * UniClipboard Beta Application Success Page
 * Swiss International Style - Status Confirmation
 * 
 * Goal: Reduce user anxiety + Increase email open rate
 */

import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

export default function ApplySuccess() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Success Message */}
      <section className="flex-1 flex items-center border-b border-border">
        <div className="container py-24">
          <div className="max-w-[700px]">
            {/* Tagline */}
            <p className="text-[14px] font-mono font-medium text-muted-foreground mb-8 tracking-widest">
              UniClipboard · 内测申请
            </p>

            {/* Main Message */}
            <h1 className="text-[56px] font-mono font-bold leading-[1.1] mb-8 tracking-[-0.02em]">
              已收到你的内测申请
            </h1>

            {/* Divider */}
            <div className="h-[1px] w-16 bg-primary mb-16" />

            {/* Details */}
            <div className="space-y-6 mb-16">
              <p className="text-[18px] leading-[1.6]">
                我们会优先邀请真实多设备使用者，并通过邮件发送内测邀请。
              </p>

              <div className="space-y-4 pt-8 border-t border-border">
                <p className="text-[16px] leading-[1.6]">
                  接下来的步骤：
                </p>
                <ul className="space-y-3 ml-4">
                  <li className="text-[16px] leading-[1.6] flex items-start gap-4">
                    <span className="text-muted-foreground flex-shrink-0">1.</span>
                    <span>我们会人工筛选你的申请</span>
                  </li>
                  <li className="text-[16px] leading-[1.6] flex items-start gap-4">
                    <span className="text-muted-foreground flex-shrink-0">2.</span>
                    <span>通过后会收到邀请邮件</span>
                  </li>
                  <li className="text-[16px] leading-[1.6] flex items-start gap-4">
                    <span className="text-muted-foreground flex-shrink-0">3.</span>
                    <span>按邮件指引下载并开始使用</span>
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
              返回首页
            </Button>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="border-t border-border py-24 bg-secondary/30">
        <div className="container">
          <div className="max-w-[700px]">
            <h2 className="text-[32px] font-mono font-semibold mb-8 tracking-[-0.01em]">
              常见问题
            </h2>

            <div className="space-y-12">
              <div>
                <h3 className="text-[18px] font-semibold mb-4">
                  多久会收到邀请？
                </h3>
                <p className="text-[16px] leading-[1.6] text-muted-foreground">
                  我们会在 1-2 周内完成筛选。如果你的申请符合条件，会优先获得邀请。
                </p>
              </div>

              <div>
                <h3 className="text-[18px] font-semibold mb-4">
                  邮件没收到怎么办？
                </h3>
                <p className="text-[16px] leading-[1.6] text-muted-foreground">
                  请检查垃圾邮件文件夹。如果仍未收到，可以回复邮件告诉我们。
                </p>
              </div>

              <div>
                <h3 className="text-[18px] font-semibold mb-4">
                  可以推荐朋友吗？
                </h3>
                <p className="text-[16px] leading-[1.6] text-muted-foreground">
                  可以。我们欢迎真实的多设备用户加入。请让他们直接填写申请表。
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
            © 2026 UniClipboard
          </p>
        </div>
      </footer>
    </div>
  );
}
