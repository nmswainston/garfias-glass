import { site } from "./site";

/** The words and links in the dark footer at the bottom of the page. */
export const footer = {
  /** Two lines under the logo. The year is filled in by the page, so it is always the current year. */
  copyright: [`© ${new Date().getFullYear()} ${site.name}.`, "All Rights Reserved."],
  studioHeading: "Shop & Studio",
  studioLinks: [
    { label: "Shop on Etsy", href: site.etsyUrl },
    { label: "Ask About Custom Work", href: site.etsyUrl },
    { label: "About Ronda", href: "#about" },
    { label: "View Gallery", href: "#gallery" },
  ],
  followHeading: "Follow",
  followBlurb: "See new pieces, studio updates, and works in progress.",
  newsletterHeading: "Let's Stay in Touch",
  newsletterBlurb: "Join our email list for studio updates, new pieces and shows.",
};
