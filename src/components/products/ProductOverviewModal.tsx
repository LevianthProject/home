"use client";

import { useEffect, useId, useRef } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import type { DigitalProduct } from "@/content/products";
import { ProductActions } from "./ProductActions";
import { ProductPlaceholder } from "./ProductPlaceholder";
import { ProductStatus } from "./ProductStatus";

const focusableSelector = [
  "a[href]",
  "button:not([disabled])",
  "textarea:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "[tabindex]:not([tabindex='-1'])"
].join(",");

export function ProductOverviewModal({
  product,
  productIndex,
  onClose
}: {
  product: DigitalProduct | null;
  productIndex: number;
  onClose: () => void;
}) {
  const titleId = useId();
  const modalRef = useRef<HTMLDivElement>(null);
  const previouslyFocusedRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!product) return;

    previouslyFocusedRef.current = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusTimer = window.setTimeout(() => {
      modalRef.current
        ?.querySelector<HTMLElement>(focusableSelector)
        ?.focus();
    }, 80);

    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab" || !modalRef.current) return;

      const focusable = Array.from(
        modalRef.current.querySelectorAll<HTMLElement>(focusableSelector)
      ).filter((element) => !element.hasAttribute("disabled"));

      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.clearTimeout(focusTimer);
      window.removeEventListener("keydown", handleKeydown);
      document.body.style.overflow = previousOverflow;
      previouslyFocusedRef.current?.focus();
    };
  }, [onClose, product]);

  if (!product) return null;

  const hasHelpsWith = Boolean(product.helpsWith?.length);
  const hasIncludes = Boolean(product.includes?.length);
  const hasFormat = Boolean(product.format?.length);

  return createPortal(
    <div className="product-modal-shell" role="presentation">
      <button
        className="product-modal-backdrop"
        type="button"
        aria-label="Close product overview"
        onClick={onClose}
      />
      <div
        className="product-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        ref={modalRef}
      >
        <button
          className="product-modal__close"
          type="button"
          aria-label="Close product overview"
          onClick={onClose}
        >
          <X aria-hidden="true" />
        </button>
        <div className="product-modal__media">
          <ProductPlaceholder product={product} index={Math.max(productIndex, 0)} />
        </div>
        <div className="product-modal__content">
          <div className="product-modal__meta">
            <span>{product.category}</span>
            <ProductStatus status={product.status} />
          </div>
          <h2 id={titleId}>{product.name}</h2>
          <p className="product-modal__tagline">{product.tagline}</p>
          <p>{product.shortDescription}</p>
          {product.audience ? (
            <section>
              <h3>Built for</h3>
              <p>{product.audience}</p>
            </section>
          ) : null}
          {hasHelpsWith ? (
            <section>
              <h3>Helps with</h3>
              <ul>
                {product.helpsWith?.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </section>
          ) : null}
          {hasIncludes ? (
            <section>
              <h3>What is included</h3>
              <ul>
                {product.includes?.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </section>
          ) : null}
          {hasFormat ? (
            <section>
              <h3>Product format</h3>
              <div className="product-modal__formats">
                {product.format?.map((item) => <span key={item}>{item}</span>)}
              </div>
            </section>
          ) : null}
          {product.status === "In Development" ? (
            <p className="product-modal__note">Currently in development.</p>
          ) : null}
          <ProductActions product={product} />
        </div>
      </div>
    </div>,
    document.body
  );
}
