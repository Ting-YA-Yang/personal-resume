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
    nav: { work: '项目', experience: '经历', about: '关于', contact: '联系' },
    eyebrow: '软件工程师 · 产品构建者',
    intro: '我设计并构建可靠、清晰且真正解决问题的数字产品。',
    availability: '开放交流与合作',
    viewWork: '查看项目',
    contact: '联系我',
    selectedWork: '精选项目',
    workIntro: '把复杂问题转化为清晰、可维护的产品体验。',
    experience: '经历',
    experienceIntro: '以下内容是结构示例，可直接替换为你的真实经历。',
    about: '关于我',
    aboutBody:
      '我关注产品体验与工程质量之间的平衡，喜欢从真实需求出发，把模糊的问题整理成清晰、可持续迭代的解决方案。',
    footerLine: '使用 Astro 构建，保持简单、快速和可访问。',
    viewCase: '查看案例',
    back: '返回首页',
  },
  en: {
    localeName: 'English',
    otherLocale: '中文',
    nav: { work: 'Work', experience: 'Experience', about: 'About', contact: 'Contact' },
    eyebrow: 'Software Engineer · Product Builder',
    intro: 'I design and build dependable, thoughtful digital products that solve real problems.',
    availability: 'Open to conversations and collaborations',
    viewWork: 'View selected work',
    contact: 'Get in touch',
    selectedWork: 'Selected work',
    workIntro: 'Turning complex problems into clear, maintainable product experiences.',
    experience: 'Experience',
    experienceIntro: 'This is a structural example ready to be replaced with your real experience.',
    about: 'About me',
    aboutBody:
      'I care about the balance between product experience and engineering quality. I enjoy turning ambiguous, real-world needs into clear solutions that can evolve over time.',
    footerLine: 'Built with Astro. Kept simple, fast, and accessible.',
    viewCase: 'View case study',
    back: 'Back home',
  },
} as const;
