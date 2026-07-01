import { CheckCircle2 } from "lucide-react";

const differentials = [
  "Conhecimento profundo das rotas rodoviárias em todo o Brasil",
  "Atendimento personalizado para produtores rurais e indústrias",
  "Compromisso com segurança, prazo e transparência",
  "Frota moderna e equipe experiente",
  "Localização estratégica em Fraiburgo, SC",
];

export function About() {
  return (
    <section className="bg-muted/30 py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Quem somos
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              L-Prosp: soluções que prosperam
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              A L-Prosp Comércio e Transporte nasceu para conectar o campo à cidade, a indústria ao
              consumidor e Santa Catarina ao restante do Brasil. Com sede em Fraiburgo, atuamos com
              transporte rodoviário e logística agroindustrial para todo o território nacional — de
              São Paulo e Rio de Janeiro a Belém, entre outros destinos — sempre com foco em
              segurança, pontualidade e relacionamento de confiança.
            </p>
            <p className="mt-4 text-muted-foreground">
              Nossa missão é fazer sua carga chegar ao destino certo, no tempo certo, com o cuidado
              que o seu negócio merece.
            </p>
            <ul className="mt-8 space-y-4">
              {differentials.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-green" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-brand-blue/20 to-brand-red/20 blur-2xl" />
            <div className="relative rounded-2xl border border-border/60 bg-card p-8 shadow-xl">
              <div className="space-y-6">
                <div className="rounded-xl bg-brand-blue/10 p-6">
                  <h3 className="text-xl font-bold text-foreground">Nossa visão</h3>
                  <p className="mt-2 text-muted-foreground">
                    Ser referência em transporte rodoviário no Brasil, reconhecida pela
                    confiabilidade, agilidade e proximidade com o cliente.
                  </p>
                </div>
                <div className="rounded-xl bg-brand-red/10 p-6">
                  <h3 className="text-xl font-bold text-foreground">Nossos valores</h3>
                  <p className="mt-2 text-muted-foreground">
                    Compromisso, segurança, respeito e prosperação compartilhada com nossos
                    clientes, colaboradores e parceiros.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
