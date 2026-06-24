import type { ReactNode } from "react"
import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"

export function LegalLayout({
  title,
  lastUpdated,
  children,
}: {
  title: string
  lastUpdated: string
  children: ReactNode
}) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight text-balance">
              {title}
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Digital Negocios RD · Última actualización: {lastUpdated}
            </p>

            <div className="mt-10 space-y-8 text-foreground">{children}</div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export function LegalSection({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  return (
    <section>
      <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-3">
        {title}
      </h2>
      <div className="space-y-4 text-muted-foreground leading-relaxed [&_strong]:text-foreground [&_strong]:font-semibold">
        {children}
      </div>
    </section>
  )
}

export function LegalList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="space-y-2 list-disc pl-5">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  )
}
