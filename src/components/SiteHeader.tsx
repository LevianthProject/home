"use client";

import { useEffect, useRef, useState } from "react";
import { NoPrefetchLink as Link } from "@/components/NoPrefetchLink";
import { Menu, X } from "lucide-react";

const navigation = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Process", href: "/process" },
  { label: "Thoughts", href: "/thoughts" },
  { label: "Contact", href: "/contact" }
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const firstLink = useRef<HTMLAnchorElement>(null);
  const menu = useRef<HTMLDivElement>(null);
  const toggleButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) {
      document.body.style.removeProperty("overflow");
      return;
    }

    document.body.style.overflow = "hidden";
    const focusTimer = window.setTimeout(() => {
      menu.current?.querySelector<HTMLAnchorElement>("a")?.focus();
    }, 80);
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        requestAnimationFrame(() => toggleButton.current?.focus());
        return;
      }

      if (event.key !== "Tab") return;

      const menuLinks = Array.from(
        menu.current?.querySelectorAll<HTMLAnchorElement>("a") ?? []
      );
      const focusable = [
        toggleButton.current,
        ...menuLinks
      ].filter(
        (element): element is HTMLAnchorElement | HTMLButtonElement =>
          element !== null
      );

      if (focusable.length === 0) return;

      const currentIndex = focusable.findIndex(
        (element) => element === document.activeElement
      );
      const nextIndex = event.shiftKey
        ? currentIndex <= 0
          ? focusable.length - 1
          : currentIndex - 1
        : currentIndex === focusable.length - 1
          ? 0
          : currentIndex + 1;

      event.preventDefault();
      focusable[nextIndex]?.focus();
    };

    window.addEventListener("keydown", handleKeydown);
    return () => {
      window.clearTimeout(focusTimer);
      window.removeEventListener("keydown", handleKeydown);
      document.body.style.removeProperty("overflow");
    };
  }, [open]);

  return (
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label="Ghazariz home">
        GHAZARIZ<span aria-hidden="true">.</span>
      </Link>

      <nav className="desktop-nav" aria-label="Primary navigation">
        {navigation.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
        <Link className="nav-resume" href="/resume">
          Resume
        </Link>
      </nav>

      <button
        ref={toggleButton}
        className="menu-toggle"
        type="button"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>

      <div
        ref={menu}
        id="mobile-navigation"
        className={`mobile-menu${open ? " mobile-menu--open" : ""}`}
        aria-hidden={!open}
      >
        <nav aria-label="Mobile navigation">
          {[...navigation, { label: "Resume", href: "/resume" }].map(
            (item, index) => (
              <Link
                ref={index === 0 ? firstLink : undefined}
                key={item.href}
                href={item.href}
                tabIndex={open ? 0 : -1}
                onClick={() => setOpen(false)}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                {item.label}
              </Link>
            )
          )}
        </nav>
        <p>Based in Indonesia · Open to remote and relocation</p>
      </div>
    </header>
  );
}
