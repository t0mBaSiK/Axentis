import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-24 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-border text-sm text-muted-foreground mb-8">
              Tu aliado en transformación digital
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6 text-gradient"
          >
            Digitalizamos tu negocio para que llegues a más clientes
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            En Axentis te asesoramos en cada paso para digitalizar tu negocio. Nuestro objetivo es convertirnos en tu mayor aliado digital, ayudándote a atraer más clientes, optimizar tus procesos y fortalecer tu presencia en internet.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="https://wa.me/573105711805?text=Hola%2C%20me%20gustar%C3%ADa%20recibir%20asesor%C3%ADa%20gratuita%20para%20digitalizar%20mi%20negocio."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground px-8 py-4 rounded-lg text-base font-semibold hover:bg-primary/90 transition-all hover:scale-105"
            >
              Solicita tu Asesoría Gratuita
            </a>
            <a
              href="#planes"
              className="border border-border text-foreground px-8 py-4 rounded-lg text-base font-semibold hover:bg-accent transition-all"
            >
              Ver Planes
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-8 text-sm text-muted-foreground"
          >
            ✦ Asesoría gratuita · Bocetos personalizados · Equipo profesional
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
