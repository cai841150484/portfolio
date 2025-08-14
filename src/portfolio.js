/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation.json"; // Rename to your file name for custom animation
import pennstateLogo from "./assets/images/pennstateLogo.jpg";
import calstateLogo from "./assets/images/calstateLogo.png";
import placeholder350x200 from "./assets/images/placeholder-350x200.svg";
// Project images
import imgShein from "./assets/images/projects/shein.png";
import imgPetdesk from "./assets/images/projects/evaluatingandimprovingtheuserexperienceofthepetdeskapp.png";
import imgZenflow from "./assets/images/projects/zenflow.png";
import imgPetsify from "./assets/images/projects/petsify.png";
import imgMiltons from "./assets/images/projects/miltonsphilosophy.png";
import imgPosterPack from "./assets/images/projects/posterandpackingdesign.png";
import imgSandboxie from "./assets/images/projects/sandboxie.png";
import imgAboveCarmen from "./assets/images/projects/abovethecarmenline.png";

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true 
};

const greeting = {
  username: "Hao Cai",
  title: "Hi, I'm Hao Cai",
  subTitle: emoji(
    "Creative and detail-oriented UI/UX Designer with a passion for crafting intuitive digital experiences. Skilled in user research, wireframing, prototyping, and visual design. Experienced in collaborating with cross-functional teams to deliver impactful solutions. Always eager to learn, explore new design trends, and turn complex problems into elegant interfaces."
  ),
  subTitleText:
    "Creative and detail-oriented UI/UX Designer with a passion for crafting intuitive digital experiences. Skilled in user research, wireframing, prototyping, and visual design. Experienced in collaborating with cross-functional teams to deliver impactful solutions. Always eager to learn, explore new design trends, and turn complex problems into elegant interfaces.",
  resumeLink:
    "https://drive.google.com/file/d/1rcpwgvxRR3mSJxWO0F18UbKA8vkAFI_H/view?usp=sharing", // Replace with your actual resume link
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/hao-cai-6328351b4/", 
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
  logo: pennstateLogo, // PSU logo
      subHeader: "Master of Science in Informatics",
      duration: "Aug 2023 – Aug 2025",
      desc: "Focusing on user experience, human-computer interaction, and digital product design."
    },
    {
      schoolName: "California State University, Fullerton",
  logo: calstateLogo, // CSUF logo
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
  subtitle: "Selected case studies & design works",
  projects: [
    {
      imageKey: "shein",
      image: imgShein,
      projectName: "SHEIN Heuristic Evaluation",
      projectDesc:
        "Heuristic evaluation of SHEIN.com focusing on navigation, product discovery, and checkout using Nielsen’s Ten Heuristics.",
      category: "UX Audit · Heuristic Evaluation",
      tools: ["Nielsen Heuristics", "Figma", "Miro"],
      duration: "2024 Q3 · 3 weeks",
      sections: [
        {
          title: "Overview",
          paragraphs: [
            "Evaluated the e-commerce flow across home, PLP/PDP, cart, and checkout for usability gaps and cognitive load issues."
          ]
        },
        {
          title: "Goals",
          bullets: [
            "Identify critical usability violations across key flows",
            "Prioritize issues with severity ratings and impact",
            "Provide actionable UI/UX recommendations"
          ]
        },
        {
          title: "Methods",
          paragraphs: [
            "Applied Nielsen’s 10 Heuristics with severity scoring (0–4). Benchmarked common e‑commerce patterns for best practices."
          ]
        },
        {
          title: "Outcomes",
          paragraphs: [
            "Produced prioritized issue list with design suggestions targeting discoverability, feedback, and error prevention."
          ]
        }
      ],
      footerLink: [
        { name: "View Case Study", url: "/projects/shein-heuristic-evaluation" }
      ]
    },
    {
      imageKey: "evaluatingandimprovingtheuserexperienceofthepetdeskapp",
      image: imgPetdesk,
      projectName: "PetDesk User Experience Research",
      projectDesc:
        "Mixed‑methods study of onboarding and key task flows for new/returning users on the PetDesk app.",
      category: "User Research · Usability Testing",
      tools: ["Interview Guide", "Usability Test (moderated)", "Figma", "Maze"],
      duration: "2024 Q2 · 4 weeks",
      sections: [
        {
          title: "Overview",
          paragraphs: [
            "Explored mental models and friction points from onboarding to appointment management to inform redesign priorities."
          ]
        },
        {
          title: "Goals",
          bullets: [
            "Understand first‑time setup challenges",
            "Measure task completion and error patterns",
            "Reveal content and IA gaps"
          ]
        },
        {
          title: "Methods",
          paragraphs: [
            "Semi‑structured interviews and moderated task‑based tests; affinity mapping of findings; severity tagging."
          ]
        },
        {
          title: "Outcomes",
          paragraphs: [
            "Prioritized issues around navigation clarity and terminology; provided wireframe concepts for onboarding improvements."
          ]
        }
      ],
      footerLink: [
        { name: "View Case Study", url: "/projects/petdesk-user-experience-research" }
      ]
    },
    {
      imageKey: "zenflow",
      image: imgZenflow,
      projectName: "ZenFlow Mobile App",
      projectDesc:
        "Concept app for mindful routines with breathing guidance and a calm visual language that reduces cognitive load.",
      category: "Product Design · Mobile UI",
      tools: ["Figma", "Prototyping", "After Effects"],
      duration: "Concept · 4 weeks",
      sections: [
        {
          title: "Overview",
          paragraphs: [
            "Designed a minimal, distraction‑free flow to support daily breathing and focus routines."
          ]
        },
        {
          title: "Goals",
          bullets: [
            "Lower cognitive load during routine setup",
            "Create a calming motion/visual system",
            "Enable quick access to most‑used actions"
          ]
        },
        {
          title: "Design",
          paragraphs: [
            "Neutral palette, soft gradients, and subtle motion. Emphasis on large tappable targets and predictable navigation."
          ]
        },
        {
          title: "Outcomes",
          paragraphs: [
            "High‑fidelity prototype demonstrating core flows; ready for usability testing iterations."
          ]
        }
      ],
      footerLink: [
        { name: "View Case Study", url: "/projects/zenflow-mobile-app" }
      ]
    },
    {
      imageKey: "petsify",
      image: imgPetsify,
      projectName: "Petsify E-commerce Experience",
      projectDesc:
        "End-to-end e-commerce UX for pet products — from navigation and product discovery to cart and checkout optimizations.",
      category: "E‑commerce UX · IA / Navigation",
      tools: ["Figma", "IA Mapping", "User Flows", "Illustrator"],
      duration: "2023 · 5 weeks",
      sections: [
        { title: "Overview", paragraphs: ["End‑to‑end IA and flow design for product discovery, comparison, cart, and checkout."]},
        { title: "Goals", bullets: ["Improve discovery and comparison", "Reduce checkout drop‑off", "Clarify promotions and shipping"]},
        { title: "Design", paragraphs: ["Introduced clearer category taxonomy, filters, and progressive disclosure in checkout."]},
        { title: "Outcomes", paragraphs: ["Defined UX patterns and annotated wireframes ready for usability validation."]}
      ],
      footerLink: [
        { name: "View Case Study", url: "/projects/petsify-e-commerce-experience" }
      ]
    },
    {
      imageKey: "miltonsphilosophy",
      image: imgMiltons,
      projectName: "Miltons Philosophy",
      projectDesc:
        "Editorial and interaction experiment translating philosophical themes into typographic hierarchy and visual rhythm.",
      category: "Editorial Design · Interactive Typography",
      tools: ["InDesign", "Photoshop", "Motion Principles"],
      duration: "Studio · 2 weeks",
      sections: [
        { title: "Overview", paragraphs: ["Explored expressive type, rhythm, and grid to convey philosophical content."]},
        { title: "Design", paragraphs: ["Used hierarchy, whitespace, and pacing to guide reading flow; experimented with typographic motion."]},
        { title: "Outcomes", paragraphs: ["Delivered a cohesive editorial narrative with micro‑interaction studies."]}
      ],
      footerLink: [
        { name: "View Case Study", url: "/projects/miltons-philosophy" }
      ]
    },
    {
      imageKey: "posterandpackingdesign",
      image: imgPosterPack,
      projectName: "Poster and Packing Design",
      projectDesc:
        "Posters and packaging with strong brand story, color systems, and print‑ready layouts.",
      category: "Visual Identity · Packaging",
      tools: ["Brand System", "Color Tokens", "Illustrator", "Photoshop"],
      duration: "2023 · 3 weeks",
      sections: [
        { title: "Overview", paragraphs: ["Developed a consistent visual system across posters and package surfaces."]},
        { title: "Goals", bullets: ["Cohesive brand voice", "Print‑ready fidelity", "Shelf impact"]},
        { title: "Outcomes", paragraphs: ["Delivered dielines, color specs, and production‑ready exports."]}
      ],
      footerLink: [
        { name: "View Case Study", url: "/projects/poster-and-packing-design" }
      ]
    },
    {
      imageKey: "sandboxie",
      image: imgSandboxie,
      projectName: "Sandboxie UI Refresh",
      projectDesc:
        "Conceptual refresh with clearer affordances, modern visual system, and better information density.",
      category: "UI Design · Visual Refresh",
      tools: ["Figma", "Design Tokens", "Iconography"],
      duration: "Concept · 2 weeks",
      sections: [
        { title: "Overview", paragraphs: ["Audited existing UI; proposed a refreshed visual system and layout density adjustments."]},
        { title: "Design", paragraphs: ["Introduced tokenized color/typography, clearer affordances, and tighter information grouping."]},
        { title: "Outcomes", paragraphs: ["Component proposals and annotated screens for stakeholder review."]}
      ],
      footerLink: [
        { name: "View Case Study", url: "/projects/sandboxie-ui-refresh" }
      ]
    },
    {
      imageKey: "abovethecarmenline",
      image: imgAboveCarmen,
      projectName: "Above the Carmen Line",
      projectDesc:
        "Interaction concept inspired by near‑space narratives; minimalist layout with bold typographic rhythm.",
      category: "Interaction · Visual Design",
      tools: ["Figma", "After Effects", "Typography"],
      duration: "Concept · 2 weeks",
      sections: [
        { title: "Overview", paragraphs: ["Explored cosmic themes using typographic scale, contrast, and spatial rhythm."]},
        { title: "Design", paragraphs: ["Minimal grid, bold type, and motion hints to convey altitude and silence."]},
        { title: "Outcomes", paragraphs: ["Art‑direction frames and motion cues for further prototyping."]}
      ],
      footerLink: [
        { name: "View Case Study", url: "/projects/above-the-carmen-line" }
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
