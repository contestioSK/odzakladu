import { motion } from "framer-motion";
import { ArrowRight, Shield, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-construction.jpg";

const stats = [
  { icon: Shield, value: "15+", label: "Rokov skúseností" },
  { icon: Clock, value: "200+", label: "Dokončených projektov" },
  { icon: Award, value: "100%", label: "Spokojných klientov" },
];

export const Hero = () => {
  return (
    <section id="domov" className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Stavebná konštrukcia"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-construction-dark/95 via-construction-dark/80 to-construction-dark/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full font-medium mb-6"
          >
            Profesionálna stavebná spoločnosť
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-secondary-foreground leading-tight mb-6"
          >
            Staviame vaše{" "}
            <span className="text-gradient">sny</span>{" "}
            s precíznosťou a vášňou
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-secondary-foreground/70 mb-8 max-w-2xl"
          >
            Od rodinných domov po komerčné budovy – poskytujeme komplexné stavebné služby 
            s dôrazom na kvalitu, termíny a transparentnosť.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <Button size="lg" asChild className="text-lg">
              <a href="#kontakt">
                Získať cenovú ponuku
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10">
              <a href="#projekty">Naše projekty</a>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-3 gap-8 max-w-lg"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center sm:text-left">
                <stat.icon className="w-8 h-8 text-primary mb-2 mx-auto sm:mx-0" />
                <div className="text-2xl md:text-3xl font-heading font-bold text-secondary-foreground">
                  {stat.value}
                </div>
                <div className="text-sm text-secondary-foreground/60">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-secondary-foreground/30 rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-3 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};
