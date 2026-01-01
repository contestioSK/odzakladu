import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  FileCheck, 
  BookOpen, 
  Eye, 
  Trash2, 
  Users, 
  FileText, 
  Building, 
  Key 
} from "lucide-react";

const steps = [
  {
    icon: FileCheck,
    number: "01",
    title: "Odovzdanie staveniska",
    description: "Oficiálne prevzatie staveniska a začiatok prác podľa harmonogramu.",
  },
  {
    icon: BookOpen,
    number: "02",
    title: "Vedenie stavebného denníka",
    description: "Dôsledná dokumentácia všetkých prác a postupov.",
  },
  {
    icon: Eye,
    number: "03",
    title: "Profesionálny stavebný dozor",
    description: "Neustála kontrola kvality a dodržiavania noriem.",
  },
  {
    icon: Trash2,
    number: "04",
    title: "Odstraňovanie odpadu",
    description: "Certifikované odstraňovanie stavebného odpadu podľa predpisov.",
  },
  {
    icon: Users,
    number: "05",
    title: "Koordinácia dodávateľov",
    description: "Sprostredkovanie kvalitných dodávateľov elektro, vody a plynu.",
  },
  {
    icon: FileText,
    number: "06",
    title: "Certifikáty a dokumentácia",
    description: "Dokladanie všetkých certifikátov potrebných na kolaudáciu.",
  },
  {
    icon: Building,
    number: "07",
    title: "Komunikácia s úradmi",
    description: "Vybavenie kolaudácie a komunikácia so stavebným úradom.",
  },
  {
    icon: Key,
    number: "08",
    title: "Odovzdanie diela",
    description: "Slávnostné odovzdanie hotového diela investorovi.",
  },
];

export const Process = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="proces" className="py-16 sm:py-24 bg-section-gradient">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">Náš proces</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground mt-2 mb-3 sm:mb-4">
            Ako pracujeme
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-4 sm:px-0">
            Od prvého stretnutia až po odovzdanie kľúčov – transparentný proces bez prekvapení.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="relative"
            >
              <div className="bg-card p-4 sm:p-6 rounded-lg border border-border hover:border-primary/50 transition-all h-full group">
                <div className="flex items-start justify-between mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <step.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <span className="text-2xl sm:text-4xl font-heading font-bold text-primary/20 group-hover:text-primary/40 transition-colors">
                    {step.number}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-foreground mb-1 sm:mb-2 text-sm sm:text-base">{step.title}</h3>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{step.description}</p>
              </div>
              
              {/* Connector line for desktop */}
              {index < steps.length - 1 && index % 4 !== 3 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 border-t-2 border-dashed border-primary/30" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
