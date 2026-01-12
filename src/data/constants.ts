// thoda zada ts ho gya idhar
export enum SkillNames {
  AI = "ai",
  PS = "ps",
  PR = "pr",
  MW = "docx",
  ME = "excel",
  PI = "pbix",
  META = "ads",
  FORM = "form",
  CHATGPT = "chatgpt",
  GEMINI = "gemini",
  GITHUB = "git",
}
export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};
export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.AI]: {
    id: 1,
    name: "ai",
    label: "AdIllustrator",
    shortDescription: "Working knowledge with practical application in real projects",
    color: "#f0db4f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/illustrator/illustrator-original.svg",
  },
  [SkillNames.PS]: {
    id: 2,
    name: "ps",
    label: "AdPhotoshop",
    shortDescription:
      "Working knowledge for marketing visual editing",
    color: "#007acc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg",
  },
  [SkillNames.PR]: {
    id: 3,
    name: "pr",
    label: "AdPremiere",
    shortDescription: "Hands-on experience in basic video editing",
    color: "#563d7c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/premierepro/premierepro-plain.svg",
  },
  [SkillNames.MW]: {
    id: 4,
    name: "docx",
    label: "MWord",
    shortDescription: "Working knowledge in document formatting and professional reporting",
    color: "#61dafb",
    icon: "https://sf-static.upanhlaylink.com/img/image_20260104a1cf4f55c55fbd2c5c975b5280aa1863.jpg",
  },
  [SkillNames.ME]: {
    id: 5,
    name: "excel",
    label: "MExcel",
    shortDescription: "Intermediate proficiency in data cleaning, formulas, and reporting",
    color: "#41b883",
    icon: "https://sv2.anhsieuviet.com/2026/01/04/microsoft-excel_.png",
  },
  [SkillNames.PI]: {
    id: 6,
    name: "pbix",
    label: "PowerBI",
    shortDescription:
      "Working knowledge in data visualization and basic dashboard creation",
    color: "#e34c26",
    icon: "https://commons.wikimedia.org/wiki/File:New_Power_BI_Logo.svg",
  },
  [SkillNames.META]: {
    id: 7,
    name: "ads",
    label: "MetaAds",
    shortDescription:
      "Working knowledge in campaign setup and basic performance monitoring",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/facebook/facebook-original.svg",
  },
  [SkillNames.FORM]: {
    id: 8,
    name: "form",
    label: "GoogleForms",
    shortDescription: "Google Forms for data collection & survey management and use Google Apps Script for email automation",
    color: "#38bdf8",
    icon: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Google_Forms_2020_Logo.svg",
  },
  [SkillNames.CHATGPT]: {
    id: 9,
    name: "chatgpt",
    label: "ChatGPT",
    shortDescription: "Applied proficiency for content ideation and research",
    color: "#6cc24a",
    icon: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
  },
  [SkillNames.GEMINI]: {
    id: 10,
    name: "gemini",
    label: "Gemini",
    shortDescription: "Build my website and planning maketing plan",
    color: "#fff",
    icon: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.sv",
  },
  [SkillNames.GITHUB]: {
    id: 11,
    name: "git",
    label: "GitHub",
    shortDescription: "this's my treasure",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
  },
};

export const themeDisclaimers = {
  light: [
    "Warning: Light mode emits a gazillion lumens of pure radiance!",
    "Caution: Light mode ahead! Please don't try this at home.",
    "Only trained professionals can handle this much brightness. Proceed with sunglasses!",
    "Brace yourself! Light mode is about to make everything shine brighter than your future.",
    "Flipping the switch to light mode... Are you sure your eyes are ready for this?",
  ],
  dark: [
    "Light mode? I thought you went insane... but welcome back to the dark side!",
    "Switching to dark mode... How was life on the bright side?",
    "Dark mode activated! Thanks you from the bottom of my heart, and my eyes too.",
    "Welcome back to the shadows. How was life out there in the light?",
    "Dark mode on! Finally, someone who understands true sophistication.",
  ],
};

