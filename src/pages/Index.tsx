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

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <Stats />
        <Projects />
        <BeforeAfter />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <FloatingCallButton />
      <CookieBanner />
    </div>
  );
};

export default Index;