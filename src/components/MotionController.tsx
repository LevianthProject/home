"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function MotionController() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      gsap.fromTo(
        ".hero__line > span",
        { yPercent: 110, rotate: 1.5 },
        {
          yPercent: 0,
          rotate: 0,
          duration: 1.05,
          stagger: 0.1,
          ease: "expo.out",
          delay: 0.15
        }
      );

      gsap.fromTo(
        ".hero__art",
        { clipPath: "inset(0 0 100% 0)", scale: 1.08 },
        {
          clipPath: "inset(0 0 0% 0)",
          scale: 1,
          duration: 1.35,
          ease: "expo.out",
          delay: 0.24
        }
      );

      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
        gsap.fromTo(
          element,
          { y: 46, opacity: 0, filter: "blur(8px)" },
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.9,
            ease: "expo.out",
            scrollTrigger: {
              trigger: element,
              start: "top 86%",
              once: true
            }
          }
        );
      });

      gsap.to(".hero__art-image", {
        yPercent: 9,
        scale: 1.04,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: 0.8
        }
      });

      gsap.utils.toArray<HTMLElement>("[data-drift]").forEach((element) => {
        gsap.to(element, {
          yPercent: -8,
          ease: "none",
          scrollTrigger: {
            trigger: element,
            start: "top bottom",
            end: "bottom top",
            scrub: 1
          }
        });
      });
    });

    return () => context.revert();
  }, []);

  return null;
}
