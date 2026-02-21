document.querySelectorAll(".tile").forEach(tile => {

  const cover = tile.querySelector(".cover");
  const video = tile.querySelector(".cover-vid");

  /* =========================
     HOVER → PLAY VIDEO
  ========================== */

  tile.addEventListener("mouseenter", () => {
    if (!video) return;
    video.currentTime = 0;
    video.play().catch(() => {});
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
