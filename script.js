static/script.js
// Dark Mode Toggle
const toggleButton = document.getElementById("darkModeToggle");
toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  toggleButton.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

// Cursor glow effect
document.addEventListener("mousemove", (e) => {
  document.body.style.setProperty("--x", e.clientX + "px");
  document.body.style.setProperty("--y", e.clientY + "px");
});

// Handle Generate Form
const form = document.getElementById("generateForm");
const loading = document.getElementById("loading");
const result = document.getElementById("result");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  // Show loader only when button is clicked
  loading.classList.remove("hidden");
  result.innerHTML = "";

  const prompt = document.getElementById("prompt").value;
  const model = document.getElementById("model").value;

  try {
    // Call your backend
    const response = await fetch("/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt, model }),
    });

    const data = await response.json();

    // Hide loader
    loading.classList.add("hidden");

    if (data.image_url) {
      result.innerHTML = `<img src="${data.image_url}" alt="Generated Image">`;
    } else {
      result.innerHTML = `<p>❌ Failed to generate image.</p>`;
    }
  } catch (error) {
    console.error(error);
    loading.classList.add("hidden");
    result.innerHTML = `<p>⚠️ Error occurred!</p>`;
  }
});


// Form submission
document.getElementById("generateForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const prompt = document.getElementById("prompt").value;
  const model = document.getElementById("model").value;
  const loading = document.getElementById("loading");
  const result = document.getElementById("result");

  loading.classList.remove("hidden");
  result.innerHTML = "";

  // Placeholder: will connect to backend later
  setTimeout(() => {
    loading.classList.add("hidden");
    result.innerHTML = `<img src="https://placekitten.com/400/300" alt="Generated Image">`;
  }, 2000);
});

// Cursor glow effect
document.addEventListener("mousemove", (e) => {
  document.body.style.setProperty("--x", `${e.clientX}px`);
  document.body.style.setProperty("--y", `${e.clientY}px`);
});
