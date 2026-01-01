import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, Leaf, Shield, Users, Zap } from "lucide-react";

const values = [
  { icon: Zap, title: "Rýchlosť", description: "Efektívna realizácia s dodržaním termínov" },
  { icon: Shield, title: "Transparentnosť", description: "Jasné ceny bez skrytých poplatkov" },
  { icon: Leaf, title: "Ekológia", description: "Špecializácia na ekologické stavby" },
  { icon: Users, title: "Rodinný prístup", description: "Osobný vzťah ku každému klientovi" },
];

const problems = [
  "Strach z navýšenia rozpočtu? U nás nie.",
  "Komplikovaná byrokracia? Vybavíme za vás.",
  "Nekvalitná práca iných firiem? Opravíme a dokončíme.",
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="o-nas" className="py-16 sm:py-24 bg-section-gradient">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">Prečo my</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground mt-2 mb-4 sm:mb-6">
              Precíznosť, dôvera a inovácia
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
              Už 15 rokov staviame s vášňou a odbornosťou. Spolupracujeme s prémiovými 
              dodávateľmi ako <strong>SIKA SLOVENSKO</strong> a <strong>ATRO Banská Bystrica</strong> – 
              špecialistami na stavebnú chémiu.
            </p>
            <p className="text-muted-foreground text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
              Naši klienti sú investori, developeri, verejné inštitúcie ako Stredoslovenská 
              vodárenská spoločnosť či Lesy SR, ale aj jednotlivci, ktorí chcú modernizovať svoje bývanie.
            </p>

            {/* Problems we solve */}
            <div className="bg-card p-5 sm:p-6 rounded-lg border border-border mb-6 sm:mb-8">
              <h3 className="font-heading font-bold text-foreground mb-3 sm:mb-4 text-base sm:text-lg">Riešime vaše obavy:</h3>
              <ul className="space-y-2 sm:space-y-3">
                {problems.map((problem, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex items-start sm:items-center gap-2 sm:gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5 sm:mt-0" />
                    <span className="text-foreground/80 text-sm sm:text-base">{problem}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right Column - Values Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-3 sm:gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-card p-4 sm:p-6 rounded-lg border border-border hover:border-primary/50 transition-colors group"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-primary/20 transition-colors">
                  <value.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-foreground mb-1 sm:mb-2 text-sm sm:text-base">{value.title}</h3>
                <p className="text-muted-foreground text-xs sm:text-sm">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
