import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

const contactInfo = [
  { icon: MapPin, label: "Adresa", value: "Lúčna 1765, 962 05 Hriňová" },
  { icon: Phone, label: "Telefón", value: "+421 908 867 350" },
  { icon: Mail, label: "Email", value: "info@odzakladu.sk" },
  { icon: Clock, label: "Pracovná doba", value: "Po - Pi: 7:00 - 16:00" },
];

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Meno musí mať aspoň 2 znaky")
    .max(100, "Meno môže mať maximálne 100 znakov"),
  phone: z
    .string()
    .trim()
    .min(9, "Telefónne číslo musí mať aspoň 9 číslic")
    .max(20, "Telefónne číslo môže mať maximálne 20 znakov")
    .regex(/^[+]?[\d\s-]+$/, "Neplatný formát telefónneho čísla"),
  email: z
    .string()
    .trim()
    .email("Neplatná emailová adresa")
    .max(255, "Email môže mať maximálne 255 znakov")
    .or(z.literal("")),
  projectType: z
    .string()
    .trim()
    .max(100, "Typ projektu môže mať maximálne 100 znakov")
    .optional(),
  message: z
    .string()
    .trim()
    .min(10, "Správa musí mať aspoň 10 znakov")
    .max(2000, "Správa môže mať maximálne 2000 znakov"),
});

type ContactFormData = z.infer<typeof contactSchema>;

type FormErrors = Partial<Record<keyof ContactFormData, string>>;

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    phone: "",
    email: "",
    projectType: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const result = contactSchema.safeParse(formData);
    
    if (!result.success) {
      const fieldErrors: FormErrors = {};
      result.error.errors.forEach((error) => {
        const field = error.path[0] as keyof ContactFormData;
        if (!fieldErrors[field]) {
          fieldErrors[field] = error.message;
        }
      });
      setErrors(fieldErrors);
      return false;
    }
    
    setErrors({});
    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Chyba vo formulári",
        description: "Prosím skontrolujte vyplnené údaje.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const { data, error } = await supabase.functions.invoke("send-contact-email", {
        body: formData,
      });

      if (error) throw error;

      toast({
        title: "Správa odoslaná!",
        description: "Ďakujeme za váš záujem. Ozveme sa vám čo najskôr.",
      });
      
      setFormData({
        name: "",
        phone: "",
        email: "",
        projectType: "",
        message: "",
      });
      setErrors({});
    } catch (error: any) {
      console.error("Error sending message:", error);
      toast({
        title: "Chyba pri odosielaní",
        description: "Skúste to prosím znova alebo nás kontaktujte telefonicky.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="kontakt" className="py-16 sm:py-24 bg-section-gradient">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">Kontakt</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground mt-2 mb-3 sm:mb-4">
            Chcem ponuku
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-4 sm:px-0">
            Preferujeme osobné stretnutie alebo telefonát. Vyplňte formulár a ozveme sa vám do 24 hodín.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-card p-5 sm:p-8 rounded-lg shadow-xl border border-border">
              <h3 className="text-lg sm:text-xl font-heading font-bold text-card-foreground mb-4 sm:mb-6">
                Pošlite nám správu
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="space-y-1">
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Vaše meno *"
                      className={`bg-background ${errors.name ? "border-destructive" : ""}`}
                      aria-invalid={!!errors.name}
                    />
                    {errors.name && (
                      <p className="text-xs text-destructive">{errors.name}</p>
                    )}
                  </div>
                  <div className="space-y-1">
                    <Input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Telefónne číslo *"
                      className={`bg-background ${errors.phone ? "border-destructive" : ""}`}
                      aria-invalid={!!errors.phone}
                    />
                    {errors.phone && (
                      <p className="text-xs text-destructive">{errors.phone}</p>
                    )}
                  </div>
                </div>
                <div className="space-y-1">
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Váš email"
                    className={`bg-background ${errors.email ? "border-destructive" : ""}`}
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && (
                    <p className="text-xs text-destructive">{errors.email}</p>
                  )}
                </div>
                <div className="space-y-1">
                  <Input
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    placeholder="Typ projektu (napr. rekonštrukcia, novostavba...)"
                    className={`bg-background ${errors.projectType ? "border-destructive" : ""}`}
                    aria-invalid={!!errors.projectType}
                  />
                  {errors.projectType && (
                    <p className="text-xs text-destructive">{errors.projectType}</p>
                  )}
                </div>
                <div className="space-y-1">
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Opíšte váš projekt alebo otázku... *"
                    rows={4}
                    className={`bg-background resize-none ${errors.message ? "border-destructive" : ""}`}
                    aria-invalid={!!errors.message}
                  />
                  {errors.message && (
                    <p className="text-xs text-destructive">{errors.message}</p>
                  )}
                </div>
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
            className="space-y-6 sm:space-y-8"
          >
            <div>
              <h3 className="text-lg sm:text-xl font-heading font-bold text-foreground mb-4 sm:mb-6">
                Kontaktné údaje
              </h3>
              <div className="space-y-4 sm:space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm text-muted-foreground mb-0.5 sm:mb-1">{info.label}</div>
                      <div className="text-foreground font-medium text-sm sm:text-base">{info.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Box */}
            <div className="bg-primary/10 p-4 sm:p-6 rounded-lg border border-primary/20">
              <h4 className="font-heading font-bold text-foreground mb-2 text-sm sm:text-base">
                Preferujete osobné stretnutie?
              </h4>
              <p className="text-muted-foreground mb-3 sm:mb-4 text-sm sm:text-base">
                Zavolajte nám a dohodneme si termín stretnutia priamo na mieste vášho projektu.
              </p>
              <Button asChild variant="default" className="w-full sm:w-auto">
                <a href="tel:+421908867350">
                  <Phone className="w-4 h-4 mr-2" />
                  Zavolať teraz
                </a>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Google Map - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 sm:mt-12 rounded-lg overflow-hidden border border-border shadow-lg"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2648.8!2d19.5258!3d48.5628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473fb0e5a2c4d8d1%3A0x400f7d1c69670a0!2sLu%C4%8Dna%201765%2C%20962%2005%20Hri%C5%88ov%C3%A1%2C%20Slovakia!5e0!3m2!1sen!2ssk!4v1704067200000"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa - MMS Stav s.r.o."
            className="sm:h-[400px]"
          />
        </motion.div>
      </div>
    </section>
  );
};
