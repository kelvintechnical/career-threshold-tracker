/**
 * 160 compounding portfolio projects (20 × 8 skill levels).
 * Loaded by career_threshold_tracker.html
 */
(function () {
  const TIERS = [
    {
      id: 1,
      name: "No experience / unfamiliar",
      hint: "Never done it · no real exposure",
      cls: "t1",
      projects: [
        ["GitHub account + 2FA", "Account security, public profile basics, how issues and repos work.", "None yet — you’re building proof you can use industry tools.", "Public profile shows you’ve started the same toolchain employers scan for."],
        ["Profile README stub", "Markdown on GitHub, personal branding, linking repos.", "Aspiring developer / student path visible to recruiters.", "Pinned README is a common first impression on your profile."],
        ["Install Git; verify version", "CLI comfort, PATH, reading terminal output.", "IT-adjacent literacy; foundation for any dev role.", "Screenshot or note in a repo proves environment setup."],
        ["Clone a public tutorial repo (read-only)", "git clone, folder hygiene, not committing upstream changes.", "Trainee / intern readiness.", "Shows you can follow instructions without breaking remotes."],
        ["Create empty repo: learning-log", "Repo naming, visibility, first empty commit pattern.", "Organized learner signal.", "Dedicated repo for meta-learning reads professional."],
        ["Add LICENSE or .gitignore", "Open-source norms, ignoring secrets and OS junk.", "Professional habits early.", "Reviewers see you think about legal/secret hygiene."],
        ["Open repo in your editor from disk", "Workspace flow, file tree, saving files.", "Any software role baseline.", "Reduces onboarding friction in real teams."],
        ["Install Python; verify py/python -V", "Runtime install, multiple versions awareness.", "Python-capable workstation.", "Job posts assume Python 3 on your machine."],
        ["REPL: print hello; exit cleanly", "Interactive vs script mode, no infinite loops.", "Scripting literacy.", "Tiny commit shows Python runs end-to-end."],
        ["Create + activate a virtual environment once", "venv/conda concept, isolation, why not pip global.", "Junior Python path.", "Employers expect venv in README instructions."],
        ["Document toolchain in README (OS, versions)", "Technical writing, reproducibility mindset.", "Collaborator-ready.", "README is the #1 artifact hiring managers skim."],
        ["Open a static .html file in the browser", "file:// vs server, basic HTML file lifecycle.", "Web curiosity.", "First step toward PHP/React courses."],
        ["Write CHEATSHEET.md — 10 terms you learned", "Markdown headers, lists, linking docs.", "Communication skill for tickets/wiki.", "Shows meta-learning — valued in support and dev."],
        ["Bookmark official Python + MDN docs", "Primary sources vs random blogs.", "Self-sufficient learner.", "Interviewers like “I read the docs when stuck.”"],
        ["Folder screenshot in README", "Project structure narrative, assets in repo.", "Attention to presentation.", "Portfolio polish starts small."],
        ["Fork an “awesome-*” list (practice)", "Fork vs clone, network graph, no PR needed.", "GitHub social graph literacy.", "Comfortable with standard OSS workflow surface."],
        ["Turn on (or tune) repo notifications", "GitHub settings, email noise control.", "Async collaboration awareness.", "Mirrors real team notification hygiene."],
        ["Open and close a test Issue on your repo", "Issues as work items, markdown in comments.", "Agile/Jira analogue.", "Issue history is portfolio evidence of process."],
        ["Pin learning-log on your GitHub profile", "Profile curation, ordering projects.", "Personal brand for hiring.", "Recruiters see intentional ordering."],
        ["Write GOALS.md — 3-month outcome in one paragraph", "Goal setting, measurable outcomes.", "Career ownership signal.", "Coaches and mentors can align with your stated goals."]
      ]
    },
    {
      id: 2,
      name: "Novice",
      hint: "Just started · can follow instructions, not independent yet",
      cls: "t2",
      projects: [
        ["LLM dev venv: Python + pinned openai (or SDK you use)", "Isolate dependencies; match Ed Donner stack versions from lecture notes; reproducible installs.", "LLM engineer trainee (Python path).", "README + requirements.txt proves you can ship a runnable AI repo."],
        [".env + load_dotenv: API key never in Git", "Secret hygiene, .gitignore, .env.example placeholders — same pattern as the bootcamp setup.", "AI engineer (responsible basics).", "Interviewers check for leaked keys before they read your RAG code."],
        ["First Chat Completions script (one user message)", "OpenAI client, model string, reading the response object; end-to-end proof the API works.", "Applied LLM developer (day one).", "Smallest artifact that says “I can call a frontier model from code.”"],
        ["Message roles lab: system vs user vs assistant", "Steer behavior with system prompts; build the message list Donner-style before frameworks.", "Prompt engineer → LLM engineer bridge.", "Shows you understand the core API contract, not only copy-pasted snippets."],
        ["Parameters sandbox: temperature, max_tokens, stop", "Run paired experiments; log outputs; connect knobs to creativity vs determinism.", "LLM application developer.", "Notebook or markdown table of comparisons reads like a disciplined learner."],
        ["Streaming tokens to the terminal", "Stream iterator/async pattern; watch partial tokens; UX intuition for chat apps.", "Real-time AI UI path (Gradio/Streamlit later).", "Demonstrates you can build responsive interfaces, not only blocking calls."],
        ["Gradio single-box “Ask the model” (bootcamp pattern)", "Minimal UI wiring inputs/outputs; local URL; matches the course’s quick demos.", "LLM engineer (product-facing).", "A screenshot + repo link is a standard portfolio piece for AI courses."],
        ["Prompt template with variables (no magic strings)", "f-strings or a tiny template function; separate data from instructions.", "Maintainable LLM codebase habits.", "Hiring signal: you won’t ship 400-line one-off prompts in production."],
        ["Few-shot prompt: 2–3 examples, then a new case", "In-context learning layout; label delimiters; watch format sensitivity.", "Classification / extraction prep (common Donner exercises).", "Mirrors how teams prototype tasks before fine-tuning."],
        ["JSON-shaped answers: parse with json.loads safely", "Schema-ish instructions; repair strategy when the model drifts; guardrails thinking.", "Structured-output LLM workflows.", "Foundation for tools, agents, and evals later in the course."],
        ["Token awareness: count or estimate prompt size", "tiktoken or rough heuristic; tie size to cost/latency vocabulary.", "Cost-conscious LLM engineer.", "Shows you can reason about bills and context windows."],
        ["Resilience: retries, backoff, friendly errors on API failures", "429/timeout handling; don’t crash the whole app on one glitch.", "Production-minded junior LLM engineer.", "Small but rare differentiator in beginner repos."],
        ["Embeddings: embed two strings; cosine similarity (numpy)", "Vector intuition before RAG frameworks; normalize embeddings.", "RAG engineer foundations (Donner embedding sections).", "Proves you know what vector search is doing under the hood."],
        ["Chunking pass: split a .txt for retrieval", "Chunk size/overlap; headings vs fixed windows; metadata dicts.", "Document AI / knowledge bases.", "Directly feeds your first vector store project."],
        ["Vector store hello world: add chunks; query top-k", "Chroma, FAISS, or course-recommended store; persist locally.", "LLM engineer with retrieval skills.", "Standard interview story: “ingest → embed → query.”"],
        ["Minimal RAG: retrieve top chunks → stuff into prompt → answer", "No fancy agents yet; explicit pipeline; cite which chunk influenced you.", "RAG application developer.", "This is the employability core of the Donner-style curriculum."],
        ["LangChain (or course stack) minimal LCEL chain", "Prompt | chat model | output parser; compare to your hand-rolled RAG.", "Framework-literate LLM engineer.", "Signals you can work in team codebases that standardize on LangChain."],
        ["One tool / function call the model can trigger", "Define a JSON schema tool; handle model tool_args; keep scope tiny (math, datetime, etc.).", "Tool-using agents (early agent track).", "Bridge from “chat” to “agent” without jumping to full LangGraph yet."],
        ["Multi-turn Gradio chat with explicit history list", "Trim history for context limits; reset button; show you understand conversation state.", "Conversational AI engineer.", "Matches how the course builds interactive assistants before graphs."],
        ["Capstone doc: README model card + limitations + safety", "Model choice, cost notes, hallucination risk, PII policy; link to Donner modules completed.", "Interview-ready LLM engineer (novice).", "Employers want judgment and communication — this closes the tier professionally."]
      ]
    },
    {
      id: 3,
      name: "Beginner",
      hint: "Understands basics · simple tasks with guidance",
      cls: "t3",
      projects: [
        ["CLI tool: argparse or sys.argv file copy", "Arguments, paths, error messages to stderr.", "Junior Python / automation.", "GitHub proves CLI packaging readiness."],
        ["Parse CSV without pandas (stdlib csv)", "Rows as dicts, encoding errors.", "ETL foundations.", "Shows you understand what pandas abstracts."],
        ["Regex extract emails from text file (Sweigart-style)", "Pattern testing, greediness, readable regex.", "Automation specialist path.", "Practical regex beats regex trivia interviews."],
        ["PHP: contact form → mail() or log to file", "POST, sanitization awareness, basic validation.", "PHP junior.", "Classic Traversy-shaped mini-project."],
        ["MySQL: two-table schema + manual ER sketch in repo", "PK/FK intuition, naming, 3NF conversation.", "Backend-aware developer.", "Diagram in /docs impresses interviewers."],
        ["React: fetch JSON from public API; loading state", "useEffect, error UI, empty state.", "Junior React developer.", "Exactly what Sufa-style drills build toward."],
        ["Flask or FastAPI single GET /health", "Virtualenv, uvicorn/gunicorn mention in README.", "API-first thinking.", "Bridge to ML model serving later."],
        ["Jupyter: Matplotlib one chart from CSV", "Figure save to /figures, kernel cleared.", "Data analyst storytelling.", "Notebook + exported PNG in GitHub."],
        ["sklearn: train/test split + one metric on toy data", "fit/predict, random_state, metric choice.", "ML fundamentals (Portilla).", "Notebook with metric printout = portfolio staple."],
        ["PyTorch: tensor from list + one matmul", "Device-agnostic habits, shape errors reading.", "DL foundations (Neagoie/Bourke).", "Tiny tensor script demystifies framework."],
        ["Biopython: read one FASTA; print IDs", "SeqIO, file formats, biological ID strings.", "Bioinformatics analyst path.", "Ties to Mariano course directly."],
        ["GitHub Action: run pytest or python -m compileall", "CI green badge, fail visibility.", "Engineering maturity.", "CI is a hiring filter for serious teams."],
        ["Dockerfile that runs your CLI (even if chubby)", "COPY, CMD, build/run docs.", "Container literacy.", "Pairs with AWS and deployment courses."],
        [".env.example without secrets + load dotenv", "Secret hygiene, config separation.", "Security-aware junior.", "Required before any cloud deploy story."],
        ["pytest: two tests for a pure function", "Arrange/act/assert, tmp_path.", "Quality-minded developer.", "Tests in repo differentiate candidates."],
        ["Pre-commit or format script (black/ruff optional)", "Automated style, team scale.", "Professional Python.", "One config file + README section."],
        ["REST: POST JSON echo endpoint", "Request models, 422 validation errors.", "Backend API junior.", "Foundation for React ↔ API projects."],
        ["Simple password hash with bcrypt or argon2 (demo)", "Never store plaintext, compare hashes.", "Security baseline.", "Shows you heard OWASP basics."],
        ["Rate limit stub (in-memory counter demo)", "Abuse thinking, 429 response.", "API design awareness.", "Leads to production gateways later."],
        ["Project board: 5 issues with labels on your repo", "Backlog grooming, scope slicing.", "Agile collaboration.", "Mirrors Jira workflow you already know."]
      ]
    },
    {
      id: 4,
      name: "Beginner–intermediate",
      hint: "Connecting concepts · completes tasks with occasional help",
      cls: "t4",
      projects: [
        ["Full CRUD PHP + MySQL for one entity", "Prepared statements, CSRF note, flash messages.", "PHP developer.", "Eduonix-style project you can narrate end-to-end."],
        ["React multi-route app with shared layout", "Router, nested routes, 404 page.", "Frontend developer (React).", "Closer to “job sample” than a single page."],
        ["Python package layout: src/ + pyproject or setup", "Imports, console_scripts entry point.", "Python developer.", "Shows packaging beyond scripts."],
        ["Pandas pipeline: clean → aggregate → plot", "Chain clarity, dtypes, missing data.", "Data analyst / BI-adjacent.", "Portilla-level portfolio piece."],
        ["sklearn pipeline + ColumnTransformer on mixed data", "Categorical encoding, numeric scaling.", "ML engineer (jr).", "Demonstrates scikit-learn composition."],
        ["PyTorch Dataset + DataLoader on folder of images", "Transforms, batching, shape checks.", "DL engineer (entry).", "Matches bootcamp CNN section prerequisites."],
        ["Bio: fetch NCBI record; save JSON + summary.txt", "Entrez etiquette, rate limits, retries.", "Bioinformatics analyst.", "Direct Mariano course application."],
        ["Automate: watch folder → rename + log (Sweigart patterns)", "Scheduling note, idempotent runs.", "Automation specialist.", "Ops-friendly GitHub story."],
        ["SQLite + SQLAlchemy or raw SQL from Python", "Migrations conversation, ORM vs SQL.", "Backend Python.", "Faster iteration before MySQL cloud."],
        ["JWT login sketch (even if local only)", "Claims, expiry, refresh conversation.", "Full-stack security awareness.", "Needed before public APIs."],
        ["React + your API: form POST + optimistic UI rollback", "Error boundaries, toast, retry.", "Product engineer.", "Shows UX maturity beyond tutorials."],
        ["Feature store lite: Parquet partitions by date", "Columnar format, pandas/pyarrow read.", "Analytics engineer habits.", "Big-data interview talking point."],
        ["Model card markdown: intent, data, limits", "Responsible ML documentation.", "Data scientist (entry).", "Hiring managers in ML love model cards."],
        ["Embedding stub: sentence average from word vectors", "Vector space intuition before transformers.", "NLP engineer path.", "Bridge to RAG courses."],
        ["LangChain-free: chunk text + cosine search numpy", "Token-ish splits, normalization.", "RAG engineer foundations.", "Proves you know what libraries hide."],
        ["S3 upload script (boto3) with prefix convention", "IAM user least privilege note.", "Cloud engineer path.", "AWS ML course prerequisite muscle."],
        ["Docker Compose: API + db service", "Networks, depends_on, volume for data.", "Platform-aware developer.", "Standard local full-stack pattern."],
        ["GitHub Action: lint + test on push", "Matrix optional, cache pip.", "CI engineer habits.", "Green badge on portfolio repo."],
        ["Observability stub: structured JSON logs", "Correlation id field, log levels.", "SRE-adjacent.", "Pairs with later monitoring projects."],
        ["ADR-0001 in /docs: why SQLite vs MySQL here", "Architecture decision record format.", "Growing into senior IC.", "Shows systems thinking early."]
      ]
    },
    {
      id: 5,
      name: "Intermediate",
      hint: "Independent on common tasks · solid core concepts",
      cls: "t5",
      projects: [
        ["React dashboard consuming your FastAPI metrics", "Auth header, CORS config, env-based API URL.", "Full-stack engineer.", "Demonstrates end-to-end ownership."],
        ["PHP admin + Python worker via queue table", "Polling worker, status transitions, locks.", "Full-stack PHP + ML integration.", "Classic enterprise pattern."],
        ["Train sklearn model; serialize joblib; FastAPI /predict", "Version model filename, input schema.", "ML engineer (jr).", "Shipped inference is the bar."],
        ["PyTorch training script: argparse, seed, checkpoint", "Train/val loop, early stopping optional.", "Deep learning engineer.", "Neagoie/Bourke capstone-shaped."],
        ["Transfer learning: freeze backbone; fine-tune head", "LR groups, unfreeze schedule note.", "CV engineer path.", "Strong GitHub signal for vision roles."],
        ["RAG: local PDFs → chunks → vector DB + query CLI", "Citation of source chunk in output.", "RAG engineer / LLM app dev.", "Donner / 365 Agents applied."],
        ["Agent tool: function calling wrapper over your API", "Schema for tools, error to model.", "AI engineer (entry).", "Maps to agentic course outcomes."],
        ["MCP-inspired server: expose one tool to a client README", "Protocol thinking even if minimal.", "Agentic AI developer trajectory.", "Cutting-edge portfolio line."],
        ["AWS: artifact to S3; Lambda or container invoke", "IAM role least privilege, cold start note.", "Cloud ML engineer path.", "Schuler course hands-on."],
        ["SageMaker notebook train → model.tar.gz documented", "Hyperparameters table, metric logs.", "AWS ML associate narrative.", "Cert-aligned project."],
        ["Bio: k-mer features → sklearn classifier + ROC plot", "Biology-appropriate splits, leakage warning.", "Bioinformatics engineer.", "Siddique + Mariano + Portilla combo."],
        ["Pianalytix-style: reproduce one Kaggle-style notebook cleanly", "README repro steps, data download script.", "Data scientist portfolio.", "Matches 40-projects discipline."],
        ["Integration tests for API with TestClient", "Fixtures, DB rollback strategy.", "Backend engineer quality bar.", "Teams hire for tests at this level."],
        ["Terraform or CDK stub for S3 + IAM role (optional)", "IaC mindset, destroy instructions.", "Cloud architect junior skills.", "DevOps conversation starter."],
        ["Frontend E2E: Playwright one happy path", "Selector stability, CI job optional.", "SDET-aware frontend dev.", "Rare on portfolios — stands out."],
        ["Dark launch: feature flag env for new model route", "Fallback model path.", "MLOps maturity.", "Mirrors real rollout practice."],
        ["Data validation: pydantic models shared API/train", "Single source of truth for schema.", "Platform ML engineer.", "Reduces train/serve skew bugs."],
        ["Cost note in README: $/month estimate for AWS demo", "FinOps awareness.", "Senior IC habits early.", "Managers appreciate business sense."],
        ["Runbook: incident “model returns 500” steps", "On-call empathy.", "Reliability engineer path.", "Shows production seriousness."],
        ["Post-mortem template committed for failed experiments", "Blameless tone, timelines.", "Leadership communication.", "Research + industry hybrid signal."]
      ]
    },
    {
      id: 6,
      name: "Upper intermediate / advanced intermediate",
      hint: "Handles edge cases · troubleshoots and optimizes",
      cls: "t6",
      projects: [
        ["Optimize API latency: profiling + batch inference", "torch.no_grad, batching, async optional.", "ML performance engineer.", "Numbers in README before/after."],
        ["Handle skewed classes: metrics beyond accuracy", "PR-AUC, calibration curve.", "Serious data scientist.", "Interview depth for imbalanced domains."],
        ["Data leakage audit checklist applied to one project", "Time-based split proof.", "Trustworthy ML.", "Bio + finance + HR models need this."],
        ["GPU OOM playbook: gradient accumulation demo", "Mixed precision flag, checkpointing.", "DL engineer production.", "Shows you debug training at scale."],
        ["Distributed data loading: num_workers tuning doc", "Reproducibility with workers > 0.", "PyTorch at work.", "Real CV training pain solved."],
        ["Streaming ingestion: chunk reader + backpressure note", "Memory bounds, generator patterns.", "Data engineer skills.", "Scales to larger automation."],
        ["Idempotent workers: exactly-once-ish with dedupe key", "At-least-once queues, primary keys.", "Backend architect habits.", "PHP/Python queue projects level up."],
        ["Secrets rotation story: parameter store vs .env", "No secrets in Git ever.", "Security engineer collaboration.", "Cloud ML role requirement."],
        ["Canary deploy story for two model versions", "Traffic split pseudocode or feature flag.", "MLOps engineer.", "Upper-tier ML org pattern."],
        ["Drift monitoring sketch: PSI or KS on one feature", "Alert threshold, weekly job.", "ML observability.", "Senior DS differentiator."],
        ["Explainability: SHAP or permutation importance on sklearn", "When not to trust explanations.", "Responsible AI.", "Regulated industry talking point."],
        ["React error boundary + API circuit breaker pattern", "Retry budgets, user messaging.", "Staff frontend patterns.", "Resilience display."],
        ["SQL injection + XSS prevention audit on PHP app", "Prepared statements audit list.", "AppSec-aware full-stack.", "PHP hire bar."],
        ["Rate limit + WAF note for public endpoints", "IP vs token buckets.", "Platform security.", "Before exposing agent tools."],
        ["Embeddings cache with disk LRU for RAG", "Cost control, TTL.", "LLM systems engineer.", "Production RAG economics."],
        ["Multi-index hybrid search: BM25 + vector fusion", "Ranking intuition.", "Search engineer path.", "Beyond naive vector-only RAG."],
        ["Bio: negative sampling design for sequence task", "Biological plausibility of negatives.", "Comp bio seriousness.", "Research engineer signal."],
        ["Notebook purge: pre-commit strips outputs (optional)", "Git hygiene for ipynb.", "Team-ready DS.", "Reduces repo bloat and leaks."],
        ["Load test: locust or k6 on /predict with p95 goal", "SLO thinking.", "Performance SRE.", "Numbers beat claims."],
        ["Post-release retrospective with metrics vs hypothesis", "Scientific method in product.", "Principal IC trajectory.", "Ties learning to outcomes."]
      ]
    },
    {
      id: 7,
      name: "Advanced",
      hint: "Deep understanding · designs systems / solutions",
      cls: "t7",
      projects: [
        ["System design doc: React + PHP + Python ML (C4-ish)", "Context, container, deployment diagrams.", "Software architect path.", "PDF or Mermaid in /docs."],
        ["End-to-end AWS: train job + endpoint + client auth", "IAM boundaries, VPC note if used.", "Cloud ML platform engineer.", "Schuler + PyTorch combined story."],
        ["Event-driven: S3 trigger → processing → DynamoDB state", "Failure retries, DLQ concept.", "Cloud-native architect.", "Scalable ingestion pattern."],
        ["Multi-tenant SaaS sketch: org_id on all rows", "Isolation strategy, RLS or app-level.", "Product architect.", "Enterprise hire signal."],
        ["Agent orchestration: planner + tool router design", "Failure modes, human-in-loop hook.", "AI architect.", "365 Careers + Donner synthesis."],
        ["MCP production: authn on tool server + audit log", "Token scopes, rate limits.", "Agentic platform engineer.", "Emerging role — rare portfolio."],
        ["Fine-tune small LM on domain JSONL; eval harness", "Train/val contamination guard.", "Applied research engineer.", "Donner QLoRA narrative."],
        ["Bio pipeline: Snakemake or Makefile orchestration", "Reproducible HPC-friendly steps.", "Comp bio engineer.", "Lab + industry crossover."],
        ["Online learning sketch: incremental model update job", "When forbidden vs allowed.", "ML systems researcher.", "Advanced DS/ML org topic."],
        ["Cost/perf tradeoff paper in repo for one model", "Business + engineering joint decision.", "Head of ML trajectory.", "Executive-readable summary."],
        ["Disaster recovery: RPO/RTO for model + data", "Backups, restore drill checklist.", "Infrastructure architect.", "Mission-critical ML."],
        ["Compliance appendix: GDPR-style data deletion path", "Model retrain implications.", "Privacy engineer collaboration.", "Regulated industries."],
        ["Blue/green or rolling deploy for API + model swap", "Health checks, rollback.", "DevOps architect.", "Zero-downtime story."],
        ["Cross-region replication note for artifacts", "Latency vs consistency.", "Global platform engineer.", "AWS advanced narrative."],
        ["Chaos test: kill worker mid-job; recovery behavior", "Idempotency proof.", "Resilience architect.", "Netflix-grade thinking mini."],
        ["Formal threat model STRIDE one-pager for agent tool", "Spoofing, tampering, repudiation…", "AI security architect.", "AI safety hiring trend."],
        ["Portfolio monorepo: shared types OpenAPI generated", "Client SDK generation story.", "Platform full-stack architect.", "Big-tech pattern shrunk."],
        ["Research repro: pick paper’s toy experiment; cite", "Honest partial repro ok with notes.", "Research scientist path.", "PhD-adjacent signal."],
        ["Mentor kit: onboarding doc for your own project", "How to run, test, deploy.", "Tech lead skills.", "Shows you scale yourself."],
        ["Public tech talk outline + slides PDF in repo", "20-minute narrative arc.", "Distinguished engineer communication.", "Recruiters share talks."]
      ]
    },
    {
      id: 8,
      name: "Expert",
      hint: "Authority level · teaches, innovates, decides",
      cls: "t8",
      projects: [
        ["Recorded workshop: teach your tier-5 project live", "Agenda, exercises, repo tags per lesson.", "Principal engineer / educator brand.", "YouTube or unlisted counts."],
        ["Open-source PR merged to a real project (not typo)", "Issue discussion, review response.", "OSS maintainer credibility.", "Link PR in portfolio site."],
        ["Published package on PyPI or npm (scoped ok)", "Semantic release, changelog.", "Platform engineer authority.", "Downloads are social proof."],
        ["Conference-style abstract + poster PDF", "Novel angle on your bio or RAG work.", "Research leader.", "Academic + industry bridge."],
        ["RFC for replacing part of your stack with new design", "Alternatives, tradeoffs, decision.", "Staff+ engineer.", "How senior orgs decide."],
        ["Run a cohort: 3 people ship tier-3 projects", "Curriculum you wrote, retro notes.", "Engineering manager / mentor.", "Leadership without title."],
        ["Patent-style invention disclosure (redacted) for idea", "Prior art search summary.", "Innovation track.", "Even internal-style doc shows rigor."],
        ["Set industry benchmark on small public dataset", "Leaderboard submission + code.", "Research engineer top tier.", "Name on leaderboard = credential."],
        ["Define SLI/SLO for your toy product + error budget", "Quarterly review template.", "VP Eng thinking exercise.", "SRE leadership."],
        ["Multi-repo template generators for your patterns", "Cookiecutter or copier.", "Platform team builder.", "Scales org, not just you."],
        ["Security review you led on a friend’s project", "Findings ranked, fixes tracked.", "AppSec leader.", "Consulting-style deliverable."],
        ["Economics model: unit economics of your API", "Margin per 1M requests.", "Founder CTO skill.", "Startup pitch appendix."],
        ["Board-level one-pager: why invest in ML platform", "Risk, ROI, timeline.", "CTO communication.", "Executive fluency."],
        ["Create certification-style exam for your stack (10 Q)", "Rubric + answers private branch.", "Curriculum authority.", "Training business optional."],
        ["Advise hypothetical startup: architecture review video", "30-minute Loom, structured.", "Fractional CTO signal.", "Consulting portfolio."],
        ["Translate your project to second spoken language README", "i18n empathy for global teams.", "Global engineering leader.", "Inclusive leadership."],
        ["Ethics memo: dual-use concerns of your agent tools", "Mitigations, policy hooks.", "Responsible AI leader.", "Government/regulated orgs."],
        ["Governance: model approval checklist for releases", "Legal + eng signoff boxes.", "Chief AI officer trajectory.", "Enterprise AI scale."],
        ["Succession doc: how someone else runs your repos", "Bus factor elimination.", "Sustainable expert.", "True seniority marker."],
        ["Vision essay: where your stack is in 5 years", "Links to papers/products.", "Industry thought leader.", "Personal brand peak."]
      ]
    }
  ];

  function esc(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  /**
   * Single copy-paste block for ChatGPT, Claude, Gemini, Copilot, etc.
   */
  function buildLLMPrompt(tier, globalIndex, localNum, title, learn, roles, gh) {
    return (
      "You are my technical mentor. I'm building a public GitHub portfolio project as part of a compounding curriculum (160 projects across 8 skill levels).\n\n" +
      "PROJECT\n" +
      "-------\n" +
      "• Project code: " +
      tier.id +
      "." +
      String(localNum).padStart(2, "0") +
      " (" +
      globalIndex +
      " of 160 overall)\n" +
      "• Skill tier: " +
      tier.id +
      " — " +
      tier.name +
      "\n" +
      "• Tier meaning: " +
      tier.hint +
      "\n" +
      "• Title: " +
      title +
      "\n\n" +
      "WHAT I SHOULD LEARN\n" +
      "-------------------\n" +
      learn +
      "\n\n" +
      "ROLES I'M POSITIONING FOR\n" +
      "-------------------------\n" +
      roles +
      "\n\n" +
      "HOW IT SHOULD READ ON GITHUB / TO EMPLOYERS\n" +
      "-------------------------------------------\n" +
      gh +
      "\n\n" +
      "WHAT I NEED FROM YOU\n" +
      "--------------------\n" +
      "1) Ask me 3–5 clarifying questions (OS, languages I already know, time budget, constraints).\n" +
      "2) Give a phased checklist: Setup → Build → Verify → Document → GitHub polish — appropriate for THIS tier only (do not skip ahead).\n" +
      "3) List common mistakes at this level and how to avoid them.\n" +
      "4) Define a minimal \"definition of done\" (files, README sections, screenshot or demo if relevant).\n" +
      "5) When I'm stuck, give hints and smaller sub-tasks — not full solutions — unless I explicitly ask for code.\n" +
      "6) If something is unsafe (secrets, SQLi, XSS, sketchy exec), call it out and show the safer pattern.\n\n" +
      "I'll answer your questions in my next message so you can tailor the plan."
    );
  }

  function attachPromptCopyHandlers(root) {
    if (!root) return;
    root.querySelectorAll(".copy-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        const box = btn.previousElementSibling;
        if (!box || !box.classList.contains("prompt-box")) return;
        const text = box.value;
        function mark() {
          btn.textContent = "Copied";
          btn.classList.add("copied");
          setTimeout(function () {
            btn.textContent = "Copy prompt";
            btn.classList.remove("copied");
          }, 2000);
        }
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text).then(mark).catch(function () {
            box.focus();
            box.select();
            document.execCommand("copy");
            mark();
          });
        } else {
          box.focus();
          box.select();
          document.execCommand("copy");
          mark();
        }
      });
    });
  }

  /** One tier only — includes LLM prompt per project */
  function renderTierPage(tierId, mountId) {
    const el = document.getElementById(mountId);
    if (!el) return;
    const tier = TIERS.filter(function (t) {
      return t.id === tierId;
    })[0];
    if (!tier) {
      el.innerHTML = "<p>Unknown tier.</p>";
      return;
    }
    const base = (tier.id - 1) * 20;
    let html = '<section class="tier-block ' + tier.cls + '" id="tier-' + tier.id + '">';
    html += '<header class="tier-head">';
    html += '<span class="tier-num">' + tier.id + '</span>';
    html += '<div class="tier-head-text">';
    html += '<h2 class="tier-name">' + esc(tier.name) + "</h2>";
    html += '<p class="tier-hint">' + esc(tier.hint) + "</p>";
    html += "</div>";
    html += '<span class="tier-count">20 projects · prompts below</span>';
    html += "</header>";
    html += '<div class="tier-projects">';

    tier.projects.forEach(function (row, idx) {
      const title = row[0],
        learn = row[1],
        roles = row[2],
        gh = row[3];
      const localNum = idx + 1;
      const num = String(localNum).padStart(2, "0");
      const globalIndex = base + localNum;
      const prompt = buildLLMPrompt(tier, globalIndex, localNum, title, learn, roles, gh);
      html += "<details class=\"cp-proj\">";
      html += "<summary><span class=\"cp-proj-num\">" + tier.id + "." + num + '</span><span class="cp-proj-title">' + esc(title) + "</span></summary>";
      html += '<div class="cp-proj-body">';
      html += '<p class="cp-proj-label">Learning</p><p class="cp-proj-text">' + esc(learn) + "</p>";
      html += '<p class="cp-proj-label">Roles you’re moving toward</p><p class="cp-proj-text">' + esc(roles) + "</p>";
      html += '<p class="cp-proj-label">GitHub &amp; job signal</p><p class="cp-proj-text">' + esc(gh) + "</p>";
      html += '<div class="prompt-block">';
      html += '<p class="cp-proj-label">LLM mentor prompt</p>';
      html += '<p class="prompt-hint">Paste into ChatGPT, Claude, Gemini, Copilot, etc. Answer the model’s questions, then iterate.</p>';
      html += "<textarea class=\"prompt-box\" readonly rows=\"16\">" + esc(prompt) + "</textarea>";
      html += '<button type="button" class="copy-btn">Copy prompt</button>';
      html += "</div></div></details>";
    });

    html += "</div></section>";
    el.innerHTML = html;
    attachPromptCopyHandlers(el);
  }

  function renderCompoundCurriculum(mountId) {
    const el = document.getElementById(mountId);
    if (!el) return;
    let html = "";
    TIERS.forEach(function (tier) {
      html += '<section class="tier-block ' + tier.cls + '" id="tier-' + tier.id + '">';
      html += '<header class="tier-head">';
      html += '<span class="tier-num">' + tier.id + '</span>';
      html += '<div class="tier-head-text">';
      html += '<h3 class="tier-name">' + esc(tier.name) + "</h3>";
      html += '<p class="tier-hint">' + esc(tier.hint) + "</p>";
      html += "</div>";
      html += '<span class="tier-count">20 projects</span>';
      html += "</header>";
      html +=
        '<p class="tier-prompt-link" style="font-size:11px;color:var(--text3);padding:10px 16px 0;margin:0;background:var(--bg2)">Copy-paste LLM mentor prompts (per project): <a href="tier-' +
        tier.id +
        '.html" style="color:var(--teal)">tier-' +
        tier.id +
        ".html</a></p>";
      html += '<div class="tier-projects">';

      tier.projects.forEach(function (row, idx) {
        const title = row[0],
          learn = row[1],
          roles = row[2],
          gh = row[3];
        const num = String(idx + 1).padStart(2, "0");
        html += "<details class=\"cp-proj\">";
        html += "<summary><span class=\"cp-proj-num\">" + tier.id + "." + num + '</span><span class="cp-proj-title">' + esc(title) + "</span></summary>";
        html += '<div class="cp-proj-body">';
        html += '<p class="cp-proj-label">Learning</p><p class="cp-proj-text">' + esc(learn) + "</p>";
        html += '<p class="cp-proj-label">Roles you’re moving toward</p><p class="cp-proj-text">' + esc(roles) + "</p>";
        html += '<p class="cp-proj-label">GitHub &amp; job signal</p><p class="cp-proj-text">' + esc(gh) + "</p>";
        html += "</div></details>";
      });

      html += "</div></section>";
    });
    el.innerHTML = html;
  }

  window.COMPOUND_TIERS = TIERS;
  window.renderCompoundCurriculum = renderCompoundCurriculum;
  window.renderTierPage = renderTierPage;
  window.buildLLMPrompt = buildLLMPrompt;
})();
