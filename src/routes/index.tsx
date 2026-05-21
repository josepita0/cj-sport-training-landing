import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Disciplines } from "@/components/Disciplines";
import { WhyUs } from "@/components/WhyUs";
import { Gallery } from "@/components/Gallery";
import { Testimonials } from "@/components/Testimonials";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "CJ Sport Training · Entrena como un atleta" },
      {
        name: "description",
        content:
          "Centro premium de entrenamiento funcional, Jiujitsu, MMA y Muay Thai. Coaches certificados, equipamiento profesional y comunidad de alto rendimiento.",
      },
      { property: "og:title", content: "CJ Sport Training · Entrena como un atleta" },
      {
        property: "og:description",
        content:
          "Funcional, Jiujitsu, MMA y Muay Thai. Supera tus límites en CJ Sport Training.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Disciplines />
      <WhyUs />
      <Gallery />
      <Testimonials />
      <FinalCta />
      <Footer />
    </main>
  );
}
