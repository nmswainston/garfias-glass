/**
 * Who the site is, and the addresses it links to. Everything on the page that is a name, a link or a handle comes from here,
 * so a change is made in one place and shows everywhere (the menus, the buttons, the footer).
 */
export const site = {
  name: "Garfias Mountain Glass Art",
  /** The shorter line shown when the home page is shared on Facebook or in a text. */
  shareDescription:
    "Handmade stained glass and copper art from a small Arizona studio. Shop one-of-a-kind pieces and windchimes, or ask about custom work.",
  /** The picture shown when shared: a file in public/, about 1200 x 630 pixels. */
  shareImage: "/share-preview.jpg",
  /**
   * The live address of the site, with no slash at the end, for example "https://www.example.com".
   * Facebook and texts need a full address to find the share picture, so the share tags are only
   * added once this is filled in. Leave it empty until the final domain is known.
   */
  siteUrl: "https://garfiasmountainglassart.com",
  etsyUrl: "https://www.etsy.com/shop/RMglassandcopper",
  instagramUrl: "https://www.instagram.com/garfiasmountainglassart",
  facebookUrl: "https://www.facebook.com/garfiasranchglassart",
  instagramHandle: "@garfiasmountainglassart",
  /** The title on the browser tab, in search results, and when the home page is shared. */
  title: "Garfias Mountain Glass Art | Handmade Stained Glass",
  /** The description Google shows under the title: one or two sentences, under about 160 characters. */
  description:
    "Handmade stained glass and copper art by Ronda Myers, crafted in her Arizona studio for more than 30 years. Shop available pieces and windchimes, or ask about custom work.",
  /** The two logos, which are .png files in public/. The words for people who cannot see them are the name above. */
  logoHeader: "/logo.png",
  logoFooter: "/circle-logo.png",
  /** The line in the teal bar across the very top of the page. */
  announcement: "Handmade Stained Glass Art Inspired by the Land We Love",
};
