const config = {
  title: "Minh Vu | Digital Marketer",
  description: {
    long: "Explore the portfolio of Minh Vu, a Digital Marketer specializing in content creation, advertising campaigns, performance tracking, and Power BI analytics for Dermalux. I deliver creative strategies combined with data-driven insights to optimize brand experiences and drive growth. Let’s build impactful campaigns together!",
    short:
      "Minh Vu – Digital Marketer for Dermalux, specializing in content, ads, and performance analytics.",
  },
  keywords: [
    "Minh Vux",
    "portfolio",
    "digital marketer",
    "content social media",
    "advertising campaign",
    "Power BI analytics",
    "content SEO website",
    "event marketing",
    "Adobe Illustrator",
    "Adobe Photoshop",
    "Adobe Premiere",
  ],
  author: "Minh Vu",
  email: "buiminhvu2802@gmail.com",
  site: "https://portfoliomkt.vercel.app/",

  // for github stars button
  githubUsername: "Minh Vu",
  githubRepo: "portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    zalo: "https://zalo.me/0942554031",
    linkedin: "https://www.linkedin.com/in/v%C5%A9-b%C3%B9i-minh-9b055a229/",
    instagram: "https://www.instagram.com/_minnduzz_/",
    facebook: "https://www.facebook.com/minh.vu.815500/",
    github: "https://github.com/buiminhvu2802-pixel?tab=repositories",
  },
};
export { config };
