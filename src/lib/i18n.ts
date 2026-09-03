export type Locale = 'zh' | 'en';

export function withBase(path: string) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${base}${normalized}` || '/';
}

export const copy = {
  zh: {
    localeName: '中文',
    otherLocale: 'EN',
    nav: { work: '项目', experience: '经历', about: '能力与教育', contact: '联系' },
    eyebrow: '前端开发工程师 · 软件工程师',
    intro: '专注于复杂业务系统的前端工程、性能优化与可靠的产品体验。',
    availability: '上海 · 开放交流',
    viewWork: '查看项目',
    contact: '联系我',
    selectedWork: '精选项目',
    workIntro: '在 eBay 支付、财务配置与资金管理场景中持续交付产品与工程能力。',
    experience: '经历',
    experienceIntro: '在埃森哲与 eBay 累计多年企业级前端开发经验。',
    about: '能力与教育',
    aboutBody:
      '熟练掌握 HTML、CSS、JavaScript、TypeScript、Vue、React 及周边生态，熟悉浏览器原理、大型应用性能优化、Git、Vite、HTTP/HTTPS、Confluence 与 JIRA。CEFR Level C1，可流利使用英语进行听说读写，并有跨团队协作与新人 Onboarding、Mentoring 经验。',
    footerLine: '杨慧婷 · 前端开发工程师 · 软件工程本科',
    viewCase: '查看案例',
    back: '返回首页',
  },
  en: {
    localeName: 'English',
    otherLocale: '中文',
    nav: { work: 'Work', experience: 'Experience', about: 'Skills & education', contact: 'Contact' },
    eyebrow: 'Frontend Engineer · Software Engineer',
    intro: 'I build reliable frontend systems and thoughtful product experiences for complex business domains.',
    availability: 'Shanghai · Open to conversations',
    viewWork: 'View selected work',
    contact: 'Get in touch',
    selectedWork: 'Selected work',
    workIntro: 'Product and engineering work across payments, finance configuration, and fund management at eBay.',
    experience: 'Experience',
    experienceIntro: 'Several years of enterprise frontend development across Accenture and eBay.',
    about: 'Skills & education',
    aboutBody:
      'Strong in HTML, CSS, JavaScript, TypeScript, Vue, React, and their ecosystems, with practical experience in browser fundamentals, large-application performance, Git, Vite, HTTP/HTTPS, Confluence, and JIRA. CEFR Level C1 English, with cross-team collaboration, onboarding, and mentoring experience.',
    footerLine: 'Hui-Ting Yang · Frontend Engineer · B.S. in Software Engineering',
    viewCase: 'View case study',
    back: 'Back home',
  },
} as const;
