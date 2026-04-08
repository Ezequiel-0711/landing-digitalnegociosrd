import { Star } from "lucide-react"

// Placeholder testimonials - replace with real ones when available
const testimonials = [
  {
    name: "María González",
    business: "Pastelería La Dulce",
    quote:
      "Desde que uso el bot, no pierdo pedidos ni a las 2am. Mis clientes están felices y yo duermo tranquila.",
    rating: 5,
    initials: "MG",
  },
  {
    name: "Carlos Rodríguez",
    business: "Pizza Express RD",
    quote:
      "Antes perdía pedidos por no poder contestar a tiempo. Ahora el bot atiende todo y yo solo preparo.",
    rating: 5,
    initials: "CR",
  },
  {
    name: "Ana Pérez",
    business: "Comida Criolla Ana",
    quote:
      "Fácil de usar y el soporte siempre está disponible. Lo recomiendo a cualquier negocio de comida.",
    rating: 5,
    initials: "AP",
  },
]

export function Testimonials() {
  return (
    <section className="py-16 sm:py-24 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight text-balance">
            Lo que dicen nuestros clientes
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Negocios reales que ya están automatizando sus pedidos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 border border-border shadow-sm"
            >
              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-secondary text-secondary"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground leading-relaxed mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-semibold">
                    {testimonial.initials}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.business}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
