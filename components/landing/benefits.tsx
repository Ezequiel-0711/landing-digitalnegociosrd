import { Bot, Zap, BarChart3 } from "lucide-react"

const benefits = [
  {
    icon: Bot,
    title: "Atención 24/7",
    description:
      "El bot responde automáticamente a cualquier hora, nunca pierdes un pedido aunque estés durmiendo o cocinando.",
  },
  {
    icon: Zap,
    title: "Respuesta Instantánea",
    description:
      "Tus clientes reciben confirmación inmediata. Sin esperas, sin frustración. Mejora su experiencia de compra.",
  },
  {
    icon: BarChart3,
    title: "Panel de Control",
    description:
      "Ve estadísticas de ventas, gestiona tu menú y controla todo desde un solo lugar. Fácil de usar.",
  },
]

export function Benefits() {
  return (
    <section id="beneficios" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight text-balance">
            ¿Por qué Digital Negocios RD?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Simplificamos la atención al cliente para que puedas enfocarte en lo
            que mejor sabes hacer: preparar comida deliciosa.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="relative group bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-6">
                <benefit.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>

              {/* Decorative gradient on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
