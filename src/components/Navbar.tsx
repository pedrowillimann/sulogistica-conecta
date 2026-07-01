import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logoAsset from "@/assets/logo.jpg.asset.json";

const navLinks = [
  { to: "/", label: "Início" },
  { to: "/servicos", label: "Serviços" },
  { to: "/sobre", label: "Sobre" },
  { to: "/contato", label: "Contato" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logoAsset.url}
            alt="L-Prosp Comércio e Transporte"
            className="h-12 w-auto"
            width={120}
            height={48}
          />
          <span className="hidden font-bold text-foreground text-lg leading-tight md:inline-block">
            L-Prosp
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeProps={{ className: "text-primary font-medium" }}
              className="rounded-md px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button
            asChild
            className="bg-brand-red hover:bg-brand-red/90 text-white"
          >
            <a
              href="https://wa.me/5549932463681?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento%20de%20frete%20com%20a%20L-Prosp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Truck className="mr-2 h-4 w-4" />
              Solicitar Orçamento
            </a>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Abrir menu">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] bg-background">
            <div className="flex flex-col gap-6 pt-6">
              <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-3">
                <img
                  src={logoAsset.url}
                  alt="L-Prosp"
                  className="h-10 w-auto"
                  width={100}
                  height={40}
                />
              </Link>
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className="rounded-md px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted hover:text-primary"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <Button
                asChild
                className="bg-brand-red hover:bg-brand-red/90 text-white"
              >
                <a
                  href="https://wa.me/5549932463681?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento%20de%20frete%20com%20a%20L-Prosp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Truck className="mr-2 h-4 w-4" />
                  Solicitar Orçamento
                </a>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
