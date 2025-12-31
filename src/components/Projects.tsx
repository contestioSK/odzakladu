import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import projectResidential from "@/assets/project-residential.jpg";
import projectCommercial from "@/assets/project-commercial.jpg";
import projectIndustrial from "@/assets/project-industrial.jpg";

const projects = [
  {
    image: projectResidential,
    category: "Rodinný dom",
    title: "Moderná vila v Bratislave",
    description: "Luxusný rodinný dom s plochou strechou a veľkými presklenými plochami.",
  },
  {
    image: projectCommercial,
    category: "Komerčná budova",
    title: "Administratívne centrum",
    description: "Moderná kancelárska budova s ekologickým certifikátom.",
  },
  {
    image: projectIndustrial,
    category: "Priemyselná hala",
    title: "Logistické centrum",
    description: "Skladová hala s administratívnou prístavbou a modernou infraštruktúrou.",
  },
];

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projekty" className="py-24 bg-section-gradient">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold uppercase tracking-wider">Naše projekty</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2 mb-4">
            Pozrite sa na naše realizácie
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Každý projekt je pre nás výzvou a príležitosťou ukázať naše schopnosti.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group cursor-pointer"
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
              </div>
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">
                {project.category}
              </span>
              <h3 className="text-xl font-heading font-bold text-foreground mt-1 mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
