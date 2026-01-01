import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Award, Shield, Leaf, BadgeCheck, FileText, X } from "lucide-react";
import certificateImage from "@/assets/certificate-rozpocet.jpg";

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
  {
    icon: FileText,
    title: "Rozpočtovanie stavieb",
    description: "Certifikát: Od výkresu až po položkový rozpočet stavby.",
    certificate: {
      image: certificateImage,
      pdf: "/certificates/rozpocet-stavby-certifikat.pdf",
      holder: "Pavel Šulek",
      date: "14.05.2024"
    }
  },
];

export const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCertificate, setSelectedCertificate] = useState<typeof certifications[0]['certificate'] | null>(null);

  return (
    <>
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

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-card p-6 rounded-lg border border-border text-center hover:shadow-lg transition-shadow ${cert.certificate ? 'cursor-pointer hover:border-primary' : ''}`}
                onClick={() => cert.certificate && setSelectedCertificate(cert.certificate)}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <cert.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-foreground mb-2">{cert.title}</h3>
                <p className="text-sm text-muted-foreground">{cert.description}</p>
                {cert.certificate && (
                  <span className="inline-block mt-3 text-xs text-primary font-medium">Zobraziť certifikát →</span>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70"
          onClick={() => setSelectedCertificate(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative bg-card rounded-lg max-w-2xl w-full max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedCertificate(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-background/80 hover:bg-background text-foreground z-10"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={selectedCertificate.image}
              alt="Certifikát"
              className="w-full rounded-t-lg"
            />
            <div className="p-4 text-center border-t border-border">
              <p className="text-sm text-muted-foreground">
                Držiteľ: <span className="font-semibold text-foreground">{selectedCertificate.holder}</span> | Dátum: {selectedCertificate.date}
              </p>
              <a
                href={selectedCertificate.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-3 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                <FileText className="w-4 h-4" />
                Stiahnuť PDF
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};
