import Footer from "../../layout/Footer/footer";
import ContactSection from "../../sections/ContactSection/ContactSection";
import HeroSection from "../../sections/HeroSection/HeroSection";
import ProjectsSection from "../../sections/ProjectsSection/ProjectsSection";

function Home() {
  return (
    <main>
      <div>
        <HeroSection />
        <ProjectsSection />
        <ContactSection />
        <Footer/>
      </div>
    </main>
  );
}

export default Home;