"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState
} from "react";

type Experience = {
  year: string;
  role: string;
  organization?: string;
  detail?: string;
  current?: boolean;
};

const experiences: Experience[] = [
  {
    year: "2017",
    role: "EDM Music Producer"
  },
  {
    year: "2018",
    role: "Music Composer"
  },
  {
    year: "2019",
    role: "Web Programming Learner"
  },
  {
    year: "2021",
    role: "WPU Community Manager & Bellshade Ex-Founder"
  },
  {
    year: "2022",
    role: "Community Lead Codepolitan & Project Manager Virtual Moves Co"
  },
  {
    year: "Current",
    role: "Product & Technology Leadership",
    organization: "Minilemon ecosystem",
    detail:
      "Product strategy, UX direction, infrastructure, teams, hiring, and cross-functional execution.",
    current: true
  },
  {
    year: "Current",
    role: "Frontend Mentor",
    organization: "Codepolitan / KelasFullstack ecosystem",
    detail:
      "Frontend learning, technical guidance, and developer growth.",
    current: true
  },
  {
    year: "Current",
    role: "Community Manager",
    organization: "Developer education communities",
    detail:
      "Communication, engagement, learning support, events, and member experience.",
    current: true
  }
];

const currentStartIndex = experiences.findIndex((experience) => experience.current);

export function ExperienceTimeline() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Array<HTMLElement | null>>([]);
  const scrollFrameRef = useRef<number | null>(null);
  const activeIndexRef = useRef(currentStartIndex);
  const [activeIndex, setActiveIndex] = useState(currentStartIndex);
  const [canGoEarlier, setCanGoEarlier] = useState(true);
  const [canGoNewer, setCanGoNewer] = useState(false);

  const syncPositionState = useCallback(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const maxScroll = Math.max(0, viewport.scrollWidth - viewport.clientWidth);
    const position = viewport.scrollLeft;
    const nearestIndex = itemRefs.current.reduce(
      (nearest, item, index) => {
        if (!item) return nearest;
        const distance = Math.abs(item.offsetLeft - position);
        return distance < nearest.distance ? { index, distance } : nearest;
      },
      { index: 0, distance: Number.POSITIVE_INFINITY }
    ).index;

    activeIndexRef.current = nearestIndex;
    setActiveIndex(nearestIndex);
    setCanGoEarlier(nearestIndex > 0);
    setCanGoNewer(position < maxScroll - 2);
  }, []);

  const scrollToIndex = useCallback((index: number, behavior: ScrollBehavior) => {
    const viewport = viewportRef.current;
    const item = itemRefs.current[Math.max(0, Math.min(index, experiences.length - 1))];
    if (!viewport || !item) return;

    viewport.scrollTo({
      left: item.offsetLeft,
      behavior
    });
  }, []);

  useLayoutEffect(() => {
    scrollToIndex(currentStartIndex, "auto");
    syncPositionState();
  }, [scrollToIndex, syncPositionState]);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const handleScroll = () => {
      if (scrollFrameRef.current !== null) return;
      scrollFrameRef.current = window.requestAnimationFrame(() => {
        scrollFrameRef.current = null;
        syncPositionState();
      });
    };

    const resizeObserver = new ResizeObserver(() => {
      if (scrollFrameRef.current !== null) {
        window.cancelAnimationFrame(scrollFrameRef.current);
      }
      scrollFrameRef.current = window.requestAnimationFrame(() => {
        scrollFrameRef.current = null;
        scrollToIndex(activeIndexRef.current, "auto");
        syncPositionState();
      });
    });

    viewport.addEventListener("scroll", handleScroll, { passive: true });
    resizeObserver.observe(viewport);

    return () => {
      viewport.removeEventListener("scroll", handleScroll);
      resizeObserver.disconnect();
      if (scrollFrameRef.current !== null) {
        window.cancelAnimationFrame(scrollFrameRef.current);
      }
    };
  }, [scrollToIndex, syncPositionState]);

  const move = (direction: -1 | 1) => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    scrollToIndex(activeIndex + direction, reduceMotion ? "auto" : "smooth");
  };

  const activeExperience = experiences[activeIndex];

  return (
    <div
      className="experience-timeline"
      data-active-index={activeIndex}
      data-experience-timeline
    >
      <div className="experience-timeline__controls">
        <p className="experience-timeline__status" aria-live="polite">
          Viewing {activeExperience.current ? "current work" : activeExperience.year}
        </p>
        <button
          aria-label="View earlier experience"
          className="experience-timeline__button"
          disabled={!canGoEarlier}
          onClick={() => move(-1)}
          type="button"
        >
          <ChevronLeft aria-hidden="true" />
        </button>
        <button
          aria-label="View newer experience"
          className="experience-timeline__button"
          disabled={!canGoNewer}
          onClick={() => move(1)}
          type="button"
        >
          <ChevronRight aria-hidden="true" />
        </button>
      </div>

      <div
        aria-label="Professional experience timeline"
        className="experience-timeline__viewport"
        ref={viewportRef}
        role="region"
        tabIndex={0}
      >
        <div className="experience-timeline__track">
          {experiences.map((experience, index) => (
            <article
              className="experience-timeline__item"
              data-current={experience.current ? "true" : undefined}
              key={`${experience.year}-${experience.role}`}
              ref={(item) => {
                itemRefs.current[index] = item;
              }}
            >
              <p className="experience-timeline__year">{experience.year}</p>
              <div className="experience-timeline__rail" aria-hidden="true">
                <span />
              </div>
              {experience.organization ? (
                <p className="experience-timeline__organization">
                  {experience.organization}
                </p>
              ) : null}
              <h3>{experience.role}</h3>
              {experience.detail ? (
                <p className="experience-timeline__detail">
                  {experience.detail}
                </p>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
