import { Waveform } from "./Waveform";

export function FinalCta() {
  return (
    <section id="cta" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <div className="text-primary/70 mb-10 animate-pulse-line">
          <Waveform className="w-full h-16" />
        </div>

        <h2 className="font-display text-6xl md:text-8xl uppercase leading-[0.9]">
          Tu mejor versión
          <br />
          <span className="text-gradient">empieza hoy.</span>
        </h2>

        <p className="mt-8 text-lg text-muted-foreground max-w-2xl mx-auto">
          Reserva tu clase gratuita. Conoce las instalaciones, prueba a los coaches
          y siente la energía de CJ Sport Training.
        </p>

        <div className="mt-12 flex flex-wrap gap-4 justify-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-10 py-5 text-lg font-semibold text-primary-foreground glow-lg hover:scale-[1.03] transition-transform"
          >
            Únete a CJ Sport Training
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full border border-border px-10 py-5 text-lg font-semibold hover:border-primary/60 transition-colors"
          >
            WhatsApp directo
          </a>
        </div>
      </div>
    </section>
  );
}
