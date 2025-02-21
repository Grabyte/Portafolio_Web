import { useState } from "react";
import '../navbar.css';
import { Link } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import ricardoimg from '../assets/images/ricardo2.jpg';

function Navbar() {
  // Estado para controlar la visibilidad del menú y el icono
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Función para alternar el estado del menú
    const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    };

    return (
    <> 
        <header className="header">
            <a href="#" className="header__logo">Ricardo Torrena</a>
            <nav className="nav" id="nav-menu">
                <div className="nav__content bd-flex">
                    <div className="nav__perfil">
                        <div className="nav__img">
                    <img src={ricardoimg} alt="imagen del desarrollador Ricardo Gabriel Torrena" />
                        </div>
                    <a href="#" className="logo">Gra<span className='nav__name'>byte</span></a>
                </div>
                {/* Icono de toggle */}
                <FontAwesomeIcon 
                className='nav__toggle' 
                icon={isMenuOpen ? faXmark : faBars} // Cambiar entre faXmark y faBars
                onClick={toggleMenu} // Llamar a la función toggleMenu al hacer click
                />
                <div className={`nav__menu ${isMenuOpen ? 'show' : ''}`}> {/* Mostrar el menú solo cuando está abierto */}
                    <ul className="nav__list">
                        <Link to="home" smooth={true} duration={500} className="nav__link">Inicio</Link>
                        <Link to="proyects" smooth={true} duration={500} className="nav__link">Proyectos</Link>
                        <Link to="contact" smooth={true} duration={500} className="nav__link">Contacto</Link>
                    </ul>
                </div>
                <div className="nav__social">
                    <a href="https://www.linkedin.com/in/ricardo-torrena-07448b205" target='_blank' className="nav__social-icon">
                    <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="https://github.com/Grabyte?tab=repositories" target='_blank' className="nav__social-icon">
                    <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href="https://www.instagram.com/gabrinchou/" target="_blank" className="nav__social-icon">
                    <FontAwesomeIcon icon={faInstagram} />
                    </a>
                </div>
                </div>
            </nav>
        </header>
    </>
    );
}

export default Navbar;
