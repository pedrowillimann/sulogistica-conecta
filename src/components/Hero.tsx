import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Clock, Shield } from "lucide-react";
import heroImage from "@/assets/hero-logistics.jpg";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Caminhão da L-Prosp em estrada brasileira"
          className="h-full w-full object-cover"
          width={1920}
          height={1080}
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/95 via-brand-navy/80 to-brand-navy/40" />
      </div>

      <div className="container relative mx-auto px-4 py-24 md:px-6 md:py-32 lg:py-40">
        <div className="max-w-2xl text-white">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-brand-red/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-brand-red" />
            Transporte rodoviário para todo o Brasil
          </div>
          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
            Sua carga no lugar certo, <span className="text-brand-blue">no tempo certo</span>
          </h1>
          <p className="mt-6 text-lg text-white/80 md:text-xl">
            A L-Prosp tem sede em Fraiburgo, SC, e leva segurança e pontualidade para o transporte
            de cargas em todo o Brasil — de São Paulo e Rio de Janeiro a Belém, entre outros
            destinos. Especialistas em logística agroindustrial e fretes rodoviários.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button size="lg" asChild className="bg-brand-blue hover:bg-brand-blue/90 text-white">
              <a
                href="https://wa.me/5549932463681?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento%20de%20frete%20com%20a%20L-Prosp"
                target="_blank"
                rel="noopener noreferrer"
              >
                Falar no WhatsApp
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white"
            >
              <a href="tel:+5549932463681">
                <Phone className="mr-2 h-4 w-4" />
                (49) 93246-3681
              </a>
            </Button>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="flex items-center gap-3 rounded-lg bg-white/10 p-3 backdrop-blur-sm">
              <Clock className="h-5 w-5 text-brand-blue" />
              <span className="text-sm font-medium">Entregas pontuais</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg bg-white/10 p-3 backdrop-blur-sm">
              <Shield className="h-5 w-5 text-brand-green" />
              <span className="text-sm font-medium">Carga segura</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg bg-white/10 p-3 backdrop-blur-sm">
              <ArrowRight className="h-5 w-5 text-brand-red" />
              <span className="text-sm font-medium">Cobertura nacional</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
