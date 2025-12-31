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
    <section id="o-nas" className="py-24 bg-section-gradient">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold uppercase tracking-wider">Prečo my</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2 mb-6">
              Precíznosť, dôvera a inovácia
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Už 15 rokov staviame s vášňou a odbornosťou. Spolupracujeme s prémiovými 
              dodávateľmi ako <strong>SIKA SLOVENSKO</strong> a <strong>ATRO Banská Bystrica</strong> – 
              špecialistami na stavebnú chémiu.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Naši klienti sú investori, developeri, verejné inštitúcie ako Stredoslovenská 
              vodárenská spoločnosť či Lesy SR, ale aj jednotlivci, ktorí chcú modernizovať svoje bývanie.
            </p>

            {/* Problems we solve */}
            <div className="bg-card p-6 rounded-lg border border-border mb-8">
              <h3 className="font-heading font-bold text-foreground mb-4">Riešime vaše obavy:</h3>
              <ul className="space-y-3">
                {problems.map((problem, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground/80">{problem}</span>
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
            className="grid grid-cols-2 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-colors group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
