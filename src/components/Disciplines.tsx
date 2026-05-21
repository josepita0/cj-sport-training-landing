import functional from "@/assets/functional.jpg";
import jiujitsu from "@/assets/jiujitsu.png";
import mma from "@/assets/mma.jpg";
import muaythai from "@/assets/muaythai.jpg";
import { Dumbbell, Shield, Swords, Flame } from "lucide-react";

const items = [
  {
    title: "Funcional",
    desc: "Fuerza, potencia y movilidad. Circuitos de alta intensidad diseñados por especialistas.",
    img: functional,
    Icon: Dumbbell,
  },
  {
    title: "Jiujitsu",
    desc: "Arte suave. Técnica, control y estrategia desde fundamentos hasta competencia.",
    img: jiujitsu,
    Icon: Shield,
  },
  {
    title: "MMA",
    desc: "Combinación completa. Stand-up, ground & pound y acondicionamiento de pelea.",
    img: mma,
    Icon: Swords,
  },
  {
    title: "Muay Thai",
    desc: "El arte de las ocho extremidades. Striking explosivo, clinch y resistencia.",
    img: muaythai,
    Icon: Flame,
  },
];

export function Disciplines() {
  return (
    <section id="disciplinas" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">01 — Disciplinas</div>
            <h2 className="font-display text-5xl md:text-7xl uppercase leading-none">
              Elige tu <span className="text-gradient">arena</span>
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Cuatro disciplinas. Una sola mentalidad. Sea cual sea tu objetivo,
            tenemos el programa diseñado para llevarte al siguiente nivel.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map(({ title, desc, img, Icon }) => (
            <article
              key={title}
              className="group relative overflow-hidden rounded-2xl glass aspect-[3/4] hover:glow transition-all duration-500"
            >
              <img
                src={img}
                alt={title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover opacity-60 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="relative h-full flex flex-col justify-between p-6">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 backdrop-blur border border-primary/30 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-3xl uppercase">{title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-3 group-hover:text-foreground/80 transition-colors">
                    {desc}
                  </p>
                  <div className="mt-4 inline-flex items-center gap-2 text-sm text-primary opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
                    Ver programa →
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
