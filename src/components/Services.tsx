import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Home, Building2, Wrench, HardHat, Paintbrush, FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Home,
    title: "Rodinné domy",
    description: "Výstavba rodinných domov na kľúč vrátane projektu, zemných prác a finálnych úprav.",
  },
  {
    icon: Building2,
    title: "Komerčné budovy",
    description: "Realizácia administratívnych budov, obchodných centier a priemyselných objektov.",
  },
  {
    icon: Wrench,
    title: "Rekonštrukcie",
    description: "Kompletné rekonštrukcie bytov, domov a komerčných priestorov podľa vašich predstáv.",
  },
  {
    icon: HardHat,
    title: "Zemné práce",
    description: "Výkopové práce, terénne úpravy, príprava stavebných pozemkov a odvoz materiálu.",
  },
  {
    icon: Paintbrush,
    title: "Interiérové práce",
    description: "Omietky, obklady, podlahy, maľovanie a kompletné dokončovacie práce.",
  },
  {
    icon: FileText,
    title: "Projektová dokumentácia",
    description: "Príprava kompletnej projektovej dokumentácie a vybavenie potrebných povolení.",
  },
];

export const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sluzby" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold uppercase tracking-wider">Naše služby</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary-foreground mt-2 mb-4">
            Komplexné stavebné riešenia
          </h2>
          <p className="text-secondary-foreground/70 text-lg max-w-2xl mx-auto">
            Ponúkame široké spektrum stavebných služieb, aby ste mali všetko pod jednou strechou.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-secondary-foreground/5 border-secondary-foreground/10 hover:border-primary/50 transition-all duration-300 group h-full">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-secondary-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-secondary-foreground/70 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
