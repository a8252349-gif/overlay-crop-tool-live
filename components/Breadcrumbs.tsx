import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { absoluteUrl } from "@/lib/site";
import type { Locale } from "@/lib/i18n";

export type BreadcrumbItem = { name: string; path?: string };

export function Breadcrumbs({ locale, items }: { locale: Locale; items: BreadcrumbItem[] }) {
  const fullItems = [{ name: "Overlay Crop", path: `/${locale}/` }, ...items];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: fullItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.path ? { item: absoluteUrl(item.path) } : {}),
    })),
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <ol>
          {fullItems.map((item, index) => (
            <li key={`${item.name}-${index}`}>
              {item.path && index < fullItems.length - 1 ? <Link href={item.path}>{item.name}</Link> : <span aria-current={index === fullItems.length - 1 ? "page" : undefined}>{item.name}</span>}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
