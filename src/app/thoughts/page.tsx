import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Product & Technical Explorations",
  description:
    "Product hypotheses, workflow explorations, and technical experiments now connected to the Concept Lab."
};

const entries = [
  ["Cosplay Rental Operating Platform", "Concept", "A B2B SaaS direction for inventory, size, character, condition, booking, deposit, returns, damage, cleaning, reminders, and customer history."],
  ["Laundry Subscription and IoT Control", "Research", "A concept replacing coin-operated access with subscriptions, QR activation, booking, limits, payment, maintenance visibility, and connected machine control."],
  ["Virtual Academy", "Future direction", "A future MLS layer combining lightweight virtual environments, classrooms, voice, whiteboards, assignments, and group activity."],
  ["AI-Assisted Game Development", "Technical exploration", "Exploring coding agents as development partners across Roblox, Godot, and lightweight web-game engines."],
  ["Recruitment and Talent Systems", "Product direction", "Applicant tracking, internship campaigns, screening, interviews, onboarding, talent pools, employer branding, and referrals."]
];

export default function ThoughtsPage() {
  return (
    <>
      <PageHero
        label="Product & technical explorations"
        title={
          <>
            Explorations beside
            <br />
            expensive
            <br />
            products.
          </>
        }
        copy="These entries remain as product and technical explorations. Original experience concepts now live in the dedicated Concept Lab."
      />
      <section className="thoughts-index">
        {entries.map(([title, status, copy], index) => (
          <article key={title} data-reveal>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <div>
              <p>{status}</p>
              <h2>{title}</h2>
            </div>
            <p>{copy}</p>
          </article>
        ))}
      </section>
    </>
  );
}
