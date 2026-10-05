import { ArrowUp } from "lucide-react";

/** The small square button that returns the visitor to the top of the page. */
export default function ScrollToTopButton() {
  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-5 right-5 z-50 inline-flex h-11 w-11 items-center justify-center bg-[#0b565c] text-[#eadbc5] shadow-xl transition-colors hover:bg-[#084d53] focus:outline-none focus:ring-2 focus:ring-[#eadbc5] focus:ring-offset-2 focus:ring-offset-[#2b1b10]"
    >
      <ArrowUp className="h-5 w-5" strokeWidth={1.8} />
    </button>
  );
}
