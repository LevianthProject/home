import { ArrowUpRight } from "lucide-react";
import type { DigitalProduct } from "@/content/products";
import { siteConfig } from "@/lib/site";

export function ProductActions({
  product,
  onOverview,
  compact = false
}: {
  product: DigitalProduct;
  onOverview?: () => void;
  compact?: boolean;
}) {
  const gumroadUrl = product.gumroadUrl?.trim();
  const lynkUrl = product.lynkUrl?.trim();
  const requestAccessUrl = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
    `Request access: ${product.name}`
  )}&body=${encodeURIComponent(
    `Hi Ghazariz,\n\nI would like to request access to ${product.name}.\n\nThanks.`
  )}`;

  if (!gumroadUrl && !lynkUrl && !product.demoUrl && !onOverview && product.tier !== "access") {
    return null;
  }

  return (
    <div className={`product-actions${compact ? " product-actions--compact" : ""}`}>
      {gumroadUrl ? (
        <a
          className="product-action product-action--storefront"
          href={gumroadUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${product.name} on Gumroad`}
        >
          {compact ? "GUMROAD" : "GET ON GUMROAD"}
          <ArrowUpRight aria-hidden="true" />
        </a>
      ) : null}
      {lynkUrl ? (
        <a
          className="product-action product-action--storefront"
          href={lynkUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${product.name} on Lynk`}
        >
          {compact ? "LYNK" : "GET ON LYNK"}
          <ArrowUpRight aria-hidden="true" />
        </a>
      ) : null}
      {product.demoUrl ? (
        <a
          className="product-action product-action--demo"
          href={product.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${product.name} preview`}
        >
          EXPLORE PRODOS
          <ArrowUpRight aria-hidden="true" />
        </a>
      ) : null}
      {product.tier === "access" ? (
        <a
          className="product-action product-action--access"
          href={requestAccessUrl}
          aria-label={`Request access to ${product.name}`}
        >
          REQUEST ACCESS
          <ArrowUpRight aria-hidden="true" />
        </a>
      ) : null}
      {onOverview ? (
        <button
          className="product-action product-action--overview"
          type="button"
          onClick={onOverview}
        >
          OVERVIEW
        </button>
      ) : null}
    </div>
  );
}
