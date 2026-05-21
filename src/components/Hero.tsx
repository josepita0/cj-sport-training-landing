import hero from "@/assets/hero.jpg";
import { Waveform } from "./Waveform";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24">
      <img
        src={hero}
        alt="Atleta entrenando con cuerdas de batalla"
        className="absolute inset-0 h-full w-full object-cover"
        width={1920}
        height={1280}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background" />
      <div className="absolute inset-0 bg-grid opacity-40" />

      <div className="relative mx-auto max-w-7xl px-6 w-full">
        <div className="max-w-3xl animate-float-up">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            High Performance Training Club
          </div>

          <h1 className="font-display text-6xl sm:text-7xl md:text-8xl leading-[0.9] uppercase">
            Entrena como un <span className="text-gradient">atleta.</span>
            <br />
            Supera tus <span className="italic font-sans font-light text-muted-foreground">límites.</span>
          </h1>

          <div className="my-8 text-primary/70 w-full max-w-xl animate-pulse-line">
            <Waveform className="w-full h-12" />
          </div>

          <p className="text-lg text-muted-foreground max-w-xl mb-10">
            Entrenamiento funcional, Jiujitsu, MMA y Muay Thai en un solo lugar.
            Coaches certificados, ambiente elite, resultados reales.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#cta"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-semibold text-primary-foreground glow-lg hover:scale-[1.02] transition-transform"
            >
              Empieza Hoy
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#cta"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background/40 backdrop-blur px-8 py-4 font-semibold hover:border-primary/50 transition-colors"
            >
              Agenda una Clase Gratis
            </a>
          </div>

          {/* <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg">
            {[
              { n: "+800", l: "Atletas activos" },
              { n: "12", l: "Coaches elite" },
              { n: "4", l: "Disciplinas" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-4xl text-primary">{s.n}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">
                  {s.l}
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
}
