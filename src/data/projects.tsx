import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import {
  SiMeta,
  SiGoogleanalytics,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobepremierepro,
  SiPowerbi,
  SiOpenai,
  SiGoogle,
  SiMicrosoftexcel,
  SiMicrosoftword,
  SiMicrosoftpowerpoint,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Fanpage
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  metaAds: {
    title: "Facebook Ads",
    bg: "#1877F2",
    fg: "white",
    icon: <SiMeta />,
  },
  googleAnalytics: {
    title: "Google Analytics",
    bg: "#E37400",
    fg: "white",
    icon: <SiGoogleanalytics />,
  },
  photoshop: {
    title: "Photoshop",
    bg: "#31A8FF",
    fg: "black",
    icon: <SiAdobephotoshop />,
  },
  illustrator: {
    title: "Illustrator",
    bg: "#FF9A00",
    fg: "black",
    icon: <SiAdobeillustrator />,
  },
  premiere: {
    title: "Premiere Pro",
    bg: "#9999FF",
    fg: "black",
    icon: <SiAdobepremierepro />,
  },
  powerBi: {
    title: "Power BI",
    bg: "#F2C811",
    fg: "black",
    icon: <SiPowerbi />,
  },
  chatgpt: {
    title: "ChatGPT",
    bg: "#74AA9C",
    fg: "white",
    icon: <SiOpenai />,
  },
  gemini: {
    title: "Gemini",
    bg: "#8E75B2",
    fg: "white",
    icon: <SiGoogle />,
  },
  excel: {
    title: "Excel",
    bg: "#217346",
    fg: "white",
    icon: <SiMicrosoftexcel />,
  },
  word: {
    title: "Word",
    bg: "#2B579A",
    fg: "white",
    icon: <SiMicrosoftword />,
  },
  powerpoint: {
    title: "PowerPoint",
    bg: "#D24726",
    fg: "white",
    icon: <SiMicrosoftpowerpoint />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "dermalux",
    category: "Fanpage",
    title: "Dermalux VN",
    src: "/assets/projects-screenshots/dermalux/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.metaAds,
        PROJECT_SKILLS.word,
      ],
      backend: [
        PROJECT_SKILLS.chatgpt,
        PROJECT_SKILLS.gemini,
      ],
    },
    live: "https://www.facebook.com/dermalux.vn",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Dermalux Vietnam
          </TypographyP>
          <TypographyP className="font-mono ">
            Official fanpage for Dermalux Vietnam. We provides the world’s No.1 LED Phototherapy devices.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Daily contents</TypographyH3>
          <p className="font-mono mb-2">
            Routine content helps maintain brand consistency.
          </p>
          <SlideShow
            images={[
              {
                src: `${BASE_PATH}/dermalux/daily1.png`,
                zoomSrc: `${BASE_PATH}/dermalux/daily1zoom.png`,
              },
              {
                src: `${BASE_PATH}/dermalux/daily2.png`,
                zoomSrc: `${BASE_PATH}/dermalux/daily2zoom.png`,
              },
              {
                src: `${BASE_PATH}/dermalux/daily3.png`,
                zoomSrc: `${BASE_PATH}/dermalux/daily3zoom.png`,
              },
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Academic contents</TypographyH3>
          <p className="font-mono mb-2">
            We are developing academic content to persuade customers, targeting professionals and experts.
          </p>
          <SlideShow
            images={[
              {
                src: `${BASE_PATH}/dermalux/aca1.png`,
                zoomSrc: `${BASE_PATH}/dermalux/aca1zoom.png`,
              },
              {
                src: `${BASE_PATH}/dermalux/aca2.png`,
                zoomSrc: `${BASE_PATH}/dermalux/aca2zoom.png`,
              },
              {
                src: `${BASE_PATH}/dermalux/aca3.png`,
                zoomSrc: `${BASE_PATH}/dermalux/aca3zoom.png`,
              },
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Series contents</TypographyH3>

          <p className="font-mono mb-2">
            Series content is used to maintain audience engagement, tell the brand story systematically, and build long-term customer relationships.
          </p>
          <SlideShow
            images={[
              {
                src: `${BASE_PATH}/dermalux/se1.png`,
                zoomSrc: `${BASE_PATH}/dermalux/se1zoom.png`,
              },
              {
                src: `${BASE_PATH}/dermalux/se2.png`,
                zoomSrc: `${BASE_PATH}/dermalux/se2zoom.png`,
              },
              {
                src: `${BASE_PATH}/dermalux/se3.png`,
                zoomSrc: `${BASE_PATH}/dermalux/se3zoom.png`,
              },
              {
                src: `${BASE_PATH}/dermalux/se4.png`,
                zoomSrc: `${BASE_PATH}/dermalux/se4zoom.png`,
              },
              {
                src: `${BASE_PATH}/dermalux/se5.png`,
                zoomSrc: `${BASE_PATH}/dermalux/se5zoom.png`,
              },
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Events</TypographyH3>
          <p className="font-mono mb-2">
            We organize events to increase brand awareness and build relationships, introduce products, educate customers, boost sales, and generate marketing content.
          </p>
          <SlideShow
            images={[
              {
                src: `${BASE_PATH}/dermalux/event1.png`,
                zoomSrc: `${BASE_PATH}/dermalux/event1zoom.png`,
              },
              {
                src: `${BASE_PATH}/dermalux/event2.png`,
                zoomSrc: `${BASE_PATH}/dermalux/event2zoom.png`,
              },
              {
                src: `${BASE_PATH}/dermalux/event3.png`,
                zoomSrc: `${BASE_PATH}/dermalux/event3zoom.png`,
              },
              {
                src: `${BASE_PATH}/dermalux/event4.png`,
                zoomSrc: `${BASE_PATH}/dermalux/event4zoom.png`,
              },
              {
                src: `${BASE_PATH}/dermalux/event5.png`,
                zoomSrc: `${BASE_PATH}/dermalux/event5zoom.png`,
              },
              {
                src: `${BASE_PATH}/dermalux/event6.png`,
                zoomSrc: `${BASE_PATH}/dermalux/event6zoom.png`,
              },
              {
                src: `${BASE_PATH}/dermalux/event7.png`,
                zoomSrc: `${BASE_PATH}/dermalux/event7zoom.png`,
              },
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Advertising</TypographyH3>

          <p className="font-mono mb-2">
            “We run ads to increase brand awareness, reach target audiences, boost sales, drive engagement, and support other marketing activities
          </p>
          <SlideShow
            images={[
              {
                src: `${BASE_PATH}/dermalux/ads.png`,
                zoomSrc: `${BASE_PATH}/dermalux/adszoom.png`,
              },
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "dermaluxsite",
    category: "Dermalux Website",
    title: "Dermalux Website",
    src: "/assets/projects-screenshots/dermaluxsite/landing.png",
    screenshots: ["1.png", "2.png", "3.png", "4.png", "5.png"],
    live: "https://dermaluxled.vn/",
    skills: {
      frontend: [
        PROJECT_SKILLS.excel,
        PROJECT_SKILLS.word,
      ],
      backend: [
        PROJECT_SKILLS.chatgpt,
        PROJECT_SKILLS.gemini,
      ],
    },
    get content(): JSX.Element {
      return (
        <div>
          <TypographyP className="font-mono ">
            Dermalux Vietnam’s official website introduces the world’s leading LED Phototherapy technology, showcases certified medical devices, highlights treatment results, and provides skincare knowledge and brand information.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <p className="font-mono mb-2 mt-4">
            From the very first moment, Dermalux brings you world-leading LED Phototherapy and professional beauty advice.
          </p>
          <SlideShow images={[`${BASE_PATH}/dermaluxsite/landing.png`]} />
          <TypographyH3 className="my-4 ">Devices</TypographyH3>
          <p className="font-mono mb-2">
            Explore Dermalux’s full portfolio, where every device delivers cutting-edge LED Phototherapy and premium skincare expertise.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/dermaluxsite/flex.png`,
              `${BASE_PATH}/dermaluxsite/compact.png`,
              `${BASE_PATH}/dermaluxsite/triwave.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Blogs</TypographyH3>

          <p className="font-mono mb-2">
            The Dermalux Blogs is your trusted source for scientific insights, skincare expertise, and LED Phototherapy education. Here, you’ll discover how advanced light technology transforms skin health, explore expert advice from dermatologists, and access real treatment results. It’s where science meets beauty, empowering you with knowledge to make confident skincare choices.
          </p>
          <SlideShow images={[
            `${BASE_PATH}/dermaluxsite/ktcn.png`,
            `${BASE_PATH}/dermaluxsite/ktkh1.png`,
            `${BASE_PATH}/dermaluxsite/ktkh2.png`,
            `${BASE_PATH}/dermaluxsite/ktkh3.png`,
          ]}
          />
          <TypographyH3 className="my-4 mt-8">News</TypographyH3>
          <p className="font-mono mb-2">
            The Dermalux News Page is your trusted hub for updates in LED Phototherapy, skincare innovations, and beauty expertise. Discover groundbreaking research, expert dermatologist insights, and real success stories — keeping you connected to the future of skincare.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/dermaluxsite/tintuc.png`,
              `${BASE_PATH}/dermaluxsite/cg.png`,
              `${BASE_PATH}/dermaluxsite/sk.png`,
            ]}
          />
          <p className="font-mono mb-2 mt-5">
            Plus, we’ve added a touch of magic with personalized skincare guidance, user-friendly resources, and a sleek, responsive design that adapts beautifully to any device.
          </p>
          <p className="font-mono mb-2">
            Dermalux isn’t just advanced technology; it’s your personal skincare companion, ensuring you always enjoy radiant, healthy, and confident skin.
          </p>
          {/* <TypographyP className="my-4 mt-8">
          <strong>Misc:</strong>
          Hosted not one, not two, but THREE coding contests (Codemacha) during
          college. Safe to say, Coding Ducks passed the vibe check.
        </TypographyP>
        <TypographyP className="my-4 mt-8">
          <strong>Target Audience:</strong>
          For all the novice coders out there ready to make their mark.
        </TypographyP> */}
        </div>
      );
    },
  },
  {
    id: "dermaluxbehance",
    category: "Dermalux Behance",
    title: "Dermalux Behance",
    src: "/assets/projects-screenshots/dermaluxbehance/landing.png",
    screenshots: ["1.png"],
    live: "https://www.behance.net/agenadesign",
    skills: {
      frontend: [
        PROJECT_SKILLS.excel,
        PROJECT_SKILLS.word,
      ],
      backend: [
        PROJECT_SKILLS.gemini,
        PROJECT_SKILLS.chatgpt,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            On Behance, we showcase our journey of innovation — from advanced light-based solutions to real treatment results in clinics worldwide. Dermalux represents the perfect harmony of technology and aesthetics, empowering professionals and clients alike to achieve radiant, confident skin.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <p className="font-mono mb-2 mt-8">
            Dermalux is a pioneering skincare technology brand specializing in FDA-approved LED Phototherapy devices. Our mission is to combine science and beauty, delivering safe, effective, and clinically proven treatments that transform skin health.
          </p>
          <SlideShow images={[
            `${BASE_PATH}/dermaluxbehance/aboutus.png`,
            `${BASE_PATH}/dermaluxbehance/aboutus2.png`,
            `${BASE_PATH}/dermaluxbehance/aboutus3.png`,
          ]}
          />
          <TypographyH3 className="my-4 mt-8">Blogs</TypographyH3>
          <p className="font-mono mb-2">
            On Behance, this page reflects our commitment to blending technology and beauty — offering professionals and clients a deeper understanding of how Dermalux empowers radiant, confident skin.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/dermaluxbehance/ktcn1.png`,
              `${BASE_PATH}/dermaluxbehance/ktcn2.png`,
              `${BASE_PATH}/dermaluxbehance/ktcn3.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Devices</TypographyH3>

          <p className="font-mono mb-2">
            Dermalux isn’t just technology — it’s the perfect blend of science and beauty, empowering professionals and clients to choose with confidence and achieve radiant, healthy skin.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/dermaluxbehance/dv1.png`,
              `${BASE_PATH}/dermaluxbehance/dv2.png`,
              `${BASE_PATH}/dermaluxbehance/dv3.png`,
            ]}
          />
          <p className="font-mono mb-2 my-8">
            With clinically proven results and FDA-approved technology, Dermalux isn’t just skincare—it’s science that performs. Whether you’re seeking radiant confidence or professional-grade treatment, our devices deliver a world-class experience that’s both effective and empowering.
          </p>
        </div>
      );
    },
  },
  {
    id: "portfolio",
    category: "Portfolio",
    title: "My Portfolio",
    src: "/assets/projects-screenshots/portfolio/landing.png",
    screenshots: ["1.png"],
    live: "http://nareshkhatri.vercel.app",
    skills: {
      frontend: [
        PROJECT_SKILLS.photoshop,
        PROJECT_SKILLS.illustrator,
        PROJECT_SKILLS.premiere,
      ],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Welcome to my digital playground, where creativity meets code in the
            dopest way possible.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">
            Beautiful 3D Objects{" "}
          </TypographyH3>
          <p className="font-mono mb-2">
            Did you see that 3D keyboard modal? Yeah! I made that. That
            interactive keyboard is being rendered in 3D on a webpage 🤯, and
            pressing each keycap reveals a skill in a goofy way. It&apos;s like
            typing, but make it art.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/portfolio/landing.png`,
              `${BASE_PATH}/portfolio/skills.png`,
            ]}
          />
          <TypographyH3 className="my-4 ">Space Theme</TypographyH3>
          <p className="font-mono mb-2">
            Dark background + floating particles = out-of-this-world cool.
          </p>
          <SlideShow images={[`${BASE_PATH}/portfolio/navbar.png`]} />
          <TypographyH3 className="my-4 mt-8">Projects</TypographyH3>

          <p className="font-mono mb-2">
            My top personal and freelance projects — no filler, all killer.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/portfolio/projects.png`,
              `${BASE_PATH}/portfolio/project.png`,
            ]}
          />
          <p className="font-mono mb-2 mt-8 text-center">
            This site&apos;s not just a portfolio — it&apos;s a whole vibe.
          </p>
        </div>
      );
    },
  },
  {
    id: "ghostchat",
    category: "Anonymous chat",
    title: "GhostChat",
    src: "/assets/projects-screenshots/ghostchat/1.png",
    screenshots: ["1.png", "2.png", "3.png", "4.png"],
    live: "https://ghostchat.vercel.app",
    skills: {
      frontend: [PROJECT_SKILLS.metaAds],
      backend: [PROJECT_SKILLS.chatgpt],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Ghostchat is your go-to spot for sending anonymous messages without
            leaving a trace. Powered by Supabase, it&apos;s all about keeping things
            low-key and secure. Whether you&apos;re sharing secrets, giving feedback,
            or just having some fun, Ghostchat ensures your identity stays
            hidden, while your voice is heard. Say what you want, without the
            worry.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `${BASE_PATH}/ghostchat/1.png`,
              `${BASE_PATH}/ghostchat/2.png`,
              `${BASE_PATH}/ghostchat/3.png`,
              `${BASE_PATH}/ghostchat/4.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "jra",
    category: "Result analyzer",
    title: "JNTUA Results Analyzer",
    src: "/assets/projects-screenshots/jra/1.png",
    screenshots: ["1.png"],
    live: "https://naresh-khatri.github.io/JNTUA-result-analyser-spa/#/",
    skills: {
      frontend: [PROJECT_SKILLS.googleAnalytics],
      backend: [
        PROJECT_SKILLS.powerBi,
        PROJECT_SKILLS.excel,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            JNTUA Results Analyzer was a revolutionary tool designed to simplify
            and enhance the experience of accessing academic results. It served
            as a powerful proxy between the JNTUA university results website and
            its users, offering a range of features that made result analysis
            faster and more efficient. Here&apos;s what made it stand out:
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow images={[`${BASE_PATH}/jra/1.png`]} />
          <TypographyH3 className="my-4 mt-8">
            Effortless Results Retrieval
          </TypographyH3>
          {/* Effortless Results Retrieval: */}
          <ul className="list-disc ml-6">
            <li className="font-mono">
              Search all your results using a single roll number, eliminating
              the tedious task of sifting through thousands of rows on the
              official site.
            </li>
          </ul>
          <TypographyH3 className="my-4 mt-8">Class-Wise Results:</TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">
              class-wise results effortlessly by entering a roll number range.
              No more manual searches or filtering.
            </li>
          </ul>
          <TypographyH3 className="my-4 mt-8">Faculty Features:</TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">
              Faculty members could download batch results in Excel format,
              making administrative tasks a breeze.
            </li>
          </ul>
          <TypographyH3 className="my-4 mt-8">
            Enhanced Data Insights:
          </TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">
              Each result came with additional features including:
              <ul className="list-disc font-mono ml-6">
                <li>
                  <strong>CGPA Calculations: </strong>Easily track your
                  cumulative grade point average.
                </li>
                <li>
                  <strong>Charts:</strong> Visualize your academic performance
                  with comprehensive charts.
                </li>
                <li>
                  <strong>Future Projections:</strong> Get insights into
                  potential future outcomes based on current performance.
                </li>
                <li>
                  <strong> Backlog Counts: </strong>Keep track of your backlog
                  subjects at a glance.
                </li>
              </ul>
            </li>
          </ul>
          <TypographyH3 className="my-4 mt-8">Performance:</TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">
              The application was significantly faster and more efficient than
              the official site, providing a smoother user experience.
            </li>
          </ul>
          <TypographyH3 className="my-4 mt-8">Downfall:</TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">
              Unfortunately, as of May 2022, the tool stopped working due to the
              introduction of CAPTCHA on the official JNTUA results site, which
              disrupted the seamless functionality of the app. JNTUA Results
              Analyzer transformed the way students and faculty interacted with
              academic results, making it a must-have tool until its unexpected
              shutdown.
            </li>
          </ul>
        </div>
      );
    },
  },
];
export default projects;
