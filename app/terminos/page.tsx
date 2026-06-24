import type { Metadata } from "next"
import { LegalLayout, LegalSection, LegalList } from "@/components/landing/legal-layout"

export const metadata: Metadata = {
  title: "Términos de Servicio | Digital Negocios RD",
  description: "Términos de Servicio de Digital Negocios RD.",
}

export default function TerminosPage() {
  return (
    <LegalLayout title="Términos de Servicio" lastUpdated="23 de junio de 2026">
      <LegalSection title="1. Aceptación de los términos">
        <p>
          Al contratar o utilizar los servicios de DigitalNegociosRD, operado
          por Ezequiel Antonio Ramírez Rodríguez, usted acepta los presentes
          Términos de Servicio en su totalidad. Si no está de acuerdo con
          alguno de estos términos, no debe utilizar nuestros servicios.
        </p>
      </LegalSection>

      <LegalSection title="2. Descripción del servicio">
        <p>
          DigitalNegociosRD ofrece soluciones de automatización de mensajería
          a través de WhatsApp para negocios, incluyendo bots conversacionales
          con Inteligencia Artificial, paneles de administración, gestión de
          pedidos y funcionalidades relacionadas. El servicio puede ser
          modificado, actualizado o discontinuado en cualquier momento con
          aviso previo al cliente.
        </p>
        <p>
          Nuestro servicio utiliza tecnología de Inteligencia Artificial
          provista por Google (Gemini). Las respuestas generadas por la IA
          pueden contener errores y no sustituyen el criterio humano en
          decisiones importantes.
        </p>
      </LegalSection>

      <LegalSection title="3. Cuenta y responsabilidades del cliente">
        <LegalList
          items={[
            "El cliente es responsable de mantener seguras sus credenciales de acceso al panel de administración.",
            "El cliente debe proporcionar información veraz y actualizada para la configuración del servicio.",
            "El cliente es responsable del contenido publicado en su bot y del uso que sus clientes hagan del mismo.",
            "El cliente debe cumplir con las políticas de uso de WhatsApp y Meta Platforms.",
          ]}
        />
      </LegalSection>

      <LegalSection title="4. Pagos y facturación">
        <p>
          <strong>4.1 Setup inicial.</strong> El pago del setup es único y
          cubre la configuración completa del sistema. No es reembolsable una
          vez iniciado el proceso de configuración, independientemente de si
          el cliente decide no continuar con el servicio mensual.
        </p>
        <p>
          <strong>4.2 Mensualidad.</strong> La mensualidad se cobra a partir
          de la fecha de activación oficial del servicio. Los períodos ya
          facturados no son reembolsables.
        </p>
        <p>
          <strong>4.3 Cancelación.</strong> El cliente puede cancelar el
          servicio en cualquier momento mediante notificación escrita. La
          cancelación aplica a partir del siguiente período de facturación.
          No se cobran cargos adicionales por cancelación.
        </p>
      </LegalSection>

      <LegalSection title="5. Uso aceptable">
        <p>El cliente se compromete a no utilizar el servicio para:</p>
        <LegalList
          items={[
            "Actividades ilegales o fraudulentas.",
            "Envío de spam o mensajes no solicitados masivamente.",
            "Actividades que violen las políticas de uso de WhatsApp y Meta.",
            "Compartir, revender o sublicenciar el acceso al servicio sin autorización.",
            "Actividades que dañen la reputación de DigitalNegociosRD.",
          ]}
        />
      </LegalSection>

      <LegalSection title="6. Inteligencia Artificial — Limitaciones">
        <p>
          El servicio incluye funcionalidades basadas en Inteligencia
          Artificial que pueden ocasionalmente generar respuestas imprecisas o
          incorrectas. DigitalNegociosRD no garantiza la exactitud total de
          las respuestas generadas por la IA y no se responsabiliza por
          decisiones tomadas basándose en dichas respuestas.
        </p>
        <p>
          El cliente es responsable de configurar y supervisar el
          comportamiento del bot para garantizar que las respuestas sean
          apropiadas para su negocio.
        </p>
      </LegalSection>

      <LegalSection title="7. Propiedad intelectual">
        <p>
          El software, panel de administración, diseños y tecnología de
          DigitalNegociosRD son propiedad exclusiva de Ezequiel Antonio
          Ramírez Rodríguez. El contenido cargado por el cliente (menú,
          productos, precios) es propiedad del cliente.
        </p>
      </LegalSection>

      <LegalSection title="8. Limitación de responsabilidad">
        <p>DigitalNegociosRD no será responsable por:</p>
        <LegalList
          items={[
            "Pérdida de ventas o clientes derivada de interrupciones del servicio.",
            "Daños causados por respuestas incorrectas del bot de Inteligencia Artificial.",
            "Interrupciones del servicio de WhatsApp o Meta Platforms fuera de nuestro control.",
            "Pérdida de datos por causas de fuerza mayor.",
          ]}
        />
        <p>
          Nuestra responsabilidad total se limita al valor de los pagos
          realizados en los últimos tres (3) meses.
        </p>
      </LegalSection>

      <LegalSection title="9. Suspensión y terminación">
        <p>
          DigitalNegociosRD se reserva el derecho de suspender o cancelar el
          servicio sin reembolso en caso de:
        </p>
        <LegalList
          items={[
            "Incumplimiento de estos Términos de Servicio.",
            "Uso del servicio para actividades ilegales o que violen las políticas de Meta.",
            "Falta de pago de la mensualidad por más de 15 días.",
          ]}
        />
      </LegalSection>

      <LegalSection title="10. Ley aplicable">
        <p>
          Estos Términos de Servicio se rigen por las leyes de la República
          Dominicana. Cualquier disputa será resuelta en los tribunales
          competentes de Santo Domingo, República Dominicana.
        </p>
      </LegalSection>

      <LegalSection title="11. Modificaciones">
        <p>
          DigitalNegociosRD puede actualizar estos Términos de Servicio. Los
          cambios serán notificados al cliente con al menos 15 días de
          anticipación por correo electrónico o WhatsApp. El uso continuado
          del servicio implica la aceptación de los nuevos términos.
        </p>
      </LegalSection>

      <LegalSection title="12. Contacto">
        <p>Para consultas sobre estos términos, contacte a:</p>
        <LegalList
          items={[
            "Correo: digitalnegociosrd@gmail.com",
            "WhatsApp: +1 (809) 986-9730",
          ]}
        />
      </LegalSection>
    </LegalLayout>
  )
}
