import { Card, CardContent } from "@/components/ui/card";

const stats = [
  { value: "+10", label: "Anos de experiência", suffix: "" },
  { value: "Brasil", label: "Cobertura nacional", suffix: "" },
  { value: "100%", label: "Compromisso com prazos", suffix: "" },
  { value: "24h", label: "Atendimento disponível", suffix: "" },
];

export function Stats() {
  return (
    <section className="bg-primary py-16 text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <Card
              key={stat.label}
              className="border-white/20 bg-white/10 text-center text-primary-foreground backdrop-blur-sm"
            >
              <CardContent className="pt-6">
                <div className="text-4xl font-bold tracking-tight md:text-5xl">{stat.value}</div>
                <p className="mt-2 text-sm font-medium text-primary-foreground/90">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
