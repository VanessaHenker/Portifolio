import ContactSection from "../sections/ContactSection";
import HeroSection from "../sections/HeroSection";
import ProjectsSection from "../sections/ProjectsSection";

function Home() {
  return (
    <main>
      <div>
        <HeroSection />
      </div>

      <div>
        <ProjectsSection />
        <ContactSection />
      </div>
    </main>
  );
}

export default Home;