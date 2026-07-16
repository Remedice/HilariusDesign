"use client";

import { useEffect, useRef } from "react";

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

export function useParallaxField({ desktopOffset = 28, mobileOffset = 12 } = {}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return undefined;

    const layers = Array.from(container.querySelectorAll("[data-parallax-depth]"));
    if (!layers.length) return undefined;

    const mobileQuery = window.matchMedia("(max-width: 860px)");
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let targetProgress = 0;
    let currentProgress = 0;
    let frameId = 0;
    let isVisible = true;

    const resetLayers = () => {
      layers.forEach((layer) => {
        layer.style.transform = "";
      });
    };

    const updateScrollTarget = () => {
      if (reducedMotionQuery.matches) return;
      const rect = container.getBoundingClientRect();
      targetProgress = clamp(-rect.top / Math.max(rect.height * 0.72, 1), 0, 1);
    };

    const render = () => {
      frameId = 0;
      if (!isVisible || reducedMotionQuery.matches) return;

      currentProgress += (targetProgress - currentProgress) * 0.1;

      const offset = mobileQuery.matches ? mobileOffset : desktopOffset;
      const easedProgress = currentProgress * currentProgress * (3 - 2 * currentProgress);
      layers.forEach((layer) => {
        const depth = Number(layer.dataset.parallaxDepth) || 1;
        const directionX = Number(layer.dataset.parallaxX) || 0;
        const directionY = Number(layer.dataset.parallaxY) || 0;
        const x = easedProgress * directionX * depth * offset;
        const y = easedProgress * directionY * depth * offset;
        layer.style.transform = `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0)`;
      });

      const stillMoving = Math.abs(targetProgress - currentProgress) > 0.001;
      if (stillMoving) frameId = window.requestAnimationFrame(render);
    };

    const requestRender = () => {
      if (!frameId && isVisible && !reducedMotionQuery.matches) {
        frameId = window.requestAnimationFrame(render);
      }
    };

    const handleScroll = () => {
      updateScrollTarget();
      requestRender();
    };

    const handlePreferenceChange = () => {
      targetProgress = 0;
      currentProgress = 0;
      resetLayers();
      updateScrollTarget();
      requestRender();
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible) {
          updateScrollTarget();
          requestRender();
        } else if (frameId) {
          window.cancelAnimationFrame(frameId);
          frameId = 0;
        }
      },
      { rootMargin: "120px 0px" }
    );

    observer.observe(container);
    window.addEventListener("scroll", handleScroll, { passive: true });
    mobileQuery.addEventListener?.("change", handlePreferenceChange);
    reducedMotionQuery.addEventListener?.("change", handlePreferenceChange);

    updateScrollTarget();
    requestRender();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
      mobileQuery.removeEventListener?.("change", handlePreferenceChange);
      reducedMotionQuery.removeEventListener?.("change", handlePreferenceChange);
      if (frameId) window.cancelAnimationFrame(frameId);
      resetLayers();
    };
  }, [desktopOffset, mobileOffset]);

  return containerRef;
}
