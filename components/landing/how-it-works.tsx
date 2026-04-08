import { Smartphone, Bot, ClipboardCheck, ChefHat } from "lucide-react"

const steps = [
  {
    icon: Smartphone,
    step: "01",
    title: "Cliente Escribe",
    description: 'El cliente envía "Hola" a tu WhatsApp de negocio',
  },
  {
    icon: Bot,
    step: "02",
    title: "Bot Atiende",
    description: "El bot muestra el menú automáticamente y guía el pedido",
  },
  {
    icon: ClipboardCheck,
    step: "03",
    title: "Pedido Completo",
    description: "Bot toma el plato, extras, dirección y confirma el total",
  },
  {
    icon: ChefHat,
    step: "04",
    title: "Tú Preparas",
    description: "Recibes notificación y preparas el pedido para entregar",
  },
]

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-16 sm:py-24 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight text-balance">
            ¿Cómo Funciona?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            En 4 simples pasos, tus clientes hacen pedidos sin que tengas que
            levantar un dedo.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line (hidden on last item and mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary/30 to-secondary/30" />
              )}

              <div className="relative bg-card rounded-2xl p-6 border border-border shadow-sm text-center">
                {/* Step Number Badge */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                  Paso {step.step}
                </div>

                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 text-primary mt-4 mb-4">
                  <step.icon className="w-8 h-8" />
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
