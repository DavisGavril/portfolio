/* ===== PAGE SWITCH ===== */
function show(id){
    document.querySelectorAll("section").forEach(s=>s.classList.add("hidden"));
    document.getElementById(id).classList.remove("hidden");
}

/* ===== CERTIFICATE GALLERY ===== */
const gallery = document.getElementById("gallery");
const TOTAL_CERTS = 30; // change this according to your images

for(let i=1;i<=TOTAL_CERTS;i++){
    const img = document.createElement("img");
    img.src = certificates/cert${i}.jpg;
    img.alt = Certificate ${i};
    img.onerror = ()=>img.remove();
    img.onclick = ()=>{
        document.getElementById("popupImg").src = img.src;
        document.getElementById("popup").style.display = "flex";
    };
    gallery.appendChild(img);
}

/* POPUP CLOSE */
function closePopup(){ document.getElementById("popup").style.display="none"; }

/* ===== PARTICLES ===== */
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");
canvas.width = innerWidth; canvas.height = innerHeight;
let particles=[];
for(let i=0;i<80;i++){
    particles.push({x:Math.random()*canvas.width, y:Math.random()*canvas.height, r:Math.random()*2, dx:(Math.random()-0.5), dy:(Math.random()-0.5)});
}
function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle="crimson";
    particles.forEach(p=>{
        ctx.beginPath();
        ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
        ctx.fill();
        p.x+=p.dx; p.y+=p.dy;
        if(p.x<0||p.x>canvas.width) p.dx*=-1;
        if(p.y<0||p.y>canvas.height) p.dy*=-1;
    });
    requestAnimationFrame(animate);
}
animate();
