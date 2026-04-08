import { Button } from "@/components/ui/button"
import { Check, MessageCircle, Sparkles } from "lucide-react"

const WHATSAPP_NUMBER = "18298208024"
const WHATSAPP_MESSAGE = "Hola! Quiero contratar el plan de bot de WhatsApp"

const features = [
  "Bot WhatsApp 24/7",
  "Panel de control web",
  "Notificaciones en tu WhatsApp",
  "Estadísticas de ventas",
  "Gestión de menú",
  "Soporte técnico",
  "Actualizaciones incluidas",
]

export function Pricing() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

  return (
    <section id="precios" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight text-balance">
            Planes Simples
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Sin costos ocultos, sin sorpresas. Un solo plan con todo lo que
            necesitas.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <div className="relative bg-card rounded-3xl border-2 border-primary shadow-xl overflow-hidden">
            {/* Popular Badge */}
            <div className="absolute top-0 right-0 bg-secondary text-secondary-foreground px-4 py-1.5 rounded-bl-2xl font-semibold text-sm flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" />
              Plan Completo
            </div>

            <div className="p-8 pt-12">
              {/* Price */}
              <div className="text-center mb-8">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-2xl font-semibold text-muted-foreground">
                    RD$
                  </span>
                  <span className="text-6xl font-bold text-foreground">
                    800
                  </span>
                  <span className="text-xl text-muted-foreground">/mes</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  ~$30 USD mensuales
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#25D366]/20 flex items-center justify-center">
                      <Check className="w-3 h-3 text-[#25D366]" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                asChild
                size="lg"
                className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold text-base py-6 shadow-lg hover:shadow-xl transition-all"
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Contratar Ahora
                </a>
              </Button>

              <p className="mt-4 text-center text-sm text-muted-foreground">
                Cancela cuando quieras, sin penalidades
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
