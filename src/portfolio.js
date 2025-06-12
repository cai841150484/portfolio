/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Hao Cai",
  title: "Hi, I'm Hao Cai",
  subTitle: emoji(
    "Creative and detail-oriented UI/UX Designer with a passion for crafting intuitive digital experiences. Skilled in user research, wireframing, prototyping, and visual design. Experienced in collaborating with cross-functional teams to deliver impactful solutions. Always eager to learn, explore new design trends, and turn complex problems into elegant interfaces."
  ),
  resumeLink: "https://caidesign.co/resume.pdf", // 请替换为你的实际简历链接
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/hao-cai-ux/", // 请替换为你的 LinkedIn
  gmail: "jhoncai811@gmail.com",
  display: true
};

// Skills Section

const skillsSection = {
  title: "Skills & Languages",
  subTitle: "Empowering ideas through design and technology.",
  skills: [
    emoji(
      "🎨 UI/UX Design for web and mobile platforms, from concept to delivery"
    ),
    emoji(
      "🧩 Proficient in Figma, Adobe Creative Suite (Illustrator, Photoshop, XD, AfterEffect, Lightroom, InDesign), TouchDesigner, Processing"
    ),
    emoji(
      "💡 Strong visual storytelling, wireframing, prototyping, and user research skills"
    ),
    emoji("🌐 Front-end basics: HTML5, CSS3"),
    emoji(
      "🌏 Multilingual: Chinese (Native), English (Advanced), Cantonese (Intermediate)"
    )
  ],
  softwareSkills: [
    {skillName: "Figma", fontAwesomeClassname: "fab fa-figma"},
    {skillName: "Adobe Illustrator", fontAwesomeClassname: "fab fa-adobe"},
    {skillName: "Adobe Photoshop", fontAwesomeClassname: "fab fa-adobe"},
    {skillName: "Adobe XD", fontAwesomeClassname: "fab fa-adobe"},
    {skillName: "AfterEffect", fontAwesomeClassname: "fab fa-adobe"},
    {skillName: "Lightroom", fontAwesomeClassname: "fab fa-adobe"},
    {skillName: "InDesign", fontAwesomeClassname: "fab fa-adobe"},
    {skillName: "TouchDesigner", fontAwesomeClassname: "fas fa-cube"},
    {skillName: "Processing", fontAwesomeClassname: "fas fa-code"},
    {skillName: "HTML5", fontAwesomeClassname: "fab fa-html5"},
    {skillName: "CSS3", fontAwesomeClassname: "fab fa-css3-alt"}
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "The Pennsylvania State University",
      logo: require("./assets/images/harvardLogo.png"), // 可替换为 PSU 校徽
      subHeader: "Master of Science in Informatics",
      duration: "Aug 2023 – Aug 2025",
      desc: "Focusing on user experience, human-computer interaction, and digital product design."
    },
    {
      schoolName: "California State University, Fullerton",
      logo: require("./assets/images/stanfordLogo.png"), // 可替换为 CSUF 校徽
      subHeader: "Bachelor of Fine Art in Graphic And Interactive Design",
      duration: "Aug 2020 – May 2023",
      desc: "Developed a strong foundation in visual communication, branding, and interactive media."
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "UI Design Intern",
      company: "Sunvega",
      date: "Aug 2024 – Dec 2024",
      desc: "Worked in a cross-functional UED team, collaborating with product managers and developers to deliver new software features and optimize existing ones. Led group reviews, improved design delivery, and drove continuous improvement through user feedback and data analysis. Built and maintained Antd component libraries, developing new UI components as needed.",
      descBullets: [
        "Cross-functional collaboration in the UED team, supporting product managers and developers.",
        "Led group review, design optimization, and acceptance for product delivery.",
        "Analyzed user data and feedback for continuous improvement.",
        "Developed and maintained Antd component libraries and new UI components."
      ]
    },
    {
      role: "Graphic Design Intern",
      company: "CREATIVE AID",
      date: "Sep 2022 – Dec 2022",
      desc: "Supported multiple brand design projects from concept to completion, including social media post design and visual identity development. Strengthened my ability to manage projects independently and communicate design ideas effectively.",
      descBullets: [
        "Managed small brand design projects end-to-end.",
        "Designed social media post pages and marketing materials."
      ]
    },
    {
      role: "UI Design Intern",
      company: "Software Engineering Center Chinese Academy Of Sciences",
      date: "Jul 2022 – Sep 2022",
      desc: "Participated in B-side website interface design, analyzed and evaluated products, and made precise adjustments based on feedback. Enhanced my skills in user-centered design and iterative improvement.",
      descBullets: [
        "Designed and improved B-side web interfaces.",
        "Analyzed user needs and product feedback for iterative design."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Changed to false to disable GitHub profile section
  display: false // Changed to false to hide Open Source projects section
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Let’s connect! Whether you want to discuss a project, collaborate, or just say hi, my inbox is always open.",
  number: "9096822704",
  email_address: "jhoncai811@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
