import type { Metadata } from "next"
import { LegalLayout, LegalSection, LegalList } from "@/components/landing/legal-layout"

export const metadata: Metadata = {
  title: "Divulgación de uso de IA | Digital Negocios RD",
  description: "Divulgación del uso de Inteligencia Artificial en los servicios de Digital Negocios RD.",
}

export default function DivulgacionIaPage() {
  return (
    <LegalLayout
      title="Divulgación de Uso de Inteligencia Artificial"
      lastUpdated="23 de junio de 2026"
    >
      <LegalSection title="¿Qué es la Inteligencia Artificial en nuestro servicio?">
        <p>
          El plan DigitalBot Elite con IA utiliza tecnología de Inteligencia
          Artificial conversacional provista por Google (modelo Gemini) para
          responder de forma natural y automática a los mensajes de los
          clientes del negocio a través de WhatsApp.
        </p>
        <p>
          Esto significa que las respuestas que reciben los clientes finales
          son generadas automáticamente por un sistema de IA, no por una
          persona humana.
        </p>
      </LegalSection>

      <LegalSection title="¿Qué puede hacer la IA?">
        <LegalList
          items={[
            "Responder preguntas sobre productos, precios y disponibilidad.",
            "Tomar pedidos completos de forma autónoma.",
            "Verificar disponibilidad de tallas y variantes de productos.",
            "Informar horarios, ubicación y métodos de pago del negocio.",
            "Enviar fotos de productos automáticamente.",
            "Responder en lenguaje natural, como lo haría una persona.",
          ]}
        />
      </LegalSection>

      <LegalSection title="Limitaciones importantes">
        <p>
          La Inteligencia Artificial tiene limitaciones que el cliente debe
          conocer:
        </p>
        <LegalList
          items={[
            "Puede ocasionalmente generar respuestas imprecisas o incorrectas.",
            "Solo conoce la información que el cliente ha cargado en su panel de administración.",
            "No puede tomar decisiones complejas que requieran criterio humano.",
            "Puede no entender correctamente solicitudes muy ambiguas o escritas con errores graves.",
            "Las respuestas no sustituyen el asesoramiento profesional en ningún campo.",
          ]}
        />
      </LegalSection>

      <LegalSection title="Responsabilidad del cliente">
        <p>El cliente es responsable de:</p>
        <LegalList
          items={[
            "Configurar y actualizar la información del negocio en el panel para que la IA responda correctamente.",
            "Revisar periódicamente el comportamiento del bot.",
            "Informar a DigitalNegociosRD si detecta respuestas incorrectas o inapropiadas.",
            "Asegurarse de que la información del inventario esté actualizada para evitar que la IA ofrezca productos no disponibles.",
          ]}
        />
      </LegalSection>

      <LegalSection title="Proveedor de IA">
        <p>
          La tecnología de Inteligencia Artificial utilizada es Gemini,
          desarrollada por Google. El procesamiento de conversaciones se
          realiza a través de la API de Google AI Studio. Para más
          información sobre cómo Google maneja los datos, puede consultar la
          política de privacidad de Google en policies.google.com.
        </p>
      </LegalSection>

      <LegalSection title="Contacto">
        <p>
          Si tiene preguntas sobre el uso de Inteligencia Artificial en
          nuestro servicio:
        </p>
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
