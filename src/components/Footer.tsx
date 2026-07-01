import { Link } from "@tanstack/react-router";
import { Phone, MapPin, Instagram, Facebook } from "lucide-react";
import logoAsset from "@/assets/logo.jpg.asset.json";

const navLinks = [
  { to: "/", label: "Início" },
  { to: "/servicos", label: "Serviços" },
  { to: "/sobre", label: "Sobre" },
  { to: "/contato", label: "Contato" },
];

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-brand-navy text-white">
      <div className="container mx-auto px-4 py-16 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <img
              src={logoAsset.url}
              alt="L-Prosp Comércio e Transporte"
              className="h-14 w-auto"
              width={140}
              height={56}
            />
            <p className="text-sm text-white/70">
              Soluções que prosperam. Transporte rodoviário e logística agroindustrial para todo o Brasil.
            </p>
          </div>
          <div>
            <h4 className="mb-4 font-semibold">Navegação</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-semibold">Contato</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+5549932463681"
                  className="flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
                >
                  <Phone className="h-4 w-4" />
                  (49) 93246-3681
                </a>
              </li>
              <li>
                <span className="flex items-start gap-2 text-sm text-white/70">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                  SC-452, KM 39 - LIBERATA<br />Fraiburgo - SC, 89580-000
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-semibold">Siga a L-Prosp</h4>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/lprosp/"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand-blue"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/Lprosp/"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand-blue"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-white/50">
          <p>© {new Date().getFullYear()} L-Prosp Comércio e Transporte. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
