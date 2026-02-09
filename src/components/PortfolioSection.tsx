import { motion } from "framer-motion";
import { ExternalLink, Star } from "lucide-react";

const PortfolioSection = () => {
  return (
    <section id="portafolio" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-border text-sm text-muted-foreground mb-4">
            Nuestro Portafolio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gradient">
            Resultados que hablan por nosotros
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hemos asesorado a múltiples empresas en su proceso de transformación digital, acompañándolas desde la conceptualización hasta la entrega final de sus plataformas web.
          </p>
        </motion.div>

        {/* Client Case Study */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-card rounded-2xl border border-border overflow-hidden card-glow-strong">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Preview */}
              <div className="relative group overflow-hidden bg-secondary">
                <div className="aspect-video w-full relative">
                  <iframe
                    src="https://velvettroseco.lovable.app/"
                    title="Velvet Troseco - Sitio web creado por Axentis"
                    className="absolute top-0 left-0 w-[300%] h-[300%] border-0 pointer-events-none"
                    style={{ transform: "scale(0.3334)", transformOrigin: "top left" }}
                    loading="lazy"
                    sandbox="allow-scripts allow-same-origin"
                  />
                </div>
                <a
                  href="https://velvettroseco.lovable.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 bg-gradient-to-t from-card/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6"
                >
                  <span className="bg-primary text-primary-foreground px-6 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-2">
                    Visitar sitio web <ExternalLink size={16} />
                  </span>
                </a>
              </div>

              {/* Details */}
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-foreground text-foreground" />
                  ))}
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-2">Velvet Troseco</h3>
                <span className="inline-block px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-medium mb-5 w-fit">
                  Cliente activo
                </span>

                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Uno de nuestros primeros clientes y una colaboración de la que estamos profundamente orgullosos. Velvet Troseco llegó a nosotros con una visión clara: necesitaba una presencia digital que transmitiera la elegancia y calidad de su marca, pero no contaba con las herramientas ni el conocimiento técnico para hacerlo realidad.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Nuestro equipo de profesionales en Axentis se encargó de todo el proceso. Comenzamos con una asesoría personalizada donde escuchamos sus necesidades, entendimos su público objetivo y le presentamos diversos bocetos y propuestas de diseño. Trabajamos de la mano con el cliente hasta encontrar exactamente lo que buscaba: una página web moderna, atractiva y completamente funcional que representara fielmente la identidad de su negocio.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  El resultado fue una landing page profesional diseñada a la medida, con un diseño visual cuidado hasta el último detalle, secciones estratégicamente organizadas para convertir visitantes en clientes, y una experiencia de usuario fluida tanto en escritorio como en dispositivos móviles. Este proyecto es un claro ejemplo de cómo en Axentis convertimos ideas en experiencias digitales que generan impacto real.
                </p>

                <a
                  href="https://velvettroseco.lovable.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-foreground flex items-center gap-2 hover:text-highlight-muted transition-colors"
                >
                  Ver proyecto completo <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-3 gap-6 mt-10"
          >
            {[
              { value: "1", label: "Cliente satisfecho" },
              { value: "100%", label: "Satisfacción garantizada" },
              { value: "∞", label: "Compromiso con tu éxito" },
            ].map((stat) => (
              <div key={stat.label} className="text-center bg-card rounded-xl border border-border p-6">
                <p className="text-3xl font-bold text-foreground mb-1">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
