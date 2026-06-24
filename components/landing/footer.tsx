import Image from "next/image"
import Link from "next/link"
import { MapPin, MessageCircle } from "lucide-react"

const WHATSAPP_NUMBER = "18298208024"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-background py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Description */}
          <div className="text-center md:text-left">
            <Image
              src="/images/logo.png"
              alt="Digital Negocios RD"
              width={180}
              height={45}
              className="h-10 w-auto mx-auto md:mx-0 brightness-0 invert"
            />
            <p className="mt-4 text-background/60 text-sm">
              Soluciones web para tu negocio en República Dominicana.
            </p>
          </div>

          {/* Location */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 text-background/80">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Santo Domingo, República Dominicana</span>
            </div>
          </div>

          {/* Contact */}
          <div className="text-center md:text-right">
            <Link
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              className="inline-flex items-center gap-2 text-[#25D366] hover:text-[#25D366]/80 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="text-sm font-medium">Contáctanos por WhatsApp</span>
            </Link>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-background/10 text-center">
          <p className="text-background/50 text-sm">
            © {currentYear} Digital Negocios RD. Todos los derechos reservados.
            {" · "}
            <Link
              href="/terminos"
              className="hover:text-background/80 transition-colors"
            >
              Términos de Servicio
            </Link>
            {" · "}
            <Link
              href="/privacidad"
              className="hover:text-background/80 transition-colors"
            >
              Política de Privacidad
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
