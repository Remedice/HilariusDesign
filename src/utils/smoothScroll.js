export function smoothScrollTo(top, duration = 520) {
  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

  if (prefersReduced) {
    window.scrollTo(0, top);
    return;
  }

  const startY = window.scrollY || window.pageYOffset || 0;
  const distance = top - startY;
  if (Math.abs(distance) < 1) return;

  const start = performance.now();
  const easeOutCubic = (progress) => 1 - Math.pow(1 - progress, 3);

  const tick = (now) => {
    const progress = Math.min(1, (now - start) / duration);
    window.scrollTo(0, Math.round(startY + distance * easeOutCubic(progress)));
    if (progress < 1) requestAnimationFrame(tick);
  };

  requestAnimationFrame(tick);
}
