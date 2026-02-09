import logo from "@/assets/axentis-logo.png";

const Footer = () => {
  return (
    <footer id="contacto" className="py-16 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <img src={logo} alt="Axentis" className="h-10 mb-4" />
            <p className="text-sm text-muted-foreground max-w-xs">
              Nuestro objetivo es convertirnos en tu mayor aliado digital, ayudándote a atraer más clientes y fortalecer tu presencia en internet.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Páginas Web y Landing Pages</li>
              <li>Automatización con IA</li>
              <li>Soporte Técnico Mensual</li>
              <li>Asesorías Gratuitas</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="https://wa.me/573105711805?text=Hola%2C%20me%20gustar%C3%ADa%20recibir%20asesor%C3%ADa%20profesional%20para%20digitalizar%20mi%20negocio."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  WhatsApp: +57 310 571 1805
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/axentiss"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  Instagram: @axentiss
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Axentis. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
