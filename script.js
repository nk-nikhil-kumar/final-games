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




document.querySelectorAll('.cover').forEach(button => {

  button.addEventListener('click', function(e) {
    e.preventDefault();   // 🚫 URL change rokega
    e.stopPropagation();  // extra safety

    const src = this.dataset.src;
    const tile = this.closest('.tile');
    const frameWrapper = tile.querySelector('.tile-frame');
    const iframe = frameWrapper.querySelector('iframe');

    if (!iframe.src) {     // ek hi baar load karega
      iframe.src = src;
    }

    frameWrapper.classList.remove('is-hidden');
    this.style.display = 'none';
  });

});
