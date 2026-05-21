import logo from "@/assets/logo.png";
import { Instagram, Facebook, Youtube, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="CJ Sport Training" className="h-12 w-12 rounded-full" />
              <span className="font-display text-2xl tracking-wider">
                CJ <span className="text-primary">SPORT TRAINING</span>
              </span>
            </div>
            <p className="text-muted-foreground max-w-md">
              Centro de entrenamiento de alto rendimiento. Funcional, Jiujitsu,
              MMA y Muay Thai.
            </p>
            <div className="flex gap-3 mt-6">
              {[Instagram, MessageCircle].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="h-10 w-10 inline-flex items-center justify-center rounded-full glass hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="social"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg uppercase tracking-widest mb-4">Visítanos</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>CJ SPORT TRAINING, Avinguda Prevere Conrado Poveda, 2, 03610 Petrer, Alicante</li>
              {/* <li>Lun – Vie · 6:00 – 22:00</li>
              <li>Sáb · 8:00 – 14:00</li> */}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg uppercase tracking-widest mb-4">Contacto</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>WhatsApp · +00 000 000 000</li>
              {/* <li>info@cjsporttraining.com</li>
              <li>@cjsporttraining</li> */}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between gap-4 text-xs text-muted-foreground uppercase tracking-widest">
          <span>© {new Date().getFullYear()} CJ Sport Training. Todos los derechos reservados.</span>
          <span>Forged for athletes.</span>
        </div>
      </div>
    </footer>
  );
}
