import { site } from "../data/site";

export default function Logo({ variant = "header" }: { variant?: "header" | "footer" }) {
  const isFooter = variant === "footer";
  return (
    <img
      src={isFooter ? site.logoFooter : site.logoHeader}
      alt={site.name}
      className={isFooter ? "h-36 w-auto" : "h-[110px] sm:h-[165px] lg:h-[240px] w-auto"}
    />
  );
}
