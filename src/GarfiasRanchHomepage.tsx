import { useState, useEffect } from "react";
import About from "./components/About";
import AnnouncementBar from "./components/AnnouncementBar";
import FeaturesStrip from "./components/FeaturesStrip";
import FollowAlong from "./components/FollowAlong";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import MadeByHand from "./components/MadeByHand";
import ScrollToTopButton from "./components/ScrollToTopButton";
import ShopByCategory from "./components/ShopByCategory";
import StickyHeader from "./components/StickyHeader";

// The page is the sections below, top to bottom. Each section lives in its own
// file in src/components and draws its words and pictures from src/data.
// This file only keeps what the sections share: the open/closed menu and the scroll effects.

export default function GarfiasRanchHomepage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  // Sticky header: appears after scrolling ~75% of the hero
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.75);
      setShowScrollTop(window.scrollY > window.innerHeight * 0.65);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-reveal: fade+rise sections as they enter the viewport
  useEffect(() => {
    const revealOnScroll = () => {
      document.querySelectorAll<HTMLElement>(".reveal:not(.revealed)").forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.88) {
          el.classList.add("revealed");
        }
      });
    };
    window.addEventListener("scroll", revealOnScroll, { passive: true });
    revealOnScroll(); // check immediately on mount
    return () => window.removeEventListener("scroll", revealOnScroll);
  }, []);

  // Keep hash links reliable after React renders the section targets
  useEffect(() => {
    const scrollToHash = () => {
      const id = window.location.hash.replace("#", "");
      if (!id) return;
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ block: "start" });
      });
    };
    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,400;1,700&family=Dancing+Script:wght@700&family=Pinyon+Script&display=swap');
        .pinyon { font-family: 'Pinyon Script', cursive; }
        /* Scroll-reveal */
        .reveal { opacity: 0; transform: translateY(32px); transition: opacity 0.75s ease, transform 0.75s ease; }
        .revealed { opacity: 1; transform: translateY(0); }
        /* Sticky header slide-down */
        @keyframes slideDown { from { opacity: 0; transform: translateY(-100%); } to { opacity: 1; transform: translateY(0); } }
        .sticky-nav { animation: slideDown 0.35s ease forwards; }
      `}</style>

      <main className="min-h-screen bg-[#eadbc5] text-[#2e1f14]">
        {scrolled && <StickyHeader menuOpen={menuOpen} onToggleMenu={toggleMenu} onCloseMenu={closeMenu} />}
        <AnnouncementBar />
        <Hero menuOpen={menuOpen} onToggleMenu={toggleMenu} onCloseMenu={closeMenu} />
        <MadeByHand />
        <About />
        <ShopByCategory />
        <FeaturesStrip />
        <FollowAlong />
        <Footer />
        {showScrollTop && <ScrollToTopButton />}
      </main>
    </>
  );
}
