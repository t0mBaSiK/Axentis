import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface PlanCardProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  badge?: string;
  delay?: number;
}

const PlanCard = ({ name, price, description, features, highlighted, badge, delay = 0 }: PlanCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`relative rounded-2xl p-8 flex flex-col h-full ${
        highlighted
          ? "bg-primary text-primary-foreground card-glow-strong"
          : "bg-card border border-border card-glow"
      }`}
    >
      {badge && (
        <span className={`absolute -top-3 left-6 px-3 py-1 rounded-full text-xs font-semibold ${
          highlighted ? "bg-primary-foreground text-primary" : "bg-accent text-accent-foreground"
        }`}>
          {badge}
        </span>
      )}

      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <p className={`text-sm mb-4 ${highlighted ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
        {description}
      </p>

      <div className="mb-6">
        <span className="text-3xl font-bold">{price}</span>
        <span className={`text-sm ml-1 ${highlighted ? "text-primary-foreground/60" : "text-muted-foreground"}`}>COP</span>
      </div>

      <ul className="space-y-3 mb-8 flex-1">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3">
            <Check size={18} className={`mt-0.5 flex-shrink-0 ${highlighted ? "text-primary-foreground" : "text-highlight-muted"}`} />
            <span className={`text-sm ${highlighted ? "text-primary-foreground/90" : "text-muted-foreground"}`}>{feature}</span>
          </li>
        ))}
      </ul>

      <a
        href="https://wa.me/573105711805?text=Hola%2C%20estoy%20interesado%20en%20el%20plan%20" 
        target="_blank"
        rel="noopener noreferrer"
        className={`w-full text-center py-3.5 rounded-lg font-semibold text-sm transition-all hover:scale-[1.02] ${
          highlighted
            ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            : "bg-accent text-accent-foreground hover:bg-accent/80 border border-border"
        }`}
      >
        Solicitar este plan
      </a>
    </motion.div>
  );
};

export default PlanCard;
