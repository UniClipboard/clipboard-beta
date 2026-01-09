/**
 * Internationalization (i18n) - Chinese & English
 * Supports browser language detection and manual language switching
 */

export type Language = 'zh' | 'en';

export const translations: Record<Language, Record<string, string>> = {
  zh: {
    // Navigation & Header
    tagline: "UniClipboard · 内测招募中",
    taglineApply: "UniClipboard · 内测申请",

    // Home Page
    headline:
      "一个以本地优先与端到端加密为前提的跨设备剪贴板同步工具",
    subheadline: "支持 macOS / Windows / Linux，不依赖公共云服务。",
    ctaPrimary: "申请加入内测",
    socialProof: "名额有限，优先邀请长期、多设备用户",

    // Problem Section
    problemTitle: "它解决什么问题",
    problemIntro:
      "在多台设备之间复制内容，本不该是一个需要第三方服务器的行为。",
    problemFocus: "UniClipboard 关注的是三件事：",
    problemPoint1: "剪贴板内容是否只在你的设备之间流动",
    problemPoint2: "同步是否稳定、可控、可解释",
    problemPoint3: "加密是否是默认能力，而不是可选项",

    // How It Works Section
    howTitle: "它是如何工作的",
    howPoint1: "本地监听剪贴板变更，不做轮询",
    howPoint2: "设备之间点对点同步（无中心云转发）",
    howPoint3: "端到端加密，内容在离开设备前即被加密",
    howPoint4: "平台仅暴露系统事实，选择与策略交由上层控制",
    howNote: "这是一个为长期演进而设计的结构，而不是一次性方案。",

    // Benefits Section
    benefitsTitle: "内测用户将获得",
    benefitBadge: "创始用户身份",
    benefitBadgeDesc: "永久保留",
    benefitEncryption: "核心同步与加密能力永久可用",
    benefitEncryptionDesc: "更高使用上限，正式版不回收",
    benefitFeatures: "新功能优先体验",
    benefitFeaturesDesc: "部分功能仅在内测阶段开放",
    benefitCocreate: "功能共创与优先级投票",
    benefitCocreateDesc: "直接与开发者讨论产品方向",

    // Who Section
    whoTitle: "适合谁",
    whoPoint1: "经常在多台设备间切换工作",
    whoPoint2: "对数据隐私与本地控制有明确需求",
    whoPoint3: "能接受早期产品的不完美，并愿意反馈",

    // Status Section
    statusTitle: "当前状态",
    statusText1: "产品仍在早期阶段，功能与界面可能调整。",
    statusText2: "我们会明确告知重要变更，不做暗改。",

    // Final CTA Section
    finalCTAText: "如果你认同这个理念——",

    // Email Signup
    emailPlaceholder: "your@email.com",
    emailPrompt: "不想错过？留下邮箱，下一轮开放时通知你。",
    emailSubmit: "提交",

    // Footer
    copyright: "© 2026 UniClipboard",

    // Apply Form
    applyTitle: "加入内测",
    applyIntro:
      "我们会优先邀请真实多设备使用者。请认真填写以下问题，帮助我们了解你的需求。",
    question1: "1. 你主要使用哪些平台？",
    platformMacOS: "macOS",
    platformWindows: "Windows",
    platformLinux: "Linux",
    question2: "2. 你日常有几台设备需要同步剪贴板？",
    deviceCount1: "1",
    deviceCount2: "2",
    deviceCount3: "3",
    deviceCount4Plus: "4+",
    question3: "3. 你为什么想使用 UniClipboard？",
    question3Hint: "一句话就够（必填）",
    question3Placeholder:
      "例：我需要在 Mac、Linux 和 Windows 之间安全地同步代码片段，不想依赖云服务",
    question4: "4. 是否可以接受早期版本的不稳定，并愿意反馈？",
    answerYes: "是",
    answerNo: "否",
    question5: "5. 邮箱（用于发送内测邀请）",
    submitButton: "提交申请",
    submitting: "提交中...",
    validationPlatforms: "请选择至少一个平台",
    validationDevices: "请选择设备数量",
    validationReason: "请填写使用原因",
    validationBeta: "请确认是否接受早期版本",
    validationEmail: "请填写邮箱",

    // Success Page
    successTitle: "已收到你的内测申请",
    successMessage:
      "我们会优先邀请真实多设备使用者，并通过邮件发送内测邀请。",
    nextSteps: "接下来的步骤：",
    step1: "我们会人工筛选你的申请",
    step2: "通过后会收到邀请邮件",
    step3: "按邮件指引下载并开始使用",
    backHome: "返回首页",
    faqTitle: "常见问题",
    faqQ1: "多久会收到邀请？",
    faqA1:
      "我们会在 1-2 周内完成筛选。如果你的申请符合条件，会优先获得邀请。",
    faqQ2: "邮件没收到怎么办？",
    faqA2:
      "请检查垃圾邮件文件夹。如果仍未收到，可以回复邮件告诉我们。",
    faqQ3: "可以推荐朋友吗？",
    faqA3:
      "可以。我们欢迎真实的多设备用户加入。请让他们直接填写申请表。",

    // Language Toggle
    languageLabel: "Language",
  },
  en: {
    // Navigation & Header
    tagline: "UniClipboard · Beta Recruitment",
    taglineApply: "UniClipboard · Beta Application",

    // Home Page
    headline:
      "A cross-device clipboard sync tool built on local-first and end-to-end encryption",
    subheadline: "Supports macOS / Windows / Linux. No public cloud dependency.",
    ctaPrimary: "Apply for Beta",
    socialProof: "Limited slots. Priority for long-term, multi-device users.",

    // Problem Section
    problemTitle: "What problem does it solve",
    problemIntro:
      "Copying content between devices shouldn't require trusting a third-party server.",
    problemFocus: "UniClipboard focuses on three things:",
    problemPoint1: "Does clipboard content only flow between your devices",
    problemPoint2: "Is sync stable, controllable, and explainable",
    problemPoint3: "Is encryption a default capability, not an option",

    // How It Works Section
    howTitle: "How it works",
    howPoint1: "Local clipboard monitoring, no polling",
    howPoint2: "Peer-to-peer sync between devices (no central cloud relay)",
    howPoint3: "End-to-end encryption, content encrypted before leaving your device",
    howPoint4: "Platform exposes system facts only, choices and policies are yours",
    howNote: "This is a structure designed for long-term evolution, not a one-time solution.",

    // Benefits Section
    benefitsTitle: "Beta users will receive",
    benefitBadge: "Founder status",
    benefitBadgeDesc: "Permanently preserved",
    benefitEncryption: "Core sync and encryption capabilities forever",
    benefitEncryptionDesc: "Higher usage limits, not revoked in final version",
    benefitFeatures: "Early access to new features",
    benefitFeaturesDesc: "Some features only available during beta",
    benefitCocreate: "Feature co-creation and voting rights",
    benefitCocreateDesc: "Direct discussion with developers on product direction",

    // Who Section
    whoTitle: "Who is this for",
    whoPoint1: "Frequently switching between multiple devices",
    whoPoint2: "Clear requirements for data privacy and local control",
    whoPoint3: "Willing to accept early-stage imperfections and provide feedback",

    // Status Section
    statusTitle: "Current status",
    statusText1: "Product is in early stage, features and UI may change.",
    statusText2: "We will clearly communicate important changes, no silent updates.",

    // Final CTA Section
    finalCTAText: "If you align with this philosophy——",

    // Email Signup
    emailPlaceholder: "your@email.com",
    emailPrompt:
      "Don't want to miss out? Leave your email and we'll notify you when the next beta opens.",
    emailSubmit: "Submit",

    // Footer
    copyright: "© 2026 UniClipboard",

    // Apply Form
    applyTitle: "Join Beta",
    applyIntro:
      "We prioritize real multi-device users. Please fill out these questions carefully to help us understand your needs.",
    question1: "1. Which platforms do you primarily use?",
    platformMacOS: "macOS",
    platformWindows: "Windows",
    platformLinux: "Linux",
    question2: "2. How many devices do you need to sync clipboard with daily?",
    deviceCount1: "1",
    deviceCount2: "2",
    deviceCount3: "3",
    deviceCount4Plus: "4+",
    question3: "3. Why do you want to use UniClipboard?",
    question3Hint: "One sentence is enough (required)",
    question3Placeholder:
      "Example: I need to safely sync code snippets between Mac, Linux and Windows without relying on cloud services",
    question4: "4. Can you accept early-stage instability and provide feedback?",
    answerYes: "Yes",
    answerNo: "No",
    question5: "5. Email (for sending beta invitations)",
    submitButton: "Submit Application",
    submitting: "Submitting...",
    validationPlatforms: "Please select at least one platform",
    validationDevices: "Please select number of devices",
    validationReason: "Please explain why you want to use UniClipboard",
    validationBeta: "Please confirm whether you can accept early-stage version",
    validationEmail: "Please enter your email",

    // Success Page
    successTitle: "We received your beta application",
    successMessage:
      "We will prioritize real multi-device users and send beta invitations via email.",
    nextSteps: "Next steps:",
    step1: "We will manually review your application",
    step2: "You'll receive an invitation email if approved",
    step3: "Follow the email instructions to download and start using",
    backHome: "Back to Home",
    faqTitle: "FAQ",
    faqQ1: "When will I receive an invitation?",
    faqA1:
      "We'll complete screening within 1-2 weeks. If your application meets our criteria, you'll get priority.",
    faqQ2: "I didn't receive the email?",
    faqA2:
      "Please check your spam folder. If still not received, you can reply to ask us.",
    faqQ3: "Can I recommend friends?",
    faqA3:
      "Yes. We welcome real multi-device users. Please have them fill out the application directly.",

    // Language Toggle
    languageLabel: "Language",
  },
};

/**
 * Detect user's preferred language from browser settings
 * Returns 'zh' for Chinese, 'en' for English
 */
export function detectBrowserLanguage(): Language {
  const browserLang = navigator.language || navigator.languages?.[0] || "en";
  // Check if browser language starts with 'zh'
  if (browserLang.toLowerCase().startsWith("zh")) {
    return "zh";
  }
  return "en";
}

/**
 * Get translation for a specific key in a given language
 */
export function t(
  language: Language,
  key: keyof (typeof translations)["zh"]
): string {
  return translations[language][key] || "";
}
