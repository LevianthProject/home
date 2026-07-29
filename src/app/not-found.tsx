import { NoPrefetchLink as Link } from "@/components/NoPrefetchLink";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="not-found">
      <p>404 / Signal lost</p>
      <h1>This system path does not exist.</h1>
      <Link className="text-link" href="/">
        <ArrowLeft aria-hidden="true" /> Return home
      </Link>
    </section>
  );
}
