import { site } from "./site";

export interface NavLink {
  label: string;
  /** "#about" scrolls to a section on this page. A full address goes to another site. */
  href: string;
  /** True for a link that leaves the site, so it opens in a new tab. */
  external?: boolean;
  /** Marks the page you are on, in the large menu at the top. */
  current?: boolean;
  /** Shows a small arrow after the label, in the large menu at the top. */
  arrow?: boolean;
}

/** The menu, in order. It is the same list in the large menu, the one that slides in as you scroll, and the phone menu. */
export const navLinks: NavLink[] = [
  { label: "Home", href: "#", current: true },
  { label: "Shop", href: site.etsyUrl, external: true, arrow: true },
  { label: "About", href: "#about" },
  { label: "Custom Orders", href: site.etsyUrl, external: true },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];
