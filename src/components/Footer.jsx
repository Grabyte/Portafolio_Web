import { Link } from "react-scroll"
import '../styles/footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__links">
        <Link to="home" smooth={true} duration={500} className="footer__link">Inicio</Link>
        <Link to="projects" smooth={true} duration={500} className="footer__link">Proyectos</Link>
        <Link to="contact" smooth={true} duration={500} className="footer__link">Contacto</Link>
      </div>
      <p className="footer__text">2025 sitio creado por Ricardo Gabriel Torrena</p>
    </footer>
  )
}

export default Footer;

