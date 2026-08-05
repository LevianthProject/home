import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { NoPrefetchLink as Link } from "@/components/NoPrefetchLink";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Experiments moved to Concept Lab",
  description: "The experiments archive now lives inside the Concept Lab."
};

export default function ExperimentsPage() {
  return (
    <>
      <PageHero
        label="Experiments archive"
        title={
          <>
            Experiments now
            <br />
            live inside
            <br />
            Concept Lab.
          </>
        }
        copy="Concept Lab is now the primary home for original experience concepts and product or technical explorations."
      />
      <section className="work-bridge work-bridge--solo">
        <p>Original ideation</p>
        <h2>Open the updated Concept Lab.</h2>
        <Link className="text-link" href="/concepts#explorations">
          Go to explorations <ArrowUpRight aria-hidden="true" />
        </Link>
      </section>
    </>
  );
}
