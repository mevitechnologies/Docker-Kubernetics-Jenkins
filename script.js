document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".copy-btn").forEach(button => {
    button.addEventListener("click", async () => {
      const code = button.parentElement.querySelector("code");
      if (!code) return;
      try {
        await navigator.clipboard.writeText(code.innerText);
        const old = button.textContent;
        button.textContent = "Copied!";
        setTimeout(() => button.textContent = old, 1200);
      } catch (err) {
        const range = document.createRange();
        range.selectNodeContents(code);
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
        button.textContent = "Select text";
      }
    });
  });

  const tasks = [
    "GitHub source pushed",
    "Website tested in browser",
    "Docker image built",
    "Website hosted with Docker",
    "Jenkins Pipeline succeeded",
    "Kubernetes cluster Ready",
    "Deployment and Service created",
    "Kubernetes site tested"
  ];
  const holder = document.getElementById("progressTasks");
  const progressText = document.getElementById("progressText");
  const progressBar = document.getElementById("progressBar");
  if (holder) {
    tasks.forEach(task => {
      const label = document.createElement("label");
      label.className = "progress-tick";
      const input = document.createElement("input");
      input.type = "checkbox";
      const span = document.createElement("span");
      span.textContent = task;
      input.addEventListener("change", updateProgress);
      label.append(input, span);
      holder.append(label);
    });
  }
  function updateProgress() {
    const all = holder ? [...holder.querySelectorAll("input")] : [];
    const done = all.filter(el => el.checked).length;
    const pct = all.length ? Math.round(done / all.length * 100) : 0;
    if (progressText) progressText.textContent = pct + "%";
    if (progressBar) progressBar.style.width = pct + "%";
  }

  const search = document.getElementById("searchBox");
  if (search) search.addEventListener("keydown", event => {
    if (event.key !== "Enter") return;
    document.querySelectorAll(".search-hit").forEach(el => el.classList.remove("search-hit"));
    const query = search.value.trim().toLowerCase();
    if (!query) return;
    const match = [...document.querySelectorAll("main .content-section")].find(section =>
      section.innerText.toLowerCase().includes(query)
    );
    if (match) {
      match.classList.add("search-hit");
      match.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      alert("No match found. Try Jenkins, image, Pod, port, Git, or Service.");
    }
  });

  document.querySelectorAll("#sideNav a").forEach(link => {
    link.addEventListener("click", () => {
      document.querySelectorAll("#sideNav a").forEach(item => item.classList.remove("active"));
      link.classList.add("active");
    });
  });

  const backTop = document.getElementById("backTop");
  window.addEventListener("scroll", () => {
    if (backTop) backTop.classList.toggle("show", window.scrollY > 500);
  });
  if (backTop) backTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  const printBtn = document.getElementById("printBtn");
  if (printBtn) printBtn.addEventListener("click", () => window.print());

  const answers = { q1: "b", q2: "a", q3: "b", q4: "b" };
  const grade = document.getElementById("gradeQuiz");
  if (grade) grade.addEventListener("click", () => {
    let score = 0, answered = 0;
    Object.entries(answers).forEach(([name, answer]) => {
      const chosen = document.querySelector(`input[name="${name}"]:checked`);
      if (chosen) {
        answered++;
        if (chosen.value === answer) score++;
      }
    });
    const result = document.getElementById("quizResult");
    result.textContent = `Your score: ${score}/4. Answered: ${answered}/4. Review the highlighted concepts and try again.`;
    result.className = score === 4 ? "mt-3 mb-0 fw-bold text-success" : "mt-3 mb-0 fw-bold text-primary";
  });
});
