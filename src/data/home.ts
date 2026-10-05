/** The words and pictures of the home page sections, from the top of the page down to the "Shop by Category" row. */

export const hero = {
  /** The big picture behind the headline. */
  backgroundImage: "/hero.jpg",
  /** Two lines. The second one is shown in teal. */
  headline: ["Where light", "becomes art"],
  subline: "30 years of stained glass, copper & color. Handmade in the Arizona desert.",
  buttonLabel: "Shop the Collection",
};

/** The three-part strip under the top banner: a picture, a short message, and another picture. */
export const madeByHand = {
  leftImage: { src: "/shop1.jpg", alt: "Sheets of stained glass organized in the studio" },
  rightImage: { src: "/shop2.jpg", alt: "Garfias Mountain Glass Art studio workspace" },
  heading: "Made by Hand.",
  subheading: "Inspired by home.",
  text: "Every piece is individually designed and handcrafted in our ranch studio in Arizona.",
  buttonLabel: "Our Story",
};

/** The "Meet the Artist" section. The paragraphs are shown in order. */
export const about = {
  eyebrow: "Meet the Artist",
  name: "Ronda Myers",
  tagline: "Garfias Mountain Glass Art",
  paragraphs: [
    "Ronda Myers has loved stained glass since childhood. Growing up in the Midwest, she was mesmerized by the stained glass windows in the Victorian homes around her hometown, drawn to their color, design, and the feeling they created when sunlight moved through them.",
    "Even then, she wanted to know how those windows were made. Years later, after moving to Arizona, she found a stained glass course through a local city art program and finally had the chance to learn the craft herself.",
    "With guidance from an experienced and encouraging instructor, Ronda learned the foundations of stained glass window making and kept going. More than 30 years later, she still designs, cuts, solders, and finishes each piece by hand from her Arizona studio.",
    "She has also started creating copper and glass windchimes, made to bring color, light, and sound outdoors. Each one is built with glass beads, crystals, copper, and brass bells so it can stand up to weather and wind while keeping a delicate look.",
    "Garfias Mountain Glass Art is her way of sharing that lifelong love of glass with others. She hopes each piece brings as much joy to its new home as she had while making it.",
  ],
  shopButtonLabel: "Shop Available Pieces",
  customButtonLabel: "Ask About Custom Work",
};

/** Which small picture goes with each item in the teal strip. The pictures themselves are drawn in the page. */
export type FeatureIcon = "cactus" | "sunrise" | "heart" | "truck";

/** The teal strip of four short promises. */
export const features: Array<{ icon: FeatureIcon; title: string; text: string }> = [
  { icon: "cactus", title: "Made by Hand", text: "Each piece is cut, soldered and crafted with care in our Arizona studio." },
  { icon: "sunrise", title: "Inspired by Nature", text: "The colors, textures and landscapes of the Southwest inspire every piece." },
  { icon: "heart", title: "Made to Last", text: "Quality glass and materials that stand the test of time." },
  { icon: "truck", title: "Shipped with Care", text: "Thoughtful packaging to ensure your art arrives safely." },
];
