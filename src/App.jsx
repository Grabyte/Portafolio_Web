
import { LanguageProvider } from './components/languagueProviderComponent/languagueProvider'; // Importa el LanguageProvider
import Navbar from "./components/navbarComponent/Navbar";
import Home from "./components/homeComponent/Home";
import ProjectsSection from "./components/projectsSectionComponent/ProjectsSection";
import Contact from "./components/contactComponent/Contact";
import Footer from "./components/footerComponent/Footer";

function App() {
  return (
    <LanguageProvider> {/* Envuelve todo con LanguageProvider */}
      <Navbar />
      <Home id="home" />
      <ProjectsSection id="projects" />
      <Contact id="contact" />
      <Footer id="footer" />
    </LanguageProvider>
  );
}

export default App;