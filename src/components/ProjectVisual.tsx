"use client";

import { useEffect, useRef } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";
import type { PortfolioProject } from "@/content/projects";

const visualNodes: Record<PortfolioProject["visual"], string[]> = {
  network: ["Institution", "Bootcamp", "Mentor", "Student", "Content"],
  loop: ["Learn", "Validate", "Reward", "Play", "Reflect"],
  publishing: ["Writer", "Review", "Publish", "Museum A", "Museum B"],
  performance: ["Evidence", "Review", "XP", "Level", "Reward"],
  culture: ["Story", "Collection", "Context", "Visit", "Remember"],
  experiments: ["Problem", "Hypothesis", "Prototype", "Learn", "Decide"]
};

export function ProjectVisual({ project }: { project: PortfolioProject }) {
  const visualRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);
  const pendingPositionRef = useRef({ x: 0, y: 0 });

  useEffect(
    () => () => {
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    },
    []
  );

  const updateSpotlight = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (
      event.pointerType !== "mouse" ||
      !window.matchMedia("(hover: hover) and (pointer: fine)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();
    pendingPositionRef.current = {
      x: event.clientX - bounds.left,
      y: event.clientY - bounds.top
    };
    event.currentTarget.dataset.spotlightActive = "true";

    if (frameRef.current !== null) return;
    frameRef.current = window.requestAnimationFrame(() => {
      frameRef.current = null;
      const visual = visualRef.current;
      if (!visual) return;

      visual.style.setProperty(
        "--spotlight-x",
        `${pendingPositionRef.current.x}px`
      );
      visual.style.setProperty(
        "--spotlight-y",
        `${pendingPositionRef.current.y}px`
      );
    });
  };

  const stopSpotlight = () => {
    if (visualRef.current) {
      visualRef.current.dataset.spotlightActive = "false";
    }
    if (frameRef.current !== null) {
      window.cancelAnimationFrame(frameRef.current);
      frameRef.current = null;
    }
  };

  return (
    <div
      className={`project-visual project-visual--${project.visual}`}
      aria-label={`Sanitized system visualization for ${project.title}`}
      data-spotlight-active="false"
      data-spotlight-card
      onPointerCancel={stopSpotlight}
      onPointerEnter={updateSpotlight}
      onPointerLeave={stopSpotlight}
      onPointerMove={updateSpotlight}
      ref={visualRef}
    >
      <div className="project-visual__grid" aria-hidden="true" />
      <span className="project-visual__caption">SANITIZED SYSTEM VIEW</span>
      <div className="project-visual__core">
        <span>{project.shortTitle}</span>
      </div>
      {visualNodes[project.visual].map((node, index) => (
        <div
          className={`project-visual__node project-visual__node--${index + 1}`}
          key={node}
        >
          <span>{String(index + 1).padStart(2, "0")}</span>
          {node}
        </div>
      ))}
      <div className="project-visual__line project-visual__line--one" />
      <div className="project-visual__line project-visual__line--two" />
      <div className="project-visual__line project-visual__line--three" />
    </div>
  );
}
