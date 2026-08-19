import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { ProductGrid } from "@/components/products/ProductGrid";
import {
  accessDigitalProducts,
  platformDigitalProduct,
  storefrontDigitalProducts
} from "@/content/products";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Digital Products",
  description:
    "Independent digital products, tools, and focused resources designed and built by Ghazariz."
};

export default function ProductsPage() {
  return (
    <>
      <section className="products-hero">
        <div className="products-hero__marker" aria-hidden="true">
          PRODUCTS
        </div>
        <p className="section-kicker">Independent digital products</p>
        <h1>
          Products I build
          <br />
          for real-life problems.
        </h1>
        <div className="products-hero__intro">
          <p>
            A growing collection of independent digital products, tools,
            templates, and focused systems designed to make work and everyday
            life easier.
          </p>
          <div className="products-hero__meta" aria-label="Product area metadata">
            <span>Independent</span>
            <span>Digital</span>
            <span>Direct-to-user</span>
          </div>
        </div>
      </section>

      <section className="products-catalog" aria-labelledby="products-catalog-title">
        <div className="products-catalog__intro" data-reveal>
          <p className="section-kicker">The independent product shelf</p>
          <h2 id="products-catalog-title">
            One system,
            <br />
            many useful directions.
          </h2>
          <p>
            ProdOS is the operating system behind this shelf: the workspace I
            use to move products through ideation, coding, preview, release,
            and marketing. The products change; the operating rhythm stays
            clear.
          </p>
        </div>

        <div className="products-catalog__group products-catalog__group--platform">
          <div className="products-catalog__group-heading">
            <p className="section-kicker">01 / Product operating system</p>
            <p>Where the shelf gets its shape.</p>
          </div>
          <ProductGrid products={[platformDigitalProduct]} variant="platform" />
        </div>

        <div className="products-catalog__group products-catalog__group--storefront">
          <div className="products-catalog__group-heading">
            <p className="section-kicker">02 / Ready to access</p>
            <p>Small digital products with a direct route to checkout.</p>
          </div>
          <ProductGrid products={storefrontDigitalProducts} variant="storefront" />
        </div>

        <div className="products-catalog__group products-catalog__group--access">
          <div className="products-catalog__group-heading">
            <p className="section-kicker">03 / Other product builds</p>
            <p>Private previews from the wider Ghazariz product practice.</p>
          </div>
          <ProductGrid products={accessDigitalProducts} variant="access" />
        </div>
      </section>

      <section className="products-builder-statement" data-reveal>
        <p>Builder statement</p>
        <h2>
          Designing is one thing.
          <br />
          Shipping your own product is another.
        </h2>
        <span>
          Independent products let me work through the full cycle - problem
          framing, product decisions, interface design, implementation,
          packaging, distribution, and iteration.
        </span>
      </section>

      <section className="products-more" data-reveal>
        <p>More products are being built.</p>
        <span>
          This collection will continue to grow as new experiments become useful
          enough to release.
        </span>
        <a className="text-link" href={`mailto:${siteConfig.email}`}>
          Ask about product updates <ArrowUpRight aria-hidden="true" />
        </a>
      </section>
    </>
  );
}
