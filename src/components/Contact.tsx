import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  { icon: MapPin, label: "Adresa", value: "Doplňte adresu" },
  { icon: Phone, label: "Telefón", value: "+421 900 000 000" },
  { icon: Mail, label: "Email", value: "info@odzakladu.sk" },
  { icon: Clock, label: "Pracovná doba", value: "Po - Pi: 7:00 - 16:00" },
];

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Správa odoslaná!",
      description: "Ďakujeme za váš záujem. Ozveme sa vám čo najskôr.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="kontakt" className="py-24 bg-section-gradient">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold uppercase tracking-wider">Kontakt</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2 mb-4">
            Chcem ponuku
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Preferujeme osobné stretnutie alebo telefonát. Vyplňte formulár a ozveme sa vám do 24 hodín.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-card p-8 rounded-lg shadow-xl border border-border">
              <h3 className="text-xl font-heading font-bold text-card-foreground mb-6">
                Pošlite nám správu
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    placeholder="Vaše meno *"
                    required
                    className="bg-background"
                  />
                  <Input
                    type="tel"
                    placeholder="Telefónne číslo *"
                    required
                    className="bg-background"
                  />
                </div>
                <Input
                  type="email"
                  placeholder="Váš email"
                  className="bg-background"
                />
                <Input
                  placeholder="Typ projektu (napr. rekonštrukcia, novostavba...)"
                  className="bg-background"
                />
                <Textarea
                  placeholder="Opíšte váš projekt alebo otázku..."
                  rows={5}
                  required
                  className="bg-background resize-none"
                />
                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    "Odosielam..."
                  ) : (
                    <>
                      Chcem ponuku
                      <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-6">
                Kontaktné údaje
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">{info.label}</div>
                      <div className="text-foreground font-medium">{info.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Box */}
            <div className="bg-primary/10 p-6 rounded-lg border border-primary/20">
              <h4 className="font-heading font-bold text-foreground mb-2">
                Preferujete osobné stretnutie?
              </h4>
              <p className="text-muted-foreground mb-4">
                Zavolajte nám a dohodneme si termín stretnutia priamo na mieste vášho projektu.
              </p>
              <Button asChild variant="default">
                <a href="tel:+421900000000">
                  <Phone className="w-4 h-4 mr-2" />
                  Zavolať teraz
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
