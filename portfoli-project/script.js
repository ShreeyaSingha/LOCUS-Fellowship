// 1. Click on name to toggle between English and Nepali
const nameEl = document.getElementById("name");
let isNepali = false;

nameEl.addEventListener("click", function () {
  if (isNepali) {
    nameEl.textContent = "Sunil Lamichhane";
  } else {
    nameEl.textContent = "सुनिल लामिछाने";
  }
  isNepali = !isNepali;
});

// 2. Click on the button to toggle dark mode
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");
});

// 3. Skill list generated from an array (not hardcoded in HTML)
const skills = ["HTML", "CSS", "JavaScript"];
const skillList = document.getElementById("skillList");

skills.forEach(function (skill) {
  const li = document.createElement("li");
  li.textContent = skill;
  skillList.appendChild(li);
});

// Click on a skill to highlight it
const skillItems = document.querySelectorAll("#skillList li");

skillItems.forEach(function (item) {
  item.addEventListener("click", function () {
    item.classList.toggle("active");
  });
});

// 4. Click counter on hero image
const heroImg = document.getElementById("heroImg");
const clickCountEl = document.getElementById("clickCount");
let clickCount = 0;

heroImg.addEventListener("click", function () {
  clickCount = clickCount + 1;
  clickCountEl.textContent = `Clicked ${clickCount} times`;
});

// 5. Surprise Me button - shows a random fact
const facts = [
  "I am learning frontend development one project at a time.",
  "My favorite part of coding is seeing the UI come alive.",
  "I enjoy solving small bugs as much as building new features.",
  "I am part of a fellowship learning HTML, CSS, and JavaScript.",
  "I like breaking things on purpose just to understand how they work."
];

const surpriseBtn = document.getElementById("surpriseBtn");
const factText = document.getElementById("factText");

surpriseBtn.addEventListener("click", function () {
  const randomIndex = Math.floor(Math.random() * facts.length);
  factText.textContent = facts[randomIndex];
});

// 6. Show/hide skills section
const toggleSkillsBtn = document.getElementById("toggleSkillsBtn");

toggleSkillsBtn.addEventListener("click", function () {
  skillList.classList.toggle("hidden");
  if (skillList.classList.contains("hidden")) {
    toggleSkillsBtn.textContent = "Show Skills";
  } else {
    toggleSkillsBtn.textContent = "Hide Skills";
  }
});
