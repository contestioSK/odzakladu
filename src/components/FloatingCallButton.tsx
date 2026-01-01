import { Phone } from "lucide-react";
import { motion } from "framer-motion";

export const FloatingCallButton = () => {
  return (
    <motion.a
      href="tel:+421908867350"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.3 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-lg hover:bg-primary/90 transition-colors md:hidden"
      aria-label="Zavolať"
    >
      <Phone className="w-6 h-6 text-primary-foreground" />
    </motion.a>
  );
};
