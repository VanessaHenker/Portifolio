import ContactSection from "../../sections/ContactSection/ContactSection";
import HeroSection from "../../sections/HeroSection/HeroSection";
import ProjectsSection from "../../sections/ProjectsSection/ProjectsSection";

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