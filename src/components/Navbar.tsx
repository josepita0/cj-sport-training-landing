import logo from "@/assets/logo.png";

const links = [
  { label: "Disciplinas", href: "#disciplinas" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Galería", href: "#galeria" },
  // { label: "Testimonios", href: "#testimonios" },
];

export function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6 mt-4">
        <nav className="glass rounded-2xl flex items-center justify-between px-4 py-3">
          <a href="#" className="flex items-center gap-3">
            <img src={logo} alt="CJ Sport Training" className="h-10 w-10 rounded-full object-cover" />
            <span className="font-display text-xl tracking-wider">
              CJ <span className="text-primary">SPORT</span>
            </span>
          </a>
          <ul className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-foreground transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#cta"
            className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground hover:glow transition-shadow"
          >
            Clase Gratis
          </a>
        </nav>
      </div>
    </header>
  );
}
