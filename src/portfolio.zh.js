/* Simplified Chinese portfolio dataset */
import {
  illustration as illustrationEN,
  greeting as greetingEN,
  socialMediaLinks as socialMediaLinksEN,
  splashScreen as splashScreenEN,
  skillsSection as skillsSectionEN,
  educationInfo as educationInfoEN,
  workExperiences as workExperiencesEN,
  bigProjects as bigProjectsEN,
  contactInfo as contactInfoEN,
} from "./portfolio";

// Deep clone helper
const clone = (obj) => JSON.parse(JSON.stringify(obj));

// Start from EN data then translate text fields
const illustration = clone(illustrationEN);
const socialMediaLinks = clone(socialMediaLinksEN);
const splashScreen = clone(splashScreenEN);

const greeting = clone(greetingEN);
greeting.username = "蔡灏";
greeting.title = "你好，我是蔡灏";
greeting.subTitleText = "我专注于打造直观、优雅的数字体验——基于研究与线框，产出清晰、易用的界面。";

const skillsSection = clone(skillsSectionEN);
skillsSection.title = "技能与语言";
skillsSection.subTitle = "以设计与技术助力想法落地。";
skillsSection.skills = [
  "🎨 面向 Web 和移动端的 UI/UX 设计，覆盖从概念到交付",
  "🧩 熟练使用 Figma、Adobe 全家桶（Illustrator、Photoshop、XD、After Effects、Lightroom、InDesign）、TouchDesigner、Processing",
  "💡 具备出色的视觉叙事、线框图、原型与用户研究能力",
  "🌐 前端基础：HTML5、CSS3",
  "🌏 多语言能力：中文（母语）、英语（高级）、粤语（中级）",
];
// 软件技能名称一般保持英文不变

const educationInfo = clone(educationInfoEN);
educationInfo.schools = educationInfo.schools.map((s) => {
  const n = clone(s);
  if (s.schoolName.includes("Pennsylvania")) {
    n.subHeader = "信息学理学硕士";
    n.duration = "2023年8月 – 2025年12月";
    n.courses = [
      "人机交互",
      "社会信息学",
      "以人为本设计",
      "计算机支持的协同工作",
      "以人为本的人工智能",
    ];
  } else if (s.schoolName.includes("California State University")) {
    n.subHeader = "平面与交互设计美术学士";
    n.duration = "2020年8月 – 2023年5月";
    n.courses = [
      "UI/UX 设计",
      "交互设计",
      "网页设计",
      "包装设计",
      "海报设计",
      "数据可视化",
      "展览设计与管理",
    ];
  }
  return n;
});

const workExperiences = clone(workExperiencesEN);
workExperiences.experience = workExperiences.experience.map((e) => {
  const n = clone(e);
  // 角色翻译
  if (n.role === "Graduate Research Assistant") n.role = "研究生科研助理";
  if (n.role === "UI Design Intern") n.role = "UI 设计实习生";
  if (n.role === "Graphic Design Intern") n.role = "平面设计实习生";
  // 公司名翻译（品牌名保留英文）
  if (n.company === "Penn State University") n.company = "宾夕法尼亚州立大学";
  if (n.company?.includes("Chinese Academy")) n.company = "中科院软件工程中心";
  if (n.company === "CREATIVE AID") n.company = "CREATIVE AID"; // 品牌名不译
  // 日期本地化
  if (e.company === "Penn State University") n.date = "2024年6月 – 2025年12月";
  if (e.company === "Sunvega") n.date = "2024年8月 – 2024年12月";
  if (e.company === "CREATIVE AID") n.date = "2022年9月 – 2022年12月";
  if (e.company?.includes("Chinese Academy")) n.date = "2022年7月 – 2022年9月";
  // 描述翻译
  if (e.company === "Penn State University") n.desc = "信息学实验室聚焦植物病害检测与诊断工具。负责 Web 应用前端 UX，同时构建高质量图像数据集用于模型训练。";
  if (e.company === "Sunvega") n.desc = "参与跨职能 UED 团队，与产品与开发协作，交付新功能并优化存量。组织评审、优化交付流程，基于用户反馈与数据持续改进。建设与维护 AntD 组件库，并按需开发新组件。";
  if (e.company === "CREATIVE AID") n.desc = "支持多项品牌设计项目从概念到落地，包括社媒页面与视觉识别设计。提升了独立推进与沟通表达能力。";
  if (e.company?.includes("Chinese Academy")) n.desc = "参与 B 端网站界面设计，分析评估产品并基于反馈精准迭代，强化以用户为中心的设计与循环优化能力。";
  // 要点翻译
  if (Array.isArray(n.descBullets)) {
    n.descBullets = n.descBullets.map((b) => {
      if (b.includes("Curated and annotated apple")) return "整理并标注苹果叶图像（COCO 格式），覆盖多种感染阶段，提升数据集覆盖度。";
      if (b.includes("Designed and built a browser")) return "设计并实现基于浏览器的诊断界面（HTML/CSS/JavaScript），用于可视化预测并简化标注流程。";
      if (b.includes("Co‑authored a paper")) return "共同撰写论文，阐述系统架构、数据集与评估结果。";
      if (b.includes("Extended the product part")) return "以兼职形式持续迭代：优化 UI 流程、响应可用性反馈，并支持论文修订与系统部署。";
      if (b.includes("Cross-functional")) return "在 UED 团队中跨职能协作，支持产品与开发";
      if (b.includes("Lead group")) return "主导组内评审、设计优化与交付验收";
      if (b.includes("Analyzed user")) return "基于用户数据与反馈持续改进";
      if (b.includes("Antd")) return "建设与维护 AntD 组件库，开发新组件";
      if (b.includes("Managed small")) return "独立端到端推进小型品牌设计项目";
      if (b.includes("Produced social") || b.includes("Produced social media")) return "设计社媒页面与营销物料";
      if (b.includes("Designed social")) return "设计社媒页面与营销物料";
      if (b.includes("Designed and improved")) return "设计并优化 B 端网页界面";
      if (b.includes("Designed interface patterns")) return "设计界面模式并评估功能；基于反馈持续迭代";
      if (b.includes("Analyzed user needs")) return "分析用户需求与产品反馈并进行迭代";
      return b;
    });
  }
  return n;
});

const bigProjects = clone(bigProjectsEN);
bigProjects.title = "重点项目";
bigProjects.subtitle = "精选案例与设计作品";

bigProjects.projects = bigProjects.projects.map((p) => {
  const n = clone(p);
  // 仅翻译分类，不修改项目名称
  if (n.category === "UX Audit · Heuristic Evaluation") n.category = "用户体验审计 · 启发式评估";
  if (n.category === "User Research · Usability Testing") n.category = "用户研究 · 可用性测试";
  if (n.category === "UI Design · User Research · Usability Testing") n.category = "UI 设计 · 用户研究 · 可用性测试";
  if (n.category === "UI/UX Design") n.category = "UI/UX 设计";
  if (n.category === "Processing · Desktop Interaction") n.category = "Processing · 桌面交互";
  if (n.category === "E‑commerce UX · IA / Navigation") n.category = "电商 UX · 信息架构/导航";
  if (n.category === "Editorial Design · Interactive Typography") n.category = "编辑设计 · 交互字体";
  if (n.category === "Visual Identity · Packaging") n.category = "视觉识别 · 包装";
  if (n.category === "UI Design · Visual Refresh") n.category = "UI 设计 · 视觉焕新";
  if (n.category === "Magazine Design") n.category = "杂志设计";
  if (n.category === "Data Visualization") n.category = "数据可视化";

  // EnvMAMBA 专项翻译
  if (n.projectName === "EnvMAMBA") {
    n.category = "交互式数据可视化 · 严肃游戏 · AI 叙事";
    n.projectDesc =
      "在本项目中，我们开发了 EnvMAMBA——一款可视化纽约市真实环境数据的交互式严肃游戏。它结合植被、空气质量、温度等自然指标与噪音投诉等人本数据，通过交互式地理地图，用户可探索各社区的空间模式，发现环境要素之间的关系。为增强参与度，我们集成大语言模型（LLMs），让环境要素拟人化并叙述数据故事，激发好奇与共情。通过地理空间可视化、游戏化探索与 AI 驱动叙事相结合，我们的目标是让复杂的环境数据更易理解、更具关联性并更可行动。";

    if (Array.isArray(n.sections)) {
      n.sections = n.sections.map((sec) => {
        const s2 = clone(sec);
        if (s2.title === "Overview") {
          s2.title = "概览";
          s2.paragraphs = [
            "EnvMAMBA 融合地理空间可视化、游戏化探索与 AI 驱动叙事，让环境数据更具参与性与可行动性。",
            "用户通过交互地图浏览纽约市各社区，洞察植被、空气质量、温度与噪音投诉等要素的空间关系与模式。",
          ];
        }
        return s2;
      });
    }
  }

  // 简介与章节标题翻译（示例性翻译，确保结构一致）
  if (p.projectDesc)
    n.projectDesc = n.projectDesc
      .replace("Heuristic evaluation of SHEIN.com focusing on navigation, product discovery, and checkout using Nielsen’s Ten Heuristics.", "基于 Nielsen 十大启发式原则，对 SHEIN.com 在导航、商品发现与结算流程进行评估。")
      .replace("Mixed‑methods study of onboarding and key task flows for new/returning users on the PetDesk app.", "采用混合方法研究 PetDesk App 的新老用户在注册与关键任务流程中的体验。")
      .replace("A Processing-based desktop program for mindful routines with breathing guidance and a calm, generative visual language that reduces cognitive load.", "基于 Processing 的桌面程序，提供呼吸引导与平静的生成式视觉语言，降低认知负荷。")
      .replace("End-to-end e-commerce UX for pet products — from navigation and product discovery to cart and checkout optimizations.", "面向宠物产品的端到端电商体验设计——从导航与商品发现到购物车与结算优化。")
      .replace("Editorial and interaction experiment translating philosophical themes into typographic hierarchy and visual rhythm.", "将哲学主题转译为版式层级与视觉节奏的编辑/交互实验。")
      .replace("Posters and packaging with strong brand story, color systems, and print‑ready layouts.", "拥有清晰品牌叙事、色彩体系与可印刷版面的海报与包装。")
      .replace("Conceptual refresh with clearer affordances, modern visual system, and better information density.", "在保持信息密度的同时，提供更清晰的控件感知与现代化的视觉系统。")
      .replace("Interaction concept inspired by near‑space narratives; minimalist layout with bold typographic rhythm.", "受近太空叙事启发的交互概念；极简布局与大胆的文字节奏。");

  if (Array.isArray(n.sections)) {
    n.sections = n.sections.map((sec) => {
      const s = clone(sec);
      if (s.title === "Overview") s.title = "概览";
      if (s.title === "Goals") s.title = "目标";
      if (s.title === "Methods") s.title = "方法";
      if (s.title === "Design") s.title = "设计";
      if (s.title === "Outcomes") s.title = "成果";
      if (Array.isArray(s.bullets)) {
        s.bullets = s.bullets.map((b) =>
          b
            .replace("Identify critical usability violations across key flows", "识别关键流程中的严重可用性问题")
            .replace("Prioritize issues with severity ratings and impact", "基于严重度与影响进行优先级排序")
            .replace("Provide actionable UI/UX recommendations", "给出可落地的 UI/UX 建议")
            .replace("Understand first‑time setup challenges", "理解首次使用的阻碍")
            .replace("Measure task completion and error patterns", "衡量任务完成率与错误模式")
            .replace("Reveal content and IA gaps", "发现内容与信息架构的缺口")
            .replace("Lower cognitive load during routine setup", "降低流程设置时的认知负荷")
            .replace("Create a calming motion/visual system", "营造平静的动效/视觉系统")
            .replace("Enable quick access to most‑used actions", "提供对高频操作的快捷访问")
        );
      }
      if (Array.isArray(s.paragraphs)) {
        s.paragraphs = s.paragraphs.map((p) =>
          p
            .replace("Evaluated the e-commerce flow across home, PLP/PDP, cart, and checkout for usability gaps and cognitive load issues.", "从首页、商品列表/详情、购物车到结算，评估电商流程中的可用性缺口与认知负荷问题。")
            .replace("Applied Nielsen’s 10 Heuristics with severity scoring (0–4). Benchmarked common e‑commerce patterns for best practices.", "基于 Nielsen 10 条启发式原则并使用 0–4 严重度评分；对常见电商模式进行对标。")
            .replace("Produced prioritized issue list with design suggestions targeting discoverability, feedback, and error prevention.", "输出优先级问题清单与设计建议，聚焦可发现性、反馈与错误预防。")
            .replace("Explored mental models and friction points from onboarding to appointment management to inform redesign priorities.", "从注册到预约管理，探索用户心智模型与摩擦点，为重设计提供依据。")
            .replace("Semi‑structured interviews and moderated task‑based tests; affinity mapping of findings; severity tagging.", "半结构化访谈与主持式任务测试；亲和图归纳；严重度标注。")
            .replace("Prioritized issues around navigation clarity and terminology; provided wireframe concepts for onboarding improvements.", "围绕导航清晰性与术语一致性进行优先优化；提供注册引导的线框方案。")
            .replace("Designed a minimal, distraction‑free flow to support daily breathing and focus routines.", "设计了最小化、无干扰的流程以支持日常呼吸与专注。")
            .replace("Neutral palette, soft gradients, and subtle motion rendered via Processing. Focus on calm, generative visuals and predictable keyboard interactions.", "采用中性色系、柔和渐变与细腻动效（Processing 渲染）。强调平静的生成式视觉与可预期的键盘交互。")
            .replace("High‑fidelity prototype demonstrating core flows; ready for usability testing iterations.", "高保真原型覆盖核心流程，准备进入可用性测试迭代阶段。")
        );
      }
      return s;
    });
  }
  if (Array.isArray(n.footerLink)) {
    n.footerLink = n.footerLink.map((l) => ({
      ...l,
      name:
        l.name === "View Case Study"
          ? "查看案例"
          : l.name === "GitHub Repository"
          ? "GitHub 仓库"
          : l.name,
    }));
  }
  return n;
});

const contactInfo = clone(contactInfoEN);
contactInfo.title = "联系我 ☎️";
contactInfo.subtitle = "欢迎交流！无论是项目合作、想法探讨或只是打个招呼，都可以通过邮箱联系我。";

export { illustration, greeting, socialMediaLinks, splashScreen, skillsSection, educationInfo, workExperiences, bigProjects, contactInfo };

