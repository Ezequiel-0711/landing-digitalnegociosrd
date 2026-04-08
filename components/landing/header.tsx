"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { MessageCircle, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const WHATSAPP_NUMBER = "18298208024" // Reemplazar con número real
const WHATSAPP_MESSAGE = "Hola! Me interesa el bot de WhatsApp para mi negocio"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-background"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="Digital Negocios RD"
              width={200}
              height={50}
              className="h-10 w-auto sm:h-12"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="#beneficios"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Beneficios
            </Link>
            <Link
              href="#como-funciona"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Cómo Funciona
            </Link>
            <Link
              href="#precios"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Precios
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              asChild
              className="bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-4 w-4" />
                Contratar Ahora
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 -mr-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border py-4">
            <nav className="flex flex-col gap-4">
              <Link
                href="#beneficios"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Beneficios
              </Link>
              <Link
                href="#como-funciona"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Cómo Funciona
              </Link>
              <Link
                href="#precios"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Precios
              </Link>
              <Button
                asChild
                className="bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold w-full mt-2"
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Contratar Ahora
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
