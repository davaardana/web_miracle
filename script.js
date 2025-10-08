document.addEventListener("DOMContentLoaded", () => {
  const intro = document.getElementById("intro");
  const startBtn = document.getElementById("startBtn");
  const mainContent = document.getElementById("mainContent");
  const messageEl = document.getElementById("message");
  const music = document.getElementById("bgMusic");

  const messageLines = [
    "Semangat ya jalanin hari hari kamu, Mentari 🌞",
    "Dava disini bakalan bantu kamu dibanyak hal.",
    "Jangan suka sedih kalo emang sedih cerita yaa,",
    "Dava siap jadi pendengar yang baik buat Mentari.",
    "Satu lagi gaboleh cengeng ❤️",
    "",
    "I'M ALWAYS BESIDE U 💫"
  ];

  const floatingWordsList = ["love", "you", "forever", "always", "dear", "Mentari", "💗", "🌸", "💞"];

  // ✅ PRELOAD gambar supaya sudah siap di memory browser
  const bg = new Image();
  bg.src = "https://raw.githubusercontent.com/davaardana/web_miracle/main/bg.jpg";

  startBtn.addEventListener("click", () => {
    intro.style.display = "none";
    document.body.classList.add("show-bg");
    mainContent.classList.remove("hidden");
    mainContent.style.opacity = 1;

    // Musik fade-in
    music.volume = 0;
    music.play().catch(() => console.log("Autoplay blocked"));
    fadeInMusic();

    // Animasi teks & kata melayang
    showMessageLine(0);
    setInterval(createFloatingWord, 1200);
  });

  function fadeInMusic() {
    let vol = 0;
    const fade = setInterval(() => {
      if (vol < 0.25) {
        vol += 0.02;
        music.volume = vol;
      } else clearInterval(fade);
    }, 200);
  }

  function showMessageLine(index) {
    if (index >= messageLines.length) return;
    let text = messageLines[index];
    let i = 0;
    const lineInterval = setInterval(() => {
      if (i < text.length) {
        messageEl.textContent += text[i++];
      } else {
        clearInterval(lineInterval);
        messageEl.textContent += "\n";
        setTimeout(() => showMessageLine(index + 1), 900);
      }
    }, 60);
  }

  function createFloatingWord() {
    const word = document.createElement("div");
    word.classList.add("word");
    word.textContent = floatingWordsList[Math.floor(Math.random() * floatingWordsList.length)];
    word.style.left = Math.random() * 100 + "vw";
    word.style.top = "100vh";
    word.style.fontSize = (14 + Math.random() * 14) + "px";
    word.style.animationDuration = (4 + Math.random() * 4) + "s";
    document.body.appendChild(word);
    setTimeout(() => word.remove(), 8000);
  }
});
