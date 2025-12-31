import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2 } from "lucide-react";

const features = [
  "Komplexné stavebné služby od projektu po kolaudáciu",
  "Kvalitné materiály od overených dodávateľov",
  "Tím skúsených odborníkov s certifikáciami",
  "Transparentné ceny bez skrytých poplatkov",
  "Dodržiavanie termínov a záručný servis",
  "Individuálny prístup ku každému projektu",
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="o-nas" className="py-24 bg-section-gradient">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image/Stats */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative">
              <div className="aspect-[4/3] bg-construction-concrete rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&auto=format"
                  alt="Stavebný tím pri práci"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-8 -right-8 bg-card p-6 rounded-lg shadow-xl">
                <div className="text-4xl font-heading font-bold text-primary">15+</div>
                <div className="text-muted-foreground">rokov na trhu</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-primary font-semibold uppercase tracking-wider">O našej spoločnosti</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2 mb-6">
              Tradícia spojená s modernými technológiami
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Spoločnosť STAVBAPRO vznikla v roku 2009 s jasnou víziou – poskytovať 
              stavebné služby najvyššej kvality. Za 15 rokov sme zrealizovali viac ako 
              200 projektov a vybudovali si povesť spoľahlivého partnera.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Náš tím tvoria skúsení projektanti, stavbyvedúci a remeselníci, 
              ktorí pristupujú ku každému projektu s maximálnou starostlivosťou.
            </p>

            {/* Features List */}
            <ul className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/80">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
