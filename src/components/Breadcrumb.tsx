import Link from "next/link";
import { Fragment } from "react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

/**
 * Renders the site-standard breadcrumb trail. Items with an `href` are rendered
 * as links; the final (current) item is rendered as plain highlighted text.
 */
export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <div className="pt-8 pb-4">
      <nav
        aria-label="Breadcrumb"
        className="flex text-on-surface-variant font-label-caps text-label-caps gap-2 items-center flex-wrap"
      >
        {items.map((item, index) => (
          <Fragment key={`${item.label}-${index}`}>
            {index > 0 && (
              <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            )}
            {item.href ? (
              <Link href={item.href} className="hover:text-primary transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-primary">{item.label}</span>
            )}
          </Fragment>
        ))}
      </nav>
    </div>
  );
}
