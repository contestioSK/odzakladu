import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { Stats } from "@/components/Stats";
import { Projects } from "@/components/Projects";
import { BeforeAfter } from "@/components/BeforeAfter";
import { Certifications } from "@/components/Certifications";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { FloatingCallButton } from "@/components/FloatingCallButton";
import { CookieBanner } from "@/components/CookieBanner";
import { SectionDivider } from "@/components/SectionDivider";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <SectionDivider variant="wave" fromColor="bg-background" toColor="bg-secondary" />
        <Services />
        <SectionDivider variant="curve" fromColor="bg-secondary" toColor="bg-background" />
        <Process />
        <SectionDivider variant="dots" fromColor="bg-background" toColor="bg-construction-dark" />
        <Stats />
        <SectionDivider variant="zigzag" fromColor="bg-construction-dark" toColor="bg-secondary" />
        <Projects />
        <SectionDivider variant="curve" fromColor="bg-secondary" toColor="bg-background" flip />
        <BeforeAfter />
        <SectionDivider variant="wave" fromColor="bg-background" toColor="bg-primary/5" />
        <Certifications />
        <SectionDivider variant="dots" fromColor="bg-primary/5" toColor="bg-background" />
        <Contact />
      </main>
      <Footer />
      <FloatingCallButton />
      <CookieBanner />
    </div>
  );
};

export default Index;