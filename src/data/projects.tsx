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
  SiGoogleforms,
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
  googleForms: {
    title: "Google Forms",
    bg: "#7248B9",
    fg: "white",
    icon: <SiGoogleforms />,
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
    category: "Website",
    title: "Dermalux Website",
    src: "/assets/projects-screenshots/dermaluxsite/landing.png",
    screenshots: ["1.png", "2.png", "3.png", "4.png", "5.png"],
    live: "https://dermaluxled.vn/",
    skills: {
      frontend: [
        PROJECT_SKILLS.excel,
        PROJECT_SKILLS.word,
        PROJECT_SKILLS.googleAnalytics,
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
    category: "Behance",
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
    id: "data",
    category: "Data",
    title: "My Data Analytic",
    src: "/assets/projects-screenshots/data/landing.png",
    screenshots: ["1.png"],
    live: "https://buiminhvu2802-pixel.github.io/dgmkt/",
    skills: {
      frontend: [
        PROJECT_SKILLS.illustrator,
        PROJECT_SKILLS.excel,
      ],
      backend: [
        PROJECT_SKILLS.powerBi,
        PROJECT_SKILLS.gemini,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Where raw numbers transform into stories, and dashboards become art.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">
            Visit Dashboard{" "}
          </TypographyH3>
          <p className="font-mono mb-2">
            Interactive Power BI Visuals
            Ever seen Excel sheets glow up? Yeah, I did that. I took plain spreadsheets and turned them into living dashboards that pulse with insights 🤯.
            Every chart, every filter, every drill-down is powered by AI-assisted code — making data not just useful, but beautiful.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/data/dashboard1.png`,
              `${BASE_PATH}/data/dashboard2.png`,
              `${BASE_PATH}/data/dashboard3.png`,
              `${BASE_PATH}/data/dashboard4.png`,
            ]}
          />
          <TypographyH3 className="my-4 ">Data Universe</TypographyH3>
          <p className="font-mono mb-2">
            Bright visuals + smooth interactivity = a galaxy of clarity.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/data/ex1.png`,
              `${BASE_PATH}/data/ex2.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Projects</TypographyH3>

          <p className="font-mono mb-2">
            From business KPIs to marketing analytics, I craft dashboards that cut through the noise — no filler, all killer.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/data/pr1.png`,
              `${BASE_PATH}/data/pr2.png`,
              `${BASE_PATH}/data/pr3.png`,
            ]}
          />
          <p className="font-mono mb-2 mt-8 text-center">
            This isn’t just reporting — it’s a vibe. Numbers finally have a stage, and they’re performing. 🎭
          </p>
        </div>
      );
    },
  },
  {
    id: "emailmarketing",
    category: "Email",
    title: "Form and Email",
    src: "/assets/projects-screenshots/emailmarketing/1.png",
    screenshots: ["1.png", "2.png", "3.png", "4.png"],
    live: "https://drive.google.com/drive/folders/119y-Fm7vzjn6ddRhAij4BQ3ZDVRqaDqe?usp=sharing",
    skills: {
      frontend: [
        PROJECT_SKILLS.word,
        PROJECT_SKILLS.excel,
        PROJECT_SKILLS.googleForms,
      ],
      backend: [
        PROJECT_SKILLS.chatgpt,
        PROJECT_SKILLS.gemini
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Every project starts with a question. Mine was simple: How can I collect feedback and make it flow seamlessly into action?
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">
            The Idea{" "}
          </TypographyH3>
          <p className="font-mono mb-2">
            I designed a Google Form to capture responses — clean, intuitive, and easy for users to fill out. But I didn’t want the data to just sit there. I wanted it to talk back, to trigger actions.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/emailmarketing/1.png`,
              `${BASE_PATH}/emailmarketing/2.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">The Build</TypographyH3>

          <p className="font-mono mb-2">
            Google Form: Structured questions, clear design, and logic that guides users smoothly.
            Apps Script: I wrote custom scripts to connect the form with Gmail. Each submission automatically sends a personalized email — confirmation for the user, notification for me.
            Automation Flow: No manual copy-paste, no delays. Just instant communication powered by code.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/emailmarketing/3.png`,
              `${BASE_PATH}/emailmarketing/4.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">The Experience</TypographyH3>

          <p className="font-mono mb-2">
            For respondents, it feels effortless: submit a form, get an email. For me, it’s a dashboard of responses and a streamlined workflow.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/emailmarketing/5.png`,
              `${BASE_PATH}/emailmarketing/6.png`,
              `${BASE_PATH}/emailmarketing/7.png`,
              `${BASE_PATH}/emailmarketing/8.png`,
            ]}
          />
          <p className="font-mono mb-2 mt-8 text-center">
            This isn’t just a survey — it’s a system. A blend of design and automation that saves time, builds trust, and makes feedback actionable.
          </p>
        </div>
      );
    },
  },
  {
    id: "design",
    category: "Design",
    title: "Design",
    src: "/assets/projects-screenshots/design/1.png",
    screenshots: ["1.png"],
    live: "https://drive.google.com/drive/folders/1a_z1JpQMOZGRSvsniIR3-MA7VTi6WKwK?usp=sharing",
    skills: {
      frontend: [
        PROJECT_SKILLS.photoshop,
        PROJECT_SKILLS.illustrator,
      ],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Every story begins with curiosity. For me, it was the question: How can I turn ideas into visuals?
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">
            The Beginning{" "}
          </TypographyH3>
          <p className="font-mono mb-2">
            I started with the basics — exploring tools, following tutorials, and experimenting with every detail. No formal classes, just patience and a passion for discovery.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/design/2.png`,
              `${BASE_PATH}/design/3.png`,
              `${BASE_PATH}/design/4.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">The Process</TypographyH3>

          <p className="font-mono mb-2">
            Self-learning online: Videos, blogs, and free resources.
            Constant experimentation: Each small design became a practice, a step forward.
            Trial and error: Every revision was a new lesson
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/design/5.png`,
              `${BASE_PATH}/design/6.png`,
              `${BASE_PATH}/design/7.png`,
              `${BASE_PATH}/design/8.png`,
              `${BASE_PATH}/design/9.png`,
              `${BASE_PATH}/design/10.png`,
              `${BASE_PATH}/design/11.png`,
              `${BASE_PATH}/design/12.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">The Small Designs</TypographyH3>

          <p className="font-mono mb-2">
            These aren’t grand masterpieces, but creative fragments: simple posters, experimental logos, basic layouts. Each piece is proof of progress, a milestone in my learning journey.
          </p>
          <p className="font-mono mb-2 mt-8 text-center">
            I realized design is more than a skill — it’s storytelling through visuals. These small projects are the first chapters of a longer journey, where I learn, create, make mistakes, and grow.
          </p>
        </div>
      );
    },
  },
];
export default projects;
