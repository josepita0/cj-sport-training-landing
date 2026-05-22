import { MobileAutoCarousel } from "@/components/MobileAutoCarousel";
import { Award, Wrench, Flame, ClipboardList, Users, Clock } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const features = [
  { Icon: Award, title: "Coaches experimentados", desc: "Equipo de entrenadores con experiencia internacional en alto rendimiento." },
  { Icon: Wrench, title: "Equipamiento profesional", desc: "Instalaciones diseñadas para atletas serios." },
  { Icon: Flame, title: "Ambiente motivador", desc: "Energía y disciplina. Una comunidad que empuja, no que se conforma." },
  { Icon: ClipboardList, title: "Planes personalizados", desc: "Evaluación inicial y programación adaptada a tu nivel y objetivos." },
  { Icon: Users, title: "Comunidad competitiva", desc: "Atletas reales, eventos internos y cultura de superación constante." },
  { Icon: Clock, title: "Horarios flexibles", desc: " Entrena cuando tu rutina lo permita." },
];

type FeatureItem = (typeof features)[number];

function FeatureCard({ Icon, title, desc }: { Icon: LucideIcon; title: string; desc: string }) {
  return (
    <div className="group bg-background p-10 hover:bg-card transition-colors h-full rounded-2xl md:rounded-none">
      <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="font-display text-2xl uppercase tracking-wider">{title}</h3>
      <p className="mt-3 text-muted-foreground">{desc}</p>
    </div>
  );
}

export function WhyUs() {
  return (
    <section id="nosotros" className="relative py-32 bg-secondary/30">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">02 — Por qué nosotros</div>
          <h2 className="font-display text-5xl md:text-7xl uppercase leading-none">
            Más que un gimnasio.
            <br />
            <span className="text-gradient">Una mentalidad.</span>
          </h2>
        </div>

        <MobileAutoCarousel
          items={features}
          getKey={(item) => item.title}
          renderSlide={(item: FeatureItem) => <FeatureCard {...item} />}
        />

        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-3xl overflow-hidden">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
