import { useState, useEffect, useRef } from "react";
import { 
  Briefcase, 
  Award, 
  Sparkles, 
  Cpu, 
  Wrench, 
  Layers, 
  Bot, 
  Send, 
  ArrowRight, 
  FileText, 
  CheckCircle, 
  TrendingUp, 
  Plus, 
  Trash2, 
  Settings, 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  RotateCcw, 
  Info,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  Zap,
  BookOpen
} from "lucide-react";
import { PROJECTS_DATA, SKILL_ITEMS } from "./data";
import { Message, Project, SkillItem, SandboxStep } from "./types";

export default function App() {
  // Navigation tabs
  const [activeTab, setActiveTab] = useState<"projects" | "skills">("projects");
  
  // Custom project categories
  const [projectFilter, setProjectFilter] = useState<"all" | "ai" | "platforms">("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(PROJECTS_DATA[0]);

  // Skill category filter
  const [selectedSkillCategory, setSelectedSkillCategory] = useState<"all" | "Product Management" | "Platforms & Orchestration" | "AI & Emerging Tech">("all");
  const [selectedSkill, setSelectedSkill] = useState<SkillItem | null>(SKILL_ITEMS[0]);

  // Filter skills based on chosen category
  const filteredSkills = SKILL_ITEMS.filter(s => {
    if (selectedSkillCategory === "all") return true;
    return s.category === selectedSkillCategory;
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased" id="main_portfolio_wrapper">
      
      {/* Upper Navigation / Global Info Banner */}
      <div className="bg-slate-900 text-white border-b border-slate-800 py-3.5 px-4 sm:px-6" id="top_global_banner">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <span className="inline-flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
            <p className="text-[10px] font-bold tracking-widest text-slate-350 uppercase">
              Enterprise Platforms & Agentic AI Product Management Portfolio
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400">
            <a href="tel:+18167249972" className="flex items-center gap-1.5 hover:text-white transition">
              <Phone className="h-3.5 w-3.5 text-blue-500" /> +1 816-724-9972
            </a>
            <a href="mailto:vaishnavichitta@gmail.com" className="flex items-center gap-1.5 hover:text-white transition">
              <Mail className="h-3.5 w-3.5 text-blue-500" /> vaishnavichitta@gmail.com
            </a>
            <span className="flex items-center gap-1.5 text-slate-400">
              <MapPin className="h-3.5 w-3.5 text-blue-500" /> Seattle, WA
            </span>
          </div>
        </div>
      </div>

      {/* Main Executive Header */}
      <header className="bg-white border-b border-slate-100 py-6 px-4 sm:px-6 sticky top-0 z-40 shadow-sm" id="app_main_header">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-950 font-display">
              Vaishnavi Chitta
            </h1>
            <p className="text-sm text-slate-500 font-semibold mt-1 flex items-center gap-2">
              Product Manager <span className="text-slate-300">|</span> <span className="text-blue-600 font-bold">Enterprise Platforms & Products</span>
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2" id="nav_tabs_group">
            <button
              id="tab_btn_projects"
              onClick={() => { setActiveTab("projects"); }}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition flex items-center gap-1.5 shadow-2xs cursor-pointer ${
                activeTab === "projects" 
                  ? "bg-blue-600 text-white shadow-xs" 
                  : "bg-white hover:bg-slate-50 text-slate-600 border border-slate-200/80"
              }`}
            >
              <Briefcase className="h-4 w-4" /> Professional Experience
            </button>
            <button
              id="tab_btn_skills"
              onClick={() => { setActiveTab("skills"); }}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition flex items-center gap-1.5 shadow-2xs cursor-pointer ${
                activeTab === "skills" 
                  ? "bg-blue-600 text-white shadow-xs" 
                  : "bg-white hover:bg-slate-50 text-slate-600 border border-slate-200/80"
              }`}
            >
              <Wrench className="h-4 w-4" /> PM Skill Engine
            </button>
          </div>
        </div>
      </header>

      {/* Main Core Layout & Content */}
      <main className="max-w-7xl mx-auto py-10 px-4 sm:px-6" id="portfolio_content_grid">
        
        {/* Profile Summary & Product Strategy Board */}
        <section className="mb-10" id="summary_and_salesforce_match">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Professional Profile Bio Card */}
            <div className="bg-white rounded-3xl border border-slate-100 p-6 shadow-sm lg:col-span-1 flex flex-col justify-between" id="candidate_summary_card">
              <div>
                <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl mb-4 flex items-center justify-center text-3xl font-extrabold tracking-tight">VC</div>
                <h1 className="text-2xl font-bold leading-tight mb-1 tracking-tight text-slate-900 font-display">Vaishnavi Chitta</h1>
                <p className="text-blue-600 font-bold text-xs uppercase tracking-wider mb-4">Enterprise Platforms & AI Product Manager</p>
                <p className="text-xs text-slate-500 leading-relaxed mb-6">
                  Over 8 years of experience leading cross-functional teams to build high-scale enterprise platforms, CRM infrastructures, task orchestration state machines, and pragmatic GenAI systems.
                </p>
                
                <div className="flex flex-col gap-2.5 mt-4 pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-3 text-xs font-medium text-slate-600 bg-slate-50 p-2.5 rounded-xl border border-slate-100/45">
                    <Briefcase className="h-4 w-4 text-blue-500" />
                    8+ Years Product Leadership Experience
                  </div>
                  <div className="flex items-center gap-3 text-xs font-medium text-slate-600 bg-slate-50 p-2.5 rounded-xl border border-slate-100/45">
                    <MapPin className="h-4 w-4 text-blue-500" />
                    Seattle, WA / Open to Remote & Relocation
                  </div>
                  <div className="flex items-center gap-3 text-xs font-medium text-slate-600 bg-slate-50 p-2.5 rounded-xl border border-slate-100/45">
                    <Mail className="h-4 w-4 text-blue-500" />
                    vaishnavichitta@gmail.com
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center gap-3">
                <a 
                  href="https://github.com/chittav" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 border border-slate-200/80 rounded-full text-xs font-bold text-slate-700 bg-white hover:bg-slate-50 hover:text-slate-900 transition shadow-2xs cursor-pointer"
                  id="github_link_button"
                >
                  <Github className="h-4 w-4" /> GitHub Profile
                </a>
                <a 
                  href="https://www.linkedin.com/in/vaishnavichitta/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 border border-slate-200/80 rounded-full text-xs font-bold text-slate-700 bg-white hover:bg-slate-50 hover:text-slate-900 transition shadow-2xs cursor-pointer"
                  id="linkedin_link_button"
                >
                  <Linkedin className="h-4 w-4 text-blue-600" /> LinkedIn
                </a>
              </div>
            </div>

            {/* Product Strategy & Strategic Value Board */}
            <div className="bg-slate-900 text-slate-100 rounded-3xl p-6 shadow-xl lg:col-span-2 relative overflow-hidden flex flex-col justify-between border border-slate-850" id="salesforce_jd_matcher_panel">
              {/* Abstract decorative accent representing clean engineering flow */}
              <div className="absolute top-0 right-0 h-48 w-48 bg-radial from-blue-500/10 to-transparent pointer-events-none rounded-full blur-3xl"></div>
              
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-1.5">
                    <Cpu className="h-5 w-5 text-blue-400" />
                    <span className="text-xs font-bold tracking-wider text-blue-400 uppercase">Product Vision & Core Leadership Thesis</span>
                  </div>
                  <span className="bg-blue-500/10 text-blue-300 border border-blue-500/20 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                    Enterprise scale focus
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white tracking-tight">
                  Pragmatic Platform Management Strategy
                </h3>
                <p className="text-xs text-slate-300 mt-1 mb-5">
                  Overcoming complex enterprise software challenges through rigorous user discovery, logical state orchestrations, and robust system governance.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                  <div className="bg-slate-850 border border-slate-800 rounded-2xl p-4">
                    <h4 className="text-xs font-extrabold text-blue-400 flex items-center gap-1.5 uppercase">
                      <Zap className="h-3.5 w-3.5 text-blue-400" /> Platform-Native Philosophy
                    </h4>
                    <p className="text-[11px] text-zinc-300 mt-2 leading-relaxed">
                      Deep believer in the "build-vs-configure" evaluation. Restricting high-maintenance custom code modifications and prioritizing robust out-of-the-box system workflows reduces long-term tech debt and increases deployment velocity.
                    </p>
                  </div>

                  <div className="bg-slate-850 border border-slate-800 rounded-2xl p-4">
                    <h4 className="text-xs font-extrabold text-blue-400 flex items-center gap-1.5 uppercase">
                      <TrendingUp className="h-3.5 w-3.5 text-blue-450" /> Quantifiable Impact (KPIs)
                    </h4>
                    <p className="text-[11px] text-zinc-300 mt-2 leading-relaxed">
                      Establishing core North Star metrics like Agent Lead-to-Conversion rates and Back-office Ticketing Cycle Times to keep cross-functional developers, compliance, and product designers aligned directly to tangible business objectives.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-[11px] text-slate-400">
                <span>
                  Translating high-friction client scenarios into simple, unified flow sequences.
                </span>
                <span className="font-semibold text-blue-400 flex items-center gap-1">
                  <CheckCircle className="h-3.5 w-3.5" /> Ready for High-Scale Deployment
                </span>
              </div>
            </div>

          </div>
        </section>

        {/* ======================================= */}
        {/* TAB 1: PROFESSIONAL EXPERIENCE & PROJECTS */}
        {/* ======================================= */}
        {activeTab === "projects" && (
          <div id="experience_projects_tab_view">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
              <div>
                <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                  Portfolio Projects & Case Studies
                </h2>
                <p className="text-sm text-slate-500 mt-1">
                  Dive into the strategic decisions, KPI frameworks, and metrics from her career history.
                </p>
              </div>
              
              <div className="bg-white border border-slate-100 rounded-full p-1.5 flex gap-1.5 self-stretch md:self-auto shadow-sm" id="filter_controls_wrapper">
                <button
                  id="filter_btn_all"
                  onClick={() => setProjectFilter("all")}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition ${
                    projectFilter === "all" ? "bg-blue-600 text-white shadow-xs" : "text-slate-650 hover:bg-slate-50"
                  }`}
                >
                  All Projects
                </button>
                <button
                  id="filter_btn_ai"
                  onClick={() => setProjectFilter("ai")}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition ${
                    projectFilter === "ai" ? "bg-blue-600 text-white shadow-xs" : "text-slate-650 hover:bg-slate-50"
                  }`}
                >
                  AI & Emerging Tech
                </button>
                <button
                  id="filter_btn_platforms"
                  onClick={() => setProjectFilter("platforms")}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition ${
                    projectFilter === "platforms" ? "bg-blue-600 text-white shadow-xs" : "text-slate-650 hover:bg-slate-50"
                  }`}
                >
                  Case Orchestration
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Left Column: Project Selector Cards */}
              <div className="lg:col-span-1 space-y-4" id="project_list_selector">
                {PROJECTS_DATA.filter(project => {
                  if (projectFilter === "all") return true;
                  if (projectFilter === "ai") return project.isAI === true;
                  if (projectFilter === "platforms") return project.isAI === false;
                  return true;
                }).map(project => (
                  <div
                    key={project.id}
                    id={`project_card_select_${project.id}`}
                    onClick={() => setSelectedProject(project)}
                    className={`p-5 rounded-3xl border transition cursor-pointer text-left relative overflow-hidden shadow-sm ${
                      selectedProject?.id === project.id 
                        ? "border-blue-600 bg-white ring-2 ring-blue-500/10" 
                        : "border-slate-150 bg-white hover:bg-slate-50 hover:border-slate-200"
                    }`}
                  >
                    {project.isAI && (
                      <span className="absolute top-0 right-0 bg-blue-600 text-white text-[9px] font-bold uppercase tracking-wider px-3 py-1 rounded-bl-xl">
                        AI Featured
                      </span>
                    )}
                    <h3 className="font-bold text-sm text-slate-950 pr-16 line-clamp-1">{project.title}</h3>
                    <p className="text-[10px] text-blue-600 font-semibold mt-0.5">{project.company} • {project.period}</p>
                    <p className="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed">{project.summary}</p>
                    
                    <div className="mt-3.5 pt-3.5 border-t border-slate-100 flex flex-wrap gap-1">
                      {project.skillsApplied.slice(0, 3).map((s, idx) => (
                        <span key={idx} className="bg-slate-50 text-slate-600 text-[9px] font-bold px-2 py-0.5 rounded-sm">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Column: High-Fidelity Active Case Study Spec Panel */}
              <div className="lg:col-span-2" id="project_active_detail_panel">
                {selectedProject ? (
                  <div className="bg-white rounded-3xl border border-slate-100 p-6 sm:p-8 shadow-sm" id="active_project_view_container">
                    
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-6 mb-6">
                      <div>
                        <span className="bg-blue-50 text-blue-600 text-[10px] font-bold tracking-wide uppercase px-3 py-1 rounded-full">
                          {selectedProject.roleTitle}
                        </span>
                        <h3 className="text-2xl font-extrabold text-slate-950 mt-2 tracking-tight">
                          {selectedProject.title}
                        </h3>
                        <p className="text-sm font-semibold text-slate-500 mt-1">
                          {selectedProject.company} &nbsp;•&nbsp; {selectedProject.period}
                        </p>
                      </div>
                      
                      {selectedProject.isAI ? (
                        <div className="flex items-center gap-1.5 self-start sm:self-auto bg-blue-50 border border-blue-100 text-blue-600 px-4 py-1.5 rounded-full text-xs font-bold shadow-2xs">
                          <Sparkles className="h-3.5 w-3.5 text-blue-600 animate-pulse" />
                          AI Match
                        </div>
                      ) : (
                        <div className="flex items-center gap-1.5 self-start sm:self-auto bg-slate-50 border border-slate-150 text-slate-700 px-4 py-1.5 rounded-full text-xs font-bold">
                          <Layers className="h-3.5 w-3.5 text-slate-500" />
                          Orchestration Match
                        </div>
                      )}
                    </div>

                    {/* Summary box */}
                    <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 mb-6">
                      <h4 className="text-xs font-extrabold text-slate-500 uppercase tracking-widest mb-1.5">Strategic Imperative & Context</h4>
                      <p className="text-slate-700 text-sm leading-relaxed font-normal">{selectedProject.summary}</p>
                    </div>

                    {/* Core metrics badges */}
                    <div className="mb-6">
                      <h4 className="text-xs font-extrabold text-slate-500 uppercase tracking-widest mb-3">Measurable High-Impact Business Outcomes</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4" id="project_metrics_grid">
                        {selectedProject.metrics.map((metric, idx) => (
                           <div key={idx} className="bg-white border border-slate-100 hover:border-blue-200/50 p-4 rounded-2xl flex items-start gap-2.5 shadow-2xs transition-colors">
                            <TrendingUp className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                            <p className="text-xs text-slate-600 leading-normal font-semibold">{metric}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Actions and product engineering decisions */}
                    <div className="mb-6">
                      <h4 className="text-xs font-extrabold text-slate-500 uppercase tracking-widest mb-3">Key Strategic Actions & PM Tactics</h4>
                      <div className="space-y-3.5" id="project_actions_list">
                        {selectedProject.keyActions.map((action, idx) => (
                          <div key={idx} className="flex items-start gap-3 text-sm">
                            <CheckCircle className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                            <p className="text-slate-700 leading-relaxed font-normal">{action}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technical PM Deep-dive (AI & Build v Configure specifics) */}
                    {(selectedProject.aiAspect || selectedProject.buildVsConfigure) && (
                      <div className="mt-8 pt-6 border-t border-slate-150 bg-slate-50/50 p-5 rounded-2xl border border-slate-100" id="project_tech_pm_deep_dive">
                        <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-1">
                          <Settings className="h-4 w-4 text-slate-600" /> Technical Product Management Deep-Dive
                        </h4>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {selectedProject.aiAspect && (
                            <div>
                              <h5 className="text-xs font-extrabold text-blue-800 flex items-center gap-1.5 mb-1.5 uppercase">
                                <Sparkles className="h-3.5 w-3.5 text-blue-600" /> AI Systems Application
                              </h5>
                              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                                {selectedProject.aiAspect}
                              </p>
                            </div>
                          )}

                          {selectedProject.buildVsConfigure && (
                            <div>
                              <h5 className="text-xs font-extrabold text-blue-800 flex items-center gap-1.5 mb-1.5 uppercase">
                                <Wrench className="h-3.5 w-3.5 text-blue-600" /> Build-vs-Configure Strategy
                              </h5>
                              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                                {selectedProject.buildVsConfigure}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Skills applied footer row */}
                    <div className="mt-8 pt-4 border-t border-slate-100 flex flex-wrap items-center gap-2">
                      <span className="text-[10px] text-slate-450 font-bold uppercase shrink-0 mr-1">Skills Proven:</span>
                      {selectedProject.skillsApplied.map((skill, idx) => (
                        <span key={idx} className="bg-slate-50 text-slate-600 text-[10px] font-bold px-3 py-1 rounded-full border border-slate-150">
                          {skill}
                        </span>
                      ))}
                    </div>

                  </div>
                ) : (
                  <div className="bg-white rounded-3xl border border-slate-100 p-12 text-center text-slate-400">
                    <Info className="h-8 w-8 mx-auto text-slate-300 mb-3" />
                    Select a project to view details.
                  </div>
                )}
              </div>

            </div>
          </div>
        )}

        {/* ======================================= */}
        {/* TAB 2: TECHNICAL SKILLS & CAPABILITIES  */}
        {/* ======================================= */}
        {activeTab === "skills" && (
          <div id="technical_skills_tab_view">
            <div className="mb-6">
              <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                Technical PM Skills Matrix
              </h2>
              <p className="text-sm text-slate-500 mt-1">
                Grounded in 8+ years of enterprise environments plus comprehensive generative AI engineering certifications.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              
              {/* Left selectors: Categories list */}
              <div className="lg:col-span-1 space-y-4" id="skill_category_selectors">
                <div className="space-y-2">
                  {[
                    { id: "all", name: "All PM Competencies" },
                    { id: "Product Management", name: "Product Management" },
                    { id: "Platforms & Orchestration", name: "Platforms & Orchestration" },
                    { id: "AI & Emerging Tech", name: "AI & Emerging Tech" }
                  ].map(cat => (
                    <button
                      key={cat.id}
                      id={`skill_cat_select_${cat.id}`}
                      onClick={() => {
                        setSelectedSkillCategory(cat.id as any);
                        // Auto select the first skill in that filtered segment if possible
                        const filtered = SKILL_ITEMS.filter(s => cat.id === "all" ? true : s.category === cat.id);
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

                {/* Technical Domain Competence Panel */}
                <div className="bg-slate-900 rounded-3xl p-6 shadow-lg text-white border border-slate-850">
                  <h3 className="text-xs uppercase tracking-widest font-bold text-slate-400 mb-4">Core Focus & Competencies</h3>
                  <div className="space-y-4">
                    <div className="flex flex-col gap-1 bg-slate-850 p-3 rounded-2xl border border-slate-800">
                      <div className="flex justify-between items-center text-[11px] px-1">
                        <span className="font-semibold text-slate-200">Product Strategy</span>
                        <span className="bg-blue-500/10 text-blue-300 border border-blue-500/20 px-2 py-0.5 rounded-full text-[9px] font-bold">Strategic Domain</span>
                      </div>
                      <p className="text-[10px] text-slate-400 px-1 mt-0.5">Roadmapping, trade-off scoring, prioritization frameworks, agile delivery.</p>
                    </div>

                    <div className="flex flex-col gap-1 bg-slate-850 p-3 rounded-2xl border border-slate-800">
                      <div className="flex justify-between items-center text-[11px] px-1">
                        <span className="font-semibold text-slate-200">Orchestration & Workflows</span>
                        <span className="bg-blue-500/10 text-blue-300 border border-blue-500/20 px-2 py-0.5 rounded-full text-[9px] font-bold">Architecture Focus</span>
                      </div>
                      <p className="text-[10px] text-slate-400 px-1 mt-0.5">State models, retry queues, APIs & JSON payloads, Netflix Conductor.</p>
                    </div>

                    <div className="flex flex-col gap-1 bg-slate-850 p-3 rounded-2xl border border-slate-800">
                      <div className="flex justify-between items-center text-[11px] px-1">
                        <span className="font-semibold text-slate-200">Analytics & SQL</span>
                        <span className="bg-blue-500/10 text-blue-300 border border-blue-500/20 px-2 py-0.5 rounded-full text-[9px] font-bold">Data Leadership</span>
                      </div>
                      <p className="text-[10px] text-slate-400 px-1 mt-0.5">Complex queries, diagnostic telemetry, database schema design, and KPI tracking.</p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2 mt-4 pt-2 border-t border-slate-800/60">
                      <div className="bg-slate-800/80 p-2 rounded-xl text-[10px] font-semibold text-center text-slate-300">A/B Testing</div>
                      <div className="bg-slate-800/80 p-2 rounded-xl text-[10px] font-semibold text-center text-slate-300">Agile / Scrum</div>
                      <div className="bg-slate-800/80 p-2 rounded-xl text-[10px] font-semibold text-center text-slate-300">UI / UX Design</div>
                      <div className="bg-slate-800/80 p-2 rounded-xl text-[10px] font-semibold text-center text-slate-300">API Strategy</div>
                    </div>
                  </div>
                </div>

                {/* Additional Credentials Card */}
                <div className="bg-white border border-slate-100 p-5 rounded-3xl shadow-sm">
                  <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest block mb-3">Education & Degrees</span>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 leading-tight">M.S. Information Technology</h4>
                      <p className="text-[10px] text-slate-500 mt-0.5">Univ. of the Cumberlands</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 leading-tight">M.S. Electrical & Computer Eng.</h4>
                      <p className="text-[10px] text-slate-500 mt-0.5">University of South Florida</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Middle Section: Specific Skill Items Grid */}
              <div className="lg:col-span-3 space-y-6" id="skills_grid_and_expand">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredSkills.map(skill => (
                    <div
                      key={skill.name}
                      id={`skill_card_select_${skill.name.replace(/\s+/g, "_")}`}
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
                            AI Focus
                          </span>
                        )}
                        <h4 className="font-bold text-sm text-slate-950 pr-12">{skill.name}</h4>
                        <p className="text-[10px] text-blue-550 font-semibold mt-0.5">{skill.category}</p>
                        <p className="text-xs text-slate-500 mt-2.5 line-clamp-2 leading-relaxed">{skill.details}</p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold">
                        <span className={`px-2.5 py-0.5 rounded-full text-[9px] font-semibold ${
                          skill.level === "Expert" ? "bg-slate-100 text-slate-800" : "bg-blue-50 text-blue-600"
                        }`}>
                          {skill.level}
                        </span>
                        
                        <span className="text-blue-600 hover:underline inline-flex items-center gap-0.5">
                          View details &rarr;
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Active Skill Deep Match Detail Card */}
                {selectedSkill && (
                  <div className="bg-slate-900 text-slate-100 rounded-3xl p-6 shadow-xl border border-slate-850 mt-8" id="active_skill_match_panel">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4 mb-4">
                      <div>
                        <span className="bg-blue-500/10 text-blue-400 border border-blue-500/10 text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                          {selectedSkill.category} Selection
                        </span>
                        <h4 className="text-lg font-extrabold text-white mt-1.5">
                          {selectedSkill.name} - Deep Match
                        </h4>
                      </div>
                      
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-full text-xs font-bold">
                        <ShieldCheck className="h-4 w-4" /> Perfect Fit
                      </div>
                    </div>

                    <div className="space-y-4 text-xs font-normal">
                      <div>
                        <strong className="text-slate-400 block uppercase font-bold text-[10px] tracking-widest mb-1.5">Functional Competencies Details:</strong>
                        <p className="text-slate-200 leading-relaxed text-sm bg-slate-850 p-4 rounded-xl border border-slate-800/60">{selectedSkill.details}</p>
                      </div>

                      {selectedSkill.metricMatched && (
                        <div>
                          <strong className="text-slate-400 block uppercase font-bold text-[10px] tracking-widest mb-1.5">How it was successfully applied:</strong>
                          <p className="text-slate-300 leading-relaxed font-medium">{selectedSkill.metricMatched}</p>
                        </div>
                      )}

                      <div className="bg-slate-850 p-4 rounded-2xl border border-slate-800 mt-4">
                        <strong className="text-blue-400 block uppercase font-extrabold text-[10px] tracking-widest mb-1 flex items-center gap-1">
                          <Sparkles className="h-3.5 w-3.5 text-blue-400" /> Strategic Value & Leadership Impact:
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

      {/* Structured PM Technical Match Footer */}
      <footer className="bg-slate-900 text-white py-16 px-4 sm:px-6 mt-16 border-t border-slate-850" id="app_footer">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-xs font-normal">
          <div>
            <h4 className="text-sm font-extrabold text-white tracking-widest uppercase mb-4">Vaishnavi Chitta</h4>
            <p className="text-slate-400 leading-relaxed max-w-sm">
              Continuous deployment champion and tech product manager. Actively designing enterprise workflow models, CRM transformations, and AI automation.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-extrabold text-white tracking-widest uppercase mb-4">Portfolio Summary</h4>
            <ul className="space-y-3 text-slate-400">
              <li>• **8+ years product management** experience in complex enterprise SaaS environments</li>
              <li>• Specialized in **workflow automation architectures** and case management systems</li>
              <li>• Core competency in generative AI systems, RAG frameworks, and model benchmarking techniques</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-extrabold text-white tracking-widest uppercase mb-4">Candidate Context Information</h4>
            <ul className="space-y-3.5 text-slate-400">
              <li>**Email:** vaishnavichitta@gmail.com</li>
              <li>**Phone:** +1 816-724-9972</li>
              <li>**LinkedIn:** <a href="https://www.linkedin.com/in/vaishnavichitta/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 underline transition">linkedin.com/in/vaishnavichitta</a></li>
              <li>**Location:** Seattle, WA (Open to remote/relocation)</li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto border-t border-slate-800/80 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-slate-500">
          <p>© 2026 Vaishnavi Chitta. All rights reserved. Enterprise Platforms & AI Product Management Portfolio.</p>
          <div className="flex gap-4">
            <a href="https://github.com/chittav" target="_blank" rel="noopener noreferrer" className="hover:text-slate-350 transition">GitHub Profile</a>
            <span className="text-slate-800">|</span>
            <span className="text-slate-650 font-semibold">Enterprise Platforms & Products PM</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
