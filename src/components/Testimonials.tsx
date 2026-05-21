import t1 from "@/assets/t1.jpg";
import t2 from "@/assets/t2.jpg";
import t3 from "@/assets/t3.jpg";
import { Star } from "lucide-react";

const items = [
  {
    name: "Andrés Morales",
    role: "Atleta · 8 meses",
    img: t1,
    quote:
      "Bajé 14 kg y recuperé la fuerza que pensé que ya no tenía. El nivel de los coaches es brutal y el ambiente te empuja todos los días.",
  },
  {
    name: "Valentina Ruiz",
    role: "Muay Thai · 1 año",
    img: t2,
    quote:
      "Llegué sin saber tirar un jab. Hoy compito a nivel amateur. CJ no es un gimnasio, es una escuela de pelea seria.",
  },
  {
    name: "Diego Carrillo",
    role: "MMA · 2 años",
    img: t3,
    quote:
      "Coaches de primer nivel, equipamiento impecable y una comunidad que se exige. Si vienes a entrenar de verdad, este es el lugar.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonios" className="relative py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">04 — Testimonios</div>
          <h2 className="font-display text-5xl md:text-7xl uppercase leading-none">
            Atletas. <span className="text-gradient">Reales.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((t) => (
            <article
              key={t.name}
              className="glass rounded-2xl p-8 hover:glow transition-shadow flex flex-col"
            >
              <div className="flex gap-1 text-primary mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="text-foreground/90 leading-relaxed flex-1">"{t.quote}"</p>
              <div className="mt-8 flex items-center gap-4 pt-6 border-t border-border">
                <img src={t.img} alt={t.name} loading="lazy" className="h-12 w-12 rounded-full object-cover ring-2 ring-primary/40" />
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
