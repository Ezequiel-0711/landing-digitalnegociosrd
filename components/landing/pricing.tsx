import { Button } from "@/components/ui/button"
import { Check, X, MessageCircle, Zap, Star, Crown, type LucideIcon } from "lucide-react"

const WHATSAPP_NUMBER = "18099869730"
const WHATSAPP_MESSAGE = "Hola! Quiero información sobre los planes de DigitalBot para mi negocio"

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
}

const plans: Plan[] = [
  {
    id: "starter",
    name: "DigitalBot Básico",
    subtitle: "Plan Starter",
    Icon: Zap,
    target: "Ideal para food trucks y negocios pequeños",
    setup: "RD$3,000",
    monthly: "RD$1,500",
    featured: false,
    includes: [
      "Menú y toma de pedidos 24/7",
      "Notificaciones al dueño",
      "Panel de administración web",
      "Soporte básico 48h",
    ],
    message: "Hola! Quiero contratar el Plan Starter (DigitalBot Básico) para mi negocio",
    gradient: "from-slate-50 to-blue-50",
    border: "border-slate-200",
    badgeBg: "",
  },
  {
    id: "pro",
    name: "DigitalBot Pro",
    subtitle: "Plan Pro",
    Icon: Star,
    target: "Restaurantes, vape shops y tiendas",
    setup: "RD$6,000",
    monthly: "RD$3,500",
    featured: true,
    badge: "⭐ RECOMENDADO",
    includes: [
      "Todo lo del Plan Básico",
      "Pausa manual del bot",
      "Restricción de horarios",
      "Cooldown post-pedido",
      "Estadísticas de ventas",
      "Ubicación y enlace Google Maps",
      "Soporte prioritario 24h",
      "1 feature personalizado/mes",
      "Onboarding y capacitación",
    ],
    message: "Hola! Quiero contratar el Plan Pro (DigitalBot Pro) para mi negocio",
    gradient: "from-blue-600 to-indigo-700",
    border: "border-blue-500",
    badgeBg: "bg-orange-500",
  },
  {
    id: "elite",
    name: "DigitalBot Elite",
    subtitle: "Plan Elite",
    Icon: Crown,
    target: "Cadenas y negocios de alto volumen",
    setup: "RD$12,000",
    monthly: "RD$6,500",
    featured: false,
    includes: [
      "Todo lo del Plan Pro",
      "Hasta 2 sucursales",
      "Onboarding personalizado",
      "Capacitación al equipo",
      "Soporte urgente misma jornada",
      "Reporte mensual de operaciones",
      "Acceso anticipado a novedades",
    ],
    message: "Hola! Quiero contratar el Plan Elite (DigitalBot Elite) para mi negocio",
    gradient: "from-slate-50 to-purple-50",
    border: "border-purple-200",
    badgeBg: "",
  },
]

type ComparisonFeature = {
  name: string
  starter: boolean
  pro: boolean
  elite: boolean
}

const comparisonFeatures: ComparisonFeature[] = [
  { name: "Menú y toma de pedidos 24/7", starter: true, pro: true, elite: true },
  { name: "Notificaciones al dueño", starter: true, pro: true, elite: true },
  { name: "Panel de administración web", starter: true, pro: true, elite: true },
  { name: "Soporte básico 48h", starter: true, pro: false, elite: false },
  { name: "Pausa manual del bot", starter: false, pro: true, elite: true },
  { name: "Restricción de horarios", starter: false, pro: true, elite: true },
  { name: "Cooldown post-pedido", starter: false, pro: true, elite: true },
  { name: "Estadísticas de ventas", starter: false, pro: true, elite: true },
  { name: "Ubicación y enlace Google Maps", starter: false, pro: true, elite: true },
  { name: "Soporte prioritario 24h", starter: false, pro: true, elite: true },
  { name: "1 feature personalizado/mes", starter: false, pro: true, elite: true },
  { name: "Onboarding y capacitación", starter: false, pro: true, elite: true },
  { name: "Hasta 2 sucursales", starter: false, pro: false, elite: true },
  { name: "Onboarding personalizado", starter: false, pro: false, elite: true },
  { name: "Capacitación al equipo", starter: false, pro: false, elite: true },
  { name: "Soporte urgente misma jornada", starter: false, pro: false, elite: true },
  { name: "Reporte mensual de operaciones", starter: false, pro: false, elite: true },
  { name: "Acceso anticipado a novedades", starter: false, pro: false, elite: true },
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
              Contratar Plan Pro
            </a>
          </Button>
          <p className="text-center text-xs text-blue-200 mt-3">Sin contrato largo · Cancela cuando quieras</p>
        </div>
      </div>
    )
  }

  const isElite = plan.id === "elite"
  const accentColor = isElite ? "text-purple-600" : "text-blue-600"
  const checkBg = isElite ? "bg-purple-100" : "bg-blue-100"
  const checkIcon = isElite ? "text-purple-600" : "text-blue-600"
  const btnClass = isElite
    ? "bg-purple-600 hover:bg-purple-700 text-white"
    : "bg-blue-600 hover:bg-blue-700 text-white"
  const label = isElite ? "Contratar Plan Elite" : "Contratar Plan Starter"

  return (
    <div className={`relative flex flex-col rounded-3xl border-2 ${plan.border} bg-gradient-to-br ${plan.gradient} shadow-md overflow-hidden`}>
      <div className="p-7 flex flex-col flex-1">
        <div className="flex items-center gap-3 mb-1">
          <div className={`p-2 ${isElite ? "bg-purple-100" : "bg-blue-100"} rounded-xl ${isElite ? "text-purple-600" : "text-blue-600"}`}>
            <plan.Icon className="w-6 h-6" />
          </div>
          <div>
            <p className={`text-sm font-semibold ${isElite ? "text-purple-500" : "text-blue-500"}`}>{plan.subtitle}</p>
            <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
          </div>
        </div>
        <p className="text-sm text-muted-foreground mb-6 mt-2">{plan.target}</p>

        <div className="mb-6 pb-6 border-b border-border">
          <div className="flex items-baseline gap-1 mb-1">
            <span className={`text-4xl font-extrabold ${accentColor}`}>{plan.monthly}</span>
            <span className="text-muted-foreground text-base">/mes</span>
          </div>
          <p className="text-sm text-muted-foreground">Setup: <span className="font-semibold text-foreground">{plan.setup}</span> (pago único)</p>
        </div>

        <ul className="space-y-2.5 flex-1 mb-7">
          {plan.includes.map((feature, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-foreground">
              <div className={`flex-shrink-0 w-5 h-5 rounded-full ${checkBg} flex items-center justify-center mt-0.5`}>
                <Check className={`w-3 h-3 ${checkIcon}`} />
              </div>
              {feature}
            </li>
          ))}
        </ul>

        <Button asChild size="lg" className={`w-full font-bold shadow hover:shadow-md transition-all hover:scale-105 ${btnClass}`}>
          <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(plan.message)}`} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="mr-2 h-4 w-4" />
            {label}
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
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 items-start mb-20">
          {plans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>

        {/* Comparison Table */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            Comparación de Features
          </h3>
          <div className="rounded-2xl border border-border overflow-hidden shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted/60">
                  <th className="text-left py-4 px-5 font-semibold text-foreground w-[46%]">Feature</th>
                  <th className="text-center py-4 px-3 font-semibold text-blue-600 w-[18%]">Básico</th>
                  <th className="text-center py-4 px-3 font-bold text-white bg-blue-600 w-[18%]">Pro ⭐</th>
                  <th className="text-center py-4 px-3 font-semibold text-purple-600 w-[18%]">Elite</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((feature, i) => (
                  <tr
                    key={i}
                    className={i % 2 === 0 ? "bg-background" : "bg-muted/30"}
                  >
                    <td className="py-3 px-5 text-muted-foreground">{feature.name}</td>
                    <td className="py-3 px-3"><CheckCell value={feature.starter} /></td>
                    <td className="py-3 px-3 bg-blue-50"><CheckCell value={feature.pro} /></td>
                    <td className="py-3 px-3"><CheckCell value={feature.elite} /></td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-muted/60 border-t border-border">
                  <td className="py-4 px-5 font-semibold text-foreground">Precio mensual</td>
                  <td className="py-4 px-3 text-center font-bold text-blue-600">RD$1,500</td>
                  <td className="py-4 px-3 text-center font-bold text-white bg-blue-600">RD$3,500</td>
                  <td className="py-4 px-3 text-center font-bold text-purple-600">RD$6,500</td>
                </tr>
                <tr className="bg-muted/40">
                  <td className="py-4 px-5 font-semibold text-foreground">Setup (pago único)</td>
                  <td className="py-4 px-3 text-center font-semibold text-muted-foreground">RD$3,000</td>
                  <td className="py-4 px-3 text-center font-semibold text-white bg-blue-600">RD$6,000</td>
                  <td className="py-4 px-3 text-center font-semibold text-muted-foreground">RD$12,000</td>
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
