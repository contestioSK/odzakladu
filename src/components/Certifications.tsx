import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Shield, Leaf, BadgeCheck } from "lucide-react";

const certifications = [
  {
    icon: Shield,
    title: "Certifikovaný partner SIKA",
    description: "Oficiálny certifikovaný partner pre aplikáciu prémiových stavebných materiálov SIKA.",
  },
  {
    icon: Leaf,
    title: "Ekologická výstavba",
    description: "Používame ekologické materiály a postupy šetrné k životnému prostrediu.",
  },
  {
    icon: BadgeCheck,
    title: "ISO 9001",
    description: "Certifikovaný systém manažérstva kvality pre stavebné práce.",
  },
  {
    icon: Award,
    title: "Overený dodávateľ",
    description: "Spoľahlivý partner pre verejné zákazky a developerské projekty.",
  },
];

export const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 bg-primary/5">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold uppercase tracking-wider">Certifikácie</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">
            Kvalita overená certifikátmi
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-6 rounded-lg border border-border text-center hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <cert.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-foreground mb-2">{cert.title}</h3>
              <p className="text-sm text-muted-foreground">{cert.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
