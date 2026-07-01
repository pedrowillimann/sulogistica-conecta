import { Card, CardContent } from "@/components/ui/card";
import { Star, CheckCircle2 } from "lucide-react";

export function TrustBadge() {
  return (
    <section className="border-y border-border/40 bg-muted/30 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex items-center gap-4">
            <a
              href="https://www.google.com/search?q=lprosp+fraiburgo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 rounded-lg bg-brand-green/10 px-3 py-2 transition-colors hover:bg-brand-green/20"
            >
              <Star className="h-5 w-5 fill-brand-green text-brand-green" />
              <span className="font-bold text-foreground">4,9</span>
              <span className="text-sm text-muted-foreground">(9 avaliações no Google)</span>
            </a>
            <p className="text-sm text-muted-foreground">
              Empresa de transporte rodoviário e logística agroindustrial em Fraiburgo, SC
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle2 className="h-4 w-4 text-brand-green" />
              <span>Transporte seguro</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle2 className="h-4 w-4 text-brand-green" />
              <span>Atendimento rápido</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle2 className="h-4 w-4 text-brand-green" />
              <span>Foco no Sul do Brasil</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
