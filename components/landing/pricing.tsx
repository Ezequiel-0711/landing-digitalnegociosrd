import { Button } from "@/components/ui/button"
import { Check, X, MessageCircle, Zap, Crown, Layers, type LucideIcon } from "lucide-react"

const WHATSAPP_NUMBER = "18099869730"

type Plan = {
  id: string
  name: string
  subtitle: string
  Icon: LucideIcon
  target: string
  setup: string
  monthly: string
  featured: boolean
  badge?: string
  includes: string[]
  message: string
  gradient: string
  border: string
  badgeBg: string
  ctaLabel: string
}

const plans: Plan[] = [
  {
    id: "basico",
    name: "DigitalBot Básico",
    subtitle: "Plan Básico",
    Icon: Zap,
    target: "Ideal para negocios que quieren automatizar sus pedidos por WhatsApp",
    setup: "RD$3,000",
    monthly: "RD$1,500",
    featured: false,
    includes: [
      "Automatización completa de pedidos por WhatsApp",
      "Menú con categorías y precios",
      "Notificación al dueño en tiempo real",
      "Estados de pedido (confirmado, en camino, entregado)",
      "Horario de atención configurable",
      "Panel administrativo",
    ],
    message: "Hola! Quiero contratar el Plan Básico (DigitalBot Básico) para mi negocio",
    gradient: "from-slate-50 to-blue-50",
    border: "border-slate-200",
    badgeBg: "",
    ctaLabel: "Contratar Plan Básico",
  },
  {
    id: "elite",
    name: "DigitalBot Elite IA",
    subtitle: "Plan Elite IA",
    Icon: Crown,
    target: "Para negocios que quieren IA conversacional y catálogo digital",
    setup: "RD$8,000",
    monthly: "RD$5,000",
    featured: true,
    badge: "⭐ RECOMENDADO",
    includes: [
      "Todo lo del Básico",
      "IA conversacional con Gemini",
      "Catálogo digital público con fotos",
      "Sistema de variantes y tallas con stock real",
      "Config IA desde el panel sin tocar código",
      "Pausa automática cuando el dueño interviene",
      "Vista de clientes y leads con exportación CSV",
      "Mensajes masivos a clientes",
    ],
    message: "Hola! Quiero contratar el Plan Elite IA (DigitalBot Elite IA) para mi negocio",
    gradient: "from-blue-600 to-indigo-700",
    border: "border-blue-500",
    badgeBg: "bg-orange-500",
    ctaLabel: "Contratar Plan Elite IA",
  },
]

type ComparisonFeature = {
  name: string
  basico: boolean
  elite: boolean
}

const comparisonFeatures: ComparisonFeature[] = [
  { name: "Automatización completa de pedidos por WhatsApp", basico: true, elite: true },
  { name: "Menú con categorías y precios", basico: true, elite: true },
  { name: "Notificación al dueño en tiempo real", basico: true, elite: true },
  { name: "Estados de pedido (confirmado, en camino, entregado)", basico: true, elite: true },
  { name: "Horario de atención configurable", basico: true, elite: true },
  { name: "Panel administrativo", basico: true, elite: true },
  { name: "IA conversacional con Gemini", basico: false, elite: true },
  { name: "Catálogo digital público con fotos", basico: false, elite: true },
  { name: "Sistema de variantes y tallas con stock real", basico: false, elite: true },
  { name: "Config IA desde el panel sin tocar código", basico: false, elite: true },
  { name: "Pausa automática cuando el dueño interviene", basico: false, elite: true },
  { name: "Vista de clientes y leads con exportación CSV", basico: false, elite: true },
  { name: "Mensajes masivos a clientes", basico: false, elite: true },
]

function PlanCard({ plan }: { plan: Plan }) {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(plan.message)}`

  if (plan.featured) {
    return (
      <div className="relative flex flex-col rounded-3xl shadow-2xl overflow-hidden ring-4 ring-blue-400 scale-105 z-10 bg-gradient-to-br from-blue-600 to-indigo-700">
        {plan.badge && (
          <div className={`absolute top-5 right-5 ${plan.badgeBg} text-white text-xs font-bold px-3 py-1.5 rounded-full`}>
            {plan.badge}
          </div>
        )}
        <div className="p-7 flex flex-col flex-1 text-white">
          <div className="flex items-center gap-3 mb-1">
            <div className="p-2 bg-white/20 rounded-xl"><plan.Icon className="w-6 h-6" /></div>
            <div>
              <p className="text-sm font-semibold text-blue-200">{plan.subtitle}</p>
              <h3 className="text-xl font-bold">{plan.name}</h3>
            </div>
          </div>
          <p className="text-sm text-blue-200 mb-6 mt-2">{plan.target}</p>

          <div className="mb-6 pb-6 border-b border-blue-400/50">
            <div className="flex items-baseline gap-1 mb-1">
              <span className="text-4xl font-extrabold">{plan.monthly}</span>
              <span className="text-blue-200 text-base">/mes</span>
            </div>
            <p className="text-sm text-blue-200">Setup: <span className="font-semibold text-white">{plan.setup}</span> (pago único)</p>
          </div>

          <ul className="space-y-2.5 flex-1 mb-7">
            {plan.includes.map((feature, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-400/25 flex items-center justify-center mt-0.5">
                  <Check className="w-3 h-3 text-green-300" />
                </div>
                {feature}
              </li>
            ))}
          </ul>

          <Button asChild size="lg" className="w-full bg-white text-blue-600 hover:bg-blue-50 font-bold shadow-lg hover:shadow-xl transition-all hover:scale-105">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-4 w-4" />
              {plan.ctaLabel}
            </a>
          </Button>
          <p className="text-center text-xs text-blue-200 mt-3">Sin contrato largo · Cancela cuando quieras</p>
        </div>
      </div>
    )
  }

  return (
    <div className={`relative flex flex-col rounded-3xl border-2 ${plan.border} bg-gradient-to-br ${plan.gradient} shadow-md overflow-hidden`}>
      <div className="p-7 flex flex-col flex-1">
        <div className="flex items-center gap-3 mb-1">
          <div className="p-2 bg-blue-100 rounded-xl text-blue-600">
            <plan.Icon className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm font-semibold text-blue-500">{plan.subtitle}</p>
            <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
          </div>
        </div>
        <p className="text-sm text-muted-foreground mb-6 mt-2">{plan.target}</p>

        <div className="mb-6 pb-6 border-b border-border">
          <div className="flex items-baseline gap-1 mb-1">
            <span className="text-4xl font-extrabold text-blue-600">{plan.monthly}</span>
            <span className="text-muted-foreground text-base">/mes</span>
          </div>
          <p className="text-sm text-muted-foreground">Setup: <span className="font-semibold text-foreground">{plan.setup}</span> (pago único)</p>
        </div>

        <ul className="space-y-2.5 flex-1 mb-7">
          {plan.includes.map((feature, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-foreground">
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                <Check className="w-3 h-3 text-blue-600" />
              </div>
              {feature}
            </li>
          ))}
        </ul>

        <Button asChild size="lg" className="w-full font-bold shadow hover:shadow-md transition-all hover:scale-105 bg-blue-600 hover:bg-blue-700 text-white">
          <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(plan.message)}`} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="mr-2 h-4 w-4" />
            {plan.ctaLabel}
          </a>
        </Button>
        <p className="text-center text-xs text-muted-foreground mt-3">Sin contrato largo · Cancela cuando quieras</p>
      </div>
    </div>
  )
}

function CheckCell({ value }: { value: boolean }) {
  return value ? (
    <div className="flex justify-center">
      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
        <Check className="w-3.5 h-3.5 text-green-600" />
      </div>
    </div>
  ) : (
    <div className="flex justify-center">
      <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center">
        <X className="w-3.5 h-3.5 text-slate-400" />
      </div>
    </div>
  )
}

export function Pricing() {
  const addonMessage = "Hola! Quiero agregar el Add-on de Catálogo Digital a mi plan"
  const addonWhatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(addonMessage)}`

  return (
    <section id="precios" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight text-balance">
            Planes para Cada Negocio
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Empieza con lo que necesitas hoy y escala cuando tu negocio crezca.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6 items-start mb-12">
          {plans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>

        {/* Add-on */}
        <div className="max-w-3xl mx-auto mb-20">
          <div className="rounded-2xl border-2 border-dashed border-blue-200 bg-blue-50/50 p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6">
            <div className="p-3 bg-blue-100 rounded-xl text-blue-600 flex-shrink-0">
              <Layers className="w-6 h-6" />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <p className="text-sm font-semibold text-blue-600 mb-1">Add-on opcional</p>
              <h3 className="text-lg font-bold text-foreground mb-1">
                Catálogo Digital — RD$1,500 setup + RD$500/mes
              </h3>
              <p className="text-muted-foreground text-sm">
                Muestra tus productos con fotos, categorías y tallas desde un enlace. Disponible para cualquier plan.
              </p>
            </div>
            <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white font-semibold flex-shrink-0">
              <a href={addonWhatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-4 w-4" />
                Solicitar Add-on
              </a>
            </Button>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            Comparación de Features
          </h3>
          <div className="rounded-2xl border border-border overflow-hidden shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted/60">
                  <th className="text-left py-4 px-5 font-semibold text-foreground w-[60%]">Feature</th>
                  <th className="text-center py-4 px-3 font-semibold text-blue-600 w-[20%]">Básico</th>
                  <th className="text-center py-4 px-3 font-bold text-white bg-blue-600 w-[20%]">Elite IA ⭐</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((feature, i) => (
                  <tr
                    key={i}
                    className={i % 2 === 0 ? "bg-background" : "bg-muted/30"}
                  >
                    <td className="py-3 px-5 text-muted-foreground">{feature.name}</td>
                    <td className="py-3 px-3"><CheckCell value={feature.basico} /></td>
                    <td className="py-3 px-3 bg-blue-50"><CheckCell value={feature.elite} /></td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-muted/60 border-t border-border">
                  <td className="py-4 px-5 font-semibold text-foreground">Precio mensual</td>
                  <td className="py-4 px-3 text-center font-bold text-blue-600">RD$1,500</td>
                  <td className="py-4 px-3 text-center font-bold text-white bg-blue-600">RD$5,000</td>
                </tr>
                <tr className="bg-muted/40">
                  <td className="py-4 px-5 font-semibold text-foreground">Setup (pago único)</td>
                  <td className="py-4 px-3 text-center font-semibold text-muted-foreground">RD$3,000</td>
                  <td className="py-4 px-3 text-center font-semibold text-white bg-blue-600">RD$8,000</td>
                </tr>
              </tfoot>
            </table>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-6">
            ¿Dudas sobre qué plan elegir?{" "}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hola! Necesito ayuda para elegir el plan ideal para mi negocio")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline font-medium"
            >
              Contáctanos por WhatsApp
            </a>{" "}
            y te asesoramos gratis.
          </p>
        </div>
      </div>
    </section>
  )
}
