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
  /**
   * The email sign-up box in the last column. It is hidden (false) because it is not connected to a mailing list yet,
   * and a box that looks like it works but does nothing would mislead visitors. Change this to true only once a mailing
   * list is connected to the box in the page, which is a job for Nick.
   */
  showNewsletter: false,
  newsletterHeading: "Let's Stay in Touch",
  newsletterBlurb: "Join our email list for studio updates, new pieces and shows.",
};
