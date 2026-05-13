// Confetti Animation
function startConfetti() {
  const canvas = document.getElementById("confetti");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const confettiPieces = [];
  const colors = [
    "#FF6B9D",
    "#4A90E2",
    "#47B881",
    "#F5A623",
    "#FFE66D",
    "#9B59B6",
  ];

  class ConfettiPiece {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = -10;
      this.vx = (Math.random() - 0.5) * 8;
      this.vy = Math.random() * 5 + 3;
      this.size = Math.random() * 6 + 2;
      this.color = colors[Math.floor(Math.random() * colors.length)];
      this.rotation = Math.random() * Math.PI * 2;
      this.rotationVel = (Math.random() - 0.5) * 0.3;
      this.gravity = 0.2;
    }

    update() {
      this.y += this.vy;
      this.x += this.vx;
      this.vy += this.gravity;
      this.rotation += this.rotationVel;
    }

    draw() {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.rotation);
      ctx.fillStyle = this.color;
      ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
      ctx.restore();
    }
  }

  function createConfetti() {
    for (let i = 0; i < 50; i++) {
      confettiPieces.push(new ConfettiPiece());
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = confettiPieces.length - 1; i >= 0; i--) {
      confettiPieces[i].update();
      confettiPieces[i].draw();

      if (confettiPieces[i].y > canvas.height) {
        confettiPieces.splice(i, 1);
      }
    }

    if (confettiPieces.length > 0) {
      requestAnimationFrame(animate);
    }
  }

  createConfetti();
  animate();
}

// Click celebration
function celebrateClick() {
  startConfetti();

  // Create floating emojis
  const emojis = ["🎉", "🎊", "🎂", "🎈", "✨", "🌟", "💝", "🎁"];
  for (let i = 0; i < 20; i++) {
    const emoji = document.createElement("div");
    emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.style.position = "fixed";
    emoji.style.left = Math.random() * 100 + "%";
    emoji.style.top = "50%";
    emoji.style.fontSize = "2rem";
    emoji.style.pointerEvents = "none";
    emoji.style.zIndex = "1000";
    emoji.style.animation = `floatUp ${2 + Math.random() * 1}s ease-out forwards`;
    document.body.appendChild(emoji);

    setTimeout(() => emoji.remove(), 3000);
  }

  // Add animation
  const style = document.createElement("style");
  style.textContent = `
        @keyframes floatUp {
            to {
                transform: translateY(-500px) rotate(360deg);
                opacity: 0;
            }
        }
    `;
  document.head.appendChild(style);
}

// Candles Animation
function initCandles() {
  const canvas = document.getElementById("candles");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  const rect = canvas.getBoundingClientRect();
  canvas.width = Math.min(500, window.innerWidth - 40);
  canvas.height = 400;

  const candles = [
    { x: 60, lit: true },
    { x: 150, lit: true },
    { x: 240, lit: true },
    { x: 330, lit: true },
    { x: 420, lit: true },
  ];

  class Particle {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.vx = (Math.random() - 0.5) * 3;
      this.vy = Math.random() * -2 - 2;
      this.life = 1;
      this.decay = Math.random() * 0.02 + 0.01;
      this.size = Math.random() * 3 + 1;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;
      this.vy += 0.05; // gravity
      this.life -= this.decay;
    }

    draw() {
      ctx.save();
      ctx.fillStyle = `rgba(255, 100, 50, ${this.life * 0.5})`;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  let particles = [];
  let blownOut = new Set();

  function drawCake() {
    // Cake body
    ctx.fillStyle = "#D2691E";
    ctx.fillRect(20, 280, canvas.width - 40, 60);

    // Cake layers
    ctx.fillStyle = "#8B4513";
    ctx.fillRect(30, 270, canvas.width - 60, 15);

    // Frosting
    ctx.fillStyle = "#FFB6C1";
    ctx.beginPath();
    ctx.moveTo(20, 280);
    ctx.lineTo(50, 260);
    ctx.lineTo(80, 270);
    ctx.lineTo(120, 255);
    ctx.lineTo(160, 270);
    ctx.lineTo(200, 255);
    ctx.lineTo(240, 270);
    ctx.lineTo(280, 255);
    ctx.lineTo(320, 270);
    ctx.lineTo(360, 255);
    ctx.lineTo(400, 270);
    ctx.lineTo(430, 260);
    ctx.lineTo(canvas.width - 20, 280);
    ctx.lineTo(canvas.width - 20, 280);
    ctx.lineTo(20, 280);
    ctx.fill();
  }

  function drawCandles() {
    candles.forEach((candle, index) => {
      // Candle stick
      ctx.fillStyle = "#FFE4B5";
      ctx.fillRect(candle.x - 5, 200, 10, 80);

      // Candle wax decoration
      ctx.fillStyle = "#DEB887";
      ctx.beginPath();
      ctx.arc(candle.x, 205, 7, 0, Math.PI * 2);
      ctx.fill();

      if (candle.lit && !blownOut.has(index)) {
        // Flame
        ctx.save();
        ctx.fillStyle = "#FF6B00";
        ctx.beginPath();
        ctx.moveTo(candle.x, 190);
        ctx.quadraticCurveTo(candle.x - 8, 160, candle.x - 3, 130);
        ctx.quadraticCurveTo(candle.x + 8, 160, candle.x, 190);
        ctx.fill();

        ctx.fillStyle = "#FFD700";
        ctx.beginPath();
        ctx.moveTo(candle.x, 185);
        ctx.quadraticCurveTo(candle.x - 5, 165, candle.x - 1, 145);
        ctx.quadraticCurveTo(candle.x + 5, 165, candle.x, 185);
        ctx.fill();
        ctx.restore();
      }
    });
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawCake();
    drawCandles();

    // Update and draw particles
    particles = particles.filter((p) => p.life > 0);
    particles.forEach((p) => {
      p.update();
      p.draw();
    });

    if (particles.length > 0 || Array.from(blownOut).length < candles.length) {
      requestAnimationFrame(animate);
    }
  }

  animate();

  // Click to blow out candles
  canvas.addEventListener("click", (e) => {
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    candles.forEach((candle, index) => {
      const dist = Math.sqrt((x - candle.x) ** 2 + (y - 200) ** 2);
      if (dist < 30 && !blownOut.has(index)) {
        blownOut.add(index);

        // Create particles
        for (let i = 0; i < 15; i++) {
          particles.push(new Particle(candle.x, 150));
        }

        animate();
      }
    });

    // All blown out - celebration!
    if (blownOut.size === candles.length) {
      celebrateClick();
    }
  });
}

// Handle window resize
window.addEventListener("resize", () => {
  const canvas = document.getElementById("candles");
  if (canvas) {
    canvas.width = Math.min(500, window.innerWidth - 40);
  }
});

// Initialize when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  initCandles();

  // Add scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animation = "fadeInUp 1s ease-out forwards";
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document
    .querySelectorAll(".memory-card, .wish-card, .timeline-item")
    .forEach((el) => {
      observer.observe(el);
    });
});

// Add smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
