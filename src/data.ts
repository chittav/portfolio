import { Project, SkillItem } from "./types";

export const PROJECTS_DATA: Project[] = [
  {
    id: "cno-sales-enablement",
    title: "AI-Assisted Sales Enablement Platform",
    company: "CNO Financial Group",
    period: "Apr 2025 - Present",
    roleTitle: "Sr. Consultant - Product Management",
    summary: "Led product strategy and roadmap for a high-scale enterprise sales enablement platform that replaced a legacy CRM system used by thousands of insurance agents across the country.",
    metrics: [
      "15-20% improvement in agent lead-to-conversion rates.",
      "Replaced massive high-technical-debt legacy CRM with streamlined platform-native workflows.",
      "Accelerated response time via automated SLA routing."
    ],
    keyActions: [
      "Set lead-to-conversion rate as the primary North Star metric, translating it into actionable epics.",
      "Implemented AI-assisted lead prioritization to route high-probability leads to top agents in near real-time.",
      "Conducted extensive agent-level user discovery on the frontline to reprioritize the backlog based on financial/revenue impact.",
      "Spearheaded critical build-vs-configure tradeoffs for custom automation logic vs CRM platform features."
    ],
    skillsApplied: ["Enterprise SaaS", "CRM Platform-native design", "AI Lead Scoring", "Build-vs-Configure", "Jira Backlog Growth Management"],
    aiAspect: "AI-assisted lead prioritization (RAG elements + predictive scoring) and automated workflow routing to minimize stale lead aging.",
    buildVsConfigure: "Evaluated CRM core capabilities versus custom microservice logic to balance delivery speed and minimize long-term technical debt.",
    isAI: true
  },
  {
    id: "florida-blue-ewoc",
    title: "EWOC Case & Task Management Platform",
    company: "Florida Blue (BCBS Florida)",
    period: "Feb 2023 - Apr 2025",
    roleTitle: "Product Manager - Enterprise Platforms",
    summary: "Co-owned the core strategy, requirements, and execution roadmap for EWOC, an enterprise-level case and task orchestration platform serving multiple regulated health insurance business units.",
    metrics: [
      "Eliminated manual cross-team handoffs causing delayed healthcare claims processing.",
      "Established multi-stakeholder roadmap alignment with transparent data-driven tradeoffs.",
      "Built rigorous cycle-time, throughput, and task aging analytics."
    ],
    keyActions: [
      "Led transition from team-specific, fragmented queues to a unified, multi-department orchestration platform.",
      "Designed a real-time KPI analytical framework measuring case throughput, bottleneck locations, and critical task decay.",
      "Used collaborative workshops in Miro to visually model complex workflows with cross-functional partners prior to engineering.",
      "Secured funding and alignment by presenting high-stakes roadmap tradeoffs directly to business unit executives."
    ],
    skillsApplied: ["Case Orchestration", "KPI Dashboarding", "Miro Visual Workshopping", "Executive Stakeholder Alignment", "Regulated Industry Compliance"],
    aiAspect: "Engineered automatic tagging of claim complexities to predictively dispatch urgent cases to specialized teams.",
    buildVsConfigure: "Chose platform-standard table states but custom UI panels to preserve user efficiency while ensuring cloud data integrity.",
    isAI: false
  },
  {
    id: "smc-security",
    title: "Global Enterprise Security Rollout",
    company: "SMC Corporation USA",
    period: "Aug 2021 - Jan 2023",
    roleTitle: "Global Product Manager",
    summary: "Driven by business risk mitigation, organized the global rollout of 6 enterprise platforms across 45+ countries, sequencing features on regional readiness and regulatory variations.",
    metrics: [
      "Reduced overall organizational security compliance risk by 85%.",
      "Unified access controls for multinational operations within strict time zones.",
      "Maintained platform behavior consistency via unified global governance."
    ],
    keyActions: [
      "Built a strategic country-by-country deployment sequence checklist based on localized law differences.",
      "Formulated adoption metrics and milestones, keeping regional division heads accountable to strict timelines.",
      "Standardized security platform rulesets to allow regional compliance adjustments without bloating codebase size."
    ],
    skillsApplied: ["Global Rollouts", "Risk Compliance & Governance", "Accountability Audits", "Multinational Sequencing"],
    isAI: false
  },
  {
    id: "florida-blue-conductor",
    title: "Netflix Conductor Enterprise Automation",
    company: "Florida Blue",
    period: "Jan 2019 - Aug 2021",
    roleTitle: "Sr. Business Systems Analyst / Product Owner",
    summary: "Guided the digital transformation of manual back-office tasks into highly automated, system-orchestrated workflows by onboarding workflows onto Netflix Conductor.",
    metrics: [
      "Drastically minimized human touchpoints in operational pipelines through logical automations.",
      "Consolidated redundant, duplicated code workflows running across isolated teams.",
      "Decreased production ticketing incidents via automated recovery loops."
    ],
    keyActions: [
      "Conducted analysis on core enterprise processes, identifying specific workflows optimized for automated microservices.",
      "Created routing engines with conditional logic branches, automatic API retries, and clean escalations.",
      "Cleaned years of accumulated technical debt and redundant legacy scripts across disparate divisions."
    ],
    skillsApplied: ["Netflix Conductor", "Microservice Orchestration", "Conditional Routing Logic", "Technical Debt Reduction"],
    aiAspect: "Integrated automated OCR-to-text parsers with intelligent exception checking for anomalous invoice states.",
    isAI: false
  },
  {
    id: "agentic-ai-literacy",
    title: "Enterprise Agentic AI & RAG Prototyping Labs",
    company: "Professional Research & Applied Technology Labs",
    period: "Continuous Literacy Initiative",
    roleTitle: "Emerging Tech Prototyper & Builder PM",
    summary: "A hands-on engineering and product research laboratory demonstrating deep generative AI fluency. Designed RAG pipelines, dynamic prompt wrappers, and offline evaluation frameworks to master agentic workflow patterns.",
    metrics: [
      "Acquired deep practical model execution literacy: RAG, embedding vectors, grounding, and offline benchmarking metrics.",
      "Created functional sandboxed prototypes leveraging modern development engines, Figma, and LLM orchestration tools.",
      "Gained system-level product understanding of enterprise agent flows, including prompt variable engineering and context retrieval gates."
    ],
    keyActions: [
      "Executed evaluation frameworks (AI Evals) on LLM-generated output, tracking performance metrics around latency, token costs, and fidelity.",
      "Designed advanced prompt instruction templates with structured JSON outputs and schema parameters to prevent hallucination.",
      "Explored multi-agent pipeline mechanics, modeling how enterprise datasets serve as contextual anchors for autonomous agents."
    ],
    skillsApplied: ["GenAI RAG Architecture", "Prompt Parameter Engineering", "AI Evaluation Metrics (Evals)", "Enterprise Agentic Orchestration", "Rapid Interactive Prototyping"],
    aiAspect: "Engineered local RAG setups, custom vector similarity benchmarks, output evaluation scoring, and safety model filters.",
    isAI: true
  }
];

export const SKILL_ITEMS: SkillItem[] = [
  {
    name: "AI Agents & RAG Architectures",
    level: "Specialized Literacy",
    category: "AI & Emerging Tech",
    details: "Strong understanding of retrieval-augmented generation pipelines, contextual database search, vector chunk indexing, chunk embeddings, and context-aware grounding rules.",
    metricMatched: "Designed prompt architectures and structured inputs for financial modeling.",
    strategicValue: "Ensures the product team can build intelligent, context-aware features that respect security guardrails and retrieve accurate context."
  },
  {
    name: "Model Selection Tooling & AI Evals",
    level: "Specialized Literacy",
    category: "AI & Emerging Tech",
    details: "Familiar with evaluating model outputs via offline benchmarks and live monitoring, establishing guardrails, checking for safety drift, and analyzing cost-speed-latency tradeoffs.",
    metricMatched: "Explored latency-to-token overhead optimization matrices across different cloud model versions.",
    strategicValue: "Enables business modeling of running costs versus latency thresholds, ensuring optimal user experience at scale."
  },
  {
    name: "Prompt Design & Prototyping",
    level: "Specialized Literacy",
    category: "AI & Emerging Tech",
    details: "Hands-on experience prototype-building prompt instructions with Lovable, NotebookLM, and Figma. Skilled at utilizing natural language as a structural API input layer.",
    strategicValue: "Key to rapid experimentation to build hypotheses and proof-of-concepts, accelerating feedback loops before committing engineering hours."
  },
  {
    name: "Product Strategy & Roadmapping",
    level: "Expert",
    category: "Product Management",
    details: "Translating customer pain points on the frontline into clear epics, feature releases, priority metrics, and roadmap plans with well-reasoned trade-offs.",
    metricMatched: "Managed roadmaps for Enterprise CRM replacing old architectures at CNO.",
    strategicValue: "Underpins alignment between technology capability and concrete business KPIs like user activation and customer lifetime value."
  },
  {
    name: "Backlog & Prioritization",
    level: "Expert",
    category: "Product Management",
    details: "Organizing complex Jira and Azure DevOps backlogs around financial revenue or workflow impact, resisting pure 'feature loudness' in favor of raw product KPIs.",
    metricMatched: "Reprioritized the CNO Financial backlog directly around lead-to-conversion rates and revenue uplift.",
    strategicValue: "Maintains optimal engineering focus, ensuring the highest impact tasks are shipped first and backlog bloat is tightly managed."
  },
  {
    name: "Build-vs-Configure Assessment",
    level: "Expert",
    category: "Product Management",
    details: "Strategic and tactical evaluation of out-of-the-box platform workflows vs. building custom endpoints. Deeply focused on minimizing long-term technical debt.",
    metricMatched: "Made strategic architectural calls across automation rules and custom CRM data models.",
    strategicValue: "Balances initial speed-to-market against long-term maintenance costs and technical debt, maximizing lifecycle ROI."
  },
  {
    name: "Case & Microservice Orchestration",
    level: "Expert",
    category: "Platforms & Orchestration",
    details: "Modeling workflow state machines, integrating REST/gRPC endpoints, designing automated error handlers, and utilizing orchestration frameworks.",
    metricMatched: "Co-owned EWOC platform serving multiple units and automated back-office loops via Netflix Conductor.",
    strategicValue: "Essential for robust platform capabilities where multi-system handoffs, retry queues, and automated workflows require absolute reliability."
  },
  {
    name: "Enterprise CRM & Salesforce Ecosystem",
    level: "Proficient",
    category: "Platforms & Orchestration",
    details: "Strong working knowledge of Salesforce ecosystems, CRM administration paradigms, sales operability metrics, and lead-routing designs.",
    metricMatched: "Directed the replacement of Legacy CRM for thousands of active insurance agents.",
    strategicValue: "Fosters seamless integration across modern customer channels, marketing, and analytical core systems."
  },
  {
    name: "Workshopping & Wireframing",
    level: "Proficient",
    category: "Platforms & Orchestration",
    details: "Conducting high-alignment workshops in Miro, drafting low-fidelity UI/UX flows in Figma, and modeling interaction paradigms with cross-functional partners.",
    metricMatched: "Created UI models and mapped cycle times in Miro workshop sessions.",
    strategicValue: "Speeds up initial discovery and ensures cross-functional alignment across technical and non-technical stakeholders early in the lifecycle."
  }
];
