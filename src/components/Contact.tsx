import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Phone, MapPin, Clock, Mail, ArrowRight, CheckCircle2 } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    origin: "",
    destination: "",
    cargo: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá! Gostaria de solicitar um orçamento de frete.%0A%0A*Nome:* ${formData.name}%0A*E-mail:* ${formData.email}%0A*Telefone:* ${formData.phone}%0A*Origem:* ${formData.origin}%0A*Destino:* ${formData.destination}%0A*Tipo de carga:* ${formData.cargo}%0A*Mensagem:* ${formData.message}`;
    window.open(`https://wa.me/5549932463681?text=${text}`, "_blank");
    setSubmitted(true);
  };

  return (
    <section className="bg-background py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Fale conosco
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Solicite um orçamento de frete
          </h2>
          <p className="mt-4 text-muted-foreground">
            Preencha o formulário ou fale direto pelo WhatsApp. Respondemos em poucos minutos.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Card className="border-border/60">
              <CardHeader>
                <CardTitle>Dados do seu frete</CardTitle>
                <CardDescription>
                  Quanto mais informações, mais preciso será o orçamento.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {submitted ? (
                  <div className="rounded-xl bg-brand-green/10 p-6 text-center">
                    <CheckCircle2 className="mx-auto h-10 w-10 text-brand-green" />
                    <h3 className="mt-4 text-lg font-semibold">Pedido enviado!</h3>
                    <p className="mt-2 text-muted-foreground">
                      Você foi redirecionado para o WhatsApp. Caso não tenha aberto, clique abaixo.
                    </p>
                    <Button asChild className="mt-4 bg-brand-green hover:bg-brand-green/90">
                      <a
                        href={`https://wa.me/5549932463681?text=Olá! Gostaria de solicitar um orçamento de frete.`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Abrir WhatsApp
                      </a>
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nome completo</Label>
                        <Input
                          id="name"
                          required
                          placeholder="Seu nome"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">E-mail</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          placeholder="seu@email.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                    </div>
                    <div className="grid gap-5 sm:grid-cols-3">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Telefone</Label>
                        <Input
                          id="phone"
                          required
                          placeholder="(49) 99999-9999"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="origin">Cidade de origem</Label>
                        <Input
                          id="origin"
                          required
                          placeholder="Fraiburgo - SC"
                          value={formData.origin}
                          onChange={(e) => setFormData({ ...formData, origin: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="destination">Cidade de destino</Label>
                        <Input
                          id="destination"
                          required
                          placeholder="Porto Alegre - RS"
                          value={formData.destination}
                          onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cargo">Tipo de carga</Label>
                      <Input
                        id="cargo"
                        required
                        placeholder="Grãos, insumos, cargas gerais..."
                        value={formData.cargo}
                        onChange={(e) => setFormData({ ...formData, cargo: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Mensagem</Label>
                      <Textarea
                        id="message"
                        rows={4}
                        placeholder="Detalhes adicionais sobre o frete..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-brand-green hover:bg-brand-green/90 text-white"
                      size="lg"
                    >
                      Enviar orçamento via WhatsApp
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="border-border/60">
              <CardHeader>
                <CardTitle>Informações de contato</CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                <a href="tel:+5549932463681" className="flex items-start gap-3 text-foreground hover:text-primary">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue" />
                  <div>
                    <p className="font-medium">WhatsApp / Telefone</p>
                    <p className="text-sm text-muted-foreground">(49) 93246-3681</p>
                  </div>
                </a>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-red" />
                  <div>
                    <p className="font-medium">Endereço</p>
                    <p className="text-sm text-muted-foreground">
                      SC-452, KM 39 - LIBERATA<br />
                      Fraiburgo - SC, 89580-000
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-brand-green" />
                  <div>
                    <p className="font-medium">Atendimento</p>
                    <p className="text-sm text-muted-foreground">Segunda a sábado</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/60 bg-brand-blue text-white">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold">Prefere ligar?</h3>
                <p className="mt-2 text-sm text-white/80">
                  Nossa equipe está pronta para atender e tirar todas as suas dúvidas sobre fretes e logística.
                </p>
                <Button
                  asChild
                  className="mt-4 w-full bg-white text-brand-blue hover:bg-white/90"
                >
                  <a href="tel:+5549932463681">
                    <Phone className="mr-2 h-4 w-4" />
                    Ligar agora
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
