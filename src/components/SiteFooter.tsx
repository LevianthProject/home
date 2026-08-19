import { NoPrefetchLink as Link } from "@/components/NoPrefetchLink";
import { ArrowUpRight, Download } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <p className="footer-kicker">Have a complex product problem?</p>
        <a className="footer-email" href={`mailto:${siteConfig.email}`}>
          {siteConfig.email}
          <ArrowUpRight aria-hidden="true" />
        </a>
      </div>
      <div className="footer-meta">
        <p>Ghazariz · Product, design, technology, systems.</p>
        <div>
          <Link href="/work">Work</Link>
          <Link href="/concepts">Concepts</Link>
          <Link href="/products">Products</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <a
            className="footer-download"
            href="/Muhammad_Ghazariz_Resume.pdf"
            download
          >
            <Download aria-hidden="true" />
            Download My Resume
          </a>
        </div>
      </div>
    </footer>
  );
}
