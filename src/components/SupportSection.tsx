import { motion } from "framer-motion";
import { Shield, Wrench, Database, Clock, Check } from "lucide-react";

const features = [
  { icon: Wrench, text: "Cambios y actualizaciones en tu página web" },
  { icon: Shield, text: "Revisiones de ciberseguridad de tu sitio" },
  { icon: Database, text: "Mantenimiento de base de datos (Plan Pro + y Pro IA +)" },
  { icon: Clock, text: "Horario de atención: Lunes a Viernes, 7:00 AM - 6:00 PM" },
];

const SupportSection = () => {
  return (
    <section id="soporte" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full border border-border text-sm text-muted-foreground mb-4">
                Servicio Adicional
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gradient">
                Suscripción de Soporte Técnico
              </h2>
              <p className="text-muted-foreground mb-6">
                Mantén tu página web siempre actualizada, segura y funcionando al máximo. Nuestro equipo de profesionales estará disponible para asistirte en todo lo que necesites.
              </p>

              <div className="bg-card rounded-2xl border border-border p-6 card-glow">
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-4xl font-bold text-foreground">$50.000</span>
                  <span className="text-muted-foreground">COP / mes</span>
                </div>
                <ul className="space-y-3">
                  {features.map(({ icon: Icon, text }) => (
                    <li key={text} className="flex items-start gap-3">
                      <Icon size={18} className="text-highlight-muted mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{text}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://wa.me/573105711805?text=Hola%2C%20me%20interesa%20la%20suscripci%C3%B3n%20de%20soporte%20t%C3%A9cnico%20mensual."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 block w-full text-center bg-primary text-primary-foreground py-3.5 rounded-lg font-semibold text-sm hover:bg-primary/90 transition-all hover:scale-[1.02]"
                >
                  Suscribirme al Soporte
                </a>
              </div>
            </motion.div>

            {/* Right - Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="bg-card rounded-2xl border border-border p-6">
                <h3 className="font-semibold text-foreground mb-3">¿Quiénes necesitan esta suscripción?</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Check size={18} className="text-highlight-muted mt-0.5" />
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Plan Basic y Medium:</strong> El servicio técnico no está incluido. Puedes adquirir esta suscripción mensual para acceder al soporte completo.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check size={18} className="text-highlight-muted mt-0.5" />
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Plan Pro + y Pro IA +:</strong> El servicio técnico viene incluido durante los primeros 5 meses. Después de este periodo, podrás continuar con la suscripción mensual.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-2xl border border-border p-6">
                <h3 className="font-semibold text-foreground mb-3">¿Qué incluye exactamente?</h3>
                <p className="text-sm text-muted-foreground">
                  Comunicación directa con nuestro equipo para solicitar cambios en tu página web, resolución de problemas técnicos, revisiones periódicas de ciberseguridad, y para los planes Pro + y Pro IA +, mantenimiento completo de la base de datos. Todo en horario de Lunes a Viernes de 7:00 AM a 6:00 PM.
                </p>
              </div>

              <div className="bg-card rounded-2xl border border-border p-6">
                <h3 className="font-semibold text-foreground mb-3">Asesorías Gratuitas</h3>
                <p className="text-sm text-muted-foreground">
                  Brindamos asesorías sin costo para ayudarte a elegir el plan perfecto. Te ofrecemos bocetos personalizados de tu página web para que puedas visualizar el resultado antes de tomar una decisión.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
