import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ServicesGrid } from "@/components/ServicesGrid";
import { TrustBadge } from "@/components/TrustBadge";
import { Stats } from "@/components/Stats";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "L-Prosp Comércio e Transporte | Transporte Rodoviário no Sul do Brasil" },
      { name: "description", content: "L-Prosp: transporte rodoviário e logística agroindustrial no Sul do Brasil. Fretes para SC, RS e PR. Orçamento rápido pelo WhatsApp (49) 93246-3681." },
      { property: "og:title", content: "L-Prosp Comércio e Transporte" },
      { property: "og:description", content: "Transporte rodoviário e logística agroindustrial no Sul do Brasil." },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <TrustBadge />
        <ServicesGrid />
        <Stats />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
