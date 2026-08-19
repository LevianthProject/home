import type { DigitalProduct } from "@/content/products";
import Image from "next/image";
import { assetPath } from "@/lib/site";

export function ProductPlaceholder({
  product,
  index,
  compact = false
}: {
  product: DigitalProduct;
  index: number;
  compact?: boolean;
}) {
  return (
    <div
      className={`product-placeholder${compact ? " product-placeholder--compact" : ""}${
        product.visual ? ` product-placeholder--${product.visual}` : ""
      }`}
      data-tier={product.tier}
    >
      {product.cover ? (
        <Image
          className="product-placeholder__image"
          src={assetPath(product.cover)}
          alt={`Preview of ${product.name}`}
          fill
          sizes="(max-width: 560px) 100vw, (max-width: 1080px) 50vw, 33vw"
          priority={product.tier === "platform"}
        />
      ) : (
        <>
          <div className="product-placeholder__field" aria-hidden="true" />
          <div className="product-placeholder__package" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
        </>
      )}
      <div className="product-placeholder__copy">
        <span>{product.visual ? "PRODUCT OPERATING SYSTEM" : "PRODUCT VISUAL"}</span>
        <strong>{product.name}</strong>
        <em>{product.category}</em>
      </div>
      <div className="product-placeholder__pending">
        {product.tier === "access" ? "PRIVATE PREVIEW" : product.visual ? "SYSTEM CORE" : "AVAILABLE NOW"}
      </div>
      <div className="product-placeholder__index" aria-hidden="true">
        {String(index + 1).padStart(2, "0")}
      </div>
    </div>
  );
}
