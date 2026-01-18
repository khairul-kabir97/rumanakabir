const music = document.getElementById("bgMusic");
let isPlaying = false;

/* 🎁 Surprise */
function showLove() {
    document.getElementById("loveMessage").style.display = "block";
    document.getElementById("surpriseBtn").style.display = "none";

    createHeartExplosion(40); // Full screen heart burst (mobile optimized)

    if (!isPlaying) {
        music.play().catch(() => { });
        isPlaying = true;
    }
}

/* 🎶 Music toggle */
function toggleMusic() {
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
    isPlaying = !music.paused;
}

/* ❤️ Floating hearts */
function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤";

    const colors = ["#ff4d6d", "#ff69b4", "#ff85a2", "#ffd1dc"];
    heart.style.color = colors[Math.floor(Math.random() * colors.length)];

    // Responsive random position
    const vw = Math.min(window.innerWidth, 400); // Small phones
    heart.style.left = Math.random() * vw + "px";

    const fontSize = Math.random() * 15 + 12; // smaller for mobile
    heart.style.fontSize = fontSize + "px";

    const duration = 4 + Math.random() * 3;
    heart.style.animationDuration = duration + "s";

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), duration * 1000);
}

// Floating hearts interval
setInterval(createHeart, 600);

/* 🌄 Background slideshow */
const bgImages = ["img.jpg", "bg2.jpg", "bg3.jpg", "bg4.jpg"];
const slides = document.querySelectorAll(".bg-slide");
let bgIndex = 0;

slides.forEach((slide, i) => {
    slide.style.backgroundImage = `url(${bgImages[i]})`;
});

setInterval(() => {
    slides[bgIndex].classList.remove("active");
    bgIndex = (bgIndex + 1) % slides.length;
    slides[bgIndex].classList.add("active");
}, 5000);

/* ❤️ Heart explosion full screen */
function createHeartExplosion(count) {
    for (let i = 0; i < count; i++) {
        const heart = document.createElement("div");
        heart.className = "heart-explosion";
        heart.innerHTML = "❤";

        // Responsive explosion coordinates
        const xRange = window.innerWidth / 2; // prevent overflow small screens
        const yRange = window.innerHeight / 2;

        const x = (Math.random() - 0.5) * xRange + "px";
        const y = (Math.random() - 0.5) * yRange + "px";

        heart.style.setProperty("--x", x);
        heart.style.setProperty("--y", y);

        const colors = ["#ff4d6d", "#ff69b4", "#ff85a2", "#ffd1dc"];
        heart.style.color = colors[Math.floor(Math.random() * colors.length)];

        const fontSize = Math.random() * 20 + 12;
        heart.style.fontSize = fontSize + "px";

        // Start from center
        heart.style.left = "50%";
        heart.style.top = "50%";

        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 1500);
    }
}

// Optional: Adjust hearts on window resize
window.addEventListener("resize", () => {
    // ensures small screens hearts scale properly
});
