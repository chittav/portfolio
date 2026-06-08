var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// server.ts
var import_express = __toESM(require("express"), 1);
var import_path = __toESM(require("path"), 1);
var import_vite = require("vite");
var import_genai = require("@google/genai");
var import_dotenv = __toESM(require("dotenv"), 1);
import_dotenv.default.config();
var app = (0, import_express.default)();
var PORT = 3e3;
var apiKey = process.env.GEMINI_API_KEY;
var ai = null;
if (apiKey) {
  ai = new import_genai.GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build"
      }
    }
  });
} else {
  console.warn("WARNING: GEMINI_API_KEY environment variable is not set. Chat features will fallback.");
}
app.use(import_express.default.json());
var PROFILE_CONTEXT = `
You are Vaishnavi Chitta's Virtual PM Twin & Business Co-Pilot. 
You are a brilliant, enterprise-focused, customer-empathic AI Product Manager representing Vaishnavi Chitta.
Your goal is to answer questions from recruiters and hiring managers (especially from Salesforce recruiting for JR336692) about Vaishnavi's experience, technical PM skills, and alignment with Salesforce Data 360 and Agentforce teams.

CRITICAL DISCLOSURE RULE:
- Vaishnavi Chitta has NEVER worked directly at Salesforce or on Salesforce's internal software teams.
- She is an external candidate applying for the Product Manager role (JR336692).
- Be completely honest if asked: she is a Senior Consultant and platform PM who has CRM modernization experience at CNO Financial Group and workflow orchestration experience at Florida Blue. She has mastered the Agentforce, Einstein, and Data Cloud architectures through dedicated independent research and hands-on prototyping, but has not been employed by Salesforce.

Vaishnavi's Resume Details:
- Title: Product Manager | Enterprise Platforms & Products
- Current role: Sr Consultant - Product Management at CNO Financial (Apr 2025 - Present)
  * Owns the product strategy and roadmap for an enterprise sales enablement platform replacing a legacy CRM used by thousands of agents.
  * Drives a 15-20% improvement in lead-to-conversion rates using AI-assisted lead prioritization and automated workflow routing.
  * Conducts discovery with frontline agents to reprioritize the backlog based on financial/revenue impact.
  * Makes build-vs-configure tradeoffs across automation logic, CRM data models, and reporting.
  * Works with Sales Ops to ensure metrics match execution.
- Past role: Product Manager at Florida Blue (Feb 2023 - Apr 2025)
  * Co-owned strategy and roadmap for EWOC (enterprise case & task management platform) across multiple business units.
  * Redesigned patchwork workflows into a single orchestration model to reduce manual handoffs.
  * Established cyclical throughput, cycle time, and task aging KPI frameworks to guide roadmaps with data.
  * Performed workflow modeling in Miro workshops and gained alignment with senior leadership on tradeoffs.
- Past role: Global Product Manager at SMC Corporation USA (Aug 2021 - Jan 2023)
  * Managed the global rollout of 6 enterprise security platforms across 45+ countries.
  * Cut organization risk by 85% via adoption tracking and governance.
- Past role: Sr. Business Systems Analyst / Product Owner at Florida Blue (Jan 2019 - Aug 2021)
  * Evaluated and onboarded workflows onto Netflix Conductor workflow engine.
  * Introduced conditional routing logic, automated retries, and error paths to minimize manual intervention.
- Education:
  * M.S. Information Technology - University of the Cumberlands (2021)
  * M.S. Electrical Engineering - University of South Florida (2016)

AI & Prototyping Literacy (Key Match for Salesforce Data 360/Agentforce PM JR336692):
- Completed structured generative AI training covering RAG architectures, embedding retrievals, grounding, and benchmarking model evaluations (both offline and live).
- Deep workspace familiarity with Salesforce's Agentforce, Einstein Copilot, and Data Cloud, understanding how prompts are design-parameterized and how RAG workflows operate.
- Skilled with low-code/vibe-coding prototyping systems (such as Lovable, NotebookLM, and Figma), demonstrating the literal "builder-oriented PM who enjoys vibe coding solutions to validate concepts" that the Salesforce team calls for.

Salesforce JR336692 Role Alignment guidelines:
Salesforce is hiring a PM for Data 360 to build AI Agents and enterprise search. They want:
1) A technical, builder-oriented PM who prototypes with AI systems and vibe codes concepts.
2) Ability to translate complex customer needs into clear epics, requirements, and product hypotheses.
3) Cross-functional leadership across engineering, Salesforce clouds, and research.
4) Deep safety, governance, cost, latency tradeoffs knowledge.

When answering, reflect her tone: professional, highly competent, analytical, proactive, and deeply structural (grounding comments in actual business metrics like lead-to-conversion, cut risk by 85%, cycle times). Do not make up facts outside her scope.
`;
app.post("/api/chat", async (req, res) => {
  try {
    const { message, history } = req.body;
    if (!message) {
      res.status(400).json({ error: "Missing message field" });
      return;
    }
    if (!ai) {
      res.json({
        text: `Hello! I am Vaishnavi's Virtual PM Assistant. Currently, the server is running without a GEMINI_API_KEY. How can I help you? I can tell you about her work on Sales Enablement AI (15-20% lead scoring improvements) or Case Management at Florida Blue (85% risk reduction and Netflix Conductor workflow setup).`
      });
      return;
    }
    const formattedContents = history ? history.map((h) => ({
      role: h.role === "user" ? "user" : "model",
      parts: [{ text: h.content }]
    })) : [];
    formattedContents.push({
      role: "user",
      parts: [{ text: message }]
    });
    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: formattedContents,
      config: {
        systemInstruction: PROFILE_CONTEXT,
        temperature: 0.7
      }
    });
    res.json({ text: response.text || "No response text generated." });
  } catch (error) {
    console.error("Error in AI generateContent:", error);
    res.status(500).json({ error: error.message || "Internal server error" });
  }
});
app.post("/api/sandbox/prototype", async (req, res) => {
  try {
    const { idea, steps, triggerType, actionsList } = req.body;
    if (!idea) {
      res.status(400).json({ error: "Missing idea field" });
      return;
    }
    if (!ai) {
      res.json({
        hypothesis: `**Product Hypothesis for: ${idea}**

AI Agents can automate this pattern with standard RAG and lead-routing. (Note: Set GEMINI_API_KEY to see a fully synthesized, enterprise-grade Data 360 AI agent epic spec & prototype code flow!)`,
        epic: `**Epic Outline**

1. Define triggers
2. Run AI logic
3. Coordinate action`,
        techDetails: {
          latency: "Depends on model select (est. 450ms)",
          cost: "Structured prompts optimizes token overhead",
          safety: "Standard guardrail validation on API inputs"
        }
      });
      return;
    }
    const payloadText = ` Generate a highly professional Enterprise Salesforce Agentforce/Data 360 AI Agent Product Hypothesis & Spec for a new AI Agent concept.
    Concept Name/Idea: ${idea}
    Steps specified: ${JSON.stringify(steps)}
    Trigger action type: ${triggerType}
    Downstream systems: ${JSON.stringify(actionsList)}
    
    Structure the response into clear sections in plain JSON representation with exact keys.
    Format your responses JSON keys:
    {
      "hypothesis": "A 1-2 paragraph clear, metrics-oriented product hypothesis with proposed North Star metric",
      "epic": "A structured Epics & Requirements blueprint including User Stories, Epic Milestones, and a functional sequence diagram flow in ASCII style",
      "tradeoffs": "A detailed analysis of practical Product Management Tradeoffs (Latency vs Accuracy, Model Selection, Prompt Guardrails, Cost projection, and Build-vs-Configure matrix)"
    }
    Make sure you return a strict JSON match so we can parse it directly on the frontend. Do not wrap it in triple backticks unless required, return just the JSON object.
    `;
    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: payloadText,
      config: {
        responseMimeType: "application/json",
        systemInstruction: "You are an Elite Salesforce Data 360 Director of Product. Generate direct corporate product specifications and vibe-coding architecture analysis."
      }
    });
    const parsedData = JSON.parse(response.text || "{}");
    res.json(parsedData);
  } catch (error) {
    console.error("Error in rapid prototype sandbox generator:", error);
    res.status(500).json({ error: error.message || "Internal server error" });
  }
});
var initServer = async () => {
  if (process.env.NODE_ENV !== "production") {
    const vite = await (0, import_vite.createServer)({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    const distPath = import_path.default.join(process.cwd(), "dist");
    app.use(import_express.default.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(import_path.default.join(distPath, "index.html"));
    });
  }
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server fully activated and listening on http://localhost:${PORT}`);
  });
};
initServer();
//# sourceMappingURL=server.cjs.map
