import { site } from "../data/site";

/** The teal line across the very top of the page. */
export default function AnnouncementBar() {
  return (
    <div className="bg-[#0b565c] py-2.5 text-center text-[11px] font-bold uppercase tracking-[0.28em] text-[#eadbc5]">
      {`✦  ${site.announcement}  ✦`}
    </div>
  );
}
