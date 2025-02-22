import Navbar from "./components/Navbar"
import Home from "./components/Home"
import ProjectsSection from "./components/ProjectsSection"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  return (
    <>
    <Navbar />
    <Home id="home" />
    <ProjectsSection id="projects" />
    <Contact id="contact"/>
    <Footer id="footer"/>
    </>
  )
}

export default App
