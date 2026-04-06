/**
 * Udemy course-level mentor prompts (copy → ChatGPT / Claude / Gemini).
 */
(function () {
  const UDEMY_COURSES = [
    {
      id: "cohen_dl",
      title: "A deep understanding of deep learning (with Python intro)",
      instructor: "Mike X Cohen",
      tech: "Neural net foundations, gradients, architectures, Python numerics before frameworks.",
      focus:
        "After each section, restate the math in your own words and implement the smallest numpy version you can before moving on. Note how each idea maps onto tensors and autograd when you reach PyTorch.",
    },
    {
      id: "aws_ml",
      title: "AWS Certified Machine Learning Engineer - Associate MLA-C01",
      instructor: "Nikolai Schuler",
      tech: "SageMaker, S3, IAM, training and inference patterns, MLOps-oriented AWS.",
      focus:
        "For every lab, diagram IAM boundaries and data flow (S3 → train → endpoint). Tie cert objectives to your PyTorch artifact from the Neagoie course so study stays anchored in something you built.",
    },
    {
      id: "intro_python",
      title: "Introduction To Python Programming",
      instructor: "Avinash Jain, The Codex",
      tech: "Python syntax, control flow, functions, small programs.",
      focus:
        "Turn each section into a tiny GitHub file (functions + tests or asserts). Tie every exercise to a future API or script you will call from a larger app.",
    },
    {
      id: "bio_mar",
      title: "Introduction to programming for Bioinformatics with Python",
      instructor: "Diego Mariano, Ph.D.",
      tech: "Biopython, NCBI/Entrez, alignments, scripting for biological data.",
      focus:
        "Respect API rate limits and reproducible downloads. Script every pipeline step so an agent could call your functions as tools (fetch → parse → summarize).",
    },
    {
      id: "bio_sid",
      title: "Applied Bioinformatics: From Sequences to Protein Structures",
      instructor: "Nayyer Siddique",
      tech: "Sequence to structure pipeline ideas, bio formats, protein context.",
      focus:
        "Keep a lab notebook markdown: hypothesis → command → output path. Connect structure concepts to features you could feed a small PyTorch head later (even if you only simulate features first).",
    },
    {
      id: "donner",
      title: "AI Engineer Agentic Track: The Complete Agent & MCP Course",
      instructor: "Ed Donner, Ligency",
      tech: "LLMs, RAG, LangChain-style stacks, agents, MCP, production-leaning AI apps.",
      focus:
        "Map each lecture to a repo milestone: tool registry → RAG → MCP server. Keep a CHANGELOG.md of which tools your agent exposes and version your prompts alongside model artifacts.",
    },
    {
      id: "mega",
      title: "The Python Mega Course: Build 10 Real World Applications",
      instructor: "Ardit Sulce | 600,000+ Students",
      tech: "GUIs, Flask, databases, APIs, broader Python application structure.",
      focus:
        "After each app, write a 5-line README: inputs, outputs, how to run. Choose one Flask/API module as the long-term shell where ML and agent routes will mount later.",
    },
    {
      id: "pytorch",
      title: "PyTorch for Deep Learning Bootcamp",
      instructor: "Andrei Neagoie, Daniel Bourke",
      tech: "Tensors, training loops, CNNs, transfer learning, deployment themes.",
      focus:
        "Every module: save checkpoints, log shapes, and write a one-paragraph model card (data, metric, failure modes). Revisit earlier lessons when you add a new dataset—do not skip review exercises.",
    },
    {
      id: "proj40",
      title: "40 Real World Data Science, Machine Learning Projects 2025",
      instructor: "Pianalytix • 75,000+ Students Worldwide",
      tech: "Many end-to-end project shapes — tabular, NLP, CV.",
      focus:
        "Do not scatter: pick three projects maximum and polish them like products (README, repro steps, figures). Reuse the same project template folder structure each time to compound habits.",
    },
    {
      id: "portilla",
      title: "Python for Data Science and Machine Learning Bootcamp",
      instructor: "Jose Portilla, Pierian Training",
      tech: "NumPy, Pandas, Matplotlib, scikit-learn, ML workflows, intro neural nets.",
      focus:
        "For every ML section, save a clean notebook export + a .py training script with fixed random_seed. Connect metrics to a story you can tell in interviews (baseline → model → error analysis).",
    },
    {
      id: "automate_boring",
      title: "Automate the Boring Stuff with Python Programming",
      instructor: "Al Sweigart",
      tech: "pathlib, regex, CSV/Excel/PDF, scheduling, practical automation.",
      focus:
        "Pick one repetitive real task (reports, renames, inbox exports) and automate it end-to-end. You will later wrap these utilities as tools for agents or cron jobs behind your API.",
    },
    {
      id: "agents",
      title: "Intro to AI Agents and Agentic AI",
      instructor: "365 Careers",
      tech: "Agent patterns, tool/function calling, orchestration concepts.",
      focus:
        "Draw the control flow before coding. After each lesson, rewrite the same agent loop from memory in a blank file once per week for retention.",
    },
    {
      id: "php_scratch",
      title: "PHP From Scratch | Beginner To Advanced",
      instructor: "Brad Traversy",
      tech: "PHP core, forms, OOP, sessions, maintainable PHP patterns.",
      focus:
        "If your stack is Python-first, still ship one small PHP admin or form that mirrors an equivalent FastAPI route so you can explain multi-language systems in interviews.",
    },
    {
      id: "react_mega",
      title: "React Mega Course: Build 50 Real World Projects in 50 Days",
      instructor: "Sufa Digital | 16,000+ Enrollments Worldwide",
      tech: "React, hooks, routing, state, consuming APIs.",
      focus:
        "For each mini-project, add a typed or documented contract for the JSON your UI expects. You will point the same UI at your Python /predict and agent chat endpoints later.",
    },
    {
      id: "php_mysql",
      title: "Projects in PHP and MySQL",
      instructor: "Eduonix Learning Solutions, Eduonix-Tech",
      tech: "MySQL schema, CRUD, auth-style patterns, multi-page apps.",
      focus:
        "Design tables as if ML predictions will land in them later (request_id, model_version, score, created_at). Practice safe queries and migrations discipline.",
    },
  ];

  function esc(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function buildCoursePrompt(c) {
    return (
      "You are my Udemy learning mentor. Help me master this ONE course in context of my larger goal: AI engineering (Python backends, PyTorch, agentic systems / tools / MCP).\n\n" +
      "COURSE\n" +
      "------\n" +
      "Title: " +
      c.title +
      "\n" +
      "Instructor: " +
      c.instructor +
      "\n" +
      "Technical focus: " +
      c.tech +
      "\n\n" +
      "HOW I SHOULD USE THIS COURSE\n" +
      "----------------------------\n" +
      c.focus +
      "\n\n" +
      "WHAT I NEED FROM YOU\n" +
      "--------------------\n" +
      "1) Ask 3–5 questions: my current % through the course, weekly hours, OS, prior Python/ML/web experience, and target role (e.g. AI engineer, full-stack+ML, bio+ML).\n" +
      "2) Build a 4-week sprint plan mapped to the course syllabus (sections → outcomes), not generic advice.\n" +
      "3) Each week: 3 concrete tasks + how I prove completion (repo artifact, screenshot, metric, or quiz).\n" +
      "4) Explicitly connect this course to the other pillars when realistic: short Python scripts, a PyTorch touchpoint where it fits, and an agent/tool/MCP angle only when the course content supports it (do not invent prerequisites).\n" +
      "5) Spaced repetition: each week include one “rewrite from memory” drill on a topic from an earlier week of THIS course.\n" +
      "6) When I paste errors, lecture timestamps, or homework: decompose, hint first, then minimal code if I ask.\n" +
      "7) End with one interview-style question I should be able to answer after that week.\n\n" +
      "I will answer your questions in my next message."
    );
  }

  function attachCopy(root) {
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

  function renderCoursePrompts(mountId) {
    const el = document.getElementById(mountId);
    if (!el) return;
    let html = "";
    UDEMY_COURSES.forEach(function (c, idx) {
      const num = String(idx + 1).padStart(2, "0");
      const prompt = buildCoursePrompt(c);
      html += '<details class="cp-proj">';
      html += '<summary><span class="cp-proj-num">' + num + '</span><span class="cp-proj-title">' + esc(c.title) + "</span></summary>";
      html += '<div class="cp-proj-body">';
      html += '<p class="cp-proj-text" style="margin-bottom:8px"><strong>Instructor:</strong> ' + esc(c.instructor) + "</p>";
      html += '<p class="cp-proj-text" style="margin-bottom:8px"><strong>Tech lens:</strong> ' + esc(c.tech) + "</p>";
      html += '<p class="cp-proj-text" style="margin-bottom:12px"><strong>Portfolio angle:</strong> ' + esc(c.focus) + "</p>";
      html += '<div class="prompt-block">';
      html += '<p class="cp-proj-label">LLM mentor prompt</p>';
      html += '<p class="prompt-hint">Copy into ChatGPT, Claude, Gemini, or Copilot. Answer its questions, then follow the weekly plan.</p>';
      html += '<textarea class="prompt-box" readonly rows="18">' + esc(prompt) + "</textarea>";
      html += '<button type="button" class="copy-btn">Copy prompt</button>';
      html += "</div></div></details>";
    });
    el.innerHTML = html;
    attachCopy(el);
  }

  window.UDEMY_COURSES = UDEMY_COURSES;
  window.renderCoursePrompts = renderCoursePrompts;
  window.buildCoursePrompt = buildCoursePrompt;
})();
