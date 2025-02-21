import Navbar from "./components/Navbar"
import Home from "./components/Home"
import ProyectsSection from "./components/ProyectsSection"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  return (
    <>
    <Navbar />
    <Home id="home" />
    <ProyectsSection id="proyects"></ProyectsSection>
    <Contact id="contact"></Contact>
    <Footer id="footer"></Footer>
    </>
  )
}

export default App
