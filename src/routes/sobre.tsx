import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { About } from "@/components/About";
import { Stats } from "@/components/Stats";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Award, Users } from "lucide-react";
import heroImage from "@/assets/hero-logistics.jpg";

export const Route = createFileRoute("/sobre")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "Sobre a L-Prosp | Transporte Rodoviário para Todo o Brasil" },
      {
        name: "description",
        content:
          "Conheça a L-Prosp Comércio e Transporte. Empresa de transporte rodoviário sediada em Fraiburgo, SC, atuando em logística agroindustrial para todo o Brasil.",
      },
      {
        property: "og:title",
        content: "Sobre a L-Prosp | Transporte Rodoviário para Todo o Brasil",
      },
      {
        property: "og:description",
        content:
          "Empresa de transporte rodoviário sediada em Fraiburgo, SC. Logística agroindustrial para todo o Brasil.",
      },
    ],
  }),
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="Estrada brasileira"
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
                <Award className="h-4 w-4" />
                Sobre nós
              </div>
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
                Uma empresa que nasceu para prosperar
              </h1>
              <p className="mt-6 text-lg text-white/80">
                A L-Prosp Comércio e Transporte é uma empresa de transporte rodoviário sediada em
                Fraiburgo, SC, com atuação em logística para todo o Brasil.
              </p>
            </div>
          </div>
        </section>
        <About />
        <Stats />
        <section className="bg-background py-20 md:py-28">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="rounded-2xl bg-muted p-8 md:p-10">
                <MapPin className="h-10 w-10 text-brand-red" />
                <h2 className="mt-4 text-2xl font-bold">Localização estratégica</h2>
                <p className="mt-4 text-muted-foreground">
                  Estamos localizados na SC-452, KM 39, no bairro Liberata, em Fraiburgo, SC. A
                  partir daqui, atendemos com agilidade todo o Brasil — de São Paulo e Rio de
                  Janeiro a Belém, entre outros destinos.
                </p>
              </div>
              <div className="rounded-2xl bg-primary p-8 text-primary-foreground md:p-10">
                <Users className="h-10 w-10 text-white" />
                <h2 className="mt-4 text-2xl font-bold">Equipe comprometida</h2>
                <p className="mt-4 text-primary-foreground/90">
                  Contamos com motoristas experientes, equipe de apoio dedicada e uma frota
                  preparada para atender desde pequenas cargas até grandes operações logísticas.
                </p>
                <Button asChild className="mt-6 bg-white text-primary hover:bg-white/90">
                  <a
                    href="https://wa.me/5549932463681?text=Ol%C3%A1%2C%20gostaria%20de%20conhecer%20a%20L-Prosp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Fale conosco
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
