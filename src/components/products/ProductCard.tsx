"use client";

import { useRef } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";
import type { DigitalProduct } from "@/content/products";
import { ProductActions } from "./ProductActions";
import { ProductPlaceholder } from "./ProductPlaceholder";
import { ProductStatus } from "./ProductStatus";

export function ProductCard({
  product,
  index,
  onOverview,
  variant = product.tier
}: {
  product: DigitalProduct;
  index: number;
  onOverview?: (product: DigitalProduct) => void;
  variant?: DigitalProduct["tier"];
}) {
  const cardRef = useRef<HTMLElement>(null);
  const frameRef = useRef<number | null>(null);

  const updateGloss = (event: ReactPointerEvent<HTMLElement>) => {
    if (
      event.pointerType !== "mouse" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !window.matchMedia("(hover: hover) and (pointer: fine)").matches
    ) {
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;

    if (frameRef.current !== null) {
      window.cancelAnimationFrame(frameRef.current);
    }

    frameRef.current = window.requestAnimationFrame(() => {
      cardRef.current?.style.setProperty("--product-shine-x", `${x}px`);
      cardRef.current?.style.setProperty("--product-shine-y", `${y}px`);
    });
  };

  const stopGloss = () => {
    if (frameRef.current !== null) {
      window.cancelAnimationFrame(frameRef.current);
      frameRef.current = null;
    }
  };

  return (
    <article
      className={`product-card product-card--${variant}${product.featured ? " product-card--featured" : ""}`}
      data-reveal
      onPointerMove={updateGloss}
      onPointerLeave={stopGloss}
      ref={cardRef}
    >
      <ProductPlaceholder product={product} index={index} />
      <div className="product-card__body">
        <div className="product-card__meta">
          <span>{product.category}</span>
          <ProductStatus status={product.status} />
        </div>
        <h3>{product.name}</h3>
        <p>{product.tagline}</p>
        {product.price ? <strong className="product-card__price">{product.price}</strong> : null}
        <ProductActions
          product={product}
          compact
          onOverview={onOverview ? () => onOverview(product) : undefined}
        />
      </div>
    </article>
  );
}
