import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Building, Trees, GraduationCap } from "lucide-react";
import projectResidential from "@/assets/project-residential.jpg";
import projectCommercial from "@/assets/project-commercial.jpg";
import projectIndustrial from "@/assets/project-industrial.jpg";

const projects = [
  {
    image: projectResidential,
    icon: Trees,
    category: "Lesy SR",
    title: "Budova lesnej pedagogiky",
    location: "Lučenec",
    description: "Kompletná rekonštrukcia budovy lesnej pedagogiky pre Lesy Slovenskej republiky.",
  },
  {
    image: projectIndustrial,
    icon: Building,
    category: "Stredoslovenská vodárenská spoločnosť",
    title: "Vodojem Rakytovce",
    location: "Rakytovce",
    description: "Výstavba moderného vodojemu s využitím certifikovaných materiálov SIKA.",
  },
  {
    image: projectCommercial,
    icon: GraduationCap,
    category: "Verejný sektor",
    title: "Základná škola s materskou školou",
    location: "Zvolenská Slatina",
    description: "Rozsiahla rekonštrukcia a modernizácia školských priestorov.",
  },
];

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projekty" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold uppercase tracking-wider">Naše realizácie</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary-foreground mt-2 mb-4">
            Projekty, na ktoré sme hrdí
          </h2>
          <p className="text-secondary-foreground/70 text-lg max-w-2xl mx-auto">
            Od verejných inštitúcií po vodárenské spoločnosti – každý projekt realizujeme s maximálnou starostlivosťou.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-lg aspect-[4/3] mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-construction-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center">
                    <ArrowUpRight className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
                {/* Category badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2 bg-secondary/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <project.icon className="w-4 h-4 text-primary" />
                  <span className="text-xs font-medium text-secondary-foreground">{project.category}</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-heading font-bold text-secondary-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>
                <p className="text-primary text-sm font-medium">{project.location}</p>
                <p className="text-secondary-foreground/70">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Partners mention */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-secondary-foreground/60 mb-4">Používame prémiové materiály od:</p>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            <div className="bg-secondary-foreground/10 px-6 py-3 rounded-lg">
              <span className="font-heading font-bold text-secondary-foreground">SIKA SLOVENSKO</span>
            </div>
            <div className="bg-secondary-foreground/10 px-6 py-3 rounded-lg">
              <span className="font-heading font-bold text-secondary-foreground">ATRO Banská Bystrica</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
