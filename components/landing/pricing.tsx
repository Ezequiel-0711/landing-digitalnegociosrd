import { Button } from "@/components/ui/button"
import { Check, MessageCircle, Sparkles, Zap } from "lucide-react"

const WHATSAPP_NUMBER = "18298208024"
const WHATSAPP_MESSAGE = "Hola! Quiero contratar el sistema de WhatsApp para mi negocio"

const features = [
  "Bot WhatsApp 24/7",
  "Panel de control web",
  "Configuración personalizada",
  "Training para tu equipo",
  "Notificaciones instantáneas",
  "Estadísticas de ventas",
  "Gestión de menú ilimitada",
  "Soporte técnico continuo",
  "Actualizaciones automáticas",
  "Sin contratos largos",
]

export function Pricing() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

  return (
    <section id="precios" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight text-balance">
            Inversión Simple y Transparente
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Sin costos ocultos, sin sorpresas. Un solo plan con todo incluido.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Pricing Card */}
          <div className="relative bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl shadow-2xl overflow-hidden mb-8">
            
            {/* Popular Badge */}
            <div className="absolute top-6 right-6 bg-orange-500 text-white px-4 py-2 rounded-full font-bold text-sm flex items-center gap-1.5 animate-pulse">
              🔥 Oferta de Lanzamiento
            </div>

            <div className="p-8 sm:p-12 text-white">
              {/* Header */}
              <div className="mb-8">
                <h3 className="text-3xl font-bold mb-2">Plan Completo</h3>
                <p className="text-blue-100">Todo lo que necesitas para automatizar tu negocio</p>
              </div>

              {/* Pricing Breakdown */}
              <div className="mb-8 pb-8 border-b border-blue-400">
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-5xl font-bold">RD$1,800</span>
                  <span className="text-xl text-blue-200">primer mes</span>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-blue-100">Setup e instalación:</span>
                    <div className="text-right">
                      <span className="line-through text-blue-200 mr-2">RD$2,000</span>
                      <span className="text-2xl font-bold text-orange-300">RD$1,000</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-100">Primera mensualidad:</span>
                    <span className="text-xl font-bold">RD$800</span>
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-sm text-blue-200 mb-1">Meses siguientes:</p>
                  <p className="text-4xl font-bold">RD$800<span className="text-xl">/mes</span></p>
                  <p className="text-sm text-blue-200 mt-1">Precio fijo de por vida ✨</p>
                </div>
              </div>

              {/* Features Grid */}
              <div className="mb-8">
                <h4 className="font-semibold text-lg mb-4">Incluye:</h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-400/20 flex items-center justify-center mt-0.5">
                        <Check className="w-3 h-3 text-green-300" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Urgency Box */}
              <div className="bg-orange-500/20 border border-orange-300 rounded-lg p-4 mb-6">
                <div className="flex items-start gap-3">
                  <Zap className="w-6 h-6 text-orange-300 flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-1">Oferta Limitada</p>
                    <p className="text-sm text-blue-100">
                      El setup a RD$1,000 solo para los primeros 20 clientes. 
                      Después vuelve a RD$2,000.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <Button
                asChild
                size="lg"
                className="w-full bg-white text-blue-600 hover:bg-gray-100 font-bold text-lg py-6 shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Contratar Ahora
                </a>
              </Button>

              <p className="text-center text-sm text-blue-200 mt-4">
                Sin compromiso • Cancela cuando quieras • Garantía de satisfacción
              </p>
            </div>
          </div>

          {/* ROI Calculator */}
          <div className="bg-card rounded-2xl p-6 sm:p-8 border-2 border-border">
            <h3 className="text-2xl font-bold text-center mb-6 text-foreground">
              Retorno de Inversión
            </h3>
            
            <div className="grid sm:grid-cols-3 gap-6 text-center mb-6">
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">1-2</div>
                <div className="text-sm text-muted-foreground">
                  Pedidos extras al mes para recuperar la inversión
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-600 mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">
                  Atención continua vs. empleado de 8 horas
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold text-orange-600 mb-2">0%</div>
                <div className="text-sm text-muted-foreground">
                  Pedidos perdidos por no contestar
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-border">
              <p className="text-center text-muted-foreground mb-2">
                Un empleado part-time te cuesta RD$12,000-15,000/mes
              </p>
              <p className="text-center text-2xl font-bold text-blue-600">
                El bot: RD$800/mes • Ahorro: RD$11,200+/mes
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}