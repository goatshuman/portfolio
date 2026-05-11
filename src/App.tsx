import { ThemeProvider } from "@/components/ThemeProvider";
import CustomCursor from "@/components/CustomCursor";
import Preloader from "@/components/Preloader";
import SmoothScroll from "@/components/SmoothScroll";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Particles from "@/components/Particles";
import AnimatedBackground from "@/components/AnimatedBackground";
import HeroSection from "@/sections/HeroSection";
import SkillsSection from "@/sections/SkillsSection";
import ProjectsSection from "@/sections/ProjectsSection";
import ContactSection from "@/sections/ContactSection";

function App() {
  return (
    <ThemeProvider>
      <Preloader>
        <SmoothScroll>
          <CustomCursor />

          {/* Fixed particles layer */}
          <Particles
            className="fixed inset-0 -z-10 animate-fade-in"
            quantity={100}
          />

          {/* Fixed 3D keyboard background */}
          <div className="top-0 z-0 fixed w-full h-screen">
            <AnimatedBackground />
          </div>

          {/* Page content scrolls over the fixed background */}
          <main className="relative z-10 bg-slate-100/0 dark:bg-transparent min-h-screen flex flex-col">
            <Header />
            <HeroSection />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection />
            <Footer />
          </main>
        </SmoothScroll>
      </Preloader>
    </ThemeProvider>
  );
}

export default App;
