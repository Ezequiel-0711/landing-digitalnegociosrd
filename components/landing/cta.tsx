import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

const WHATSAPP_NUMBER = "18298208024"
const WHATSAPP_MESSAGE = "Hola! Quiero solicitar una demo del bot de WhatsApp"

export function CTA() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-primary via-primary to-primary/90 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground tracking-tight text-balance max-w-3xl mx-auto">
          ¿Listo para automatizar tu negocio?
        </h2>

        <p className="mt-6 text-lg sm:text-xl text-primary-foreground/80 max-w-2xl mx-auto text-pretty">
          Únete a los negocios que ya están ahorrando tiempo y atendiendo más
          clientes con Digital Negocios RD.
        </p>

        <div className="mt-10">
          <Button
            asChild
            size="lg"
            className="bg-white text-primary hover:bg-white/90 font-semibold text-base px-10 py-7 shadow-2xl hover:shadow-xl transition-all"
          >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" />
              Solicitar Demo Gratis
            </a>
          </Button>
        </div>

        <p className="mt-6 text-sm text-primary-foreground/60">
          Sin compromisos • Respuesta inmediata • Soporte en español
        </p>
      </div>
    </section>
  )
}
