import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MapPin, Clock, ArrowRight, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/contato")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contato e Orçamento | L-Prosp Comércio e Transporte" },
      { name: "description", content: "Entre em contato com a L-Prosp. Solicite orçamento de frete pelo WhatsApp (49) 93246-3681 ou preencha o formulário. Atendimento em Fraiburgo, SC." },
      { property: "og:title", content: "Contato e Orçamento | L-Prosp" },
      { property: "og:description", content: "Solicite orçamento de frete pelo WhatsApp (49) 93246-3681 ou preencha o formulário." },
    ],
  }),
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="bg-brand-navy py-20 text-white md:py-28">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-blue/20 px-4 py-2 text-sm font-medium">
                <MessageCircle className="h-4 w-4" />
                Contato
              </div>
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
                Fale com a L-Prosp
              </h1>
              <p className="mt-6 text-lg text-white/80">
                Estamos prontos para entender sua necessidade e apresentar a melhor solução de transporte para o seu negócio.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button
                  size="lg"
                  asChild
                  className="bg-brand-green hover:bg-brand-green/90 text-white"
                >
                  <a
                    href="https://wa.me/5549932463681?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento%20de%20frete%20com%20a%20L-Prosp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="border-white/30 bg-white/10 text-white hover:bg-white/20"
                >
                  <a href="tel:+5549932463681">
                    <Phone className="mr-2 h-4 w-4" />
                    Ligar
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-muted/30 py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 sm:grid-cols-3">
              <Card className="border-border/60">
                <CardContent className="flex flex-col items-center pt-6 text-center">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue/10">
                    <Phone className="h-6 w-6 text-brand-blue" />
                  </div>
                  <h3 className="font-semibold">Telefone / WhatsApp</h3>
                  <a href="tel:+5549932463681" className="mt-2 text-muted-foreground hover:text-primary">
                    (49) 93246-3681
                  </a>
                </CardContent>
              </Card>
              <Card className="border-border/60">
                <CardContent className="flex flex-col items-center pt-6 text-center">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-red/10">
                    <MapPin className="h-6 w-6 text-brand-red" />
                  </div>
                  <h3 className="font-semibold">Endereço</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    SC-452, KM 39 - LIBERATA<br />Fraiburgo - SC, 89580-000
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border/60">
                <CardContent className="flex flex-col items-center pt-6 text-center">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-green/10">
                    <Clock className="h-6 w-6 text-brand-green" />
                  </div>
                  <h3 className="font-semibold">Atendimento</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Segunda a sábado<br />Horário comercial
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
