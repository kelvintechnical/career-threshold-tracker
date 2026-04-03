(function () {
  const TIER_LABELS = {
    foundation: "Foundation",
    applied: "Applied",
    systems: "Systems",
    research: "Research"
  };

  const TIER_ORDER = ["foundation", "applied", "systems", "research"];
  const STATUS_ORDER = ["complete", "in-progress", "planned"];
  const STATUS_LABEL = {
    complete: "Complete",
    "in-progress": "In Progress",
    planned: "Planned"
  };
  const COURSE_CATALOG = [
    "Applied Bioinformatics: From Sequences to Protein Structures (Nayyer Siddique)",
    "AI Engineer Agentic Track (Ed Donner, Ligency)",
    "The Python Mega Course (Ardit Sulce)",
    "PyTorch for Deep Learning Bootcamp (Andrei Neagoie, Daniel Bourke)",
    "40 Real World Data Science / ML Projects (Pianalytix)",
    "Python for Data Science & ML Bootcamp (Jose Portilla)",
    "Automate the Boring Stuff with Python (Al Sweigart)"
  ];
  const LEVELS = {
    1: { name: "No Experience", goal: "setup + micro builds", buildsOn: "Starting baseline." },
    2: { name: "Novice", goal: "guided builds", buildsOn: "Reuses level 1 scripting and automation basics." },
    3: { name: "Beginner", goal: "small shipped projects", buildsOn: "Extends level 2 guided work into usable scripts/apps." },
    4: { name: "Beginner-Intermediate", goal: "connecting concepts", buildsOn: "Combines prior single-skill builds into multi-skill workflows." },
    5: { name: "Intermediate", goal: "independent delivery", buildsOn: "Builds with less guidance and sharper problem framing." },
    6: { name: "Upper Intermediate", goal: "edge cases and optimization", buildsOn: "Adds resilience, performance, and improvement loops to earlier systems." },
    7: { name: "Advanced", goal: "system design", buildsOn: "Integrates models, agents, and pipelines as components." },
    8: { name: "Expert", goal: "teaching and leadership", buildsOn: "Transforms implementation skill into communication and mentoring artifacts." }
  };

  function esc(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function tierForVersion(v) {
    if (v <= 5) return "foundation";
    if (v <= 10) return "applied";
    if (v <= 15) return "systems";
    return "research";
  }

  function levelForVersion(v) {
    if (v <= 3) return 1;
    if (v <= 5) return 2;
    if (v <= 8) return 3;
    if (v <= 10) return 4;
    if (v <= 13) return 5;
    if (v <= 16) return 6;
    if (v <= 19) return 7;
    return 8;
  }

  function normalizeCourseSources(project) {
    if (Array.isArray(project.courseSources) && project.courseSources.length) {
      return project.courseSources;
    }
    const refs = String(project.courseRef || "").toLowerCase();
    const has = function (needle) { return refs.indexOf(needle) >= 0; };
    const map = [];
    if (has("siddique") || has("bioinformatics") || has("rosalind")) {
      map.push(COURSE_CATALOG[0]);
    }
    if (has("donner") || has("langgraph") || has("mcp")) {
      map.push(COURSE_CATALOG[1]);
    }
    if (has("ardit") || has("mega course") || has("flask") || has("streamlit")) {
      map.push(COURSE_CATALOG[2]);
    }
    if (has("pytorch") || has("bourke") || has("neagoie") || has("karpathy")) {
      map.push(COURSE_CATALOG[3]);
    }
    if (has("pianalytix") || has("real world")) {
      map.push(COURSE_CATALOG[4]);
    }
    if (has("portilla") || has("pandas") || has("scikit")) {
      map.push(COURSE_CATALOG[5]);
    }
    if (has("sweigart") || has("automate")) {
      map.push(COURSE_CATALOG[6]);
    }
    return map.length ? map : defaultCourseSources(project);
  }

  function defaultCourseSources(project) {
    const level = levelForVersion(project.v);
    if (project.stack === "sequence-intelligence") {
      if (level <= 2) return [COURSE_CATALOG[0], COURSE_CATALOG[6]];
      if (level <= 4) return [COURSE_CATALOG[0], COURSE_CATALOG[5]];
      if (level <= 6) return [COURSE_CATALOG[0], COURSE_CATALOG[3], COURSE_CATALOG[5]];
      return [COURSE_CATALOG[0], COURSE_CATALOG[3], COURSE_CATALOG[1]];
    }
    if (project.stack === "agentic-ai-systems") {
      if (level <= 2) return [COURSE_CATALOG[1], COURSE_CATALOG[6]];
      if (level <= 4) return [COURSE_CATALOG[1], COURSE_CATALOG[2]];
      if (level <= 6) return [COURSE_CATALOG[1], COURSE_CATALOG[2], COURSE_CATALOG[5]];
      return [COURSE_CATALOG[1], COURSE_CATALOG[3], COURSE_CATALOG[5]];
    }
    if (project.stack === "production-software-systems") {
      if (level <= 2) return [COURSE_CATALOG[2], COURSE_CATALOG[6]];
      if (level <= 4) return [COURSE_CATALOG[2], COURSE_CATALOG[5]];
      if (level <= 6) return [COURSE_CATALOG[2], COURSE_CATALOG[1], COURSE_CATALOG[6]];
      return [COURSE_CATALOG[2], COURSE_CATALOG[1], COURSE_CATALOG[5]];
    }
    if (project.stack === "deep-learning-vision-signals") {
      if (level <= 2) return [COURSE_CATALOG[3], COURSE_CATALOG[6]];
      if (level <= 4) return [COURSE_CATALOG[3], COURSE_CATALOG[5]];
      if (level <= 6) return [COURSE_CATALOG[3], COURSE_CATALOG[5], COURSE_CATALOG[2]];
      return [COURSE_CATALOG[3], COURSE_CATALOG[4], COURSE_CATALOG[5]];
    }
    if (level <= 2) return [COURSE_CATALOG[5], COURSE_CATALOG[6]];
    if (level <= 4) return [COURSE_CATALOG[5], COURSE_CATALOG[4]];
    if (level <= 6) return [COURSE_CATALOG[5], COURSE_CATALOG[4], COURSE_CATALOG[2]];
    return [COURSE_CATALOG[5], COURSE_CATALOG[4], COURSE_CATALOG[1]];
  }

  function synthesizeHiringSignal(project) {
    if (project.hiringSignal) return project.hiringSignal;
    if (project.tier === "foundation") return "Shows baseline implementation discipline and clear concept transfer from coursework.";
    if (project.tier === "applied") return "Shows practical data/API use and ability to adapt guided patterns to real tasks.";
    if (project.tier === "systems") return "Shows architecture-level thinking, component integration, and ownership beyond tutorials.";
    return "Shows research or production-level systems judgment, tradeoff handling, and interview-ready depth.";
  }

  function buildLearningPrompt(project) {
    const level = LEVELS[project.level];
    const courseList = (project.courseSources || []).map(function (c) { return "- " + c; }).join("\n");
    return [
      "You are my senior curriculum architect and AI engineering mentor.",
      "Project title: " + project.title,
      "",
      "Level context:",
      "- Level " + project.level + " — " + level.name,
      "- Goal: " + level.goal,
      "- Builds on: " + level.buildsOn,
      "",
      "Course sources used:",
      courseList || "- (Add at least one mandatory course source.)",
      "",
      "Project brief:",
      "- Problem: " + project.problem,
      "- Technical challenge: " + project.challenge,
      "- Real-world use case: " + project.realWorldUseCase,
      "- Hiring signal: " + project.hiringSignal,
      "- Repeated from previous levels: " + project.repeatedFromPrevious,
      "- What is new: " + project.whatIsNew,
      "",
      "Guide me in this exact sequence without giving full solutions:",
      "1) Ask me 3 scoping questions that force me to think before coding.",
      "2) Propose a minimal architecture and explain tradeoffs.",
      "3) Give step-by-step implementation milestones with checkpoints.",
      "4) Require commented code for each milestone and explain why each block exists.",
      "5) Ask me to produce README sections (problem, solution, tech, evidence).",
      "6) Ask me for demo artifacts (screenshots/CLI outputs) and a 2-minute demo script.",
      "7) End with reflection questions: what I learned, what was difficult, what I would improve.",
      "",
      "Constraints:",
      "- Keep me hands-on.",
      "- Do not provide complete final code unless I explicitly ask.",
      "- Prioritize employability and interview-ready explanation quality."
    ].join("\n");
  }

  function enrichProjects(projects) {
    return projects.map(function (project) {
      const copy = Object.assign({}, project);
      copy.level = project.level || levelForVersion(project.v);
      copy.courseSources = normalizeCourseSources(project);
      copy.realWorldUseCase = project.realWorldUseCase || project.problem;
      copy.hiringSignal = synthesizeHiringSignal(copy);
      copy.repeatedFromPrevious = project.repeatedFromPrevious || "Reuse implementation patterns and debugging habits from earlier versions.";
      copy.whatIsNew = project.whatIsNew || project.challenge;
      copy.llmPrompt = buildLearningPrompt(copy);
      return copy;
    });
  }

  function getLocalStatusMap() {
    try {
      return JSON.parse(localStorage.getItem("project-status-overrides") || "{}");
    } catch (e) {
      return {};
    }
  }

  function setLocalStatusMap(map) {
    localStorage.setItem("project-status-overrides", JSON.stringify(map));
  }

  function keyFor(project) {
    return project.stack + "::" + project.v;
  }

  function sortedProjects(stacks, projects) {
    const stackIndex = {};
    stacks.forEach(function (s, i) {
      stackIndex[s.id] = i;
    });
    return enrichProjects(projects)
      .slice()
      .sort(function (a, b) {
        if (stackIndex[a.stack] !== stackIndex[b.stack]) {
          return stackIndex[a.stack] - stackIndex[b.stack];
        }
        return a.v - b.v;
      })
      .map(function (p, i) {
        const copy = Object.assign({}, p);
        copy.globalIndex = i + 1;
        copy.tier = p.tier || tierForVersion(p.v);
        return copy;
      });
  }

  function statusCounts(projects) {
    const counts = { complete: 0, "in-progress": 0, planned: 0 };
    projects.forEach(function (p) {
      const st = counts[p.status] !== undefined ? p.status : "planned";
      counts[st] += 1;
    });
    return counts;
  }

  function renderSummary(el, projects) {
    const counts = statusCounts(projects);
    el.innerHTML =
      '<span class="pj-stat"><strong>' + projects.length + "</strong> total</span>" +
      '<span class="pj-stat"><strong>' + counts.complete + "</strong> complete</span>" +
      '<span class="pj-stat"><strong>' + counts["in-progress"] + "</strong> in progress</span>" +
      '<span class="pj-stat"><strong>' + counts.planned + "</strong> planned</span>";
  }

  function completionPct(items) {
    if (!items.length) return 0;
    const done = items.filter(function (p) {
      return p.status === "complete";
    }).length;
    return Math.round((done / items.length) * 100);
  }

  function normalizeStatus(status) {
    return STATUS_ORDER.indexOf(status) >= 0 ? status : "planned";
  }

  function nextStatus(status) {
    const idx = STATUS_ORDER.indexOf(normalizeStatus(status));
    return STATUS_ORDER[(idx + 1) % STATUS_ORDER.length];
  }

  function buildStackNav(stacks, projects) {
    return stacks
      .map(function (stack) {
        const bucket = projects.filter(function (p) {
          return p.stack === stack.id;
        });
        const pct = completionPct(bucket);
        return (
          '<a class="stack-card stack-' +
          esc(stack.accent) +
          '" href="#stack-' +
          esc(stack.id) +
          '">' +
          '<div class="stack-card-top"><span class="stack-short">' +
          esc(stack.short) +
          "</span><span>" +
          pct +
          "% complete</span></div>" +
          '<div class="stack-name">' +
          esc(stack.name) +
          "</div>" +
          '<div class="stack-meta">' +
          bucket.length +
          " projects</div></a>"
        );
      })
      .join("");
  }

  function linksRow(project) {
    function link(href, label) {
      if (!href) return '<span class="pj-link pj-link-muted">' + label + "</span>";
      return '<a class="pj-link" href="' + esc(href) + '" target="_blank" rel="noreferrer">' + label + "</a>";
    }
    return link(project.github, "GitHub") + link(project.demo, "Demo") + link(project.article, "Article");
  }

  function skillsRow(skills) {
    return (skills || [])
      .map(function (s) {
        return '<span class="pj-skill">' + esc(s) + "</span>";
      })
      .join("");
  }

  function renderProjectCard(stack, project) {
    return (
      '<article class="pj-card" id="project-' +
      stack.short.toLowerCase() +
      "-" +
      String(project.v).padStart(2, "0") +
      '">' +
      '<div class="pj-top-row">' +
      '<span class="pj-badge"> ' +
      esc(stack.short) +
      " · v" +
      String(project.v).padStart(2, "0") +
      (project.status === "complete" ? " ✓" : "") +
      "</span>" +
      '<span class="pj-chip">' +
      esc(TIER_LABELS[project.tier] || project.tier) +
      "</span>" +
      '<span class="pj-status pj-status-' +
      esc(normalizeStatus(project.status)) +
      '">' +
      esc(STATUS_LABEL[normalizeStatus(project.status)]) +
      "</span>" +
      "</div>" +
      '<h3 class="pj-title">' +
      esc(project.title) +
      "</h3>" +
      '<p class="pj-line"><strong>Problem:</strong> ' +
      esc(project.problem) +
      "</p>" +
      '<p class="pj-line"><strong>Technical Challenge:</strong> ' +
      esc(project.challenge) +
      "</p>" +
      '<p class="pj-compounding">→ Builds toward: ' +
      esc(project.compounding) +
      "</p>" +
      '<div class="pj-skills">' +
      skillsRow(project.skills) +
      "</div>" +
      '<p class="pj-line"><strong>Level:</strong> L' +
      esc(project.level) +
      " — " +
      esc((LEVELS[project.level] || {}).name || "Mapped") +
      "</p>" +
      '<p class="pj-line"><strong>Course Sources Used:</strong> ' +
      esc((project.courseSources || []).join(" | ")) +
      "</p>" +
      '<p class="pj-line"><strong>Real-World Use Case:</strong> ' +
      esc(project.realWorldUseCase || "To be defined") +
      "</p>" +
      '<p class="pj-line"><strong>Hiring Signal:</strong> ' +
      esc(project.hiringSignal || "To be defined") +
      "</p>" +
      '<p class="pj-line"><strong>Repeated from Previous:</strong> ' +
      esc(project.repeatedFromPrevious || "To be defined") +
      "</p>" +
      '<p class="pj-line"><strong>What is New:</strong> ' +
      esc(project.whatIsNew || "To be defined") +
      "</p>" +
      '<div class="pj-links-row">' +
      linksRow(project) +
      '<button type="button" class="pj-link learn-btn" data-llm="' +
      esc(project.llmPrompt) +
      '" data-title="' +
      esc(project.title) +
      '">Learn This ↗</button>' +
      '<button type="button" class="status-toggle" data-key="' +
      esc(keyFor(project)) +
      '" data-status="' +
      esc(normalizeStatus(project.status)) +
      '">Status: ' +
      esc(STATUS_LABEL[normalizeStatus(project.status)]) +
      "</button>" +
      "</div>" +
      '<p class="pj-course">Course ref: ' +
      esc(project.courseRef || "N/A") +
      "</p>" +
      "</article>"
    );
  }

  function renderTierGroup(stack, tier, projects) {
    const title = "TIER " + (TIER_ORDER.indexOf(tier) + 1) + " — " + (TIER_LABELS[tier] || tier).toUpperCase();
    return (
      '<section class="pj-tier-group" id="stack-' +
      esc(stack.id) +
      "-" +
      esc(tier) +
      '">' +
      '<h4 class="pj-tier-title">' +
      esc(title) +
      "</h4>" +
      '<div class="pj-tier-rail stack-' +
      esc(stack.accent) +
      '">' +
      projects.map(function (p) {
        return renderProjectCard(stack, p);
      }).join("") +
      "</div></section>"
    );
  }

  function renderStacks(stacksEl, stacks, projects) {
    let html = "";
    stacks.forEach(function (stack) {
      const stackProjects = projects.filter(function (p) {
        return p.stack === stack.id;
      });
      html +=
        '<section class="pj-stack" id="stack-' +
        esc(stack.id) +
        '">' +
        '<header class="pj-stack-header stack-' +
        esc(stack.accent) +
        '">' +
        '<div><p class="pj-stack-kicker">' +
        esc(stack.short) +
        "</p><h2>" +
        esc(stack.name) +
        '</h2><p class="pj-stack-unlock">Career unlock: ' +
        esc(stack.careerUnlock) +
        '</p></div><div class="pj-stack-salary">' +
        esc(stack.salaryRange) +
        "</div></header>";
      TIER_ORDER.forEach(function (tier) {
        const bucket = stackProjects.filter(function (p) {
          return p.tier === tier;
        });
        html += renderTierGroup(stack, tier, bucket);
      });
      html += "</section>";
    });
    stacksEl.innerHTML = html;
  }

  function renderSidebar(el, projects, stacksById) {
    const next = projects
      .filter(function (p) {
        return p.status !== "complete";
      })
      .sort(function (a, b) {
        return a.globalIndex - b.globalIndex;
      })
      .slice(0, 3);
    el.innerHTML = next
      .map(function (p) {
        const stack = stacksById[p.stack];
        return (
          '<article class="next-item"><h4>' +
          esc(p.title) +
          '</h4><p><strong>' +
          esc(stack.name) +
          '</strong></p><p class="next-why">' +
          esc(p.compounding) +
          '</p><p class="next-ref">' +
          esc(p.courseRef || "Course reference coming soon") +
          "</p></article>"
        );
      })
      .join("");
  }

  function attachModalHandlers(modalEl) {
    const titleEl = modalEl.querySelector("[data-modal-title]");
    const textEl = modalEl.querySelector("[data-modal-text]");
    const copyEl = modalEl.querySelector("[data-copy]");
    const claudeEl = modalEl.querySelector("[data-claude]");

    function close() {
      modalEl.classList.remove("open");
      modalEl.setAttribute("aria-hidden", "true");
    }

    modalEl.addEventListener("click", function (e) {
      if (e.target.matches("[data-close]") || e.target === modalEl) close();
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && modalEl.classList.contains("open")) close();
    });

    document.addEventListener("click", function (e) {
      const btn = e.target.closest(".learn-btn");
      if (!btn) return;
      const prompt = btn.getAttribute("data-llm") || "";
      const title = btn.getAttribute("data-title") || "Project";
      titleEl.textContent = title + " — LLM Learning Prompt";
      textEl.value = prompt;
      claudeEl.href = "https://claude.ai/new?q=" + encodeURIComponent(prompt);
      modalEl.classList.add("open");
      modalEl.setAttribute("aria-hidden", "false");
    });

    copyEl.addEventListener("click", function () {
      const text = textEl.value;
      if (!text) return;
      const done = function () {
        copyEl.textContent = "Copied";
        setTimeout(function () {
          copyEl.textContent = "Copy to Clipboard";
        }, 1600);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done);
      } else {
        textEl.focus();
        textEl.select();
        document.execCommand("copy");
        done();
      }
    });
  }

  function attachStatusHandlers(onUpdate) {
    document.addEventListener("click", function (e) {
      const btn = e.target.closest(".status-toggle");
      if (!btn) return;
      const current = normalizeStatus(btn.getAttribute("data-status"));
      const updated = nextStatus(current);
      const map = getLocalStatusMap();
      map[btn.getAttribute("data-key")] = updated;
      setLocalStatusMap(map);
      onUpdate();
    });
  }

  function applyOverrides(projects) {
    const map = getLocalStatusMap();
    return projects.map(function (p) {
      const key = keyFor(p);
      if (map[key]) {
        const copy = Object.assign({}, p);
        copy.status = normalizeStatus(map[key]);
        return copy;
      }
      return p;
    });
  }

  function renderAll(config) {
    const stacksById = {};
    config.stacks.forEach(function (s) {
      stacksById[s.id] = s;
    });

    const projects = applyOverrides(sortedProjects(config.stacks, config.projects));
    const summaryEl = document.getElementById("projects-summary");
    const navEl = document.getElementById("stack-nav");
    const stacksEl = document.getElementById("stacks-mount");
    const nextEl = document.getElementById("next-projects");

    renderSummary(summaryEl, projects);
    navEl.innerHTML = buildStackNav(config.stacks, projects);
    renderStacks(stacksEl, config.stacks, projects);
    renderSidebar(nextEl, projects, stacksById);
  }

  function loadConfig() {
    return window.fetch("projects.config.json")
      .then(function (res) {
        if (!res.ok) throw new Error("Fetch failed");
        return res.json();
      })
      .catch(function () {
        return new Promise(function (resolve, reject) {
          const xhr = new XMLHttpRequest();
          xhr.open("GET", "projects.config.json", true);
          xhr.onload = function () {
            if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 0) {
              try {
                resolve(JSON.parse(xhr.responseText));
              } catch (err) {
                reject(err);
              }
            } else {
              reject(new Error("XHR failed"));
            }
          };
          xhr.onerror = function () {
            reject(new Error("XHR failed"));
          };
          xhr.send();
        });
      });
  }

  function init() {
    const modal = document.getElementById("learn-modal");
    attachModalHandlers(modal);
    attachStatusHandlers(function () {
      loadConfig()
        .then(renderAll);
    });

    loadConfig()
      .then(renderAll)
      .catch(function () {
        document.getElementById("stacks-mount").innerHTML =
          '<p class="save-note">Could not load <code>projects.config.json</code>. If you opened this file directly, run a static server.</p>';
      });
  }

  window.addEventListener("DOMContentLoaded", init);
})();
