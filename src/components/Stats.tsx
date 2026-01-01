import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { Building, Calendar, Users, CheckCircle } from "lucide-react";

const stats = [
  { icon: Building, value: 50, suffix: "+", label: "Dokončených projektov" },
  { icon: Calendar, value: 15, suffix: "+", label: "Rokov skúseností" },
  { icon: Users, value: 100, suffix: "%", label: "Spokojných klientov" },
  { icon: CheckCircle, value: 100, suffix: "%", label: "Dodržaných termínov" },
];

const AnimatedCounter = ({ value, suffix }: { value: number; suffix: string }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, { duration: 2, ease: "easeOut" });
      return controls.stop;
    }
  }, [isInView, count, value]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-heading font-bold text-primary">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
};

export const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-12 sm:py-20 bg-construction-dark">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <stat.icon className="w-8 h-8 sm:w-10 sm:h-10 text-primary mx-auto mb-2 sm:mb-4" />
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <p className="text-secondary-foreground/70 mt-1 sm:mt-2 text-xs sm:text-base">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
