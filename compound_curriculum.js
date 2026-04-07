/**
 * 160 hire-aligned portfolio milestones (20 × 8 skill tiers).
 * Each tier is one coherent flagship arc; rows are shippable checkpoints with interview signal.
 * Loaded by curriculum UIs and tier pages.
 */
(function () {
  const TIERS = [
    {
      id: 1,
      name: "No experience / unfamiliar",
      hint: "Never done it · no real exposure",
      cls: "t1",
      projects: [
        ["Public GitHub profile README", "Headline, target roles (e.g. AI / bio software), link to flagship repo and contact.", "Any technical hire funnel; recruiters skim this first.", "Shows intent and professionalism before they open code."],
        ["Flagship repo scaffold: sequence-stats-cli", "LICENSE (e.g. MIT), .gitignore, pyproject.toml or pinned requirements.txt; first commit.", "Junior Python / tooling-ready candidate.", "One named repo beats twenty empty shells."],
        ["FASTA parser module", "Multi-record FASTA, headers vs sequence lines, ACGTN validation, Windows/Unix newlines.", "Bioinformatics analyst path.", "Demonstrates file formats matter to you."],
        ["Per-sequence metrics core", "Length, GC%, ambiguous-base counts; pure functions testable in isolation.", "Data + biology literacy.", "Interview: you can explain the biology and the code."],
        ["CLI entry point (argparse)", "Input path, --help, stderr errors, non-zero exit codes on bad input.", "Automation / CLI engineer habits.", "Employers expect CLIs you can run from README."],
        ["pytest suite (≥5 tests)", "Malformed FASTA, empty file, single record, edge bases; tmp_path fixtures.", "Quality-minded developer.", "Tests differentiate candidates immediately."],
        ["GitHub Action: lint + test on push", "Ruff or python -m compileall + pytest; green badge in README.", "CI-aware junior.", "Green badge is a hiring filter for serious teams."],
        ["README: Problem → Install → Run → Example", "Copy-paste commands, sample output block, stated limitations.", "Collaboration-ready engineer.", "This is the #1 artifact hiring managers read."],
        ["docs/ARCHITECTURE.md", "5–10 lines or one diagram: file → parse → metrics → stdout/JSON.", "Systems thinking at starter level.", "Shows you see beyond line-by-line coding."],
        ["Stdin mode + file mode", "Accept piped input or path; document both in README.", "Unix-literate developer.", "Signals production scripting comfort."],
        ["--format json output", "Machine-readable rows for chaining; stable keys documented.", "API-minded engineer.", "Bridges CLI work to later services."],
        ["Type hints on public functions", "Return types and Args; mypy optional later.", "Professional Python baseline.", "Typed code reads like team code."],
        ["CHANGELOG.md + tag v0.1.0", "Initial release notes; GitHub Release optional.", "Shipping discipline.", "Version tags imply you finish things."],
        ["Issue → PR lifecycle (solo ok)", "Open issue, branch, PR, merge, close issue with link.", "Agile / GitHub flow.", "Mirrors real team process."],
        ["SECURITY.md stub", "How to report vulnerabilities; no paranoia essay.", "Security-aware contributor.", "Expected on mature OSS."],
        ["Performance / scale note in README", "Honest max file size or sequence count tested.", "Practical engineer.", "Shows you measure instead of guessing."],
        ["GOALS.md (90-day paragraph)", "One paragraph: role target + proof you will ship (link this repo).", "Career ownership.", "Mentors and recruiters align on your stated outcome."],
        ["Pin flagship + polish profile order", "Pin sequence-stats-cli; order repos intentionally.", "Personal brand for hiring.", "Curated profile reads deliberate."],
        ["README badges: CI + Python version", "Shields.io or native badges; link to Actions.", "Polished portfolio.", "Small signal of attention to detail."],
        ["docs/INTERVIEW.md", "3-sentence elevator pitch + 5 interview Q&A you want to answer about this repo.", "Interview prep artifact.", "Turns the repo into a rehearsed narrative."]
      ]
    },
    {
      id: 2,
      name: "Novice",
      hint: "Just started · can follow instructions, not independent yet",
      cls: "t2",
      projects: [
        ["Repo llm-rag-lab scaffold", "Clean structure; .env.example; .gitignore excludes .env; README venv instructions.", "LLM engineer trainee.", "Secret hygiene before RAG is non-negotiable for hiring."],
        ["Pinned API dependencies", "openai/anthropic SDK versions pinned; reproducible pip install.", "Applied LLM developer.", "README + requirements proves you ship runnable AI repos."],
        ["First chat completions script", "One system + user message; print final assistant content end-to-end.", "Day-one LLM integrator.", "Smallest proof you can call a frontier model from code."],
        ["Streaming tokens to console", "Iterator or async stream; partial tokens visible; note UX value.", "Conversational AI path.", "Matches real chat products, not only blocking calls."],
        ["Gradio single-prompt demo", "Local URL; screenshot in README; matches bootcamp-style UI.", "Product-facing LLM engineer.", "Standard AI course portfolio piece done cleanly."],
        ["Prompt templates (no giant literals)", "External files or functions; variables injected safely.", "Maintainable LLM codebase.", "Hiring signal you will not ship unmaintainable prompts."],
        ["Few-shot structured JSON output", "2–3 examples then new case; json.loads with repair strategy when invalid.", "Structured-output workflows.", "Foundation for tools, agents, evals."],
        ["Token counting pass", "tiktoken or heuristic; log sizes; tie to cost/latency vocabulary in README.", "Cost-conscious LLM engineer.", "Managers care about bills and context limits."],
        ["Retries, backoff, user-safe errors", "Handle 429/timeout without crashing the whole app.", "Production-minded junior LLM dev.", "Rare differentiator at novice tier."],
        ["Embeddings: two strings → cosine similarity", "Normalize vectors; numpy; short notebook or script in repo.", "RAG engineer foundations.", "Proves you know what vector search means mathematically."],
        ["Chunking utility for .txt", "Chunk size + overlap; metadata dict per chunk; config in one place.", "Document AI / knowledge bases.", "Direct input to vector stores."],
        ["Local vector store persistence", "Chroma, FAISS, or course default; data dir gitignored; reload path documented.", "Retrieval engineer.", "Standard story: ingest → embed → query."],
        ["Minimal RAG pipeline", "Top-k retrieve → stuff prompt → answer; print which chunk ids influenced answer.", "RAG application developer.", "Employability core of modern LLM courses."],
        ["Framework chain (e.g. LangChain LCEL)", "Repeat minimal RAG with framework; README compares to hand-rolled.", "Framework-literate engineer.", "Signals you can join existing codebases."],
        ["Single tool / function call", "JSON schema tool; handler for math/datetime; log tool args/results.", "Tool-using agents entry.", "Bridge from chat to agent without full LangGraph."],
        ["Multi-turn Gradio with history trim", "Explicit message list; reset button; respect context limits.", "Conversational AI engineer.", "Shows you understand state, not only single prompts."],
        ["README model card section", "Model choice, limitations, hallucination + PII policy; link modules studied.", "Interview-ready LLM novice.", "Judgment and communication close the tier."],
        ["Mocked or recorded API test", "pytest with fixture responses; no real key in CI.", "Test-aware LLM dev.", "Proves you can test non-deterministic systems sensibly."],
        ["GitHub Action: lint + test", "Optional network skip flag; document in CONTRIBUTING.", "CI maturity.", "Same bar as tier 1 but for AI repo."],
        ["Portfolio summary block", "Top of README: one paragraph hire pitch for this repo.", "Candidate narrative.", "Recruiter gets the point in 15 seconds."]
      ]
    },
    {
      id: 3,
      name: "Beginner",
      hint: "Understands basics · simple tasks with guidance",
      cls: "t3",
      projects: [
        ["Repo bio-data-mini scaffold", "Extends sequence CLI skills; src/ layout; Makefile or scripts/ optional.", "Bio + API junior.", "Named vertical beats scattered tutorial fragments."],
        ["CLI: ingest UniProt/Swiss-Prot sample", "Document download URL or ship samples/; Biopython SeqIO parse.", "Bioinformatics analyst.", "Direct tie to Mariano/Siddique-style courses."],
        ["Pandas analysis table", "accession, length, composition columns; CSV export under artifacts/.", "Data-aware bio dev.", "Table-shaped hiring signal."],
        ["FastAPI /health + /records", "JSON list from SQLite or in-memory seed; CORS note if SPA later.", "API-first engineer.", "Bridge to ML serving and React dashboards."],
        ["SQLite load + query layer", "Idempotent load script; simple schema with indexes on accession.", "Backend Python junior.", "Faster iteration than cloud DB for portfolio."],
        ["React fetch demo (or minimal SPA)", "Loading + error + empty states against your API; env-based base URL.", "Junior React developer.", "Exactly what modern frontend interviews expect."],
        ["Jupyter EDA + exported figure", "One chart from your table; save to figures/; kernel hygiene documented.", "Data analyst storytelling.", "Notebook + PNG in GitHub is a classic portfolio pattern."],
        ["sklearn split + metric on toy labels", "random_state fixed; one classification metric explained in README.", "ML fundamentals (Portilla-shaped).", "Shows you know train vs test."],
        ["PyTorch tensor sanity script", "From list → device-agnostic matmul; shapes printed.", "DL foundations (Bourke/Neagoie).", "Demystifies framework before big models."],
        ["Dockerfile for API service", "uvicorn CMD; build/run in README; non-root user optional.", "Container literacy.", "Pairs with AWS and deploy courses."],
        ["docker-compose: api + db volume", "depends_on; named volume; one command up.", "Local full-stack habits.", "Standard team onboarding story."],
        ["pytest for pure functions + TestClient smoke", "Parsing/statistics tests; GET /health returns 200.", "Quality bar for APIs.", "Differentiates from tutorial-only repos."],
        [".env.example + config module", "No secrets in Git; documented vars for future keys.", "Security-aware junior.", "Required before any cloud story."],
        ["POST echo with Pydantic validation", "422 errors readable; mirrors real create endpoints.", "Backend API junior.", "Foundation for CRUD and forms."],
        ["GitHub Action: test on push", "Cache pip; fail fast on main.", "Engineering maturity.", "Second repo with CI shows habit, not accident."],
        ["Pre-commit: ruff (and format optional)", "One config; README section for contributors.", "Professional Python.", "Team-scale hygiene."],
        ["Password hashing educational script", "bcrypt or argon2 compare; never plaintext; warning not for prod keys.", "Security baseline.", "OWASP-aware conversation in interview."],
        ["In-memory rate limit middleware demo", "429 after N requests per IP or key; README scope honest.", "API design awareness.", "Leads to gateways and production throttling."],
        ["docs/adr-0001-sqlite.md", "Why SQLite here; when you would move to Postgres.", "Growing systems thinker.", "ADR format impresses senior interviewers."],
        ["README hiring proof section", "Bullets: ingest, API, tests, containers, ML literacy — what this repo proves.", "Candidate positioning.", "Makes skimming hiring managers efficient."]
      ]
    },
    {
      id: 4,
      name: "Beginner–intermediate",
      hint: "Connecting concepts · completes tasks with occasional help",
      cls: "t4",
      projects: [
        ["Monorepo or multi-package layout", "api/, web/, shared schemas; root README map.", "Full-stack engineer.", "Shows you organize real products, not single files."],
        ["Full CRUD REST for one domain entity", "Postgres or MySQL; migrations or documented DDL; FK-safe deletes.", "Backend product engineer.", "Narratable end-to-end app slice."],
        ["React router + shared layout", "List/detail/create routes; 404 page; lazy load optional.", "Frontend developer (React).", "Closer to job sample than one static page."],
        ["Pandas ETL script: clean → aggregate → plot", "Saved figure; dtypes and missing data handled explicitly.", "Data analyst / BI-adjacent.", "Portilla-level portfolio piece with story."],
        ["sklearn Pipeline + ColumnTransformer", "Mixed numeric/categorical; one trained artifact saved.", "ML engineer (junior).", "Composition API fluency."],
        ["PyTorch Dataset + DataLoader", "Folder of images OR encoded sequences; shapes logged per batch.", "DL engineer (entry).", "Prerequisite depth for CNN sections."],
        ["NCBI Entrez fetch + JSON artifact", "Rate limits, retries, summary.txt alongside raw JSON.", "Bioinformatics analyst.", "Mariano course applied with engineering care."],
        ["JWT auth sketch for API", "Login issues token; one protected CRUD route; expiry documented.", "Security-aware full-stack.", "Needed before public agent tools."],
        ["React form POST with rollback", "Optimistic UI; toast or inline error; retry optional.", "Product engineer.", "UX maturity beyond fetch tutorials."],
        ["Parquet partitions by date", "feature_store_lite/; pyarrow read example in README.", "Analytics engineer habits.", "Big-data interview talking point."],
        ["Model card markdown", "Intent, data sources, metrics, failure modes, fairness note if relevant.", "Entry data scientist.", "ML hiring managers ask for this explicitly."],
        ["Hand-rolled chunk + cosine retrieval", "numpy only; comment what FAISS will replace later.", "RAG engineer foundations.", "Proves you know what libraries hide."],
        ["boto3 S3 upload utility", "Prefix convention; IAM least-privilege paragraph.", "Cloud engineer path.", "AWS ML course muscle memory."],
        ["Docker Compose: api + db + (optional admin)", "Networks, healthchecks; one README command.", "Platform-aware developer.", "Standard local prod mirror."],
        ["GitHub Action: lint + test + optional matrix", "Python version matrix optional; pip cache.", "CI engineer habits.", "Portfolio green pipeline."],
        ["Structured JSON logging middleware", "request id field; levels; one example log line in README.", "SRE-adjacent.", "Pairs with monitoring later."],
        ["OpenAPI link + export", "Link /openapi.json; consider Redoc static snapshot.", "API-documenting engineer.", "Contract-first collaboration signal."],
        ["docs/adr-0002-db-choice.md", "Postgres vs SQLite for this demo; connection pooling note.", "Architecture-minded IC.", "Shows tradeoff thinking."],
        ["README visuals", "3 screenshots or short GIF: CRUD + chart + API doc.", "Portfolio polish.", "Visual proof reduces recruiter friction."],
        ["End-to-end demo script", "docs/DEMO.md 5-minute path through app for interviews.", "Interview-ready storyteller.", "You can walk a panel through the system."]
      ]
    },
    {
      id: 5,
      name: "Intermediate",
      hint: "Independent on common tasks · solid core concepts",
      cls: "t5",
      projects: [
        ["React dashboard consuming FastAPI metrics", "Auth header if needed; CORS from env; loading states.", "Full-stack engineer.", "End-to-end ownership on paper and in code."],
        ["Train sklearn → joblib → /predict route", "Input schema versioned; example curl in README.", "ML engineer (junior).", "Shipped inference is the hiring bar."],
        ["PyTorch training script (argparse, seed, checkpoints)", "Train/val loop; metric logged; resume note.", "Deep learning engineer.", "Bootcamp capstone-shaped discipline."],
        ["Transfer learning: frozen backbone + trainable head", "LR schedule note; unfreeze plan documented.", "CV engineer path.", "Strong GitHub signal for vision roles."],
        ["RAG: local PDFs → chunks → vector DB + CLI", "Answer cites source chunk ids or filenames.", "RAG / LLM app developer.", "Donner / agent courses applied."],
        ["Agent tool: function calling over your API", "Pydantic tool schema; errors fed back to model safely.", "AI engineer (entry).", "Maps directly to agentic hiring loops."],
        ["MCP-inspired tool server README", "One tool over HTTP or stdio sketch; protocol summary.", "Agentic AI developer.", "Cutting-edge portfolio line with honesty about scope."],
        ["AWS script: artifact → S3", "IAM role doc; no keys in repo.", "Cloud ML engineer path.", "Cert-aligned hands-on."],
        ["Notebook or doc: SageMaker-style train export", "model.tar.gz layout; hyperparameter table.", "AWS ML associate narrative.", "Shows you speak cloud ML."],
        ["Bio: k-mer features → sklearn + ROC figure", "Leakage warning; biology-appropriate split discussion.", "Bioinformatics engineer.", "Siddique + Portilla combo story."],
        ["Reproducible Kaggle-style notebook", "scripts/download_data.sh; pinned data version; clean run order.", "Data scientist portfolio.", "Pianalytix-style discipline."],
        ["API integration tests with fixtures", "DB rollback or transaction per test; auth cases.", "Backend quality bar.", "Teams hire for tests at this level."],
        ["infra/README Terraform or CDK stub", "S3 + IAM JSON; destroy instructions.", "Cloud architect junior.", "IaC conversation starter."],
        ["Playwright (or Cypress) one E2E happy path", "Stable selectors; optional CI job.", "SDET-aware frontend dev.", "Rare on portfolios — stands out."],
        ["Feature-flag second model route", "Env toggles model A/B; fallback path.", "MLOps maturity.", "Mirrors real rollout practice."],
        ["Shared Pydantic schemas train/serve", "Single source of truth; reduces skew bugs.", "Platform ML engineer.", "Serious ML system pattern."],
        ["README cost estimate", "Monthly $ ballpark for your AWS demo footprint.", "FinOps-aware engineer.", "Managers notice business sense."],
        ["Runbook: model returns 500", "docs/runbooks/model-500.md steps.", "Reliability-minded IC.", "Shows production seriousness."],
        ["Blameless post-mortem for failed experiment", "Use template; one real example committed (sanitized).", "Leadership communication.", "Research + industry hybrid signal."],
        ["Architecture diagram in README", "Mermaid or image: web → api → db → model.", "Staff-track habits early.", "Panel interviews start here."]
      ]
    },
    {
      id: 6,
      name: "Upper intermediate / advanced intermediate",
      hint: "Handles edge cases · troubleshoots and optimizes",
      cls: "t6",
      projects: [
        ["Profile and optimize /predict latency", "Before/after p95; batching or torch.no_grad; numbers in README.", "ML performance engineer.", "Evidence beats claims."],
        ["Skewed-class metrics + calibration", "PR-AUC, calibration curve notebook; not only accuracy.", "Serious data scientist.", "Depth for imbalanced domains."],
        ["Data leakage audit applied", "Time-based split proof; checklist doc checked in.", "Trustworthy ML.", "Bio/finance/HR models need this story."],
        ["GPU OOM playbook doc + small demo", "Gradient accumulation; AMP flag; checkpointing.", "DL production engineer.", "Training debug at scale."],
        ["DataLoader workers tuning note", "Reproducibility with num_workers > 0; benchmark snippet.", "PyTorch practitioner.", "Real CV training pain addressed."],
        ["Streaming ingestion with backpressure", "Generator reader; memory bound stated.", "Data engineer skills.", "Scales automation beyond load-all."],
        ["Idempotent worker + dedupe key", "At-least-once queue pattern; SQLite or table lock example.", "Backend architect habits.", "Queue projects level up."],
        ["Secrets rotation story", "Parameter Store vs .env; still no secrets in Git.", "Cloud security collaboration.", "Enterprise ML requirement."],
        ["Canary routing for two model versions", "Feature flag % or path split implemented or rigorously stubbed with code.", "MLOps engineer.", "Upper-tier ML org pattern."],
        ["Drift monitoring sketch", "PSI or KS on one feature; weekly cron script.", "ML observability.", "Senior DS differentiator."],
        ["SHAP or permutation importance", "Summary plot to figures/; when not to trust it.", "Responsible AI.", "Regulated industry talking point."],
        ["React error boundary + API retry budget", "User messaging; exponential backoff cap.", "Resilient frontend.", "Staff frontend patterns mini."],
        ["Security audit pass on your API", "SQLi/XSS/CORS checklist; fixes or documented accepted risk.", "AppSec-aware full-stack.", "PHP stack if used gets same pass."],
        ["Rate limit + abuse notes for public endpoints", "Token bucket or IP limit; README threat model one paragraph.", "Platform security.", "Before exposing agent tools publicly."],
        ["RAG embedding disk LRU cache", "TTL; cost control paragraph with rough savings.", "LLM systems engineer.", "Production RAG economics."],
        ["Hybrid search prototype", "BM25 + vector fusion simple ranker; intuition doc.", "Search engineer path.", "Beyond naive vector-only RAG."],
        ["Bio negative sampling design doc", "Plausible negatives; link to model task.", "Comp bio seriousness.", "Research engineer signal."],
        ["Notebook hygiene automation", "nbstripout or pre-commit; policy in README.", "Team-ready DS.", "Reduces bloat and accidental data leaks."],
        ["Load test: k6 or locust", "State p95 SLO goal for /predict; attach summary.", "Performance SRE.", "Numeric proof for interviews."],
        ["Retrospective: metrics vs hypothesis", "One-pager after an experiment; scientific method visible.", "Principal IC trajectory.", "Ties learning to outcomes."]
      ]
    },
    {
      id: 7,
      name: "Advanced",
      hint: "Deep understanding · designs systems / solutions",
      cls: "t7",
      projects: [
        ["C4-style system design in docs/", "Context/container diagrams; React + API + ML + data paths.", "Software architect path.", "PDF or Mermaid checked in."],
        ["AWS: train job + endpoint + authenticated client", "IAM boundaries; VPC note if used; sequence diagram.", "Cloud ML platform engineer.", "Schuler + PyTorch combined narrative."],
        ["Event-driven ingestion design", "S3 trigger → process → state store; DLQ and retry narrative.", "Cloud-native architect.", "Scalable ingestion pattern."],
        ["Multi-tenant data sketch", "org_id everywhere; RLS or app-level isolation section.", "Product architect.", "Enterprise hire signal."],
        ["Agent orchestration design", "Planner + tool router; failure modes; human-in-loop hook.", "AI architect.", "365 Careers + Donner synthesis."],
        ["Hardened MCP / tool server outline", "Authn tokens; audit log; rate limits documented.", "Agentic platform engineer.", "Rare, honest advanced portfolio."],
        ["Fine-tune small LM + eval harness", "JSONL data; contamination guard; metrics table.", "Applied research engineer.", "QLoRA-style story without hype."],
        ["Snakemake or Makefile bio pipeline", "Three reproducible steps; conda/env file.", "Comp bio engineer.", "Lab + industry crossover."],
        ["Online learning constraints memo", "When incremental updates allowed vs forbidden.", "ML systems researcher.", "Advanced org topic."],
        ["Cost/perf tradeoff executive memo", "One page for a fictional exec; ties to your model.", "Head-of-ML thinking.", "Business + engineering joint decision."],
        ["DR: RPO/RTO for model + data", "Backup + restore drill checklist.", "Infrastructure architect.", "Mission-critical ML story."],
        ["GDPR-style deletion path", "Data removal + retrain implications.", "Privacy collaboration.", "Regulated industries."],
        ["Blue/green or rolling deploy narrative", "Health checks; rollback; tied to your API.", "DevOps architect.", "Zero-downtime language."],
        ["Cross-region artifact note", "Latency vs consistency tradeoffs.", "Global platform engineer.", "AWS advanced narrative."],
        ["Chaos / failure injection plan", "Kill worker mid-job; prove idempotency.", "Resilience architect.", "Netflix-grade thinking exercise."],
        ["STRIDE threat model for agent tools", "One page; mitigations listed.", "AI security architect.", "AI safety hiring trend."],
        ["OpenAPI-generated client types", "Shared contract story; codegen steps in README.", "Platform full-stack architect.", "Big-tech pattern shrunk."],
        ["Paper reproduction (partial allowed)", "Cited experiment; honest gaps documented.", "Research scientist path.", "PhD-adjacent signal."],
        ["docs/MENTORING.md", "How a new dev runs, tests, deploys your system.", "Tech lead skills.", "You scale beyond yourself."],
        ["Tech talk outline + slides PDF", "20-minute arc in talks/; abstract included.", "Distinguished communication.", "Artifact recruiters can forward."]
      ]
    },
    {
      id: 8,
      name: "Expert",
      hint: "Authority level · teaches, innovates, decides",
      cls: "t8",
      projects: [
        ["Recorded workshop on your shipped project", "Agenda, exercises, repo tags per lesson; YouTube or unlisted.", "Principal engineer / educator brand.", "Teaching proof beats claiming expertise."],
        ["Non-trivial OSS PR merged", "Issue thread + review responses; link in profile README.", "OSS credibility.", "Maintainers vouch for you."],
        ["Package on PyPI or npm (scoped ok)", "Semantic version policy; CHANGELOG automation note.", "Platform authority.", "Downloads are social proof."],
        ["Conference abstract + poster PDF", "Novel angle on bio, RAG, or agents.", "Research leader.", "Academic + industry bridge."],
        ["RFC for stack replacement", "Options, tradeoffs, decision, rollout.", "Staff+ engineer.", "How senior orgs decide."],
        ["Mentor cohort: 3 people ship tier-3+", "Your curriculum outline + retrospective notes.", "Engineering manager path.", "Leadership without title."],
        ["Invention disclosure (redacted)", "Prior art summary; problem statement.", "Innovation track.", "Rigor even if confidential."],
        ["Public benchmark or leaderboard entry", "Reproducible repo + submission evidence.", "Top-tier research engineer.", "Named result is credential."],
        ["SLI/SLO + error budget for demo product", "Quarterly review template included.", "SRE leadership.", "VP Eng thinking exercise done seriously."],
        ["Template generator (Cookiecutter/Copier)", "Your service pattern encoded; usage README.", "Platform builder.", "Scales organizations."],
        ["Security review you led", "Findings ranked; remediation tracked (friend project ok).", "AppSec leader.", "Consulting-style deliverable."],
        ["API unit economics spreadsheet", "$/1M requests; margin notes in docs/.", "Founder CTO skill.", "Startup pitch appendix."],
        ["Board-level ML platform one-pager", "Risk, ROI, timeline; executive tone.", "CTO communication.", "Fluent in business language."],
        ["Cert-style exam for your stack (10Q)", "Rubric in repo; answers in private branch or local only.", "Curriculum authority.", "Training business optional."],
        ["Architecture review video script + Loom", "30-minute structured review of hypothetical startup.", "Fractional CTO signal.", "Consulting portfolio piece."],
        ["Flagship README in second language", "Professional translation; glossary for technical terms.", "Global engineering leader.", "Inclusive leadership signal."],
        ["Ethics memo: dual-use agent tools", "Mitigations; policy hooks; citations.", "Responsible AI leader.", "Government / regulated orgs."],
        ["Model release governance checklist", "Legal + eng signoff boxes.", "Chief AI officer trajectory.", "Enterprise AI scale."],
        ["docs/SUCCESSION.md", "Bus factor elimination; how someone runs all repos.", "Sustainable expert.", "True seniority marker."],
        ["Five-year stack vision essay", "Links to papers and products; published markdown.", "Industry thought leader.", "Personal brand peak with substance."]
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
      "You are my technical mentor. I'm building a public GitHub portfolio as part of a hire-aligned curriculum (160 milestones across 8 tiers; each tier is one flagship arc).\n\n" +
      "MILESTONE\n" +
      "---------\n" +
      "• Milestone code: " +
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
    html += '<span class="tier-count">20 hire-aligned milestones · prompts below</span>';
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
      html += '<span class="tier-count">20 milestones</span>';
      html += "</header>";
      html +=
        '<p class="tier-prompt-link" style="font-size:11px;color:var(--text3);padding:10px 16px 0;margin:0;background:var(--bg2)">Copy-paste LLM mentor prompts (per milestone): <a href="tier-' +
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
