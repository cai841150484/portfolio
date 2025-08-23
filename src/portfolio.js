/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation.json"; // Rename to your file name for custom animation
import pennstateLogo from "./assets/images/pennstateLogo.jpg";
import calstateLogo from "./assets/images/calstateLogo.png";
// Project images
import imgShein from "./assets/images/projects/shein.png";
import imgSheinThumb from "./assets/images/projects/shein_thumbnail.png";
import imgPetdesk from "./assets/images/projects/evaluatingandimprovingtheuserexperienceofthepetdeskapp.png";
import imgPetdeskThumb from "./assets/images/projects/evaluatingandimprovingtheuserexperienceofthepetdeskapp_thumbnail.png";
import imgZenflow from "./assets/images/projects/zenflow.png";
import imgZenflowThumb from "./assets/images/projects/zenflow_thumbnail.png";
import imgPetsify from "./assets/images/projects/petsify.png";
import imgPetsifyThumb from "./assets/images/projects/petsify_thumbnail.png";
import imgMiltons from "./assets/images/projects/miltonsphilosophy.png";
import imgMiltonsThumb from "./assets/images/projects/miltonsphilosophy_thumbnail.png";
import imgPosterPack from "./assets/images/projects/posterandpackingdesign.png";
import imgPosterPackThumb from "./assets/images/projects/posterandpackingdesign_thumbnail.png";
import imgSandboxie from "./assets/images/projects/sandboxie.png";
import imgSandboxieThumb from "./assets/images/projects/sandboxie_thumbnail.png";
import imgAboveCarmen from "./assets/images/projects/abovethecarmenline.png";
import imgAboveCarmenThumb from "./assets/images/projects/abovethecarmenline_thumbnail.png";
import imgEnvMamba from "./assets/images/projects/EnvMAMBA.png";
import imgEnvMambaThumb from "./assets/images/projects/EnvMAMBA_thumbnail.png";


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
    "UI/UX designer crafting intuitive, elegant digital experiences. Skilled in research, wireframing, prototyping, and visual design."
  ),
  subTitleText:
    "I design intuitive, elegant digital experiences — turning research and wireframes into clear, usable interfaces.",
  resumeLink:
    import.meta.env.VITE_RESUME_LINK || "https://drive.google.com/file/d/1rcpwgvxRR3mSJxWO0F18UbKA8vkAFI_H/view?usp=sharing", // configurable via .env
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
    // Design
    {skillName: "Figma"},
    {skillName: "Adobe Illustrator"},
    {skillName: "Adobe Photoshop"},
    {skillName: "Adobe XD"},
    {skillName: "After Effects"},
    {skillName: "Lightroom"},
    {skillName: "InDesign"},
    {skillName: "TouchDesigner", iconSrc: "/icons/touchdesigner.svg"},
    // Coding
    {skillName: "Processing"},
    {skillName: "HTML5"},
    {skillName: "CSS3"},
    {skillName: "JavaScript"},
    {skillName: "Python"}
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
      subHeader: "Master of Science – Informatics",
      duration: "AUG 2023 – DEC 2025",
      desc: "",
      courses: [
        "Human-Computer Interaction",
        "Social Informatics",
        "Human-Centered Design",
        "Computer-Supported Cooperative Work",
        "Human-Centered Artificial Intelligence"
      ]
    },
    {
      schoolName: "California State University, Fullerton",
      logo: calstateLogo, // CSUF logo
      subHeader: "Bachelor of Fine Art – Graphic And Interactive Design",
      duration: "AUG 2020 – MAY 2023",
      desc: "",
      courses: [
        "UI/UX Design",
        "Interaction Design",
        "Web Design",
        "Packaging Design",
        "Poster Design",
        "Data Visualization",
        "Exhibition Design and Management"
      ]
    }
  ]
};

// Proficiency section removed per request

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Graduate Research Assistant",
      company: "Penn State University",
      date: "JUN 2024 – DEC 2025",
      desc: "Informatics lab focusing on plant disease detection and diagnostic tooling. Led front‑end UX for a web app while building high‑quality image datasets for model training.",
      descBullets: [
        "Curated and annotated apple‑leaf imagery (COCO format) across multiple infection stages to improve dataset coverage.",
        "Designed and built a browser‑based diagnostic interface (HTML/CSS/JavaScript) to visualize predictions and streamline labeling.",
        "Co‑authored a paper describing the system architecture, dataset, and evaluation results.",
        "Extended the product part‑time: refined UI flows, addressed usability feedback, and supported paper revision and system deployment."
      ]
    },
    {
      role: "UI Design Intern",
      company: "Sunvega",
      date: "AUG 2024 – DEC 2024",
      desc: "UI design intern embedded in a UED team, shipping enterprise features and evolving the design system.",
      descBullets: [
        "Partnered with PMs and engineers to deliver new features and iterate on existing flows across multiple releases.",
        "Facilitated design reviews; refined user journeys and acceptance criteria using analytics and user feedback.",
        "Contributed to the component library (Ant Design) and authored new UI components to accelerate delivery."
      ]
    },
    {
      role: "Graphic Design Intern",
      company: "CREATIVE AID",
      date: "SEP 2022 – DEC 2022",
      desc: "Hands‑on graphic design role across branding and social content for small businesses.",
      descBullets: [
        "Owned end‑to‑end visual delivery for small brand projects — from moodboards and typography to final assets.",
        "Produced social media layouts and marketing visuals aligned with brand guidelines."
      ]
    },
    {
      role: "UI Design Intern",
      company: "Software Engineering Center, Chinese Academy Of Sciences",
      date: "JUL 2022 – SEP 2022",
      desc: "UI design intern supporting B‑side enterprise web tools; contributed wireframes and iterative improvements.",
      descBullets: [
        "Designed interface patterns and evaluated features; iterated designs based on stakeholder and user feedback."
      ]
    }
  ]
};

// Open source section removed

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "Selected case studies & design works",
  projects: [
    {
      imageKey: "shein",
      image: imgShein,
      thumbnail: imgSheinThumb,
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
      thumbnail: imgPetdeskThumb,
      projectName: "PetDesk",
      projectDesc:
        "Mixed‑methods study of onboarding and key task flows for new/returning users on the PetDesk app.",
      category: "UI Design · User Research · Usability Testing",
      tools: ["Interview Guide", "Usability Test (moderated)", "Figma", "Maze"],
      duration: "Summer_2022",
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
      thumbnail: imgZenflowThumb,
      projectName: "ZenFlow",
      projectDesc:
        "A Processing-based desktop program for mindful routines with breathing guidance and a calm, generative visual language that reduces cognitive load.",
      category: "Processing · Desktop Interaction",
      tools: ["Processing", "Java", "Figma"],
      duration: "Fall_2022",
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
            "Neutral palette, soft gradients, and subtle motion rendered via Processing. Focus on calm, generative visuals and predictable keyboard interactions."
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
        { name: "View Case Study", url: "/projects/zenflow-processing" }
      ]
    },
    {
      imageKey: "petsify",
      image: imgPetsify,
      thumbnail: imgPetsifyThumb,
      projectName: "Petsify",
      projectDesc:
        "End-to-end e-commerce UX for pet products — from navigation and product discovery to cart and checkout optimizations.",
      category: "UI/UX Design",
      tools: ["Adobe XD", "Illustrator"],
      duration: "Summer_2022",
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
      thumbnail: imgMiltonsThumb,
      projectName: "Miltons Philosophy",
      projectDesc:
        "Editorial and interaction experiment translating philosophical themes into typographic hierarchy and visual rhythm.",
      category: "Editorial Design · Interactive Typography",
      tools: ["InDesign", "Photoshop", "Motion Principles"],
      duration: "Summer_2021",
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
      thumbnail: imgPosterPackThumb,
      projectName: "Poster and Packing Design",
      projectDesc:
        "Posters and packaging with strong brand story, color systems, and print‑ready layouts.",
      category: "Visual Identity · Packaging",
      tools: ["Brand System", "Color Tokens", "Illustrator", "Photoshop"],
      duration: "2023",
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
      thumbnail: imgSandboxieThumb,
      projectName: "Sandboxie",
      projectDesc:
        "Conceptual refresh with clearer affordances, modern visual system, and better information density.",
      category: "Magazine Design",
      tools: ["Figma", "Design Tokens", "Iconography"],
      duration: "Fall_2021",
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
      thumbnail: imgAboveCarmenThumb,
      projectName: "Above the Carmen Line",
      projectDesc:
        "Interaction concept inspired by near‑space narratives; minimalist layout with bold typographic rhythm.",
      category: "Data Visualization",
      tools: ["Adobe XD"],
      duration: "Fall_2022",
      sections: [
        { title: "Overview", paragraphs: ["Explored cosmic themes using typographic scale, contrast, and spatial rhythm."]},
        { title: "Design", paragraphs: ["Minimal grid, bold type, and motion hints to convey altitude and silence."]},
        { title: "Outcomes", paragraphs: ["Art‑direction frames and motion cues for further prototyping."]}
      ],
      footerLink: [
        { name: "View Case Study", url: "/projects/above-the-carmen-line" }
      ]
    }

    , {
      imageKey: "envmamba",
      image: imgEnvMamba,
      thumbnail: imgEnvMambaThumb,
      projectName: "EnvMAMBA",
      projectDesc: "EnvMAMBA is an interactive serious game that invites the public to play with real-world environmental data from New York City. Beyond a typical case study, it’s a curiosity-driven exploration: a map you can navigate, compare, and question. Natural indicators (vegetation, air quality, temperature) are woven with human-centered signals like noise complaints to surface neighborhood patterns in a way that feels tangible. LLMs add a narrative layer that personifies environmental elements — turning raw metrics into voices and stories — so insights become memorable, not just measurable.",
      category: "Interactive Data Viz · Serious Game · AI Storytelling",
      tools: ["Figma", "Geospatial Visualization", "LLMs"],
      duration: "2025 Spring",
      sections: [
        { title: "Overview", paragraphs: [
          "EnvMAMBA brings together geospatial visualization, gamified exploration, and AI-driven storytelling to make environmental data more engaging and actionable.",
          "Users explore NYC’s neighborhoods via an interactive map to reveal spatial patterns and relationships among vegetation, air quality, temperature, and noise complaints."
        ]}
      ],
      footerLink: [
        { name: "View Case Study", url: "/projects/envmamba" },
        { name: "GitHub Repository", url: "https://github.com/Xuyk021/DataVis" }
      ]
    }

  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Let’s connect! Whether you want to discuss a project, collaborate, or just say hi, my inbox is always open.",
  number: "9096822704",
  email_address: "jhoncai811@gmail.com"
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  workExperiences,
  bigProjects,
  contactInfo
};
