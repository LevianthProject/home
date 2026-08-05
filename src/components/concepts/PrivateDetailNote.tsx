import type { ReactNode } from "react";

export function PrivateDetailNote({ children }: { children?: ReactNode }) {
  return (
    <p className="private-detail-note">
      {children ?? "Public summaries only. Detailed proposal mechanics and source material remain private."}
    </p>
  );
}
