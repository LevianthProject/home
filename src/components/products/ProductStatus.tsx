import type { DigitalProductStatus } from "@/content/products";

export function ProductStatus({ status }: { status: DigitalProductStatus }) {
  return (
    <span
      className="product-status"
      data-status={status.toLowerCase().replace(/\s+/g, "-")}
    >
      {status}
    </span>
  );
}
