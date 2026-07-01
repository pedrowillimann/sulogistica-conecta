import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { ServicesGrid } from "@/components/ServicesGrid";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Truck } from "lucide-react";
import heroImage from "@/assets/hero-logistics.jpg";

export const Route = createFileRoute("/servicos")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Serviços de Transporte e Logística | L-Prosp" },
      { name: "description", content: "Conheça os serviços da L-Prosp: fretes rodoviários, logística agroindustrial, cargas fracionadas e distribuição regional no Sul do Brasil." },
      { property: "og:title", content: "Serviços de Transporte e Logística | L-Prosp" },
      { property: "og:description", content: "Fretes rodoviários, logística agroindustrial e distribuição regional no Sul do Brasil." },
    ],
  }),
});

function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="Caminhão em estrada do Sul do Brasil"
              className="h-full w-full object-cover"
              width={1920}
              height={1080}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/95 to-brand-navy/70" />
          </div>
          <div className="container relative mx-auto px-4 py-20 md:px-6 md:py-28">
            <div className="max-w-2xl text-white">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-blue/20 px-4 py-2 text-sm font-medium">
                <Truck className="h-4 w-4" />
                Nossos serviços
              </div>
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
                Soluções completas em transporte
              </h1>
              <p className="mt-6 text-lg text-white/80">
                Da coleta à entrega, oferecemos serviços de transporte adaptados às necessidades do agronegócio, indústria e comércio do Sul do Brasil.
              </p>
              <div className="mt-8">
                <Button
                  size="lg"
                  asChild
                  className="bg-brand-red hover:bg-brand-red/90 text-white"
                >
                  <a
                    href="https://wa.me/5549932463681?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento%20de%20frete%20com%20a%20L-Prosp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Solicitar orçamento
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <ServicesGrid />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
