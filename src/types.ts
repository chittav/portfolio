export interface Message {
  id: string;
  role: "user" | "model";
  content: string;
  timestamp: Date;
}

export interface Project {
  id: string;
  title: string;
  company: string;
  period: string;
  roleTitle: string;
  summary: string;
  metrics: string[];
  keyActions: string[];
  skillsApplied: string[];
  aiAspect?: string;
  buildVsConfigure?: string;
  isAI?: boolean;
}

export interface SkillItem {
  name: string;
  level: "Expert" | "Proficient" | "Working Knowledge" | "Specialized Literacy";
  category: "Product Management" | "Platforms & Orchestration" | "AI & Emerging Tech";
  details: string;
  metricMatched?: string;
  strategicValue: string;
}

export interface SandboxStep {
  id: string;
  type: "Trigger" | "Context Retrieval (RAG)" | "AI Core Inference" | "Safety Guardrail" | "Action Output";
  name: string;
  config: string;
}
