import { useState } from "react";
import {
  Briefcase,
  Sparkles,
  Cpu,
  Wrench,
  Layers,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  TrendingUp,
  Settings,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  Zap,
  Rocket,
  Code2,
  BookOpen,
  Info,
} from "lucide-react";
import { CASE_STUDIES, EXPERIENCE, PROTOTYPES, SKILL_ITEMS } from "./data";
import { CaseStudy, ExperienceItem, Prototype, SkillItem } from "./types";

type Tab = "case-studies" | "prototypes" | "experience" | "skills";

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>("case-studies");
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(CASE_STUDIES[0]);
  const [selectedPrototype, setSelectedPrototype] = useState<Prototype | null>(PROTOTYPES[0]);
  const [selectedSkillCategory, setSelectedSkillCategory] = useState<
    "all" | "Product Management" | "Platforms & Orchestration" | "AI & Emerging Tech"
  >("all");
  const [selectedSkill, setSelectedSkill] = useState<SkillItem | null>(SKILL_ITEMS[0]);

  const filteredSkills = SKILL_ITEMS.filter((s) => {
    if (selectedSkillCategory === "all") return true;
    return s.category === selectedSkillCategory;
  });

  const tabs: { id: Tab; label: string; icon: React.ReactNode }[] = [
    { id: "case-studies", label: "Case Studies", icon: <BookOpen className="h-4 w-4" /> },
    { id: "prototypes", label: "Prototypes", icon: <Rocket className="h-4 w-4" /> },
    { id: "experience", label: "Experience", icon: <Briefcase className="h-4 w-4" /> },
    { id: "skills", label: "Skills", icon: <Wrench className="h-4 w-4" /> },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased">
      {/* Top banner */}
      <div className="bg-slate-900 text-white border-b border-slate-800 py-3.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <span className="inline-flex h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
            <p className="text-[10px] font-bold tracking-widest text-slate-300 uppercase">
              Enterprise Platforms & AI Product Management
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400">
            <a href="tel:+18167249972" className="flex items-center gap-1.5 hover:text-white transition">
              <Phone className="h-3.5 w-3.5 text-blue-500" /> +1 816-724-9972
            </a>
            <a href="mailto:vaishnavichitta@gmail.com" className="flex items-center gap-1.5 hover:text-white transition">
              <Mail className="h-3.5 w-3.5 text-blue-500" /> vaishnavichitta@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/vaishnavichitta/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition"
            >
              <Linkedin className="h-3.5 w-3.5 text-blue-500" /> LinkedIn
            </a>
            <span className="flex items-center gap-1.5 text-slate-400">
              <MapPin className="h-3.5 w-3.5 text-blue-500" /> Seattle, WA
            </span>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white border-b border-slate-100 py-6 px-4 sm:px-6 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-950">Vaishnavi Chitta</h1>
            <p className="text-sm text-slate-500 font-semibold mt-1 flex items-center gap-2">
              Product Manager
              <span className="text-slate-300">|</span>
              <span className="text-blue-600 font-bold">Enterprise Platforms, CRM & AI</span>
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold transition flex items-center gap-1.5 shadow-2xs cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-blue-600 text-white shadow-xs"
                    : "bg-white hover:bg-slate-50 text-slate-600 border border-slate-200/80"
                }`}
              >
                {tab.icon} {tab.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-10 px-4 sm:px-6">
        {/* Hero / summary */}
        <section className="mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl border border-slate-100 p-6 shadow-sm lg:col-span-1 flex flex-col justify-between">
              <div>
                <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl mb-4 flex items-center justify-center text-3xl font-extrabold tracking-tight">
                  VC
                </div>
                <h2 className="text-2xl font-bold leading-tight mb-1 tracking-tight text-slate-900">
                  Vaishnavi Chitta
                </h2>
                <p className="text-blue-600 font-bold text-xs uppercase tracking-wider mb-4">
                  Enterprise Platforms & AI Product Manager
                </p>
                <p className="text-xs text-slate-500 leading-relaxed mb-6">
                  8+ years building enterprise CRM platforms, sales automation systems, and AI-powered workflows.
                  I combine rigorous product strategy with hands-on prototyping — shipping working demos to validate
                  ideas before committing engineering resources.
                </p>

                <div className="flex flex-col gap-2.5 mt-4 pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-3 text-xs font-medium text-slate-600 bg-slate-50 p-2.5 rounded-xl border border-slate-100/45">
                    <Briefcase className="h-4 w-4 text-blue-500" />
                    8+ Years Product Leadership
                  </div>
                  <div className="flex items-center gap-3 text-xs font-medium text-slate-600 bg-slate-50 p-2.5 rounded-xl border border-slate-100/45">
                    <Code2 className="h-4 w-4 text-blue-500" />
                    Builder PM — vibe codes prototypes to validate concepts
                  </div>
                  <div className="flex items-center gap-3 text-xs font-medium text-slate-600 bg-slate-50 p-2.5 rounded-xl border border-slate-100/45">
                    <MapPin className="h-4 w-4 text-blue-500" />
                    Seattle, WA — Open to Remote & Relocation
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center gap-3">
                <a
                  href="https://github.com/chittav"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 border border-slate-200/80 rounded-full text-xs font-bold text-slate-700 bg-white hover:bg-slate-50 transition shadow-2xs"
                >
                  <Github className="h-4 w-4" /> GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/vaishnavichitta/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 border border-slate-200/80 rounded-full text-xs font-bold text-slate-700 bg-white hover:bg-slate-50 transition shadow-2xs"
                >
                  <Linkedin className="h-4 w-4 text-blue-600" /> LinkedIn
                </a>
              </div>
            </div>

            <div className="bg-slate-900 text-slate-100 rounded-3xl p-6 shadow-xl lg:col-span-2 relative overflow-hidden flex flex-col justify-between border border-slate-800">
              <div className="absolute top-0 right-0 h-48 w-48 bg-radial from-blue-500/10 to-transparent pointer-events-none rounded-full blur-3xl" />

              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-1.5">
                    <Cpu className="h-5 w-5 text-blue-400" />
                    <span className="text-xs font-bold tracking-wider text-blue-400 uppercase">
                      Product Leadership Thesis
                    </span>
                  </div>
                  <span className="bg-blue-500/10 text-blue-300 border border-blue-500/20 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                    CRM + AI Builder
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white tracking-tight">
                  Platform-Native CRM & Pragmatic AI
                </h3>
                <p className="text-xs text-slate-300 mt-1 mb-5">
                  I've built CRM platforms from scratch and led platform migrations — understanding the same
                  primitives whether the stack is custom Java, PEGA Sales Automation, or Salesforce. I prototype
                  with AI to de-risk bets and align stakeholders before engineering commits.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                  <div className="bg-slate-850 border border-slate-800 rounded-2xl p-4">
                    <h4 className="text-xs font-extrabold text-blue-400 flex items-center gap-1.5 uppercase">
                      <Zap className="h-3.5 w-3.5" /> CRM & Sales Automation
                    </h4>
                    <p className="text-[11px] text-zinc-300 mt-2 leading-relaxed">
                      Built an internal CRM from scratch (EWOC) and now leading PEGA Sales Automation migration
                      at CNO — lead routing, work queues, role-based views, enterprise search, and reporting.
                    </p>
                  </div>

                  <div className="bg-slate-850 border border-slate-800 rounded-2xl p-4">
                    <h4 className="text-xs font-extrabold text-blue-400 flex items-center gap-1.5 uppercase">
                      <Rocket className="h-3.5 w-3.5" /> Builder PM
                    </h4>
                    <p className="text-[11px] text-zinc-300 mt-2 leading-relaxed">
                      Ship working prototypes — Job Application Co-Pilot, RAG Visualizer, internal RAG systems —
                      to validate hypotheses, educate stakeholders, and accelerate product decisions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-[11px] text-slate-400">
                <span>Grounding product decisions in measurable KPIs and hands-on validation.</span>
                <span className="font-semibold text-blue-400 flex items-center gap-1">
                  <CheckCircle className="h-3.5 w-3.5" /> Open to opportunities
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        {activeTab === "case-studies" && (
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">Featured Case Studies</h2>
              <p className="text-sm text-slate-500 mt-1">
                Deep dives into CRM modernization, platform builds, and AI integration at enterprise scale.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1 space-y-4">
                {CASE_STUDIES.map((cs) => (
                  <div
                    key={cs.id}
                    onClick={() => setSelectedCaseStudy(cs)}
                    className={`p-5 rounded-3xl border transition cursor-pointer text-left relative overflow-hidden shadow-sm ${
                      selectedCaseStudy?.id === cs.id
                        ? "border-blue-600 bg-white ring-2 ring-blue-500/10"
                        : "border-slate-150 bg-white hover:bg-slate-50 hover:border-slate-200"
                    }`}
                  >
                    <span className="absolute top-0 right-0 bg-blue-600 text-white text-[9px] font-bold uppercase tracking-wider px-3 py-1 rounded-bl-xl">
                      Case Study
                    </span>
                    <h3 className="font-bold text-sm text-slate-950 pr-16 line-clamp-2">{cs.title}</h3>
                    <p className="text-[10px] text-blue-600 font-semibold mt-0.5">
                      {cs.company} • {cs.period}
                    </p>
                    <p className="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed">{cs.summary}</p>
                    <div className="mt-3.5 pt-3.5 border-t border-slate-100 flex flex-wrap gap-1">
                      {cs.skillsApplied.slice(0, 3).map((s) => (
                        <span key={s} className="bg-slate-50 text-slate-600 text-[9px] font-bold px-2 py-0.5 rounded-sm">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="lg:col-span-2">
                {selectedCaseStudy ? (
                  <CaseStudyDetail study={selectedCaseStudy} />
                ) : (
                  <EmptyState message="Select a case study to view details." />
                )}
              </div>
            </div>
          </div>
        )}

        {/* Prototypes */}
        {activeTab === "prototypes" && (
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">Prototypes & Builder Work</h2>
              <p className="text-sm text-slate-500 mt-1">
                Working demos I built to validate product hypotheses, educate stakeholders, and ship faster.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1 space-y-4">
                {PROTOTYPES.map((proto) => (
                  <div
                    key={proto.id}
                    onClick={() => setSelectedPrototype(proto)}
                    className={`p-5 rounded-3xl border transition cursor-pointer text-left relative overflow-hidden shadow-sm ${
                      selectedPrototype?.id === proto.id
                        ? "border-blue-600 bg-white ring-2 ring-blue-500/10"
                        : "border-slate-150 bg-white hover:bg-slate-50 hover:border-slate-200"
                    }`}
                  >
                    <span className="absolute top-0 right-0 bg-violet-600 text-white text-[9px] font-bold uppercase tracking-wider px-3 py-1 rounded-bl-xl">
                      Live Demo
                    </span>
                    <h3 className="font-bold text-sm text-slate-950 pr-16">{proto.title}</h3>
                    <p className="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed">{proto.pitch}</p>
                    <div className="mt-3 flex flex-wrap gap-1">
                      {proto.tags.map((tag) => (
                        <span key={tag} className="bg-violet-50 text-violet-700 text-[9px] font-bold px-2 py-0.5 rounded-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="lg:col-span-2">
                {selectedPrototype ? (
                  <PrototypeDetail proto={selectedPrototype} />
                ) : (
                  <EmptyState message="Select a prototype to view details." />
                )}
              </div>
            </div>
          </div>
        )}

        {/* Experience */}
        {activeTab === "experience" && (
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">Professional Experience</h2>
              <p className="text-sm text-slate-500 mt-1">
                8+ years across enterprise platform product management, CRM builds, and workflow orchestration.
              </p>
            </div>

            <div className="space-y-4">
              {EXPERIENCE.map((exp) => (
                <ExperienceCard
                  key={exp.id}
                  exp={exp}
                  onViewCaseStudy={
                    exp.relatedCaseStudyId
                      ? () => {
                          const cs = CASE_STUDIES.find((c) => c.id === exp.relatedCaseStudyId);
                          if (cs) {
                            setSelectedCaseStudy(cs);
                            setActiveTab("case-studies");
                          }
                        }
                      : undefined
                  }
                />
              ))}
            </div>
          </div>
        )}

        {/* Skills */}
        {activeTab === "skills" && (
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">Skills & Competencies</h2>
              <p className="text-sm text-slate-500 mt-1">
                Grounded in enterprise environments plus hands-on AI prototyping and vibe coding.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              <div className="lg:col-span-1 space-y-4">
                <div className="space-y-2">
                  {[
                    { id: "all", name: "All Competencies" },
                    { id: "Product Management", name: "Product Management" },
                    { id: "Platforms & Orchestration", name: "Platforms & Orchestration" },
                    { id: "AI & Emerging Tech", name: "AI & Emerging Tech" },
                  ].map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => {
                        setSelectedSkillCategory(cat.id as typeof selectedSkillCategory);
                        const filtered = SKILL_ITEMS.filter((s) =>
                          cat.id === "all" ? true : s.category === cat.id
                        );
                        if (filtered.length > 0) setSelectedSkill(filtered[0]);
                      }}
                      className={`w-full text-left px-5 py-3 rounded-full border transition flex items-center justify-between font-bold text-xs shadow-2xs ${
                        selectedSkillCategory === cat.id
                          ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                          : "bg-white text-slate-600 border-slate-200/80 hover:bg-slate-50"
                      }`}
                    >
                      <span>{cat.name}</span>
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  ))}
                </div>

                <div className="bg-white border border-slate-100 p-5 rounded-3xl shadow-sm">
                  <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest block mb-3">
                    Education
                  </span>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 leading-tight">M.S. Information Technology</h4>
                      <p className="text-[10px] text-slate-500 mt-0.5">Univ. of the Cumberlands</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 leading-tight">
                        M.S. Electrical & Computer Eng.
                      </h4>
                      <p className="text-[10px] text-slate-500 mt-0.5">University of South Florida</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-3 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredSkills.map((skill) => (
                    <div
                      key={skill.name}
                      onClick={() => setSelectedSkill(skill)}
                      className={`p-5 rounded-3xl border transition cursor-pointer text-left relative flex flex-col justify-between shadow-xs ${
                        selectedSkill?.name === skill.name
                          ? "border-blue-600 bg-white ring-2 ring-blue-500/10"
                          : "border-slate-150 bg-white hover:bg-slate-50 hover:border-slate-200"
                      }`}
                    >
                      <div>
                        {skill.category === "AI & Emerging Tech" && (
                          <span className="absolute top-0 right-0 bg-blue-50 text-blue-600 text-[8px] font-bold px-2.5 py-1 rounded-bl-xl uppercase tracking-wider">
                            AI
                          </span>
                        )}
                        <h4 className="font-bold text-sm text-slate-950 pr-12">{skill.name}</h4>
                        <p className="text-[10px] text-blue-600 font-semibold mt-0.5">{skill.category}</p>
                        <p className="text-xs text-slate-500 mt-2.5 line-clamp-2 leading-relaxed">{skill.details}</p>
                      </div>
                      <div className="mt-4 pt-3 border-t border-slate-100">
                        <span
                          className={`px-2.5 py-0.5 rounded-full text-[9px] font-semibold ${
                            skill.level === "Expert"
                              ? "bg-slate-100 text-slate-800"
                              : "bg-blue-50 text-blue-600"
                          }`}
                        >
                          {skill.level}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {selectedSkill && (
                  <div className="bg-slate-900 text-slate-100 rounded-3xl p-6 shadow-xl border border-slate-800">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4 mb-4">
                      <div>
                        <span className="bg-blue-500/10 text-blue-400 border border-blue-500/10 text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                          {selectedSkill.category}
                        </span>
                        <h4 className="text-lg font-extrabold text-white mt-1.5">{selectedSkill.name}</h4>
                      </div>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-full text-xs font-bold">
                        <ShieldCheck className="h-4 w-4" /> {selectedSkill.level}
                      </div>
                    </div>

                    <div className="space-y-4 text-xs">
                      <div>
                        <strong className="text-slate-400 block uppercase font-bold text-[10px] tracking-widest mb-1.5">
                          Details
                        </strong>
                        <p className="text-slate-200 leading-relaxed text-sm bg-slate-850 p-4 rounded-xl border border-slate-800/60">
                          {selectedSkill.details}
                        </p>
                      </div>

                      {selectedSkill.metricMatched && (
                        <div>
                          <strong className="text-slate-400 block uppercase font-bold text-[10px] tracking-widest mb-1.5">
                            Applied in practice
                          </strong>
                          <p className="text-slate-300 leading-relaxed font-medium">{selectedSkill.metricMatched}</p>
                        </div>
                      )}

                      <div className="bg-slate-850 p-4 rounded-2xl border border-slate-800">
                        <strong className="text-blue-400 block uppercase font-extrabold text-[10px] tracking-widest mb-1 flex items-center gap-1">
                          <Sparkles className="h-3.5 w-3.5 text-blue-400" /> Strategic value
                        </strong>
                        <p className="text-zinc-300 text-xs leading-relaxed mt-1.5 font-medium">
                          {selectedSkill.strategicValue}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16 px-4 sm:px-6 mt-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-xs">
          <div>
            <h4 className="text-sm font-extrabold text-white tracking-widest uppercase mb-4">Vaishnavi Chitta</h4>
            <p className="text-slate-400 leading-relaxed max-w-sm">
              Product manager who builds enterprise CRM platforms and ships AI prototypes to validate ideas.
              Open to remote and relocation opportunities.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-extrabold text-white tracking-widest uppercase mb-4">Highlights</h4>
            <ul className="space-y-3 text-slate-400">
              <li>8+ years product management in enterprise SaaS and regulated industries</li>
              <li>Built CRM from scratch (EWOC) and leading PEGA Sales Automation migration (CNO)</li>
              <li>Builder PM — live prototypes for RAG education, job application intelligence, and internal AI systems</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-extrabold text-white tracking-widest uppercase mb-4">Contact</h4>
            <ul className="space-y-3 text-slate-400">
              <li>Email: vaishnavichitta@gmail.com</li>
              <li>Phone: +1 816-724-9972</li>
              <li>
                LinkedIn:{" "}
                <a
                  href="https://www.linkedin.com/in/vaishnavichitta/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 underline transition"
                >
                  linkedin.com/in/vaishnavichitta
                </a>
              </li>
              <li>Location: Seattle, WA</li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-slate-500">
          <p>© 2026 Vaishnavi Chitta. All rights reserved.</p>
          <div className="flex gap-4">
            <a
              href="https://github.com/chittav"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-300 transition"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function EmptyState({ message }: { message: string }) {
  return (
    <div className="bg-white rounded-3xl border border-slate-100 p-12 text-center text-slate-400">
      <Info className="h-8 w-8 mx-auto text-slate-300 mb-3" />
      {message}
    </div>
  );
}

function CaseStudyDetail({ study }: { study: CaseStudy }) {
  return (
    <div className="bg-white rounded-3xl border border-slate-100 p-6 sm:p-8 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-6 mb-6">
        <div>
          <span className="bg-blue-50 text-blue-600 text-[10px] font-bold tracking-wide uppercase px-3 py-1 rounded-full">
            {study.roleTitle}
          </span>
          <h3 className="text-2xl font-extrabold text-slate-950 mt-2 tracking-tight">{study.title}</h3>
          <p className="text-sm font-semibold text-slate-500 mt-1">
            {study.company} • {study.period}
          </p>
        </div>
        <div className="flex items-center gap-1.5 self-start sm:self-auto bg-blue-50 border border-blue-100 text-blue-600 px-4 py-1.5 rounded-full text-xs font-bold">
          <Layers className="h-3.5 w-3.5" />
          Case Study
        </div>
      </div>

      <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 mb-6">
        <h4 className="text-xs font-extrabold text-slate-500 uppercase tracking-widest mb-1.5">Summary</h4>
        <p className="text-slate-700 text-sm leading-relaxed">{study.summary}</p>
      </div>

      <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100 mb-6">
        <h4 className="text-xs font-extrabold text-amber-700 uppercase tracking-widest mb-1.5">Challenge</h4>
        <p className="text-slate-700 text-sm leading-relaxed">{study.challenge}</p>
      </div>

      <div className="mb-6">
        <h4 className="text-xs font-extrabold text-slate-500 uppercase tracking-widest mb-3">Impact & Outcomes</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {study.metrics.map((metric) => (
            <div
              key={metric}
              className="bg-white border border-slate-100 hover:border-blue-200/50 p-4 rounded-2xl flex items-start gap-2.5 shadow-2xs transition-colors"
            >
              <TrendingUp className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
              <p className="text-xs text-slate-600 leading-normal font-semibold">{metric}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h4 className="text-xs font-extrabold text-slate-500 uppercase tracking-widest mb-3">
          Key Actions & PM Approach
        </h4>
        <div className="space-y-3.5">
          {study.keyActions.map((action) => (
            <div key={action} className="flex items-start gap-3 text-sm">
              <CheckCircle className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
              <p className="text-slate-700 leading-relaxed">{action}</p>
            </div>
          ))}
        </div>
      </div>

      {(study.crmParallels || study.aiAspect || study.techStack) && (
        <div className="mt-8 pt-6 border-t border-slate-100 bg-slate-50/50 p-5 rounded-2xl border">
          <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-1">
            <Settings className="h-4 w-4 text-slate-600" /> Technical & Platform Context
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {study.crmParallels && (
              <div>
                <h5 className="text-xs font-extrabold text-blue-800 flex items-center gap-1.5 mb-1.5 uppercase">
                  <Layers className="h-3.5 w-3.5 text-blue-600" /> CRM & Platform Parallels
                </h5>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">{study.crmParallels}</p>
              </div>
            )}

            {study.aiAspect && (
              <div>
                <h5 className="text-xs font-extrabold text-blue-800 flex items-center gap-1.5 mb-1.5 uppercase">
                  <Sparkles className="h-3.5 w-3.5 text-blue-600" /> AI Systems
                </h5>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">{study.aiAspect}</p>
              </div>
            )}
          </div>

          {study.techStack && (
            <div className="mt-4 pt-4 border-t border-slate-200">
              <h5 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Tech Stack</h5>
              <div className="flex flex-wrap gap-2">
                {study.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="bg-white text-slate-600 text-[10px] font-bold px-3 py-1 rounded-full border border-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      <div className="mt-8 pt-4 border-t border-slate-100 flex flex-wrap items-center gap-2">
        <span className="text-[10px] text-slate-500 font-bold uppercase shrink-0 mr-1">Skills:</span>
        {study.skillsApplied.map((skill) => (
          <span
            key={skill}
            className="bg-slate-50 text-slate-600 text-[10px] font-bold px-3 py-1 rounded-full border border-slate-200"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

function PrototypeDetail({ proto }: { proto: Prototype }) {
  return (
    <div className="bg-white rounded-3xl border border-slate-100 p-6 sm:p-8 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-6 mb-6">
        <div>
          <span className="bg-violet-50 text-violet-600 text-[10px] font-bold tracking-wide uppercase px-3 py-1 rounded-full">
            Vibe-Coded Prototype
          </span>
          <h3 className="text-2xl font-extrabold text-slate-950 mt-2 tracking-tight">{proto.title}</h3>
          <p className="text-sm text-slate-600 mt-2 leading-relaxed">{proto.pitch}</p>
        </div>
        <div className="flex flex-col gap-2 self-start sm:self-auto">
          <a
            href={proto.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-violet-600 text-white rounded-full text-xs font-bold hover:bg-violet-700 transition"
          >
            <ExternalLink className="h-3.5 w-3.5" /> Live Demo
          </a>
          <a
            href={proto.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 border border-slate-200 text-slate-700 rounded-full text-xs font-bold hover:bg-slate-50 transition"
          >
            <Github className="h-3.5 w-3.5" /> Source Code
          </a>
        </div>
      </div>

      <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100 mb-6">
        <h4 className="text-xs font-extrabold text-amber-700 uppercase tracking-widest mb-1.5">Problem Explored</h4>
        <p className="text-slate-700 text-sm leading-relaxed">{proto.problem}</p>
      </div>

      <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 mb-6">
        <h4 className="text-xs font-extrabold text-slate-500 uppercase tracking-widest mb-1.5">What I Built</h4>
        <p className="text-slate-700 text-sm leading-relaxed">{proto.whatBuilt}</p>
      </div>

      <div className="mb-6">
        <h4 className="text-xs font-extrabold text-slate-500 uppercase tracking-widest mb-3">Key Learnings</h4>
        <div className="space-y-3">
          {proto.learnings.map((learning) => (
            <div key={learning} className="flex items-start gap-3 text-sm">
              <CheckCircle className="h-4 w-4 text-violet-600 shrink-0 mt-0.5" />
              <p className="text-slate-700 leading-relaxed">{learning}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-slate-100">
        <span className="text-[10px] text-slate-500 font-bold uppercase mr-1">Built with:</span>
        {proto.tools.map((tool) => (
          <span
            key={tool}
            className="bg-violet-50 text-violet-700 text-[10px] font-bold px-3 py-1 rounded-full border border-violet-100"
          >
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
}

function ExperienceCard({
  exp,
  onViewCaseStudy,
}: {
  exp: ExperienceItem;
  onViewCaseStudy?: () => void;
}) {
  const isFeatured = exp.emphasis === "featured";

  return (
    <div
      className={`bg-white rounded-3xl border p-6 shadow-sm ${
        isFeatured ? "border-blue-200 ring-1 ring-blue-500/10" : "border-slate-100"
      }`}
    >
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider">{exp.roleTitle}</span>
            {isFeatured && (
              <span className="bg-blue-50 text-blue-600 text-[9px] font-bold px-2 py-0.5 rounded-full uppercase">
                Featured
              </span>
            )}
          </div>
          <h3 className="text-lg font-extrabold text-slate-950">{exp.title}</h3>
          <p className="text-sm text-slate-500 font-semibold mt-0.5">
            {exp.company} • {exp.period}
          </p>
          <p className="text-sm text-slate-600 mt-3 leading-relaxed">{exp.summary}</p>

          <ul className="mt-4 space-y-2">
            {exp.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2 text-xs text-slate-600">
                <CheckCircle className="h-3.5 w-3.5 text-blue-500 shrink-0 mt-0.5" />
                {h}
              </li>
            ))}
          </ul>
        </div>

        {onViewCaseStudy && (
          <button
            onClick={onViewCaseStudy}
            className="self-start shrink-0 inline-flex items-center gap-1 px-4 py-2 text-xs font-bold text-blue-600 border border-blue-200 rounded-full hover:bg-blue-50 transition cursor-pointer"
          >
            View Case Study <ChevronRight className="h-3.5 w-3.5" />
          </button>
        )}
      </div>
    </div>
  );
}
