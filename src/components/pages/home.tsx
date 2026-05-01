import ContactSection from "../sections/ContactSection";
import HeroSection from "../sections/HeroSection";
import ProjectsSection from "../sections/ProjectsSection";

function Home() {
  return (
    <main>
      <div>
      <HeroSection />
      </div>

      <ProjectsSection />
      <ContactSection />
    </main>
  );
}

export default Home;