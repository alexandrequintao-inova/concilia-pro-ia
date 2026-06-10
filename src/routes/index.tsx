import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Sparkles, Check, Clock, AlertTriangle, RefreshCw, FileSearch, TrendingDown,
  Bell, Cpu, History, Users, Shield, BarChart3, ClipboardCheck,
  Zap, DollarSign, Rocket, Target, Brain, FileCheck,
  Upload, CheckCircle2, Eye, Database, LineChart,
  ChevronDown, ArrowRight, Building2, Mail, Phone, MapPin,
} from "lucide-react";
import heroImage from "@/assets/hero-dashboard.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "InovaConcilia — Conciliação Contábil Automatizada com IA" },
      { name: "description", content: "Plataforma de conciliação contábil com IA para escritórios de contabilidade. Reduza até 80% do tempo operacional, elimine erros e escale sua operação." },
    ],
  }),
  component: Landing,
});

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

function Section({ id, children, className = "" }: { id?: string; children: React.ReactNode; className?: string }) {
  return (
    <section id={id} className={`relative py-24 px-6 md:px-10 ${className}`}>
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
}

function SectionHeader({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <motion.div {...fadeUp} className="max-w-3xl mb-16">
      {eyebrow && (
        <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-primary mb-4">
          <Sparkles className="w-3.5 h-3.5" /> {eyebrow}
        </span>
      )}
      <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-5">{title}</h2>
      {subtitle && <p className="text-lg text-muted-foreground leading-relaxed">{subtitle}</p>}
    </motion.div>
  );
}

function Landing() {
  return (
    <main className="min-h-screen text-foreground overflow-x-hidden">
      <Nav />
      <Hero />
      <Problem />
      <Solution />
      <Features />
      <Benefits />
      <Results />
      <Demo />
      <Differentials />
      <Implementation />
      <Faq />
      <LeadForm />
      <Footer />
    </main>
  );
}

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[image:var(--gradient-primary)] flex items-center justify-center shadow-[var(--glow-primary)]">
            <Sparkles className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="font-display font-bold text-lg">Inova<span className="text-primary">Concilia</span></span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#solucao" className="hover:text-foreground transition">Solução</a>
          <a href="#funcionalidades" className="hover:text-foreground transition">Funcionalidades</a>
          <a href="#beneficios" className="hover:text-foreground transition">Benefícios</a>
          <a href="#faq" className="hover:text-foreground transition">FAQ</a>
        </nav>
        <a href="#contato" className="btn-primary text-sm hover:[transform:translateY(-2px)]">
          Demonstração <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative pt-32 pb-24 px-6 md:px-10 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute inset-0 [background:var(--gradient-hero)] pointer-events-none" />
      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border border-primary/30 bg-primary/10 text-primary mb-6">
            <Brain className="w-3.5 h-3.5" /> Inteligência Artificial para Contabilidade
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6">
            Conciliação Contábil <span className="text-gradient">Automatizada</span> com Inteligência Artificial
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl">
            Transforme horas de trabalho manual em minutos. Automatize a análise de extratos, planilhas e relatórios contábeis com uma plataforma desenvolvida para escritórios de contabilidade.
          </p>
          <ul className="grid sm:grid-cols-2 gap-3 mb-10">
            {[
              "Redução do tempo operacional",
              "Menos erros humanos",
              "Histórico completo de auditoria",
              "Métricas em tempo real",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm">
                <span className="mt-0.5 w-5 h-5 rounded-md bg-primary/15 text-primary flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3" />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-4">
            <a href="#contato" className="btn-primary hover:[transform:translateY(-2px)]">
              Solicitar Demonstração <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#solucao" className="btn-ghost hover:[border-color:oklch(0.72_0.17_220)]">
              Conhecer a Plataforma
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -inset-8 bg-[image:var(--gradient-primary)] opacity-20 blur-3xl rounded-full" />
          <div className="relative card-glass overflow-hidden shadow-[var(--shadow-elevated)]">
            <img src={heroImage} alt="Dashboard InovaConcilia" width={1536} height={1024} className="w-full h-auto" />
          </div>
          <div className="absolute -bottom-6 -left-6 card-glass p-4 hidden sm:flex items-center gap-3 shadow-[var(--shadow-elevated)]">
            <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center text-primary">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <div className="text-2xl font-bold">-80%</div>
              <div className="text-xs text-muted-foreground">tempo operacional</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const problems = [
  { icon: Clock, title: "Conciliações demoradas", desc: "Horas perdidas em conferências repetitivas." },
  { icon: RefreshCw, title: "Retrabalho constante", desc: "Importações refeitas e validações duplicadas." },
  { icon: FileSearch, title: "Processos manuais", desc: "Dependência total de planilhas e operadores." },
  { icon: AlertTriangle, title: "Falta de rastreabilidade", desc: "Difícil saber quem fez o quê e quando." },
  { icon: TrendingDown, title: "Operação não escala", desc: "Mais clientes exigem mais equipe." },
];

function Problem() {
  return (
    <Section>
      <SectionHeader
        eyebrow="O Problema"
        title="Sua equipe deveria analisar resultados. Não perder tempo conciliando dados."
        subtitle="A rotina dos escritórios é pressionada por prazos, crescimento da carteira e demandas operacionais. Enquanto a equipe gasta horas em conferências manuais, a produtividade diminui e o risco de erros aumenta."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {problems.map((p, i) => (
          <motion.div
            key={p.title}
            {...fadeUp}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="card-glass p-6 hover:border-primary/40 transition-colors"
          >
            <div className="w-11 h-11 rounded-lg bg-destructive/15 text-destructive flex items-center justify-center mb-4">
              <p.icon className="w-5 h-5" />
            </div>
            <h3 className="font-semibold mb-2">{p.title}</h3>
            <p className="text-sm text-muted-foreground">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

const flow = [
  { icon: Upload, title: "Upload", desc: "Extratos, planilhas ou relatórios" },
  { icon: Brain, title: "IA Processa", desc: "Análise automatizada" },
  { icon: CheckCircle2, title: "Validação", desc: "Dados consistentes" },
  { icon: Eye, title: "Conferência", desc: "Humana opcional" },
  { icon: Database, title: "Auditoria", desc: "Histórico completo" },
  { icon: LineChart, title: "Indicadores", desc: "Em tempo real" },
];

function Solution() {
  return (
    <Section id="solucao" className="bg-surface/30">
      <SectionHeader
        eyebrow="A Solução"
        title="Conheça o InovaConcilia"
        subtitle="Uma plataforma inteligente que utiliza IA para processar, validar e organizar conciliações financeiras e contábeis de forma rápida, segura e auditável."
      />
      <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 relative">
        {flow.map((s, i) => (
          <motion.div
            key={s.title}
            {...fadeUp}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="card-glass p-6 text-center relative"
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-[image:var(--gradient-primary)] text-primary-foreground text-xs font-bold flex items-center justify-center shadow-[var(--glow-primary)]">
              {i + 1}
            </div>
            <s.icon className="w-7 h-7 text-primary mx-auto mb-3 mt-2" />
            <h3 className="font-semibold mb-1 text-sm">{s.title}</h3>
            <p className="text-xs text-muted-foreground">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

const modules = [
  { icon: Cpu, title: "Conciliação", items: ["Upload de arquivos", "Processamento automático", "IA especializada", "Validação rápida"] },
  { icon: BarChart3, title: "Métricas", items: ["Total e status", "Tempo médio e mediana", "Indicadores gráficos", "Tendências operacionais"] },
  { icon: ClipboardCheck, title: "Auditoria", items: ["Rastreabilidade total", "Histórico de ações", "Controle de permissões", "Conformidade"] },
  { icon: History, title: "Histórico", items: ["Registro completo", "Tempo de processamento", "Status das execuções", "Usuário responsável"] },
  { icon: Users, title: "Clientes", items: ["Cadastro centralizado", "Organização por empresa", "Gestão simplificada"] },
  { icon: Shield, title: "Usuários", items: ["Controle de acesso", "Permissões por perfil", "Segurança operacional"] },
  { icon: Bell, title: "Notificações", items: ["Comunicação interna", "Avisos para usuários", "Centralização de mensagens"] },
];

function Features() {
  return (
    <Section id="funcionalidades">
      <SectionHeader
        eyebrow="Funcionalidades"
        title="Uma plataforma completa para sua operação contábil"
        subtitle="Módulos integrados que conversam entre si para entregar produtividade, controle e inteligência."
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {modules.map((m, i) => (
          <motion.div
            key={m.title}
            {...fadeUp}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="card-glass p-7 group hover:border-primary/50 transition-all hover:[transform:translateY(-4px)]"
          >
            <div className="w-12 h-12 rounded-xl bg-[image:var(--gradient-primary)] flex items-center justify-center mb-5 shadow-[var(--glow-primary)]">
              <m.icon className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Módulo {m.title}</h3>
            <ul className="space-y-2">
              {m.items.map((it) => (
                <li key={it} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" /> {it}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

const benefits = [
  { icon: Clock, title: "Redução de Tempo", desc: "Automatize tarefas que consumiam horas da equipe." },
  { icon: DollarSign, title: "Redução de Custos", desc: "Diminua retrabalho e aumente eficiência operacional." },
  { icon: Rocket, title: "Escalabilidade", desc: "Atenda mais clientes sem ampliar proporcionalmente o quadro." },
  { icon: Target, title: "Maior Precisão", desc: "Reduza falhas humanas em processos críticos." },
  { icon: BarChart3, title: "Gestão Inteligente", desc: "Acompanhe indicadores estratégicos em tempo real." },
  { icon: FileCheck, title: "Auditoria Completa", desc: "Saiba exatamente quem fez o quê e quando." },
];

function Benefits() {
  return (
    <Section id="beneficios" className="bg-surface/30">
      <SectionHeader eyebrow="Benefícios" title="Mais produtividade. Menos operação." />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {benefits.map((b, i) => (
          <motion.div
            key={b.title}
            {...fadeUp}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="card-glass p-7 hover:border-primary/40 transition-colors"
          >
            <b.icon className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-lg font-semibold mb-2">{b.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Results() {
  const stats = [
    { value: "80%", label: "Menos tempo gasto em conciliações" },
    { value: "90%", label: "Menos atividades manuais" },
    { value: "+3x", label: "Produtividade por colaborador" },
    { value: "100%", label: "Rastreabilidade de operações" },
  ];
  return (
    <Section>
      <SectionHeader eyebrow="Resultados" title="Impacto direto na operação contábil" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            {...fadeUp}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="card-glass p-8 text-center relative overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 blur-3xl rounded-full" />
            <div className="relative">
              <div className="text-5xl md:text-6xl font-bold text-gradient mb-3">{s.value}</div>
              <div className="text-sm text-muted-foreground">{s.label}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Demo() {
  return (
    <Section className="bg-surface/30">
      <SectionHeader
        eyebrow="Demonstração"
        title="Veja o InovaConcilia em funcionamento"
        subtitle="Dashboards inteligentes, fluxos automatizados e relatórios que entregam clareza em segundos."
      />
      <motion.div {...fadeUp} className="card-glass overflow-hidden relative">
        <div className="aspect-video relative bg-gradient-to-br from-surface to-background flex items-center justify-center">
          <img src={heroImage} alt="Demonstração da plataforma" loading="lazy" width={1536} height={1024} className="absolute inset-0 w-full h-full object-cover opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          <button className="relative z-10 w-20 h-20 rounded-full bg-[image:var(--gradient-primary)] flex items-center justify-center shadow-[var(--glow-primary)] hover:scale-110 transition-transform">
            <svg className="w-7 h-7 text-primary-foreground ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
          </button>
        </div>
      </motion.div>
    </Section>
  );
}

const differentials = [
  "Desenvolvido para contabilidade",
  "Inteligência Artificial aplicada ao processo",
  "Auditoria completa e rastreável",
  "Gestão operacional integrada",
  "Métricas avançadas em tempo real",
  "Plataforma escalável e segura",
  "Implantação simplificada",
  "Equipe especializada em contabilidade",
];

function Differentials() {
  return (
    <Section>
      <SectionHeader eyebrow="Diferenciais" title="Por que escolher o InovaConcilia?" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {differentials.map((d, i) => (
          <motion.div
            key={d}
            {...fadeUp}
            transition={{ duration: 0.4, delay: i * 0.04 }}
            className="card-glass p-5 flex items-start gap-3"
          >
            <div className="w-8 h-8 rounded-md bg-primary/15 text-primary flex items-center justify-center shrink-0">
              <Check className="w-4 h-4" />
            </div>
            <span className="text-sm font-medium pt-1">{d}</span>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

const steps = [
  "Diagnóstico inicial",
  "Configuração do ambiente",
  "Cadastro de usuários e clientes",
  "Treinamento da equipe",
  "Operação assistida",
  "Go-live",
];

function Implementation() {
  return (
    <Section className="bg-surface/30">
      <SectionHeader eyebrow="Implantação" title="Implementação simples e rápida" />
      <div className="relative">
        <div className="hidden md:block absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        <div className="grid grid-cols-2 md:grid-cols-6 gap-5">
          {steps.map((s, i) => (
            <motion.div key={s} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.08 }} className="relative">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-[image:var(--gradient-primary)] text-primary-foreground font-bold text-xl flex items-center justify-center shadow-[var(--glow-primary)] mb-4">
                {String(i + 1).padStart(2, "0")}
              </div>
              <p className="text-center text-sm font-medium">{s}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

const faqs = [
  { q: "Quanto tempo leva para implantar?", a: "A implantação típica ocorre entre 2 e 4 semanas, dependendo do volume e da complexidade da operação." },
  { q: "Preciso trocar meu ERP?", a: "Não. O InovaConcilia se integra ao seu ERP contábil ou sistema fiscal atual." },
  { q: "Como funciona a inteligência artificial?", a: "Nossa IA foi treinada com padrões contábeis e financeiros, identificando lançamentos, conciliando movimentos e sinalizando divergências automaticamente." },
  { q: "Os dados ficam seguros?", a: "Sim. Aplicamos criptografia em trânsito e em repouso, controles de acesso por perfil e auditoria completa de ações." },
  { q: "Existe treinamento?", a: "Sim. Oferecemos treinamento completo para sua equipe e materiais de apoio durante e após a implantação." },
  { q: "Posso acompanhar tudo em auditoria?", a: "Sim. Todas as ações ficam registradas com usuário, data, horário e detalhes da operação." },
  { q: "Como funciona o suporte?", a: "Equipe especializada em contabilidade disponível por canais dedicados e SLA definido em contrato." },
];

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section id="faq">
      <SectionHeader eyebrow="FAQ" title="Perguntas frequentes" />
      <div className="max-w-3xl mx-auto space-y-3">
        {faqs.map((f, i) => (
          <motion.div key={f.q} {...fadeUp} transition={{ duration: 0.4, delay: i * 0.04 }} className="card-glass overflow-hidden">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left"
            >
              <span className="font-medium">{f.q}</span>
              <ChevronDown className={`w-5 h-5 text-primary shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`} />
            </button>
            {open === i && (
              <div className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed">{f.a}</div>
            )}
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function LeadForm() {
  const [sent, setSent] = useState(false);
  return (
    <Section id="contato" className="relative">
      <div className="absolute inset-0 [background:var(--gradient-hero)] opacity-60 pointer-events-none" />
      <div className="relative grid lg:grid-cols-2 gap-12 items-center">
        <motion.div {...fadeUp}>
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-primary mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Demonstração
          </span>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
            Solicite uma demonstração <span className="text-gradient">personalizada</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Descubra como sua operação pode ganhar produtividade utilizando Inteligência Artificial.
          </p>
          <ul className="space-y-3">
            {["Apresentação ao vivo da plataforma", "Análise do seu cenário atual", "Estimativa de ganhos de produtividade"].map((i) => (
              <li key={i} className="flex items-center gap-3 text-sm">
                <Check className="w-5 h-5 text-primary" /> {i}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.form
          {...fadeUp}
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="card-glass p-8 shadow-[var(--shadow-elevated)]"
        >
          {sent ? (
            <div className="text-center py-10">
              <div className="w-14 h-14 mx-auto rounded-full bg-primary/20 text-primary flex items-center justify-center mb-4">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Solicitação enviada!</h3>
              <p className="text-sm text-muted-foreground">Em breve um especialista entrará em contato.</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4">
              <Field label="Nome" name="nome" className="col-span-2" />
              <Field label="Empresa" name="empresa" className="col-span-2" />
              <Field label="Telefone" name="telefone" type="tel" />
              <Field label="E-mail" name="email" type="email" />
              <Field label="Colaboradores" name="colab" type="number" placeholder="Ex: 15" />
              <Field label="Clientes atendidos" name="clientes" type="number" placeholder="Ex: 120" />
              <button type="submit" className="col-span-2 btn-primary justify-center hover:[transform:translateY(-2px)] mt-2">
                Quero Ver o InovaConcilia em Ação <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </motion.form>
      </div>
    </Section>
  );
}

function Field({ label, name, type = "text", placeholder, className = "" }: { label: string; name: string; type?: string; placeholder?: string; className?: string }) {
  return (
    <label className={`block ${className}`}>
      <span className="text-xs font-medium text-muted-foreground mb-1.5 block">{label}</span>
      <input
        required
        type={type}
        name={name}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-lg bg-input/60 border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition text-sm"
      />
    </label>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-surface/40 px-6 md:px-10 py-14">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-9 h-9 rounded-lg bg-[image:var(--gradient-primary)] flex items-center justify-center shadow-[var(--glow-primary)]">
              <Sparkles className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-display font-bold text-lg">Inova<span className="text-primary">Concilia</span></span>
          </div>
          <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
            Tecnologia desenvolvida para transformar operações contábeis através da Inteligência Artificial.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-4">Inovamind</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Building2 className="w-4 h-4" /> Soluções com IA</li>
            <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> contato@inovamind.com.br</li>
            <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> +55 (11) 0000-0000</li>
            <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Brasil</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-4">Plataforma</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#solucao" className="hover:text-foreground transition">Solução</a></li>
            <li><a href="#funcionalidades" className="hover:text-foreground transition">Funcionalidades</a></li>
            <li><a href="#beneficios" className="hover:text-foreground transition">Benefícios</a></li>
            <li><a href="#contato" className="hover:text-foreground transition">Demonstração</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-border text-xs text-muted-foreground flex flex-wrap justify-between gap-3">
        <span>© {new Date().getFullYear()} Inovamind. Todos os direitos reservados.</span>
        <span>InovaConcilia™ — Conciliação Contábil com IA</span>
      </div>
    </footer>
  );
}
