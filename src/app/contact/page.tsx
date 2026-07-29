import type { Metadata } from "next";
import { ArrowUpRight, Mail } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a conversation about product, design, technology leadership, or a complex digital system."
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Contact"
        title={
          <>
            Let’s make
            <br />
            the complex
            <br />
            understandable.
          </>
        }
        copy="I am interested in product roles and collaborations where strategy, experience design, technology, and execution need to work as one system."
      />
      <section className="contact-options">
        <a href={`mailto:${siteConfig.email}`} data-reveal>
          <span>
            <Mail aria-hidden="true" />
            Verified public email
          </span>
          <strong>{siteConfig.email}</strong>
          <ArrowUpRight aria-hidden="true" />
        </a>
        <div className="contact-options__note">
          <p>
            LinkedIn, public GitHub profile, and resume download remain hidden
            until their exact URLs and files are verified.
          </p>
          <p>Based in Indonesia · Open to remote and relocation opportunities.</p>
        </div>
      </section>
    </>
  );
}
