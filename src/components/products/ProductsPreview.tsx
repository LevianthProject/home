import { ArrowUpRight } from "lucide-react";
import { NoPrefetchLink as Link } from "@/components/NoPrefetchLink";
import { featuredDigitalProducts } from "@/content/products";
import { ProductPlaceholder } from "./ProductPlaceholder";
import { ProductStatus } from "./ProductStatus";

export function ProductsPreview() {
  return (
    <section className="section products-preview" id="independent-products">
      <div className="products-preview__intro" data-reveal>
        <p className="section-kicker">03 / Independent products</p>
        <h2>
          I build products
          <br />
          people can actually use.
        </h2>
        <div>
          <p>
            Small, focused digital products built around real problems -
            designed, packaged, and released independently.
          </p>
          <Link className="text-link" href="/products">
            Explore products <ArrowUpRight aria-hidden="true" />
          </Link>
        </div>
      </div>
      <div className="products-preview__shelf" data-reveal>
        {featuredDigitalProducts.map((product, index) => (
          <article key={product.slug}>
            <ProductPlaceholder compact product={product} index={index} />
            <div>
              <span>{product.category}</span>
              <h3>{product.name}</h3>
              <p>{product.tagline}</p>
              <ProductStatus status={product.status} />
              {product.price ? <strong>{product.price}</strong> : null}
            </div>
          </article>
        ))}
      </div>
      <Link className="index-link" href="/products">
        View products <ArrowUpRight aria-hidden="true" />
      </Link>
    </section>
  );
}
