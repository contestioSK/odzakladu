import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight, Building, Trees, GraduationCap, Home, Droplets, Factory, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import projectResidential from "@/assets/project-residential.jpg";
import projectCommercial from "@/assets/project-commercial.jpg";
import projectIndustrial from "@/assets/project-industrial.jpg";
import projectLesnaPedagogika from "@/assets/project-lesna-pedagogika.jpg";
import projectZsSlatina from "@/assets/project-zs-slatina.jpg";

const ParallaxImage = ({ src, alt, className }: { src: string; alt: string; className?: string }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  
  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <motion.img
        src={src}
        alt={alt}
        className={className}
        style={{ y }}
        loading="lazy"
        decoding="async"
      />
    </div>
  );
};

const projects = [
  {
    image: projectLesnaPedagogika,
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
    image: projectZsSlatina,
    icon: GraduationCap,
    category: "Verejný sektor",
    title: "Základná škola s materskou školou",
    location: "Zvolenská Slatina",
    description: "Rozsiahla rekonštrukcia a modernizácia školských priestorov.",
  },
  {
    image: projectResidential,
    icon: Home,
    category: "Súkromný investor",
    title: "Rodinný dom s garážou",
    location: "Banská Bystrica",
    description: "Novostavba moderného rodinného domu na kľúč vrátane terénnych úprav.",
  },
  {
    image: projectIndustrial,
    icon: Droplets,
    category: "Vodárenská spoločnosť",
    title: "Vodovodná prípojka",
    location: "Detva",
    description: "Realizácia vodovodnej a kanalizačnej prípojky pre obytný komplex.",
  },
  {
    image: projectCommercial,
    icon: Factory,
    category: "Komerčný sektor",
    title: "Skladová hala",
    location: "Zvolen",
    description: "Výstavba priemyselnej skladovej haly s administratívnou časťou.",
  },
];

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const projectsPerPage = 3;
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const visibleProjects = projects.slice(
    currentIndex * projectsPerPage,
    currentIndex * projectsPerPage + projectsPerPage
  );

  return (
    <section id="projekty" className="py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">Naše realizácie</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-secondary-foreground mt-2 mb-3 sm:mb-4">
            Projekty, na ktoré sme hrdí
          </h2>
          <p className="text-secondary-foreground/70 text-base sm:text-lg max-w-2xl mx-auto px-4 sm:px-0">
            Od verejných inštitúcií po vodárenské spoločnosti – každý projekt realizujeme s maximálnou starostlivosťou.
          </p>
        </motion.div>

        {/* Carousel Controls */}
        <div className="flex justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="rounded-full border-secondary-foreground/20 text-secondary-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary w-10 h-10 sm:w-11 sm:h-11"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </Button>
          <div className="flex items-center gap-1.5 sm:gap-2">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  idx === currentIndex ? "bg-primary" : "bg-secondary-foreground/30"
                }`}
              />
            ))}
          </div>
          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="rounded-full border-secondary-foreground/20 text-secondary-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary w-10 h-10 sm:w-11 sm:h-11"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </Button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {visibleProjects.map((project, index) => (
            <motion.div
              key={`${currentIndex}-${index}`}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-lg aspect-[4/3] mb-3 sm:mb-4">
                <ParallaxImage
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[120%] object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-construction-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary rounded-full flex items-center justify-center">
                    <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                  </div>
                </div>
                {/* Category badge */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 flex items-center gap-1.5 sm:gap-2 bg-secondary/90 backdrop-blur-sm px-2 py-1 sm:px-3 sm:py-1.5 rounded-full z-20">
                  <project.icon className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                  <span className="text-[10px] sm:text-xs font-medium text-secondary-foreground">{project.category}</span>
                </div>
              </div>
              <div className="space-y-1 sm:space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-base sm:text-xl font-heading font-bold text-secondary-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>
                <p className="text-primary text-xs sm:text-sm font-medium">{project.location}</p>
                <p className="text-secondary-foreground/70 text-sm sm:text-base">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Partners mention */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 sm:mt-16 text-center"
        >
          <p className="text-secondary-foreground/60 mb-3 sm:mb-4 text-sm sm:text-base">Používame prémiové materiály od:</p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-8 items-center">
            <div className="bg-secondary-foreground/10 px-4 py-2 sm:px-6 sm:py-3 rounded-lg">
              <span className="font-heading font-bold text-secondary-foreground text-sm sm:text-base">SIKA SLOVENSKO</span>
            </div>
            <div className="bg-secondary-foreground/10 px-4 py-2 sm:px-6 sm:py-3 rounded-lg">
              <span className="font-heading font-bold text-secondary-foreground text-sm sm:text-base">ATRO Banská Bystrica</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};