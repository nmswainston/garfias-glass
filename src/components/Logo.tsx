// Put New_Logo.png into your project's /public folder and rename it logo.png

export default function Logo({ variant = "header" }: { variant?: "header" | "footer" }) {
  const isFooter = variant === "footer";
  return (
    <img
      src={isFooter ? "/circle-logo.png" : "/logo.png"}
      alt="Garfias Mountain Glass Art"
      className={isFooter ? "h-36 w-auto" : "h-[110px] sm:h-[165px] lg:h-[240px] w-auto"}
    />
  );
}
