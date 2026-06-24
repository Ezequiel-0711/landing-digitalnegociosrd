import type { Metadata } from "next"
import { LegalLayout, LegalSection, LegalList } from "@/components/landing/legal-layout"

export const metadata: Metadata = {
  title: "Política de Privacidad | Digital Negocios RD",
  description: "Política de Privacidad de Digital Negocios RD.",
}

export default function PrivacidadPage() {
  return (
    <LegalLayout title="Política de Privacidad" lastUpdated="23 de junio de 2026">
      <LegalSection title="1. Responsable del tratamiento">
        <p>
          Ezequiel Antonio Ramírez Rodríguez, operando bajo la marca
          DigitalNegociosRD, con contacto en digitalnegociosrd@gmail.com, es
          el responsable del tratamiento de los datos personales recopilados
          a través de nuestros servicios.
        </p>
      </LegalSection>

      <LegalSection title="2. Datos que recopilamos">
        <p>
          <strong>2.1 Datos del cliente (negocio).</strong>
        </p>
        <LegalList
          items={[
            "Nombre del negocio y del responsable.",
            "Número de teléfono de contacto y WhatsApp.",
            "Correo electrónico.",
            "Información del negocio: menú, productos, precios, horarios, ubicación.",
            "Datos bancarios para pagos (solo los necesarios para procesar la mensualidad).",
          ]}
        />
        <p>
          <strong>2.2 Datos de los usuarios finales (clientes del negocio).</strong>
        </p>
        <LegalList
          items={[
            "Número de teléfono de WhatsApp.",
            "Nombre (si lo proporcionan durante la interacción).",
            "Dirección de entrega (si realizan pedidos).",
            "Historial de conversaciones y pedidos.",
          ]}
        />
        <p>
          <strong>2.3 Datos técnicos.</strong>
        </p>
        <LegalList
          items={[
            "Logs de funcionamiento del sistema.",
            "Información de sesiones de WhatsApp.",
          ]}
        />
      </LegalSection>

      <LegalSection title="3. Para qué usamos los datos">
        <LegalList
          items={[
            "Prestar y mantener el servicio de automatización contratado.",
            "Procesar pedidos y notificaciones en tiempo real.",
            "Facturación y gestión de pagos.",
            "Soporte técnico y mejora del servicio.",
            "Envío de comunicaciones relacionadas con el servicio.",
          ]}
        />
        <p>
          No vendemos, alquilamos ni compartimos los datos de nuestros
          clientes con terceros con fines comerciales.
        </p>
      </LegalSection>

      <LegalSection title="4. Proveedores de servicios (subprocesadores)">
        <p>
          Para operar el servicio utilizamos los siguientes proveedores que
          pueden tener acceso a datos:
        </p>
        <LegalList
          items={[
            "Google (Gemini API) — Motor de Inteligencia Artificial conversacional.",
            "DigitalOcean — Infraestructura de servidores donde se aloja el sistema.",
            "WhatsApp / Meta Platforms — Plataforma de mensajería.",
          ]}
        />
        <p>
          Cada uno de estos proveedores tiene sus propias políticas de
          privacidad y acuerdos de procesamiento de datos.
        </p>
      </LegalSection>

      <LegalSection title="5. Retención de datos">
        <LegalList
          items={[
            "Los datos del cliente se conservan mientras el servicio esté activo.",
            "Tras la cancelación del servicio, los datos se eliminan en un plazo máximo de 30 días.",
            "Los respaldos automáticos se mantienen por un máximo de 7 días.",
          ]}
        />
      </LegalSection>

      <LegalSection title="6. Seguridad de los datos">
        <p>
          Aplicamos las siguientes medidas de seguridad para proteger los
          datos:
        </p>
        <LegalList
          items={[
            "Comunicaciones cifradas con HTTPS/TLS.",
            "Acceso al panel de administración protegido con contraseña.",
            "Respaldos automáticos diarios de la base de datos.",
            "Aislamiento de datos entre clientes (arquitectura multitenant segura).",
            "Servidores con acceso restringido por SSH.",
          ]}
        />
      </LegalSection>

      <LegalSection title="7. Derechos del cliente">
        <p>El cliente tiene derecho a:</p>
        <LegalList
          items={[
            "Acceder a los datos que tenemos sobre su negocio.",
            "Solicitar la corrección de datos incorrectos.",
            "Solicitar la eliminación de sus datos (derecho al olvido).",
            "Recibir una copia de sus datos en formato legible.",
          ]}
        />
        <p>
          Para ejercer estos derechos, contacte a digitalnegociosrd@gmail.com.
          Respondemos en un plazo máximo de 5 días hábiles.
        </p>
      </LegalSection>

      <LegalSection title="8. Uso de Inteligencia Artificial">
        <p>
          Nuestro servicio utiliza Inteligencia Artificial de Google (Gemini)
          para generar respuestas conversacionales. Las conversaciones de los
          usuarios finales son procesadas por este modelo para generar
          respuestas en tiempo real. No utilizamos los datos de conversaciones
          para entrenar modelos de IA propios.
        </p>
      </LegalSection>

      <LegalSection title="9. Menores de edad">
        <p>
          Nuestro servicio no está dirigido a menores de 18 años. Si como
          cliente detecta que un menor está utilizando su bot con información
          sensible, le pedimos que lo notifique de inmediato.
        </p>
      </LegalSection>

      <LegalSection title="10. Cambios a esta política">
        <p>
          Podemos actualizar esta Política de Privacidad. La fecha de última
          actualización siempre estará visible al inicio del documento. Los
          cambios significativos serán notificados directamente al cliente.
        </p>
      </LegalSection>

      <LegalSection title="11. Contacto">
        <p>Para consultas sobre privacidad y tratamiento de datos:</p>
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
