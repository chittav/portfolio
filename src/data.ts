import { CaseStudy, ExperienceItem, Prototype, SkillItem } from "./types";

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "cno-pega-sales-automation",
    title: "PEGA Sales Automation & Process AI",
    company: "CNO Financial Group (Colonial Penn)",
    period: "Apr 2025 – Present",
    roleTitle: "Sr. Consultant – Product Management",
    summary:
      "Leading the replacement of a legacy sales and servicing application with PEGA Sales Automation and Process AI — screen-to-screen workflows for sales reps, managers, and admins across the full agent lifecycle.",
    challenge:
      "Thousands of life insurance agents relied on a high-debt legacy CRM with fragmented workflows. The business needed a platform-native sales automation system that could handle inbound/outbound calls, lead routing, prospect management, and servicing — without accumulating more custom code debt.",
    metrics: [
      "15–20% improvement in agent lead-to-conversion rates via AI-assisted lead prioritization.",
      "End-to-end screen-to-screen coverage for three distinct roles: sales rep, sales manager, and sales admin.",
      "Process AI routing reduces stale lead aging by dispatching leads to optimal work queues in near real-time.",
    ],
    keyActions: [
      "Defined screen-to-screen sales automation flows from agent login through calls, leads, prospects, customers, and servicing for three role personas.",
      "Partnered with engineering and sales ops to implement Process AI for intelligent lead routing to the right work queues based on agent capacity and lead probability.",
      "Conducted frontline agent discovery to reprioritize the backlog around revenue impact and conversion metrics rather than feature loudness.",
      "Led build-vs-configure tradeoffs across PEGA platform capabilities, custom automation logic, and reporting — minimizing long-term maintenance cost.",
      "Built a RAG Visualizer prototype to help non-technical stakeholders understand the internal RAG system being developed for agent knowledge search.",
      "Spearheaded the internal RAG system initiative so sales agents can query company information across distributed knowledge sources.",
    ],
    skillsApplied: [
      "PEGA Sales Automation",
      "Process AI & Lead Routing",
      "CRM Modernization",
      "Build-vs-Configure",
      "RAG System Design",
      "Cross-functional Stakeholder Alignment",
    ],
    crmParallels:
      "PEGA Sales Automation maps closely to Salesforce Sales Cloud and Agentforce patterns: role-based record views, lead-to-opportunity pipelines, work queue routing, and platform-native automation vs. custom Apex. Process AI lead routing parallels Einstein Lead Scoring and intelligent assignment rules. The internal RAG initiative mirrors Data Cloud + enterprise search architectures for contextual agent assistance.",
    aiAspect:
      "Process AI for intelligent work queue routing; internal RAG system for agent knowledge search across company data; RAG Visualizer built to accelerate stakeholder alignment on retrieval architecture.",
    techStack: ["PEGA Sales Automation", "Process AI", "RAG", "Enterprise Search"],
  },
  {
    id: "florida-blue-ewoc",
    title: "EWOC — Enterprise Work Center (CRM Built from Scratch)",
    company: "Florida Blue (BCBS Florida)",
    period: "Feb 2023 – Apr 2025",
    roleTitle: "Product Manager – Enterprise Platforms",
    summary:
      "Co-owned strategy and delivery for EWOC, an internal CRM and case orchestration platform built from scratch for service advocates — spanning work allocation, case management, UI, and reporting.",
    challenge:
      "Multiple regulated health insurance business units operated on fragmented, team-specific queues with manual cross-team handoffs. There was no unified platform to allocate work, manage cases end-to-end, or measure throughput — delaying claims processing and creating visibility gaps for leadership.",
    metrics: [
      "Eliminated manual cross-team handoffs that delayed healthcare claims processing.",
      "Unified patchwork workflows into a single orchestration model across multiple business units.",
      "Established cycle-time, throughput, and task-aging analytics to guide data-driven roadmap decisions.",
    ],
    keyActions: [
      "Co-led the build of an internal CRM from scratch: work allocation platform (group creation and case/task routing), case management backend, EWOC UI, and executive reporting.",
      "Designed a real-time KPI framework measuring case throughput, bottleneck locations, and task decay to inform prioritization.",
      "Ran collaborative Miro workshops to model complex workflows with cross-functional partners before engineering commitment.",
      "Secured funding and executive alignment by presenting roadmap tradeoffs with transparent, data-backed impact analysis.",
      "Built enterprise search capabilities so advocates could surface case context across distributed data sources.",
    ],
    skillsApplied: [
      "CRM Platform Design",
      "Case Orchestration",
      "Enterprise Search",
      "KPI Dashboarding",
      "Executive Stakeholder Alignment",
      "Regulated Industry Compliance",
    ],
    crmParallels:
      "EWOC was effectively a custom CRM: record management, work queues, role-based views, automation rules, and reporting — the same primitives as Salesforce Service Cloud or a PEGA case management layer. Building from scratch required the same product decisions around object models, routing logic, and platform extensibility that enterprise CRM PMs navigate daily.",
    techStack: ["Java", "PostgreSQL", "Kafka", "ELK Stack"],
  },
];

export const PROTOTYPES: Prototype[] = [
  {
    id: "sales-assist",
    title: "SalesAssist — AI Sales Copilot Demo",
    pitch:
      "AI-powered sales copilot prototype that helps agents answer customer questions faster during live calls using RAG-style knowledge retrieval, talk tracks, and citation-backed responses.",
    problem:
      "Sales agents on live calls struggle to surface accurate answers quickly from distributed product, policy, and talk-track knowledge — leading to hold times, inconsistent messaging, and missed conversion opportunities.",
    whatBuilt:
      "A multi-role prototype with a simulated RAG pipeline showing retrieval steps, grounded answers, and source citations. Includes Agent Copilot, Knowledge Sources, Document Ingestion, Analytics, and SME feedback views — plus a product framing modal with architecture, metrics, and roadmap for reviewer context.",
    tools: ["Cursor", "React", "Vercel"],
    demoUrl: "https://sales-assist-ai.vercel.app",
    githubUrl: "https://github.com/chittav/Sales-Assist-AI",
    learnings: [
      "Citation-backed RAG responses help agents trust AI suggestions during live calls and reduce compliance risk from ungrounded answers.",
      "Product framing modal accelerated stakeholder and reviewer understanding of architecture, success metrics, and roadmap without a separate walkthrough.",
    ],
    tags: ["Sales Copilot", "RAG", "Enterprise AI", "Live Demo"],
  },
  {
    id: "job-application-copilot",
    title: "Job Application Co-Pilot",
    pitch:
      "An end-to-end job application intelligence platform — B2C for individual job seekers and B2B for cohort-based programs and educational institutions.",
    problem:
      "Job seekers use ChatGPT or Claude for resume reviews, but nothing covers the full application workflow end-to-end. Users must continually prompt, manually edit, and possess strong context-engineering skills. Institutions lack standardized platforms to offer structured job-search guidance and mentor feedback at scale.",
    whatBuilt:
      "A working prototype with two modes: B2C (resume tailoring, fit analysis, gap identification, ATS scoring, and personalized application artifacts from a resume + job description) and B2B (mentor, mentee, and admin roles for cohort-based career programs). Built in Google AI Studio; actively enhancing in Cursor for Vercel deployment.",
    tools: ["Google AI Studio", "Cursor", "Gemini"],
    demoUrl: "https://job-application-intelligence-copilot-534516992074.us-east1.run.app/",
    githubUrl: "https://github.com/chittav/Job-Application-CoPilot",
    learnings: [
      "Validated that end-to-end workflow beats fragmented prompting — users complete applications faster with guided, structured flows.",
      "B2B model shows mentor capacity scaling: each mentor can coach more mentees, reducing institutional cost while improving student satisfaction.",
    ],
    tags: ["B2C / B2B", "GenAI", "Workflow Automation", "Career Tech"],
  },
  {
    id: "rag-visualizer",
    title: "RAG Visualizer",
    pitch:
      "A hands-on learning app that lets non-technical stakeholders visualize and explore how RAG systems work — chunking, embedding, retrieval, and grounding.",
    problem:
      "While building an internal RAG system for sales agents at CNO, business partners and non-technical teammates struggled to understand how retrieval-augmented generation actually works. Abstract architecture diagrams weren't enough to build shared mental models or accelerate decisions.",
    whatBuilt:
      "An interactive prototype that walks users through the RAG pipeline step by step — from document ingestion and chunking to vector search and LLM response generation. Built with ChatGPT and deployed on GitHub Pages for easy sharing with stakeholders.",
    tools: ["ChatGPT", "GitHub Pages", "JavaScript"],
    demoUrl: "https://chittav.github.io/RAG_HELLOPM/",
    githubUrl: "https://github.com/chittav/RAG_HELLOPM",
    learnings: [
      "Dramatically reduced the time non-technical users needed to grasp RAG concepts — from weeks of meetings to a single hands-on session.",
      "Accelerated product decisions on chunking strategy, retrieval scope, and grounding rules by giving stakeholders a sandbox to experiment with.",
    ],
    tags: ["RAG", "Education", "Stakeholder Alignment", "Enterprise AI"],
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: "cno-pega",
    title: "PEGA Sales Automation & Process AI",
    company: "CNO Financial Group",
    period: "Apr 2025 – Present",
    roleTitle: "Sr. Consultant – Product Management",
    summary:
      "Product strategy and roadmap for replacing a legacy CRM with PEGA Sales Automation, Process AI lead routing, and an internal RAG knowledge system.",
    highlights: [
      "Screen-to-screen sales automation for sales rep, manager, and admin roles.",
      "AI-assisted lead prioritization driving 15–20% conversion improvement.",
      "Internal RAG system and stakeholder-facing RAG Visualizer prototype.",
    ],
    emphasis: "featured",
    relatedCaseStudyId: "cno-pega-sales-automation",
  },
  {
    id: "florida-blue-ewoc",
    title: "EWOC — Enterprise Work Center",
    company: "Florida Blue",
    period: "Feb 2023 – Apr 2025",
    roleTitle: "Product Manager – Enterprise Platforms",
    summary:
      "Co-owned an internal CRM built from scratch for service advocates — work allocation, case management, UI, reporting, and enterprise search.",
    highlights: [
      "Built CRM platform from scratch across work allocation, case backend, and UI layers.",
      "Unified multi-BU orchestration replacing fragmented manual handoffs.",
      "KPI frameworks for cycle time, throughput, and task aging.",
    ],
    emphasis: "featured",
    relatedCaseStudyId: "florida-blue-ewoc",
  },
  {
    id: "florida-blue-conductor",
    title: "Netflix Conductor Enterprise Automation",
    company: "Florida Blue",
    period: "Jan 2019 – Aug 2021",
    roleTitle: "Sr. Business Systems Analyst / Product Owner",
    summary:
      "Transformed manual back-office operations into automated, orchestrated workflows — owning roadmap, cross-team alignment, and platform governance at enterprise scale.",
    highlights: [
      "Onboarded core enterprise workflows onto Netflix Conductor with conditional routing, retries, and escalation paths.",
      "Consolidated redundant legacy scripts across divisions, reducing production incidents.",
      "Owned roadmap planning and cross-functional collaboration across numerous engineering and business teams.",
    ],
    emphasis: "featured",
  },
  {
    id: "smc-security",
    title: "Global Enterprise Security Rollout",
    company: "SMC Corporation USA",
    period: "Aug 2021 – Jan 2023",
    roleTitle: "Global Product Manager",
    summary:
      "Managed global rollout of 6 enterprise security platforms across 45+ countries with regional compliance sequencing.",
    highlights: [
      "Reduced organizational security compliance risk by 85%.",
      "Built country-by-country deployment sequencing based on regulatory requirements.",
    ],
    emphasis: "standard",
  },
];

export const SKILL_ITEMS: SkillItem[] = [
  {
    name: "AI Agents & RAG Architectures",
    level: "Specialized Literacy",
    category: "AI & Emerging Tech",
    details:
      "Hands-on with RAG pipelines, vector retrieval, chunking strategies, grounding rules, and enterprise search — validated through prototypes and production initiatives at CNO.",
    metricMatched: "Built RAG Visualizer and internal RAG system for sales agent knowledge search.",
    strategicValue:
      "Bridges the gap between AI engineering and business stakeholders — can prototype, evaluate, and ship intelligent features with appropriate guardrails.",
  },
  {
    name: "Vibe Coding & Rapid Prototyping",
    level: "Specialized Literacy",
    category: "AI & Emerging Tech",
    details:
      "Builder-oriented PM who ships working prototypes to validate hypotheses before committing engineering resources. Tools include Cursor, Google AI Studio, Lovable, Figma, and GitHub Pages.",
    metricMatched:
      "Shipped Job Application Co-Pilot and RAG Visualizer as live, deployable prototypes with real user flows.",
    strategicValue:
      "Accelerates discovery and de-risks product bets — demonstrates concepts to stakeholders and engineers with working code, not just slides.",
  },
  {
    name: "Model Selection & AI Evals",
    level: "Specialized Literacy",
    category: "AI & Emerging Tech",
    details:
      "Evaluates model outputs via offline benchmarks and live monitoring; analyzes cost, latency, and accuracy tradeoffs for production AI features.",
    metricMatched: "Explored latency-to-token optimization across cloud model versions for enterprise RAG.",
    strategicValue:
      "Enables informed build decisions on model selection, prompt architecture, and infrastructure cost at scale.",
  },
  {
    name: "Product Strategy & Roadmapping",
    level: "Expert",
    category: "Product Management",
    details:
      "Translates frontline customer pain into clear epics, prioritized roadmaps, and measurable North Star metrics with well-reasoned tradeoffs.",
    metricMatched: "Managed CRM modernization roadmap at CNO and EWOC platform strategy at Florida Blue.",
    strategicValue:
      "Aligns engineering, design, and business stakeholders around concrete KPIs like conversion rates and cycle times.",
  },
  {
    name: "Backlog & Prioritization",
    level: "Expert",
    category: "Product Management",
    details:
      "Organizes complex backlogs around revenue and workflow impact — resisting feature loudness in favor of measurable product outcomes.",
    metricMatched: "Reprioritized CNO backlog around lead-to-conversion rates and revenue uplift.",
    strategicValue:
      "Keeps engineering focused on highest-impact work and prevents backlog bloat.",
  },
  {
    name: "Build-vs-Configure Assessment",
    level: "Expert",
    category: "Product Management",
    details:
      "Strategic evaluation of platform-native capabilities vs. custom development, focused on minimizing long-term technical debt.",
    metricMatched: "Made architectural calls across PEGA automation rules, CRM data models, and custom microservices.",
    strategicValue:
      "Balances speed-to-market against maintenance cost, maximizing lifecycle ROI on enterprise platforms.",
  },
  {
    name: "CRM & Sales Automation Platforms",
    level: "Expert",
    category: "Platforms & Orchestration",
    details:
      "Deep experience building and modernizing CRM systems — from scratch (EWOC) and via platform migration (PEGA Sales Automation). Covers lead routing, work queues, role-based views, and enterprise search.",
    metricMatched:
      "Built internal CRM from scratch at Florida Blue; leading PEGA Sales Automation replacement at CNO.",
    strategicValue:
      "Understands CRM primitives deeply enough to make platform decisions that scale — applicable across Salesforce, PEGA, and custom builds.",
  },
  {
    name: "Case & Microservice Orchestration",
    level: "Expert",
    category: "Platforms & Orchestration",
    details:
      "Models workflow state machines, integrates REST/gRPC endpoints, designs error handlers, and leverages orchestration frameworks like Netflix Conductor.",
    metricMatched: "Co-owned EWOC orchestration platform and automated back-office workflows via Conductor.",
    strategicValue:
      "Essential for reliable multi-system handoffs, retry queues, and automated workflows at enterprise scale.",
  },
  {
    name: "Workshopping & Wireframing",
    level: "Proficient",
    category: "Platforms & Orchestration",
    details:
      "Conducts alignment workshops in Miro, drafts UI flows in Figma, and models interaction paradigms with cross-functional partners early in discovery.",
    metricMatched: "Created workflow models and cycle-time maps in Miro workshop sessions at Florida Blue.",
    strategicValue:
      "Speeds discovery and ensures cross-functional alignment before engineering commitment.",
  },
];
