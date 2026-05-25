import { useState } from "react";
import {
  Leaf,
  Heart,
  Shield,
  MapPin,
  Clock,
  Phone,
  ChevronDown,
  ChevronUp,
  Award,
  Users,
  CheckCircle,
  ArrowRight,
  Stethoscope,
  Brain,
  Sparkles,
  BookOpen,
  MessageCircle,
  Star,
} from "lucide-react";

const WHATSAPP_NUMBER = "5543988100088";
const WHATSAPP_URL = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}`;

function CTAButton({ children, className = "", large = false }: { children: React.ReactNode; className?: string; large?: boolean }) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 font-display font-semibold rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 ${large ? "px-10 py-4 text-lg" : "px-7 py-3 text-base"} bg-accent text-accent-foreground hover:opacity-90 ${className}`}
    >
      {children}
    </a>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block font-body font-medium text-sm tracking-widest uppercase text-secondary-foreground mb-3 px-3 py-1 rounded-full" style={{ backgroundColor: "oklch(0.95 0.03 5)" }}>
      {children}
    </span>
  );
}

function SectionTitle({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <h2 className={`font-display font-semibold text-3xl md:text-4xl text-primary leading-tight ${className}`}>
      {children}
    </h2>
  );
}

// ============================================================
// NAVBAR
// ============================================================
function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b border-border shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="https://pub-c0bfb119504542e0b2e6ebc8f6b3b1df.r2.dev/user-uploads/user_33CfYozYKp8m26XEVbFyTY5nq5r/bc79f886-cc39-432b-97bf-b4fd169bd74b.png"
            alt="Loriane Godinho - Logo"
            className="h-10 w-auto object-contain"
          />
          <div>
            <p className="font-display font-bold text-primary text-sm leading-tight">Loriane Costa Godinho</p>
            <p className="font-body text-xs text-muted-foreground leading-tight">Nutrição Consciente</p>
          </div>
        </div>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center gap-2 font-display font-semibold text-sm px-5 py-2 rounded-full bg-accent text-accent-foreground hover:opacity-90 transition-all shadow-sm"
        >
          <MessageCircle size={16} />
          Agendar consulta
        </a>
      </div>
    </nav>
  );
}

// ============================================================
// HERO
// ============================================================
function HeroSection() {
  return (
    <section className="min-h-screen pt-24 pb-20 flex items-center bg-background relative overflow-hidden">
      {/* Decoração sutil */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10" style={{ backgroundColor: "oklch(0.82 0.05 5)", transform: "translate(30%, -30%)" }} />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full opacity-8" style={{ backgroundColor: "oklch(0.60 0.16 148)", transform: "translate(-40%, 40%)" }} />

      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Leaf className="text-accent" size={20} />
              <span className="font-body text-sm font-medium text-muted-foreground tracking-wide uppercase">Nutrição Consciente · Londrina & Online</span>
            </div>

            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-primary leading-tight mb-6">
              Nutrição especializada com{" "}
              <span style={{ color: "oklch(0.52 0.14 148)" }}>ciência</span>,{" "}
              <span style={{ color: "oklch(0.52 0.14 148)" }}>acolhimento</span>{" "}
              e <span style={{ color: "oklch(0.52 0.14 148)" }}>consciência</span>
            </h1>

            <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
              Um cuidado nutricional que respeita cada história, cada corpo e cada relação com a comida. Com ciência, empatia e atenção individualizada a cada etapa do acompanhamento.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <CTAButton large>
                <MessageCircle size={20} />
                Agendar pelo WhatsApp
              </CTAButton>
            </div>

            <div className="flex flex-wrap gap-6 text-sm font-body text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <CheckCircle size={16} className="text-accent" />
                Atendimento presencial em Londrina
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle size={16} className="text-accent" />
                Atendimento online
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle size={16} className="text-accent" />
                CRN 8 - 5669
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              {/* Foto profissional da Loriane */}
              <div className="w-80 h-[460px] md:w-96 md:h-[560px] rounded-3xl shadow-xl overflow-hidden relative">
                <img
                  src="https://pub-c0bfb119504542e0b2e6ebc8f6b3b1df.r2.dev/user-uploads/user_33CfYozYKp8m26XEVbFyTY5nq5r/371d2553-cc7f-4dfa-a034-0e154c2439e2.jpg"
                  alt="Loriane Costa Godinho - Nutricionista"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Badge flutuante */}
              {/* Badge flutuante */}
<div className="absolute -bottom-5 -left-6 bg-card rounded-2xl p-4 shadow-xl border border-border flex items-center gap-3">
  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: "oklch(0.96 0.04 148)" }}>
    <Award size={20} className="text-accent" />
  </div>
  <div>
    <p className="font-display font-bold text-primary text-sm">Doutora em</p>
    <p className="font-body text-xs text-muted-foreground">Ciências da Saúde · UEL</p>
  </div>
</div>

{/* Badge flutuante - AMBULIM */}
<div className="absolute bottom-28 right-0 md:-bottom-5 md:right-auto md:left-[230px] bg-card rounded-2xl p-3 shadow-xl border border-border flex items-center gap-2 w-[230px] md:w-[250px] z-10">
  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: "oklch(0.96 0.04 148)" }}>
    <Award size={20} className="text-accent" />
  </div>
  <div>
    <p className="font-display font-bold text-primary text-sm">Aprimoramento em</p>
    <p className="font-body text-xs text-muted-foreground">Transtornos Alimentares</p>
    <p className="font-body text-[10px] text-muted-foreground">AMBULIM · IPQ/HC/FMUSP</p>
  </div>
</div>
              {/* Badge flutuante 2 */}
              <div className="absolute -top-4 -right-5 bg-card rounded-2xl p-4 shadow-xl border border-border flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: "oklch(0.96 0.02 5)" }}>
                  <Heart size={20} style={{ color: "oklch(0.82 0.05 5)", filter: "saturate(2)" }} />
                </div>
                <div>
                  <p className="font-display font-bold text-primary text-sm">Atendimento</p>
                  <p className="font-body text-xs text-muted-foreground">Humanizado e Individualizado</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// PARA QUEM É
// ============================================================
function ForWhoSection() {
  const groups = [
    {
      icon: <Stethoscope size={24} className="text-primary" />,
      title: "Sobrepeso e Obesidade com Medicação",
      description: "Para quem está em tratamento medicamentoso e precisa de suporte nutricional especializado, seguro e individualizado.",
    },
    {
      icon: <Shield size={24} className="text-primary" />,
      title: "Pré e Pós-Cirurgia Bariátrica",
      description: "Acompanhamento nutricional especializado para o tratamento da obesidade em todas as fases: inserção de balão intragástrico, cirurgia bariátrica e metabólica, com segurança clínica e cuidado humanizado.",
    },
    {
      icon: <Brain size={24} className="text-primary" />,
      title: "Transtornos Alimentares",
      description: "Atendimento especializado para bulimia, anorexia nervosa e transtorno da compulsão alimentar, com abordagem empática e sem julgamento.",
    },
    {
      icon: <Heart size={24} className="text-primary" />,
      title: "Reconexão com a Alimentação",
      description: "Para quem deseja reconstruir uma relação mais leve, consciente e sustentável com a comida. Sem dietas rígidas e sem culpa.",
    },
  ];

  return (
    <section className="py-24 bg-card">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <SectionLabel>Para quem é o atendimento</SectionLabel>
          <SectionTitle className="mb-5">Você se reconhece nessa história?</SectionTitle>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Meu atendimento nutricional é voltado para pessoas que buscam um cuidado especializado, individualizado e humanizado. Não existe um perfil único: existe a <strong className="text-primary">sua</strong> história. Única, legítima e merecedora de atenção real.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {groups.map((g, i) => (
            <div key={i} className="bg-background rounded-2xl p-6 border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: "oklch(0.96 0.015 155)" }}>
                {g.icon}
              </div>
              <h3 className="font-display font-semibold text-primary text-base mb-3 leading-snug">{g.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{g.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// DORES E CONEXÃO EMOCIONAL
// ============================================================
function PainsSection() {
  const pains = [
    "Medo de regredir e recuperar o peso",
    "Culpa por não conseguir seguir dietas rígidas",
    "Sensação de fracasso toda vez que sai do plano",
    "Comer emocional com dificuldade em se controlar",
    "Confusão entre fome física e vontade de comer",
    "Medo de dumping, enjoos e desconfortos pós-cirúrgicos",
    "Queda de cabelo, fadiga, perda de massa muscular e deficiências nutricionais",
    "Vergonha, julgamento e isolamento social",
    "Episódios de compulsão alimentar seguidos de culpa",
    "Ciclo de perda e reganho rápido de peso, que transmite a impressão de ser incontrolável",
    "Relação disfuncional com o corpo e a comida",
    "Sensação de falta de conhecimento no pós-operatório da cirurgia bariátrica ou da inserção de balão intragástrico",
    "Presença de desconfortos gastrointestinais, como síndrome do intestino irritável, SIBO, IMO, constipação e diarreia",
  ];

  return (
    <>
      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <SectionLabel>Você não está só</SectionLabel>

            <SectionTitle className="mb-6">
              Eu entendo o quanto isso pode ser difícil
            </SectionTitle>

            <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6">
              A relação com a alimentação vai muito além do que comemos. Ela carrega memórias,
              emoções, medos e histórias. E quando essa relação se torna um peso, o sofrimento
              é real, mesmo que invisível para quem está de fora.
            </p>

            <p className="font-body text-base text-muted-foreground leading-relaxed mb-8">
              Seja no tratamento do sobrepeso e da obesidade, na luta contra os transtornos
              alimentares ou na busca por uma relação mais saudável com a comida, você merece
              um acompanhamento que te enxergue como pessoa, e não apenas como um diagnóstico.
            </p>

            <CTAButton>
              <MessageCircle size={18} />
              Quero iniciar meu acompanhamento
            </CTAButton>
          </div>
        </div>
      </section>

      <section className="py-24 bg-card">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <SectionLabel>Queixas comuns</SectionLabel>

            <h2 className="font-display font-semibold text-3xl md:text-4xl text-primary leading-tight">
              Se você apresenta alguma das queixas abaixo, estou aqui para te auxiliar
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {pains.map((pain, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-background rounded-xl p-3 border border-border shadow-sm"
              >
                <div
                  className="w-2 h-2 rounded-full mt-1.5 shrink-0"
                  style={{ backgroundColor: "oklch(0.82 0.05 5)", filter: "saturate(2)" }}
                />
                <p className="font-body text-sm text-foreground leading-relaxed">
                  {pain}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

// ============================================================
// COMO POSSO AJUDAR
// ============================================================
function HowHelpSection() {
  const outcomes = [
    { icon: <Brain size={20} className="text-primary" />, text: "Compreender a diferença entre fome física e fome hedônica" },
    { icon: <Heart size={20} className="text-primary" />, text: "Reconstruir uma relação mais leve e consciente com a comida" },
    { icon: <Leaf size={20} className="text-primary" />, text: "Abandonar a mentalidade de dieta e criar escolhas sustentáveis" },
    { icon: <Shield size={20} className="text-primary" />, text: "Respeitar a nova anatomia e o novo momento do corpo" },
    { icon: <Award size={20} className="text-primary" />, text: "Prevenir e corrigir deficiências nutricionais com segurança" },
    { icon: <Sparkles size={20} className="text-primary" />, text: "Recuperar autonomia alimentar e confiança em suas escolhas" },
    { icon: <CheckCircle size={20} className="text-primary" />, text: "Ter mais clareza, bem-estar físico e equilíbrio emocional" },
    { icon: <Star size={20} className="text-primary" />, text: "Seguir um processo sustentável, sem culpa" },
  ];

  return (
    <section className="py-24 bg-card">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <SectionLabel>A transformação possível</SectionLabel>
          <SectionTitle className="mb-5">Como o acompanhamento nutricional pode te ajudar</SectionTitle>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            O objetivo não é apenas um plano alimentar. É ajudar você a se reconectar com seu corpo, com suas necessidades individuais e a construir uma vida com mais leveza e bem-estar.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {outcomes.map((o, i) => (
            <div key={i} className="bg-background rounded-2xl p-5 border border-border flex items-start gap-3 hover:shadow-md transition-all duration-300">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: "oklch(0.96 0.015 155)" }}>
                {o.icon}
              </div>
              <p className="font-body text-sm text-foreground leading-relaxed">{o.text}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <CTAButton large>
            <ArrowRight size={20} />
            Iniciar meu acompanhamento
          </CTAButton>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// DIFERENCIAIS
// ============================================================
function DifferentialsSection() {
  const diffs = [
    {
      icon: <BookOpen size={28} className="text-primary" />,
      title: "Nutrição Baseada em Evidências",
      desc: "Cada conduta clínica é fundamentada em ciência atual, publicações científicas e diretrizes reconhecidas internacionalmente.",
    },
    {
      icon: <Users size={28} className="text-primary" />,
      title: "Acompanhamento 100% Individualizado",
      desc: "Não existe protocolo genérico. Cada pessoa tem um histórico único, e o atendimento se adapta completamente à sua realidade.",
    },
    {
      icon: <Heart size={28} className="text-primary" />,
      title: "Olhar Humanizado e Sensível",
      desc: "O cuidado vai além da nutrição. Aqui cada pessoa é acolhida com respeito, sem julgamentos e com atenção real à sua história.",
    },
    {
      icon: <Leaf size={28} className="text-primary" />,
      title: "Sem Terrorismo Nutricional",
      desc: "A abordagem respeita sua relação com a comida. Sem terrorismo nutricional, sem culpa. Com equilíbrio e consciência real.",
    },
    {
      icon: <Brain size={28} className="text-primary" />,
      title: "Foco no Comportamento Alimentar",
      desc: "O cuidado contempla a dimensão emocional da alimentação, com suporte ao comportamento alimentar e bem-estar integral.",
    },
    {
      icon: <Shield size={28} className="text-primary" />,
      title: "Segurança Clínica em Casos Complexos",
      desc: "Experiência especializada e consolidada no tratamento da obesidade com e sem medicação, cirurgia bariátrica e balão intragástrico.",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <SectionLabel>Diferenciais</SectionLabel>
          <SectionTitle className="mb-5">Um atendimento que vai além do plano alimentar</SectionTitle>
          <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed italic" style={{ color: "oklch(0.40 0.06 155)" }}>
            "A nutrição é o ponto de encontro entre a ciência e o cuidado humanizado."
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {diffs.map((d, i) => (
            <div key={i} className="bg-card rounded-2xl p-7 border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300" style={{ backgroundColor: "oklch(0.96 0.015 155)" }}>
                {d.icon}
              </div>
              <h3 className="font-display font-semibold text-primary text-lg mb-3">{d.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <CTAButton>
            <MessageCircle size={18} />
            Quero conhecer o atendimento
          </CTAButton>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// SOBRE A PROFISSIONAL
// ============================================================
function AboutSection() {
  const credentials = [
    "Doutora e Mestra em Ciências da Saúde (UEL)",
    "Aprimoramento em Transtornos Alimentares pelo AMBULIM (IPQ/HC/FMUSP)",
    "Membro COESAS da Sociedade Brasileira de Cirurgia Bariátrica e Metabólica (SBCBM)",
    "Membro International Federation for the Surgery of Obesity and Metabolic Disorders (IFSO)",
    "CRN 8 - 5669",
  ];

  return (
    <section className="py-24 bg-card">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Foto placeholder */}
          <div className="flex justify-center md:justify-start">
            <div className="relative">
              <div className="w-80 h-[420px] md:w-96 md:h-[520px] rounded-3xl shadow-xl overflow-hidden">
                <img
                  src="https://pub-c0bfb119504542e0b2e6ebc8f6b3b1df.r2.dev/user-uploads/user_33CfYozYKp8m26XEVbFyTY5nq5r/78839a34-4256-4159-a2da-504d886673ce.jpg"
                  alt="Loriane Costa Godinho - Nutricionista"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-card rounded-2xl p-5 shadow-xl border border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: "oklch(0.96 0.04 148)" }}>
                    <Award size={20} className="text-accent" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-primary text-sm">+ de 15 anos</p>
                    <p className="font-body text-xs text-muted-foreground">de atuação clínica</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <SectionLabel>Sobre mim</SectionLabel>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mb-2">Loriane Costa Godinho</h2>
            <p className="font-body font-medium text-muted-foreground mb-6 text-lg">Nutricionista | Nutrição Consciente</p>

            <p className="font-body text-base text-muted-foreground leading-relaxed mb-5">
              Com formação científica sólida e atuação clínica especializada, construí uma trajetória comprometida com o cuidado humanizado.
            </p>
            <p className="font-body text-base text-muted-foreground leading-relaxed mb-8">
              Minha abordagem une rigor científico e sensibilidade genuína. Conduzo cada consulta com atenção individualizada, respeito à história da pessoa e olhar cuidadoso sobre a relação entre alimentação, corpo e emoções.
            </p>

            <div className="space-y-3 mb-8">
              {credentials.map((c, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-accent shrink-0 mt-0.5" />
                  <p className="font-body text-sm text-foreground leading-relaxed">{c}</p>
                </div>
              ))}
            </div>

            <CTAButton>
              <MessageCircle size={18} />
              Agendar consulta
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// SERVIÇOS
// ============================================================
function ServicesSection() {
  const services = [
    {
      highlight: true,
      icon: <Users size={28} className="text-primary" />,
      title: "Acompanhamento Nutricional Individualizado",
      desc: "Atendimento exclusivo e personalizado, com conduta nutricional construída sob medida para a sua realidade, suas necessidades e sua história. Presencial ou online.",
    },
    {
      icon: <Stethoscope size={24} className="text-primary" />,
      title: "Avaliação Nutricional Completa",
      desc: "Análise detalhada do estado nutricional, histórico alimentar, comportamento alimentar e objetivos individuais.",
    },
    {
      icon: <Shield size={24} className="text-primary" />,
      title: "Avaliação por Bioimpedância Elétrica",
      desc: "Avaliação da composição corporal com tecnologia de bioimpedância elétrica, com interpretação clínica individualizada.",
    },
    {
      icon: <Users size={24} className="text-primary" />,
      title: "Acompanhamento Nutricional em Grupo",
      desc: "Espaço coletivo e acolhedor para trabalhar a relação com a alimentação em conjunto, com suporte profissional especializado.",
    },
    {
      icon: <Sparkles size={24} className="text-primary" />,
      title: 'Programa "Consciência que Nutre"',
      desc: "Programa nutricional desenvolvido com foco em consciência alimentar, autonomia e transformação sustentável da relação com a comida.",
    },
    {
      icon: <Heart size={24} className="text-primary" />,
      title: "Atendimento Online",
      desc: "Toda a qualidade do atendimento presencial, no conforto da sua casa, para brasileiros no Brasil e no exterior.",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <SectionLabel>Serviços</SectionLabel>
          <SectionTitle className="mb-5">Como posso te acompanhar</SectionTitle>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Cada formato de atendimento foi pensado para oferecer o suporte adequado ao seu momento, com o rigor científico e o cuidado humanizado que você merece.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className={`rounded-2xl p-7 border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                s.highlight
                  ? "border-primary shadow-md"
                  : "bg-card border-border hover:shadow-md"
              }`}
              style={s.highlight ? { backgroundColor: "oklch(0.96 0.015 155)" } : {}}
            >
              {s.highlight && (
                <span className="inline-block font-body text-xs font-semibold uppercase tracking-widest text-accent mb-4 px-3 py-1 rounded-full" style={{ backgroundColor: "oklch(0.92 0.05 148)" }}>
                  Destaque
                </span>
              )}
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${s.highlight ? "bg-card" : ""}`} style={!s.highlight ? { backgroundColor: "oklch(0.96 0.015 155)" } : {}}>
                {s.icon}
              </div>
              <h3 className={`font-display font-semibold text-primary mb-3 ${s.highlight ? "text-lg" : "text-base"}`}>{s.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// PROGRAMA CONSCIÊNCIA QUE NUTRE
// ============================================================
function ConscienciaNutreProgramSection() {
  const pillars = [
    { icon: <Brain size={20} className="text-primary" />, text: "Consciência alimentar no dia a dia" },
    { icon: <Heart size={20} className="text-primary" />, text: "Reconexão com o seu corpo e suas necessidades" },
    { icon: <Leaf size={20} className="text-primary" />, text: "Escolhas conscientes, sem culpa e sem restrição extrema" },
    { icon: <Sparkles size={20} className="text-primary" />, text: "Leveza e profundidade no processo de transformação" },
    { icon: <Star size={20} className="text-primary" />, text: "Autonomia alimentar real e duradoura" },
    { icon: <CheckCircle size={20} className="text-primary" />, text: "Processo sustentável adaptado à sua vida" },
  ];

  return (
    <section className="py-24 bg-card relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-5" style={{ backgroundColor: "oklch(0.35 0.08 155)", transform: "translate(20%, -20%)" }} />

      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <SectionLabel>Programa nutricional</SectionLabel>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mb-5">
              Programa Nutricional{" "}
              <span style={{ color: "oklch(0.52 0.14 148)" }}>"Consciência que Nutre"</span>
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Mais do que um método, é uma forma de cuidar. O programa "Consciência que Nutre" é um diferencial: uma abordagem que une ciência, comportamento alimentar e cuidado humanizado.
            </p>
          </div>

          <div className="bg-background rounded-3xl border border-border p-8 md:p-12 shadow-sm mb-10">
            <p className="font-body text-base text-muted-foreground leading-relaxed mb-8">
              O nome não é apenas um título. Ele representa uma filosofia de atendimento: a convicção de que a nutrição, quando praticada com consciência, tem o poder de transformar não só o corpo, mas a forma como cada pessoa se relaciona com a comida, com o dia a dia e com a própria vida.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {pillars.map((p, i) => (
                <div key={i} className="flex items-start gap-3 bg-card rounded-xl p-4 border border-border">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: "oklch(0.96 0.015 155)" }}>
                    {p.icon}
                  </div>
                  <p className="font-body text-sm text-foreground leading-relaxed">{p.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <CTAButton large>
              <MessageCircle size={20} />
              Quero conhecer o programa
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// PROGRAMA PÓS-BARIÁTRICA
// ============================================================
function BariatricProgramSection() {
  const fears = [
    "Medo do reganho de peso",
    "Dúvida sobre o que comer e como comer",
    "Dificuldade com saciedade e porções",
    "Comer emocional que permanece após a cirurgia",
    "Dumping, entalos e desconfortos digestivos",
    "Queda de cabelo, fadiga, perda de massa muscular e deficiências nutricionais",
    "Sensação de falta de conhecimento no pós-operatório da cirurgia bariátrica ou da inserção de balão intragástrico",
    "Presença de desconfortos gastrointestinais, como síndrome do intestino irritável, SIBO, IMO, constipação e diarreia",
  ];

  const outcomes = [
    { icon: <CheckCircle size={18} className="text-accent" />, text: "Adaptar a alimentação à nova anatomia com segurança" },
    { icon: <CheckCircle size={18} className="text-accent" />, text: "Prevenir e corrigir deficiências nutricionais" },
    { icon: <CheckCircle size={18} className="text-accent" />, text: "Reconstruir segurança e autonomia alimentar" },
    { icon: <CheckCircle size={18} className="text-accent" />, text: "Diferenciar fome física de fome hedônica" },
    { icon: <CheckCircle size={18} className="text-accent" />, text: "Criar uma rotina alimentar sustentável e prazerosa" },
    { icon: <CheckCircle size={18} className="text-accent" />, text: "Receber suporte contínuo e individualizado" },
    { icon: <CheckCircle size={18} className="text-accent" />, text: "Melhorar a composição corporal, mantendo funcionalidade e priorizando a manutenção da massa muscular" },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <SectionLabel>Acompanhamento nutricional</SectionLabel>
          <h2 className="font-display font-semibold text-3xl md:text-4xl text-primary mb-5">
            Acompanhamento Nutricional{" "}
            <span style={{ color: "oklch(0.52 0.14 148)" }}>Pós-Bariátrica</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A cirurgia bariátrica e metabólica traz alterações anatômicas e metabólicas. O cuidado nutricional especializado auxilia nos resultados duradouros e melhora a qualidade de vida.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mb-14">
          <div className="bg-card rounded-2xl border border-border p-8 shadow-sm">
            <h3 className="font-display font-semibold text-primary text-lg mb-6 flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: "oklch(0.96 0.02 5)" }}>
                <Heart size={18} style={{ color: "oklch(0.65 0.10 5)" }} />
              </div>
              O que você pode estar sentindo
            </h3>
            <div className="space-y-3">
              {fears.map((f, i) => (
                <div key={i} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ backgroundColor: "oklch(0.82 0.05 5)", filter: "saturate(2)" }} />
                  <p className="font-body text-sm text-foreground">{f}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card rounded-2xl border border-border p-8 shadow-sm">
            <h3 className="font-display font-semibold text-primary text-lg mb-6 flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: "oklch(0.92 0.05 148)" }}>
                <Sparkles size={18} className="text-accent" />
              </div>
              O que o acompanhamento visa
            </h3>
            <div className="space-y-3">
              {outcomes.map((o, i) => (
                <div key={i} className="flex items-start gap-2">
                  {o.icon}
                  <p className="font-body text-sm text-foreground">{o.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center">
          <CTAButton large>
            <MessageCircle size={20} />
            Quero iniciar o acompanhamento pós-bariátrica
          </CTAButton>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// FAQ
// ============================================================
function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  const faqs = [
    {
      q: "O atendimento é presencial ou online?",
      a: "Ofereço as duas modalidades. O atendimento presencial acontece em Londrina/PR, na Rua João Wyclif, nº 111, sala 1012, Edifício Jardim Sul. O atendimento online também está disponível para brasileiros no Brasil e no exterior, com a mesma qualidade e atenção individualizada.",
    },
    {
      q: "Como funciona a primeira consulta?",
      a: "Na primeira consulta, é realizada uma avaliação nutricional completa: histórico de saúde, hábitos alimentares, comportamento alimentar, exames e objetivos. É um momento de escuta ativa, sem julgamentos, para entender sua história e construir um plano de cuidado real para você, respeitando sua individualidade.",
    },
    {
      q: "Você atende pacientes bariátricos e pós-balão intragástrico?",
      a: "Sim. Tenho atuação especializada no cuidado nutricional em todas as fases, incluindo pré e pós-cirurgia bariátrica, além do acompanhamento de pacientes após balão intragástrico. Sou membro da SBCBM e da IFSO.",
    },
    {
      q: "Você atende casos de transtorno da compulsão alimentar, bulimia e anorexia?",
      a: "Sim. Tenho aprimoramento em Transtornos Alimentares pelo AMBULIM (IPQ/HC/FMUSP) e atuação especializada com bulimia nervosa, anorexia nervosa e transtorno da compulsão alimentar. O atendimento é realizado com abordagem respeitosa, empática e baseada em evidências.",
    },
    {
      q: "O atendimento inclui plano alimentar?",
      a: "Sim, quando clinicamente indicado. Mas o acompanhamento vai muito além do plano alimentar. O foco é no comportamento alimentar, na relação com a comida e no desenvolvimento de autonomia real e sustentável no longo prazo.",
    },
    {
      q: "O acompanhamento é individualizado?",
      a: "Sim. Não existem protocolos genéricos. Cada pessoa tem uma história única, e o atendimento se adapta à sua realidade, aos seus objetivos e às suas necessidades clínicas e emocionais.",
    },
    {
      q: "Você atende por plano de saúde?",
      a: "Não. O atendimento é particular, porém alguns planos de saúde autorizam reembolso. É necessário verificar diretamente com a sua operadora.",
    },
    {
      q: "Posso fazer somente o exame de bioimpedância elétrica, sem passar por consulta?",
      a: "Sim. A avaliação por bioimpedância elétrica pode ser realizada separadamente do acompanhamento nutricional.",
    },
    {
      q: "Você atende pacientes em uso de agonistas de GLP-1?",
      a: "SIM, Minha abordagem integra nutrição comportamental para resultados sustentáveis para auxiliar na adesão ao medicamento; prevenção do efeito rebote e construir novos hábitos a longo prazo.",
    },
    {
      q: "Qual o horário de atendimento?",
      a: "O atendimento acontece de segunda a sexta, das 8h às 12h e das 14h às 19h. Aos sábados, das 8h às 12h. Para o atendimento online, os horários podem ser combinados conforme disponibilidade.",
    },
    {
      q: "Como faço para agendar pelo WhatsApp?",
      a: "É simples. Clique no botão de WhatsApp nesta página e envie uma mensagem. Estarei disponível para esclarecer suas dúvidas e seguir com o agendamento.",
    },
  ];
  return (
    <section className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <SectionLabel>Dúvidas frequentes</SectionLabel>
          <SectionTitle className="mb-5">Perguntas frequentes</SectionTitle>
          <p className="font-body text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Ficou com alguma dúvida? Aqui estão as perguntas que chegam com mais frequência.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm">
              <button
                className="w-full flex items-center justify-between p-6 text-left hover:bg-background transition-colors duration-200"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-display font-semibold text-primary text-base pr-4">{faq.q}</span>
                {open === i ? <ChevronUp size={20} className="text-accent shrink-0" /> : <ChevronDown size={20} className="text-muted-foreground shrink-0" />}
              </button>
              {open === i && (
                <div className="px-6 pb-6">
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// LOCALIZAÇÃO
// ============================================================
function LocationSection() {
  return (
    <section className="py-24 bg-card">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <SectionLabel>Onde e como atendo</SectionLabel>
          <SectionTitle className="mb-5">Localização e horários</SectionTitle>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-background rounded-2xl p-7 border border-border shadow-sm">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ backgroundColor: "oklch(0.96 0.015 155)" }}>
              <MapPin size={24} className="text-primary" />
            </div>
            <h3 className="font-display font-semibold text-primary text-base mb-3">Atendimento Presencial</h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              Rua João Wyclif, nº 111<br />
              Sala 1012 · Edifício Jardim Sul<br />
              CEP 86050-450<br />
              <strong className="text-foreground">Londrina · PR</strong>
            </p>
          </div>

          <div className="bg-background rounded-2xl p-7 border border-border shadow-sm">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ backgroundColor: "oklch(0.96 0.015 155)" }}>
              <Clock size={24} className="text-primary" />
            </div>
            <h3 className="font-display font-semibold text-primary text-base mb-3">Horário de Atendimento</h3>
            <div className="font-body text-sm text-muted-foreground leading-relaxed space-y-1">
              <p>Segunda a Sexta</p>
              <p className="text-foreground font-medium">08h às 12h · 14h às 19h</p>
              <p className="mt-2">Sábado</p>
              <p className="text-foreground font-medium">08h às 12h</p>
            </div>
          </div>

          <div className="bg-background rounded-2xl p-7 border border-border shadow-sm">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ backgroundColor: "oklch(0.92 0.05 148)" }}>
              <Phone size={24} className="text-accent" />
            </div>
            <h3 className="font-display font-semibold text-primary text-base mb-3">Atendimento Online</h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
              Atendimento online para brasileiros no Brasil e no exterior, com a mesma qualidade e atenção do atendimento presencial.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-body text-sm font-semibold text-accent hover:opacity-80 transition-opacity"
            >
              <Phone size={14} />
              (43) 98810-0088
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// CTA FINAL
// ============================================================
function FinalCTASection() {
  return (
    <section className="py-28 bg-primary relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5 bg-white" style={{ transform: "translate(30%, -30%)" }} />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full opacity-5 bg-white" style={{ transform: "translate(-40%, 40%)" }} />

      <div className="max-w-4xl mx-auto px-6 text-center relative">
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full" style={{ backgroundColor: "oklch(1 0 0 / 10%)" }}>
          <Leaf size={16} className="text-primary-foreground opacity-80" />
          <span className="font-body text-sm text-primary-foreground opacity-80 tracking-wider uppercase">Nutrição Consciente</span>
        </div>

        <h2 className="font-display font-bold text-3xl md:text-5xl text-primary-foreground leading-tight mb-6">
          Dê o próximo passo com um acompanhamento que respeita a sua história
        </h2>

        <p className="font-body text-lg text-primary-foreground opacity-80 leading-relaxed mb-10 max-w-2xl mx-auto">
          Agende seu atendimento pelo WhatsApp e comece um cuidado nutricional especializado, humanizado e personalizado. Você merece esse cuidado!
        </p>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 font-display font-bold text-lg px-12 py-5 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 bg-accent text-accent-foreground hover:opacity-90"
        >
          <MessageCircle size={22} />
          Agendar pelo WhatsApp
          <ArrowRight size={22} />
        </a>

        <p className="font-body text-sm text-primary-foreground opacity-60 mt-6">
          (43) 98810-0088 · Londrina e Online
        </p>
      </div>
    </section>
  );
}

// ============================================================
// FOOTER
// ============================================================
function Footer() {
  return (
    <footer className="bg-foreground py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Leaf size={20} className="text-primary-foreground opacity-60" />
              <p className="font-display font-bold text-primary-foreground text-sm">Loriane Costa Godinho</p>
            </div>
            <p className="font-body text-sm text-primary-foreground opacity-50 leading-relaxed">
              Nutricionista · CRN 8 - 5669<br />
              Nutrição Consciente
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-primary-foreground text-sm mb-4 opacity-70 uppercase tracking-wider">Contato</h4>
            <div className="space-y-2">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-body text-sm text-primary-foreground opacity-60 hover:opacity-90 transition-opacity">
                <Phone size={14} />
                (43) 98810-0088
              </a>
              <div className="flex items-start gap-2 font-body text-sm text-primary-foreground opacity-60">
                <MapPin size={14} className="mt-0.5 shrink-0" />
                <span>Rua João Wyclif, 111, sala 1012<br />Londrina · PR</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-primary-foreground text-sm mb-4 opacity-70 uppercase tracking-wider">Especialidades</h4>
            <ul className="space-y-1.5 font-body text-sm text-primary-foreground opacity-60">
              <li>Nutricionista em Londrina</li>
              <li>Nutrição Bariátrica e Pós-bariátrica</li>
              <li>Transtornos alimentares</li>
              <li>Distúrbios gastrointestinais</li>
              <li>Obesidade e Sobrepeso</li>
              <li>Atendimento Online</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-primary-foreground opacity-40">
            © {new Date().getFullYear()} Loriane Costa Godinho · Todos os direitos reservados
          </p>
          <p className="font-body text-xs text-primary-foreground opacity-40">
            Nutricionista · CRN 8 - 5669 · Londrina/PR
          </p>
        </div>
      </div>
    </footer>
  );
}

// ============================================================
// BOTÃO WHATSAPP FLUTUANTE
// ============================================================
function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar consulta pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-3xl bg-accent text-accent-foreground"
    >
      <MessageCircle size={28} />
    </a>
  );
}

// ============================================================
// APP PRINCIPAL
// ============================================================
export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ForWhoSection />
      <PainsSection />
      <HowHelpSection />
      <DifferentialsSection />
      <AboutSection />
      <ServicesSection />
      <ConscienciaNutreProgramSection />
      <BariatricProgramSection />
      <FAQSection />
      <LocationSection />
      <FinalCTASection />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
