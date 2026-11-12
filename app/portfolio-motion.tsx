"use client";

import { useEffect, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// useLayoutEffect warns during SSR, so fall back to useEffect on the server.
const useIsoLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export function PortfolioMotion() {
  useIsoLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);
    const cleanups: Array<() => void> = [];

    const ctx = gsap.context(() => {
      // Entrance: the name rises out of its masks, then the sidebar settles in.
      gsap
        .timeline({ defaults: { ease: "power4.out" } })
        .from("aside h1 .line > span", {
          yPercent: 110,
          duration: 1.1,
          stagger: 0.14,
        })
        .from(
          ".role, .tag, nav.side li, .side-foot",
          { opacity: 0, y: 14, duration: 0.7, stagger: 0.08 },
          "-=0.6",
        );

      // The cycling line slides through a few of my habits.
      const box = document.querySelector<HTMLElement>(".cycle");
      const items = gsap.utils.toArray<HTMLElement>(".cycle > span");
      if (box && items.length > 1) {
        box.classList.add("is-cycling");
        cleanups.push(() => box.classList.remove("is-cycling"));

        gsap.set(items, { yPercent: 110, opacity: 0 });
        gsap.set(items[0], { yPercent: 0, opacity: 1 });

        const loop = gsap.timeline({ repeat: -1, delay: 3 });
        items.forEach((current, i) => {
          const next = items[(i + 1) % items.length];
          loop
            .to(current, {
              yPercent: -110,
              opacity: 0,
              duration: 0.6,
              ease: "power3.in",
            })
            .fromTo(
              next,
              { yPercent: 110, opacity: 0 },
              { yPercent: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
              "<0.35",
            )
            .to({}, { duration: 2.4 });
        });
      }

      // Experience entries and the call to action fade up as they arrive.
      gsap.utils.toArray<HTMLElement>(".xp-company, .cta").forEach((el) => {
        gsap.from(el, {
          y: 20,
          opacity: 0,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 92%", once: true },
        });
      });

      // Let the email link lean toward the pointer on mouse devices.
      if (window.matchMedia("(pointer: fine)").matches) {
        const mail = document.querySelector<HTMLElement>("a.mail");
        if (mail) {
          const qx = gsap.quickTo(mail, "x", { duration: 0.5, ease: "power3" });
          const qy = gsap.quickTo(mail, "y", { duration: 0.5, ease: "power3" });
          const onMailMove = (e: MouseEvent) => {
            const r = mail.getBoundingClientRect();
            qx((e.clientX - (r.left + r.width / 2)) * 0.12);
            qy((e.clientY - (r.top + r.height / 2)) * 0.25);
          };
          const onMailLeave = () => {
            qx(0);
            qy(0);
          };
          mail.addEventListener("mousemove", onMailMove);
          mail.addEventListener("mouseleave", onMailLeave);
          cleanups.push(() => {
            mail.removeEventListener("mousemove", onMailMove);
            mail.removeEventListener("mouseleave", onMailLeave);
          });
        }
      }
    });

    // Web fonts can shift the layout, so re-measure scroll positions once loaded.
    void document.fonts?.ready.then(() => ScrollTrigger.refresh());

    return () => {
      cleanups.forEach((fn) => fn());
      ctx.revert();
    };
  }, []);

  return null;
}
