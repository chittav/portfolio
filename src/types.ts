export interface CaseStudy {
  id: string;
  title: string;
  company: string;
  period: string;
  roleTitle: string;
  summary: string;
  challenge: string;
  metrics: string[];
  keyActions: string[];
  skillsApplied: string[];
  crmParallels?: string;
  aiAspect?: string;
  techStack?: string[];
}

export interface Prototype {
  id: string;
  title: string;
  pitch: string;
  problem: string;
  whatBuilt: string;
  tools: string[];
  demoUrl: string;
  githubUrl: string;
  learnings: string[];
  tags: string[];
}

export interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  period: string;
  roleTitle: string;
  summary: string;
  highlights: string[];
  emphasis?: "standard" | "featured";
  relatedCaseStudyId?: string;
}

export interface SkillItem {
  name: string;
  level: "Expert" | "Proficient" | "Working Knowledge" | "Specialized Literacy";
  category: "Product Management" | "Platforms & Orchestration" | "AI & Emerging Tech";
  details: string;
  metricMatched?: string;
  strategicValue: string;
}
