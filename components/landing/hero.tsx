import { Button } from "@/components/ui/button"
import { MessageCircle, ArrowRight } from "lucide-react"

const WHATSAPP_NUMBER = "18298208024"
const WHATSAPP_MESSAGE = "Hola! Quiero solicitar una demo del bot de WhatsApp"

export function Hero() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 py-16 sm:py-24 lg:py-32">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-secondary/10 blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Nuevo en República Dominicana
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight text-balance">
              Automatiza tus Pedidos por WhatsApp{" "}
              <span className="text-primary">24/7</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0 text-pretty">
              Deja que el bot atienda tus clientes mientras tú te enfocas en tu
              negocio. Sin complicaciones, sin errores, sin perder pedidos.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold text-base px-8 py-6 shadow-lg hover:shadow-xl transition-all"
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Solicitar Demo Gratis
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-base px-8 py-6 border-2"
              >
                <a href="#como-funciona">
                  Ver Cómo Funciona
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-10 flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <svg
                  className="h-5 w-5 text-[#25D366]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Sin contratos largos
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="h-5 w-5 text-[#25D366]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Configura en minutos
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="h-5 w-5 text-[#25D366]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Soporte local
              </div>
            </div>
          </div>

          {/* WhatsApp Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">
              {/* Phone Frame */}
              <div className="relative bg-foreground rounded-[3rem] p-3 shadow-2xl">
                <div className="bg-[#ECE5DD] rounded-[2.5rem] overflow-hidden">
                  {/* WhatsApp Header */}
                  <div className="bg-[#075E54] px-4 py-3 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">DN</span>
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">
                        Tu Restaurante
                      </p>
                      <p className="text-white/70 text-xs">en línea</p>
                    </div>
                  </div>

                  {/* Chat Messages */}
                  <div className="p-4 space-y-3 min-h-[380px]">
                    {/* User Message */}
                    <div className="flex justify-end">
                      <div className="bg-[#DCF8C6] rounded-lg rounded-tr-none px-3 py-2 max-w-[80%] shadow-sm">
                        <p className="text-sm text-foreground">Hola!</p>
                        <p className="text-[10px] text-muted-foreground text-right mt-1">
                          10:30 AM
                        </p>
                      </div>
                    </div>

                    {/* Bot Message */}
                    <div className="flex justify-start">
                      <div className="bg-white rounded-lg rounded-tl-none px-3 py-2 max-w-[85%] shadow-sm">
                        <p className="text-sm text-foreground">
                          ¡Hola! Bienvenido a Tu Restaurante 🍽️
                        </p>
                        <p className="text-sm text-foreground mt-2">
                          ¿Qué te gustaría ordenar hoy?
                        </p>
                        <p className="text-sm text-foreground mt-2 font-medium">
                          📋 Nuestro Menú:
                        </p>
                        <p className="text-sm text-foreground">
                          1. 🍔 Hamburguesa - RD$350
                        </p>
                        <p className="text-sm text-foreground">
                          2. 🍕 Pizza - RD$450
                        </p>
                        <p className="text-sm text-foreground">
                          3. 🌮 Tacos - RD$280
                        </p>
                        <p className="text-[10px] text-muted-foreground text-right mt-1">
                          10:30 AM
                        </p>
                      </div>
                    </div>

                    {/* User Response */}
                    <div className="flex justify-end">
                      <div className="bg-[#DCF8C6] rounded-lg rounded-tr-none px-3 py-2 max-w-[80%] shadow-sm">
                        <p className="text-sm text-foreground">
                          Quiero una hamburguesa
                        </p>
                        <p className="text-[10px] text-muted-foreground text-right mt-1">
                          10:31 AM
                        </p>
                      </div>
                    </div>

                    {/* Bot Confirmation */}
                    <div className="flex justify-start">
                      <div className="bg-white rounded-lg rounded-tl-none px-3 py-2 max-w-[85%] shadow-sm">
                        <p className="text-sm text-foreground">
                          ¡Excelente elección! 🍔
                        </p>
                        <p className="text-sm text-foreground mt-1">
                          ¿Cuál es tu dirección de entrega?
                        </p>
                        <p className="text-[10px] text-muted-foreground text-right mt-1">
                          10:31 AM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Badge */}
              <div className="absolute -bottom-4 -left-4 bg-secondary text-secondary-foreground rounded-full px-4 py-2 shadow-lg font-semibold text-sm">
                ✨ Atención automática
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
