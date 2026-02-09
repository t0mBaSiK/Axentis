import { motion } from "framer-motion";
import PlanCard from "./PlanCard";

const plans = [
  {
    name: "Basic",
    price: "$300.000",
    badge: "Ideal para empezar",
    description: "Una página web esencial para que tu negocio tenga presencia digital. Perfecta para quienes dan sus primeros pasos en el mundo online.",
    features: [
      "Página web con información básica de tu negocio",
      "Sección de servicios, slogans y frases destacadas",
      "Números de contacto y puntos de información",
      "Diseño responsive (adaptable a móviles)",
      "Servicio técnico NO incluido (disponible como suscripción aparte por $50.000/mes)",
    ],
  },
  {
    name: "Medium",
    price: "$600.000",
    description: "Una landing page más completa con funcionalidades que mejoran la experiencia de tus clientes y facilitan la interacción con tu negocio.",
    features: [
      "Todo lo incluido en el plan Basic",
      "Botones funcionales de WhatsApp para contacto directo",
      "Botones que redirigen a tus redes sociales",
      "Mapa de Google Maps funcional con la ubicación de tu negocio",
      "Mayor personalización y características avanzadas",
      "Servicio técnico NO incluido (disponible como suscripción aparte por $50.000/mes)",
    ],
  },
  {
    name: "Pro +",
    price: "$1.200.000",
    badge: "Más popular",
    highlighted: true,
    description: "La solución integral para negocios que buscan profesionalizar su presencia digital al máximo, con herramientas de gestión avanzadas.",
    features: [
      "Todo lo incluido en el plan Medium",
      "Base de datos funcional para registro de usuarios",
      "Sistema de agendamiento de citas desde la web",
      "Panel de gestión para tu negocio",
      "Servicio técnico incluido por 5 meses (después: $50.000/mes)",
      "Soporte de ciberseguridad y mantenimiento de base de datos",
    ],
  },
  {
    name: "Pro IA +",
    price: "$2.500.000",
    badge: "Premium",
    description: "El plan más avanzado con automatizaciones de inteligencia artificial que trabajan por ti las 24 horas, optimizando la atención y gestión de tu negocio.",
    features: [
      "Todo lo incluido en el plan Pro +",
      "Chatbot con IA para atención automatizada",
      "Asesor por IA que responde llamadas",
      "Agendamiento de citas automatizado con IA",
      "IA telefónica para brindar asesoría a tus clientes",
      "Servicio técnico incluido por 5 meses (después: $50.000/mes)",
    ],
  },
];

const PlansSection = () => {
  return (
    <section id="planes" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-border text-sm text-muted-foreground mb-4">
            Nuestros Planes
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gradient">
            En Axentis te ofrecemos una gama de servicios digitales que se adaptan a tus necesidades
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Cada plan está diseñado para acompañarte en tu proceso de transformación digital. Te brindamos asesorías gratuitas y bocetos personalizados para que escojas la mejor opción.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {plans.map((plan, i) => (
            <PlanCard key={plan.name} {...plan} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
