/* ===== PARTICLES ===== */
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];
for (let i = 0; i < 80; i++) {
    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2 + 1,
        d: Math.random() * 1
    });
}

function drawParticles() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = "rgba(255,0,0,0.6)";
    particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
        ctx.fill();
        p.y += p.d;
        if (p.y > canvas.height) p.y = 0;
    });
    requestAnimationFrame(drawParticles);
}
drawParticles();

/* ===== ONE PIECE CURSOR TRAIL ===== */
document.addEventListener("mousemove", e => {
    const trail = document.createElement("div");
    trail.style.position = "fixed";
    trail.style.left = e.clientX + "px";
    trail.style.top = e.clientY + "px";
    trail.style.width = "8px";
    trail.style.height = "8px";
    trail.style.borderRadius = "50%";
    trail.style.background = "red";
    trail.style.pointerEvents = "none";
    trail.style.opacity = "0.7";
    trail.style.zIndex = "9999";
    document.body.appendChild(trail);

    setTimeout(() => {
        trail.remove();
    }, 400);
});
