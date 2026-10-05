/**
 * The art pieces pictured over the top banner. Large screens show three, laid out by hand; phones show three small ones in a row.
 * `src` and `alt` are what changes when a piece is swapped. The position, tilt and glow are the look of the layout, so leave them.
 *
 * Each piece is shown at its own shape and is never cropped: a tall photo is a tall piece and a wide photo is a wide piece.
 * `maxWidthClass` is how wide it may be, and the component also limits how tall it may be, so a very tall or very wide photo
 * is shown a little smaller instead of running off the banner. Pieces are placed by their top and right edges, so a different
 * shape grows towards the left and down.
 */

export interface DesktopPiece {
  src: string;
  alt: string;
  /** The most it may be wide, as Tailwind classes (one for large screens and a wider one for extra large). */
  maxWidthClass: string;
  /** Distance from the top and the right of the picture area. */
  top: string;
  right: string;
  /** Tilt in degrees. Negative leans left. */
  rotate: number;
  boxShadow: string;
  /** Which piece sits on top of which. Higher is in front. */
  layer: number;
}

export interface PhonePiece {
  src: string;
  alt: string;
  maxWidthClass: string;
  rotate: number;
  boxShadow: string;
}

export const desktopCollage: DesktopPiece[] = [
  // The desert cactus piece, kept as the Arizona anchor
  { src: "/Art1.jpg", alt: "Desert cactus stained glass", maxWidthClass: "max-w-[150px] xl:max-w-[172px]", top: "18%", right: "29%", rotate: -4.5, boxShadow: "0 18px 50px rgba(0,0,0,0.34)", layer: 1 },
  // The tropical scene, the largest feature piece
  { src: "/tropical-scene.jpg", alt: "Stained glass tropical bird scene", maxWidthClass: "max-w-[220px] xl:max-w-[258px]", top: "34%", right: "8%", rotate: 2, boxShadow: "0 22px 60px rgba(0,0,0,0.38)", layer: 3 },
  // The lighthouse panel, a lower supporting piece
  { src: "/lighthouse1.jpg", alt: "Stained glass lighthouse panel", maxWidthClass: "max-w-[160px] xl:max-w-[184px]", top: "64%", right: "26%", rotate: -2, boxShadow: "0 18px 50px rgba(0,0,0,0.34)", layer: 2 },
];

export const phoneCollage: PhonePiece[] = [
  { src: "/lighthouse1.jpg", alt: "Stained glass lighthouse panel", maxWidthClass: "max-w-[78px]", rotate: -3, boxShadow: "0 10px 28px rgba(0,0,0,0.36)" },
  { src: "/tropical-scene.jpg", alt: "Stained glass tropical bird scene", maxWidthClass: "max-w-[102px]", rotate: 1.5, boxShadow: "0 12px 32px rgba(0,0,0,0.4)" },
  { src: "/Art1.jpg", alt: "Desert cactus stained glass", maxWidthClass: "max-w-[78px]", rotate: -2, boxShadow: "0 10px 28px rgba(0,0,0,0.36)" },
];
