document.addEventListener("DOMContentLoaded", () => {
    const gallery = document.getElementById("gallery");
    if (!gallery) return;

    const TOTAL_CERTS = 30; // change if needed

    for (let i = 1; i <= TOTAL_CERTS; i++) {
        const img = document.createElement("img");
        img.src = `certificates/cert${i}.jpg`;
        img.alt = `Certificate ${i}`;

        img.onerror = () => {};
        img.onclick = () => {
            document.getElementById("popupImg").src = img.src;
            document.getElementById("popup").style.display = "flex";
        };

        gallery.appendChild(img);
    }
});
