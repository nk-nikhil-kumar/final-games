/* =========================
   MOBILE MENU & HEADER
========================== */
const menuBtn = document.getElementById("menuBtn");
const drawer = document.getElementById("drawer");
const hdr = document.getElementById("hdr");

if (menuBtn && drawer) {
  menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("is-open");
    drawer.classList.toggle("open");
  });

  // Close drawer on link click
  drawer.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      menuBtn.classList.remove("is-open");
      drawer.classList.remove("open");
    });
  });
}

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    if (hdr) hdr.classList.add("scrolled");
  } else {
    if (hdr) hdr.classList.remove("scrolled");
  }
});

/* =========================
   GAME TILES LOGIC
========================== */
document.querySelectorAll(".tile").forEach(tile => {

  const cover = tile.querySelector(".cover");
  const video = tile.querySelector(".cover-vid");

  /* =========================
     HOVER → PLAY VIDEO
  ========================== */

  tile.addEventListener("mouseenter", () => {
    if (!video) return;
    video.muted = true;
    video.currentTime = 0;
    video.play().catch(e => console.error("Video play failed:", e));
  });

  tile.addEventListener("mouseleave", () => {
    if (!video) return;
    video.pause();
    video.currentTime = 0;
  });

  /* =========================
     CLICK → GO TO GAME LINK
  ========================== */

  cover.addEventListener("click", () => {
    const url = cover.dataset.src;
    if (!url) return;

    window.location.href = url; 
    // If you want new tab instead, use:
    // window.open(url, "_blank");
  });

});

/* =========================
   SCROLL REVEAL ANIMATIONS
========================== */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in");
      revealObserver.unobserve(entry.target); // optional: only animate once
    }
  });
}, {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
});

document.querySelectorAll(".reveal").forEach(el => {
  revealObserver.observe(el);
});
