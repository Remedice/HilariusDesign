export function smoothScrollTo(target, duration = 520) {
  const resolveTop = () =>
    typeof target === "function" ? target() : target;
  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

  if (prefersReduced) {
    window.scrollTo(0, resolveTop());
    return;
  }

  const startY = window.scrollY || window.pageYOffset || 0;
  const distance = resolveTop() - startY;
  if (Math.abs(distance) < 1) return;

  const start = performance.now();
  const easeOutCubic = (progress) => 1 - Math.pow(1 - progress, 3);

  const tick = (now) => {
    const progress = Math.min(1, (now - start) / duration);
    const currentDistance = resolveTop() - startY;
    window.scrollTo(
      0,
      Math.round(startY + currentDistance * easeOutCubic(progress))
    );
    if (progress < 1) requestAnimationFrame(tick);
  };

  requestAnimationFrame(tick);
}
