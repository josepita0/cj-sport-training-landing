import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import g4 from "@/assets/g4.jpg";
import hero from "@/assets/hero.jpg";

export function Gallery() {
  return (
    <section id="galeria" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">03 — Experiencia</div>
            <h2 className="font-display text-5xl md:text-7xl uppercase leading-none">
              Dentro del <span className="text-gradient">box</span>
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Sudor, técnica y comunidad. Un vistazo a lo que vivirás cada sesión.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-4 auto-rows-[140px]">
          <div className="col-span-6 row-span-3 group overflow-hidden rounded-2xl">
            <img src={g1} alt="Pull ups" loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="col-span-6 row-span-2 group overflow-hidden rounded-2xl">
            <img src={hero} alt="Battle ropes" loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="col-span-3 row-span-2 group overflow-hidden rounded-2xl">
            <img src={g3} alt="Deadlift" loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="col-span-3 row-span-2 group overflow-hidden rounded-2xl">
            <img src={g2} alt="Boxing" loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="col-span-12 row-span-2 group overflow-hidden rounded-2xl">
            <img src={g4} alt="Group class" loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
          </div>
        </div>
      </div>
    </section>
  );
}
