import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  { icon: MapPin, label: "Adresa", value: "Hlavná 123, 831 01 Bratislava" },
  { icon: Phone, label: "Telefón", value: "+421 900 123 456" },
  { icon: Mail, label: "Email", value: "info@stavbapro.sk" },
  { icon: Clock, label: "Pracovná doba", value: "Po - Pi: 8:00 - 17:00" },
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
      description: "Ďakujeme za vašu správu. Ozveme sa vám čo najskôr.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="kontakt" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold uppercase tracking-wider">Kontakt</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary-foreground mt-2 mb-4">
            Ozvite sa nám
          </h2>
          <p className="text-secondary-foreground/70 text-lg max-w-2xl mx-auto">
            Máte otázky alebo záujem o spoluprácu? Neváhajte nás kontaktovať.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-card p-8 rounded-lg shadow-xl">
              <h3 className="text-xl font-heading font-bold text-card-foreground mb-6">
                Pošlite nám správu
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    placeholder="Vaše meno"
                    required
                    className="bg-background"
                  />
                  <Input
                    type="email"
                    placeholder="Váš email"
                    required
                    className="bg-background"
                  />
                </div>
                <Input
                  placeholder="Predmet"
                  required
                  className="bg-background"
                />
                <Textarea
                  placeholder="Vaša správa..."
                  rows={5}
                  required
                  className="bg-background resize-none"
                />
                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    "Odosielam..."
                  ) : (
                    <>
                      Odoslať správu
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
              <h3 className="text-xl font-heading font-bold text-secondary-foreground mb-6">
                Kontaktné údaje
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-secondary-foreground/60 mb-1">{info.label}</div>
                      <div className="text-secondary-foreground font-medium">{info.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="aspect-video bg-secondary-foreground/10 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2661.7873566947626!2d17.1069!3d48.1486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDA4JzU1LjAiTiAxN8KwMDYnMjQuOCJF!5e0!3m2!1ssk!2ssk!4v1704000000000!5m2!1ssk!2ssk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa sídla spoločnosti"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
