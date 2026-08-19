"use client";

import { useCallback, useState } from "react";
import type { DigitalProduct, DigitalProductTier } from "@/content/products";
import { ProductCard } from "./ProductCard";
import { ProductOverviewModal } from "./ProductOverviewModal";

export function ProductGrid({
  products,
  variant
}: {
  products: DigitalProduct[];
  variant: DigitalProductTier;
}) {
  const [selectedProduct, setSelectedProduct] = useState<DigitalProduct | null>(
    null
  );

  const closeModal = useCallback(() => {
    setSelectedProduct(null);
  }, []);

  return (
    <>
      <div className={`product-grid product-grid--${variant}`}>
        {products.map((product, index) => (
          <ProductCard
            index={index}
            key={product.slug}
            product={product}
            variant={variant}
            onOverview={variant === "access" ? undefined : setSelectedProduct}
          />
        ))}
      </div>
      <ProductOverviewModal
        product={selectedProduct}
        productIndex={products.findIndex(
          (product) => product.slug === selectedProduct?.slug
        )}
        onClose={closeModal}
      />
    </>
  );
}
