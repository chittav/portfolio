import { CaseStudy, Prototype } from "./types";

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "cno-pega-sales-automation",
    title: "PEGA Sales Automation & Process AI",
    company: "CNO Financial Group (Colonial Penn)",
    period: "Apr 2025 – Present",
    roleTitle: "Sr. Consultant – Product Management",
    summary:
      "Driving requirements and roadmap for replacing a legacy sales platform (C3) with Pega Sales Automation and Process AI — owning release scope, feature trade-offs, and build-vs-customize decisions.",
    challenge:
      "Thousands of life insurance agents relied on a legacy sales platform (C3) with fragmented workflows. The business needed a Pega-native sales automation system that could handle lead routing, prospect management, and servicing — without accumulating new custom-code debt.",
    metrics: [
      "Projected 15–20% improvement in agent lead-to-conversion rates via AI-assisted lead prioritization (Pega CDH), once live.",
      "End-to-end screen-to-screen coverage across sales rep, sales manager, and sales admin roles.",
      "Process AI routing designed to reduce stale lead aging by directing leads to the right work queues automatically.",
    ],
    keyActions: [
      "Conduct current-state analysis of the legacy sales platform (C3) — mapping screen flows and identifying sales rep pain points and workflow lags — to inform gap analysis against Pega's out-of-box capability and shape the roadmap each Program Increment.",
      "Own release scope, roadmap sequencing, and feature trade-off decisions for Pega Sales Automation.",
      "Work directly with sales reps to gather pain points and feature requests, evaluating each against technical feasibility and cost to inform build-vs-customize decisions — e.g., choosing a two-tier customer search (party results table drilling into policies) over Pega's default, to match reps' natural search workflow and reduce confusion scanning long result lists.",
      "Define requirements for AI-driven personalization (Pega Customer Decision Hub), enabling next-best-action recommendations and intelligent lead prioritization.",
      "Built a RAG Visualizer prototype (personal project) to help non-technical stakeholders understand how RAG systems work — chunking, embedding, retrieval, and grounding.",
    ],
    skillsApplied: [
      "Pega Sales Automation",
      "Process AI & Lead Routing",
      "CRM Modernization",
      "Build-vs-Customize Trade-offs",
      "RAG Prototyping",
      "Cross-functional Stakeholder Alignment",
    ],
    crmParallels:
      "Pega Sales Automation maps closely to Salesforce Sales Cloud and Agentforce patterns: role-based record views, lead-to-opportunity pipelines, work queue routing, and platform-native automation vs. custom code. Process AI lead routing parallels Einstein Lead Scoring and intelligent assignment rules.",
    aiAspect:
      "Process AI for intelligent work-queue routing; Pega CDH for next-best-action personalization; RAG Visualizer built as a personal prototype to accelerate stakeholder understanding of retrieval architecture.",
    techStack: ["Pega Sales Automation", "Process AI", "Pega CDH"],
  },
  {
    id: "florida-blue-ewoc",
    title: "EWOC — Enterprise Work Center (Case Management Platform Built from Scratch)",
    company: "Florida Blue (BCBS Florida)",
    period: "Feb 2023 – Apr 2025",
    roleTitle: "Product Manager - Enterprise Platforms",
    summary:
      "Part of the founding team that built EWOC — an enterprise-wide case and work management platform now processing 350K–600K+ cases/day — from the ground up. Owned the Work Allocation Platform, search and reporting functionality, and contributed to platform roadmap through 3 years in production.",
    challenge:
      "Multiple regulated health insurance business units operated on fragmented, team-specific queues with manual cross-team handoffs. There was no unified platform to allocate work, manage cases end-to-end, or measure throughput — delaying claims processing and creating visibility gaps for leadership.",
    metrics: [
      "Reduced open production-ticket volume from 40–50/month to 8–12/month, and cut average resolution time from 10+ business days to 3–4 business days within 3 months, as primary POC for EWOC production issues leading a team of 4.",
      "Co-built Kibana dashboards giving operations visibility into queue health, SLA compliance, and processing trends.",
      "Deprioritized additional advanced-search parameters in favor of a case-relation feature — letting service advocates link and navigate between related cases without re-searching — after determining it would drive greater CSAT and time savings.",
    ],
    keyActions: [
      "Part of the founding team that built EWOC from the ground up, owning it end-to-end from requirements through 3 years in production.",
      "Led build-vs-buy and competitive evaluation (Appian, Pega, ServiceNow) for EWOC's foundational platform decision, informing the choice to build in-house.",
      "Owned the Work Allocation Platform (EWOC's automated work-routing engine) end-to-end — requirements, UX decisions, quarterly feature planning, and architecture discussions with engineering.",
      "Owned advanced search, reporting, and Kibana dashboard functionality, including the case-relation prioritization call above.",
      "Served as primary POC for EWOC production issues, leading a team of 4 through triage, escalation, and status reporting to leadership.",
    ],
    skillsApplied: [
      "0→1 Platform Ownership",
      "Build-vs-Buy Evaluation",
      "Case & Work Orchestration",
      "KPI Dashboarding",
      "Prioritization Trade-offs",
      "Regulated Industry Compliance",
    ],
    crmParallels:
      "EWOC was effectively a custom case-management platform: record management, work queues, role-based views, automation rules, and reporting — the same primitives as Salesforce Service Cloud or a Pega case management layer. Building from scratch required the same product decisions around object models, routing logic, and platform extensibility that enterprise CRM PMs navigate daily.",
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
      "While exploring RAG concepts for potential agent knowledge-search use cases at CNO, business partners and non-technical teammates struggled to understand how retrieval-augmented generation actually works. Abstract architecture diagrams weren't enough to build shared mental models.",
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
