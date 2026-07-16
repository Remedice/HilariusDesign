export function revealCachedImage(image) {
  if (!image?.complete || !image.naturalWidth) return;
  window.__hdRevealImage?.(image);
}
