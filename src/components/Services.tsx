import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Home, Building2, Wrench, Droplets, PipetteIcon, HardHat } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Home,
    title: "Rodinné domy",
    description: "Výstavba rodinných domov na kľúč vrátane projektu, zemných prác a finálnych úprav s ekologickými materiálmi.",
  },
  {
    icon: Building2,
    title: "Komerčné priestory",
    description: "Realizácia administratívnych budov, škôl, obchodných centier a verejných inštitúcií.",
  },
  {
    icon: Wrench,
    title: "Rekonštrukcie",
    description: "Kompletné rekonštrukcie bytov, domov, škôl a komerčných priestorov vrátane modernizácie.",
  },
  {
    icon: Droplets,
    title: "Vodojemy",
    description: "Výstavba a rekonštrukcia vodojemov pre vodárenské spoločnosti s certifikovanými materiálmi SIKA.",
  },
  {
    icon: PipetteIcon,
    title: "Vodovodné prípojky",
    description: "Realizácia vodovodných a kanalizačných prípojok s kompletnou dokumentáciou.",
  },
  {
    icon: HardHat,
    title: "Stavby na kľúč",
    description: "Kompletná realizácia od odovzdania staveniska až po kolaudáciu – všetko vybavíme za vás.",
  },
];

export const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sluzby" className="py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">Naše služby</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-secondary-foreground mt-2 mb-3 sm:mb-4">
            Komplexné stavebné riešenia
          </h2>
          <p className="text-secondary-foreground/70 text-base sm:text-lg max-w-2xl mx-auto px-4 sm:px-0">
            Od rodinných domov po vodojemy – všetko pod jednou strechou s prémiovými materiálmi.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-secondary-foreground/5 border-secondary-foreground/10 hover:border-primary/50 transition-all duration-300 group h-full">
                <CardContent className="p-5 sm:p-8">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-heading font-bold text-secondary-foreground mb-2 sm:mb-3">
                    {service.title}
                  </h3>
                  <p className="text-secondary-foreground/70 leading-relaxed text-sm sm:text-base">
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
