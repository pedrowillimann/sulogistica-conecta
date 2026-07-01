import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Truck,
  Sprout,
  Package,
  MapPin,
  Warehouse,
  ArrowRight,
  ClipboardCheck,
} from "lucide-react";

const services = [
  {
    icon: Truck,
    title: "Fretes Rodoviários",
    description: "Transporte de cargas gerais e dedicadas com cobertura em todo o Brasil, partindo de Fraiburgo, SC. Rastreamento e compromisso com prazos.",
    color: "bg-brand-blue/10 text-brand-blue",
  },
  {
    icon: Sprout,
    title: "Logística Agroindustrial",
    description: "Soluções especializadas para grãos, insumos, produtos agrícolas e industrializados, conectando o agronegócio catarinense ao restante do Brasil.",
    color: "bg-brand-green/10 text-brand-green",
  },
  {
    icon: Package,
    title: "Cargas Fracionadas",
    description: "Consolidação e distribuição de cargas fracionadas com eficiência e redução de custos para sua operação.",
    color: "bg-brand-red/10 text-brand-red",
  },
  {
    icon: MapPin,
    title: "Distribuição Regional",
    description: "Rede de distribuição que conecta indústrias, cooperativas e centros comerciais em todo o Brasil, partindo de Santa Catarina.",
    color: "bg-brand-navy/10 text-brand-navy",
  },
  {
    icon: Warehouse,
    title: "Armazenagem e Triagem",
    description: "Apoio logístico com pontos de armazenagem, triagem e cross-docking para agilizar sua cadeia de suprimentos.",
    color: "bg-brand-blue/10 text-brand-blue",
  },
  {
    icon: ClipboardCheck,
    title: "Gestão de Documentação",
    description: "Cuidamos de toda a documentação do transporte, garantindo conformidade e tranquilidade na sua operação.",
    color: "bg-brand-green/10 text-brand-green",
  },
];

export function ServicesGrid() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Nossas soluções
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Transporte e logística sob medida para o seu negócio
          </h2>
          <p className="mt-4 text-muted-foreground">
            Da lavoura à indústria, a L-Prosp conecta pessoas, produtos e oportunidades em todo o Brasil.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group border-border/60 bg-card transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
            >
              <CardHeader>
                <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${service.color}`}>
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="ghost"
                  className="p-0 text-primary hover:bg-transparent hover:text-primary/80"
                  asChild
                >
                  <a
                    href={`https://wa.me/5549932463681?text=${encodeURIComponent(`Olá, tenho interesse em ${service.title}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Solicitar este serviço
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
