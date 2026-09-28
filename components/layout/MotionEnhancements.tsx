"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function MotionEnhancements() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const main = document.querySelector("main");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const pointerMedia = window.matchMedia("(pointer: coarse)");
    let routeTimer: number | undefined;

    const cursor = pointerMedia.matches
      ? null
      : document.querySelector<HTMLElement>(".custom-cursor") ?? document.createElement("div");

    if (cursor) {
      cursor.className = "custom-cursor";
      if (!cursor.parentNode) {
        document.body.appendChild(cursor);
      }
    }

    const updateCursor = (event: PointerEvent) => {
      if (!cursor) return;
      cursor.style.left = `${event.clientX}px`;
      cursor.style.top = `${event.clientY}px`;
      cursor.classList.add("is-visible");

      const target = event.target instanceof Element ? event.target : null;
      const interactive = target?.closest("a, button, [role='button'], input, textarea, select, summary");
      cursor.classList.toggle("is-active", Boolean(interactive));
    };

    const hideCursor = () => {
      if (!cursor) return;
      cursor.classList.remove("is-visible", "is-active");
    };

    const handleCursorDown = () => {
      if (!cursor) return;
      cursor.classList.add("is-active");
    };

    const handleCursorUp = () => {
      if (!cursor) return;
      cursor.classList.remove("is-active");
    };

    root.classList.add("motion-ready");
    document.querySelectorAll<HTMLElement>("[data-entrance]").forEach((element, index) => {
      element.style.setProperty("--entrance-delay", `${index * 45}ms`);
    });

    if (main?.dataset.pathname !== pathname) {
      if (main?.dataset.pathname) {
        main.classList.remove("route-enter");
        void main.offsetWidth;
        main.classList.add("route-enter");
        routeTimer = window.setTimeout(() => main.classList.remove("route-enter"), 350);
      }
      if (main) main.dataset.pathname = pathname;
    }

    if (cursor) {
      document.addEventListener("pointermove", updateCursor, { passive: true });
      document.addEventListener("pointerdown", handleCursorDown);
      document.addEventListener("pointerup", handleCursorUp);
      document.addEventListener("pointerleave", hideCursor);
    }

    if (reducedMotion.matches || !("IntersectionObserver" in window)) {
      document.querySelectorAll<HTMLElement>("[data-scroll-reveal]").forEach((element) => {
        element.dataset.revealed = "true";
      });
    } else {
      const revealObserver = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              (entry.target as HTMLElement).dataset.revealed = "true";
              revealObserver.unobserve(entry.target);
            }
          }
        },
        { threshold: 0, rootMargin: "0px 0px -32px 0px" }
      );

      const observeReveals = () => {
        document.querySelectorAll<HTMLElement>("[data-scroll-reveal]").forEach((element) => {
          if (element.dataset.motionObserved) return;
          element.dataset.motionObserved = "true";
          const siblings = Array.from(element.parentElement?.children ?? []).filter((sibling) =>
            sibling.hasAttribute("data-scroll-reveal")
          );
          element.style.setProperty("--reveal-delay", `${Math.min(siblings.indexOf(element) * 65, 260)}ms`);
          revealObserver.observe(element);
        });
      };

      observeReveals();
      const mutationObserver = new MutationObserver(observeReveals);
      const content = document.querySelector("main");
      if (content) mutationObserver.observe(content, { childList: true, subtree: true });

      const updatePointerEffects = (event: PointerEvent) => {
        if (event.pointerType === "touch") return;
        if (cursor) updateCursor(event);
        root.style.setProperty("--pointer-x", `${((event.clientX / window.innerWidth) * 2 - 1) * 2}px`);
        root.style.setProperty("--pointer-y", `${((event.clientY / window.innerHeight) * 2 - 1) * 2}px`);

        const target = event.target instanceof Element ? event.target : null;
        const magnetic = target?.closest<HTMLElement>("[data-magnetic]");
        if (magnetic) {
          const bounds = magnetic.getBoundingClientRect();
          const x = ((event.clientX - (bounds.left + bounds.width / 2)) / bounds.width) * 5;
          const y = ((event.clientY - (bounds.top + bounds.height / 2)) / bounds.height) * 5;
          magnetic.style.setProperty("--magnetic-x", `${x.toFixed(1)}px`);
          magnetic.style.setProperty("--magnetic-y", `${y.toFixed(1)}px`);
        }

        const tilt = target?.closest<HTMLElement>("[data-tilt]");
        if (tilt) {
          const bounds = tilt.getBoundingClientRect();
          const x = (event.clientX - (bounds.left + bounds.width / 2)) / bounds.width;
          const y = (event.clientY - (bounds.top + bounds.height / 2)) / bounds.height;
          tilt.style.setProperty("--tilt-x", `${(-y * 2).toFixed(2)}deg`);
          tilt.style.setProperty("--tilt-y", `${(x * 2).toFixed(2)}deg`);
        }
      };

      const clearPointerEffects = (event: PointerEvent) => {
        const target = event.target instanceof Element ? event.target : null;
        const related = event.relatedTarget instanceof Element ? event.relatedTarget : null;
        const magnetic = target?.closest<HTMLElement>("[data-magnetic]");
        if (magnetic && !magnetic.contains(related)) {
          magnetic.style.setProperty("--magnetic-x", "0px");
          magnetic.style.setProperty("--magnetic-y", "0px");
        }
        const tilt = target?.closest<HTMLElement>("[data-tilt]");
        if (tilt && !tilt.contains(related)) {
          tilt.style.setProperty("--tilt-x", "0deg");
          tilt.style.setProperty("--tilt-y", "0deg");
        }
        if (cursor) hideCursor();
      };

      document.addEventListener("pointermove", updatePointerEffects, { passive: true });
      document.addEventListener("pointerout", clearPointerEffects, { passive: true });

      return () => {
        revealObserver.disconnect();
        mutationObserver.disconnect();
        document.querySelectorAll<HTMLElement>("[data-motion-observed]").forEach((element) => {
          delete element.dataset.motionObserved;
        });
        document.removeEventListener("pointermove", updatePointerEffects);
        document.removeEventListener("pointerout", clearPointerEffects);
        if (cursor) {
          document.removeEventListener("pointermove", updateCursor);
          document.removeEventListener("pointerdown", handleCursorDown);
          document.removeEventListener("pointerup", handleCursorUp);
          document.removeEventListener("pointerleave", hideCursor);
          if (cursor.parentNode) cursor.parentNode.removeChild(cursor);
        }
        if (routeTimer) window.clearTimeout(routeTimer);
      };
    }

    return () => {
      if (cursor) {
        document.removeEventListener("pointermove", updateCursor);
        document.removeEventListener("pointerdown", handleCursorDown);
        document.removeEventListener("pointerup", handleCursorUp);
        document.removeEventListener("pointerleave", hideCursor);
        if (cursor.parentNode) cursor.parentNode.removeChild(cursor);
      }
      if (routeTimer) window.clearTimeout(routeTimer);
    };
  }, [pathname]);

  return null;
}