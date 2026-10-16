/* =====================================================
   EDIT YOUR INFORMATION HERE
   Change the text between the quotes. Leave the commas.
   ===================================================== */
const CONFIG = {
  name: "Johnathaniel G. Carbonel",
  firstName: "Johnathaniel",
  age: "21",
  school: "Nueva Vizcaya State University",
  course: "Network Design Management",
  profilePicture: "me.jpg",   // e.g. "me.jpg" (put the file in this folder). Empty = placeholder avatar
  biography: "Write a short description about yourself here. Edit this text in script.js.",

  education: [
    { level: "Elementary", school: "EM's Signal Village Elementary School" },
    { level: "Junior High School", school: "Taguig Integrated School" },
    { level: "Senior High School", school: "New Era University" },
    { level: "College", school: "Nueva Vizcaya State University", note: "Course: Network Design Management" }
  ],

  // EDIT: college achievements (add or remove { } blocks)
  collegeAchievements: [
    { icon: "🏆", title: "[Achievement title]", description: "[Short description]", date: "" },
    { icon: "🎖️", title: "[Achievement title]", description: "[Short description]", date: "" },
    { icon: "⭐", title: "[Achievement title]", description: "[Short description]", date: "" }
  ],

  // EDIT: Hack for Gov information
  hackForGov: {
    year: "[2026]",
    team: "[ET'Hack]",
    role: "[Versatile]",
    result: "[9th Runner Up]",
    image: "certificate.jpg"   // e.g. "certificate.jpg". Empty = placeholder box
  },

  // EDIT: skills / areas of study (not claims of expertise)
  skills: ["Networking","Software Development","Web Development","Cybersecurity","Java","JavaScript","HTML","CSS","Problem Solving","Teamwork"],

  // EDIT: projects (copy a { } block to add more)
  projects: [
    { name: "Project Name", description: "Short project description.", tech: "HTML / CSS / JavaScript" },
    { name: "Project Name", description: "Short project description.", tech: "[Technologies]" }
  ],

  // EDIT: academic achievements by level (leave [] if none yet; add text in quotes)
  academic: {
    "Elementary": ["[Achievement]"],
    "Junior High School": ["[Achievement]"],
    "Senior High School": ["[Achievement]"],
    "College": ["[Achievement]", "[Achievement]", "[Achievement]"]
  },

  // EDIT: contact links
  contact: {
    Email: "strangerdangeryouare@gmail.com",
    Facebook: "facebook.com/johnathaniel.carbonel.2025",
    GitHub: "github.com/M4matsumiha",
  }
};
/* ============ END OF EDIT AREA ============ */

const $ = id => document.getElementById(id);
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));

// ---------- Build page from CONFIG ----------
function build() {
  const c = CONFIG;
  $("heroName").textContent = "Hello, I'm " + c.firstName;
  $("heroName").dataset.text = $("heroName").textContent;
  $("bio").textContent = c.biography;
  $("copy").textContent = "© 2026 " + c.name + ". All Rights Reserved.";
  $("avatar").src = c.profilePicture ||
    "data:image/svg+xml;utf8," + encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><rect width="200" height="200" fill="#111"/>' +
      '<circle cx="100" cy="78" r="36" fill="#444"/><path d="M30 190c6-46 40-64 70-64s64 18 70 64z" fill="#444"/></svg>');

  $("infoCard").innerHTML = [["Name", c.name], ["Age", c.age], ["Current School", c.school], ["Course", c.course]]
    .map(r => `<div class="row"><span>${r[0]}</span><span>${esc(r[1])}</span></div>`).join("");

  $("timeline").innerHTML = c.education.map(e =>
    `<div class="t-item card"><small>${esc(e.level)}</small><h3>${esc(e.school)}</h3>${e.note ? `<p>${esc(e.note)}</p>` : ""}</div>`).join("");

  $("achGrid").innerHTML = c.collegeAchievements.map((a, i) =>
    `<div class="card"><span class="icon">${a.icon}</span><small class="date"> College Achievement #${i + 1}</small>
     <h3>${esc(a.title)}</h3><p>${esc(a.description)}</p>${a.date ? `<p class="date">${esc(a.date)}</p>` : ""}</div>`).join("");

  const h = c.hackForGov;
  $("hack").innerHTML = `<span class="icon">🌸</span><h3>Participant — Hack for Gov</h3>
    <p>Participated in the Hack for Gov competition as part of my experience in technology, problem solving, and collaborative software development.</p>
    <div class="meta">${[["Competition year", h.year], ["Team name", h.team], ["Role", h.role], ["Project", h.project], ["Achievement / result", h.result]]
      .map(m => `<div><b>${m[0]}</b>${esc(m[1])}</div>`).join("")}
      <div>${h.image ? `<img src="${esc(h.image)}" alt="Hack for Gov" style="max-width:100%;border-radius:8px">` : "<b>Certificate / competition image</b>[Add image]"}</div></div>`;

  $("skills").innerHTML = c.skills.map(s => `<span class="badge">${esc(s)}</span>`).join("");

  $("projects").innerHTML = c.projects.map((p, i) =>
    `<div class="card"><small class="date">Project ${String(i + 1).padStart(2, "0")}</small><h3>${esc(p.name)}</h3>
     <p>${esc(p.description)}</p><p style="margin-top:10px"><b style="color:#fff">Technologies:</b> ${esc(p.tech)}</p></div>`).join("");

  $("academic").innerHTML = Object.entries(c.academic).map(([lvl, list]) =>
    `<div class="card"><h3>${esc(lvl)} Academic Achievements</h3><ul>${
      (list.length ? list : ["[Achievement]"]).map(x => `<li>${esc(x)}</li>`).join("")}</ul></div>`).join("");

  $("contactGrid").innerHTML = Object.entries(c.contact).map(([k, v]) =>
    `<div class="card"><h3>${k}</h3><p>${esc(v)}</p></div>`).join("");
}

// ---------- Petals (intro logo + background) ----------
function drawLogo() {
  let p = "";
  for (let i = 0; i < 5; i++)
    p += `<path transform="rotate(${i * 72})" d="M0 -6 C-14 -22 -12 -40 0 -44 C12 -40 14 -22 0 -6 M0 -44 L0 -37"/>`;
  $("petals").innerHTML = p;
}
function petals(parent, n) {
  for (let i = 0; i < n; i++) {
    const s = document.createElement("span");
    s.className = "petal";
    s.style.left = Math.random() * 100 + "%";
    s.style.animationDuration = 9 + Math.random() * 9 + "s";
    s.style.animationDelay = -Math.random() * 12 + "s";
    s.style.transform = `scale(${0.6 + Math.random()})`;
    parent.appendChild(s);
  }
}

// ---------- Start ----------
build();
document.body.classList.add("locked");

// (terminal loading screen code is at the bottom of this file)

// Subtle red binary rain background
const cv = $("rain"), cx = cv.getContext("2d");
let cols, drops;
function sizeRain() { cv.width = innerWidth; cv.height = innerHeight; cols = Math.floor(cv.width / 16); drops = Array(cols).fill(0).map(() => Math.random() * -50); }
sizeRain(); addEventListener("resize", sizeRain);
if (!matchMedia("(prefers-reduced-motion: reduce)").matches) setInterval(() => {
  cx.fillStyle = "rgba(0,0,0,.12)"; cx.fillRect(0, 0, cv.width, cv.height);
  cx.fillStyle = "hsl(" + hue + ",100%,58%)"; cx.font = "14px monospace";
  drops.forEach((y, i) => {
    cx.fillText(Math.random() > .5 ? "1" : "0", i * 16, y * 16);
    drops[i] = y * 16 > cv.height && Math.random() > .975 ? 0 : y + 1;
  });
}, 70);

$("menuBtn").onclick = () => $("menu").classList.toggle("open");
$("menu").onclick = () => $("menu").classList.remove("open");

// RGB color cycling: --h (hue) in style.css is updated here
let hue = 0;
const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
(function cycle() {
  if (!still) hue = (hue + 0.4) % 360;   // change 0.4 to make it faster or slower
  document.documentElement.style.setProperty("--h", hue);
  requestAnimationFrame(cycle);
})();

// ---------- Interactive terminal (reads from CONFIG above) ----------
const out = $("out"), cmd = $("cmd"), history = [];
let hpos = 0;
const say = (t, cls) => { const d = document.createElement("div"); if (cls) d.className = cls; d.textContent = t; out.appendChild(d); };
const COMMANDS = {
  help: () => ["Commands:", "  whoami   about   education   skills   projects", "  achievements   hackforgov   contact   ls   clear"],
  whoami: () => [CONFIG.name + " - " + CONFIG.course],
  about: () => [CONFIG.biography, "Age: " + CONFIG.age + " | School: " + CONFIG.school],
  education: () => CONFIG.education.map(e => e.level + ": " + e.school),
  skills: () => ["Skills / areas of study:", CONFIG.skills.join(", ")],
  projects: () => CONFIG.projects.map((p, i) => (i + 1) + ". " + p.name + " [" + p.tech + "]"),
  achievements: () => CONFIG.collegeAchievements.map(a => "- " + a.title),
  hackforgov: () => ["Participant - Hack for Gov", "Year: " + CONFIG.hackForGov.year, "Team: " + CONFIG.hackForGov.team,
    "Role: " + CONFIG.hackForGov.role, "Project: " + CONFIG.hackForGov.project, "Result: " + CONFIG.hackForGov.result],
  contact: () => Object.entries(CONFIG.contact).map(([k, v]) => k + ": " + v),
  ls: () => ["about  education  skills  projects  achievements  hackforgov  contact"],
  sudo: () => ["Nice try. Permission denied."],
  clear: () => { out.innerHTML = ""; return []; }
};
say("Welcome. Type 'help' to see what you can ask me.");
cmd.addEventListener("keydown", e => {
  if (e.key === "ArrowUp" && history.length) { hpos = Math.max(0, hpos - 1); cmd.value = history[hpos]; e.preventDefault(); }
  if (e.key === "ArrowDown") { hpos = Math.min(history.length, hpos + 1); cmd.value = history[hpos] || ""; e.preventDefault(); }
  if (e.key !== "Enter") return;
  const raw = cmd.value.trim(), name = raw.split(" ")[0].toLowerCase();
  cmd.value = "";
  if (!raw) return;
  history.push(raw); hpos = history.length;
  say("visitor@portfolio:~$ " + raw, "echo");
  (COMMANDS[name] ? COMMANDS[name]() : ["command not found: " + name + ". Type 'help'."]).forEach(l => say(l));
  $("term").scrollTop = $("term").scrollHeight;
});
$("term").addEventListener("click", () => cmd.focus({ preventScroll: true }));

// ---------- Terminal loading screen ----------
// The visitor must type the full command "cd portfolio" and press Enter.
const bootOut = $("boot"), enterEl = $("enter"), bootTerm = $("bootTerm");
const addLine = html => {
  const d = document.createElement("div");
  d.innerHTML = html;
  bootOut.appendChild(d);
  bootTerm.scrollTop = bootTerm.scrollHeight;
};
function openPortfolio() {
  $("intro").classList.add("out");
  document.body.classList.remove("locked");
  setTimeout(() => $("intro").remove(), 1000);
}
const bootLines = ["> initializing profile...", "> loading modules ........ [OK]", "> Welcome to my profile.", "> Type the command shown below the terminal."];
enterEl.readOnly = true;           // locked until the boot text finishes
let bi = 0, entered = false;
const bootTimer = setInterval(() => {
  addLine(bootLines[bi].replace("[OK]", '<span style="color:#6dff8f">[OK]</span>'));
  if (++bi === bootLines.length) {
    clearInterval(bootTimer);
    enterEl.readOnly = false;
    enterEl.focus({ preventScroll: true });
  }
}, 500);
$("intro").addEventListener("click", () => enterEl.focus({ preventScroll: true }));
enterEl.addEventListener("keydown", e => {
  if (e.key !== "Enter") return;
  const raw = enterEl.value.trim(), v = raw.toLowerCase();
  enterEl.value = "";
  if (!raw) return;
  addLine('<span class="echo">visitor@portfolio:~$ ' + esc(raw) + "</span>");
  if (v === "cd portfolio" && !entered) {
    entered = true;
    enterEl.readOnly = true;
    addLine("access granted. loading portfolio...");
    setTimeout(openPortfolio, 900);
  } else if (v === "help") addLine("hint: cd portfolio");
  else if (v === "ls") addLine("portfolio/");
  else addLine("command not found: " + esc(raw) + ". Try: cd portfolio");
});
