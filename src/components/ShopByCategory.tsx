import { categories, categoriesHeading } from "../data/categories";
import { site } from "../data/site";

/** The row of picture tiles that each link to the Etsy shop. */
export default function ShopByCategory() {
  return (
    <section className="bg-[#eadbc5] px-8 py-12 reveal">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center justify-center gap-4 text-[#2e1f14]">
          <div className="flex items-center gap-2.5">
            <span className="text-sm font-bold">&#8594;</span>
            <span className="h-px w-14 bg-[#2e1f14]/55" />
          </div>
          <h2 className="playfair text-[17px] font-black uppercase tracking-[0.3em] whitespace-nowrap">
            {categoriesHeading}
          </h2>
          <div className="flex items-center gap-2.5">
            <span className="h-px w-14 bg-[#2e1f14]/55" />
            <span className="text-sm font-bold">&#8592;</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-px md:grid-cols-3 lg:grid-cols-6 bg-[#2e1f14]/15">
          {categories.map((cat) => (
            <a
              key={cat.title}
              href={site.etsyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden bg-[#eadbc5] shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div
                className="bg-[#0b565c] py-3 text-center font-bold uppercase tracking-[0.15em] text-[#eadbc5]"
                style={{ fontSize: "10px" }}
              >
                {cat.title}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
