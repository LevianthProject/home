import Link, { type LinkProps } from "next/link";
import {
  forwardRef,
  type AnchorHTMLAttributes,
  type ReactNode
} from "react";

type NoPrefetchLinkProps = LinkProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> & {
    children: ReactNode;
  };

/**
 * GitHub Pages serves the portfolio as a static export. Disabling speculative
 * RSC prefetches keeps the network console clean while preserving client-side
 * navigation when a visitor intentionally follows a link.
 */
export const NoPrefetchLink = forwardRef<
  HTMLAnchorElement,
  NoPrefetchLinkProps
>(function NoPrefetchLink({ children, ...props }, ref) {
  return (
    <Link {...props} ref={ref} prefetch={false}>
      {children}
    </Link>
  );
});
