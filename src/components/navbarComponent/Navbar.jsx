import { useState, useContext } from "react"; // Importa useContext
import '../../styles/navbar.css';
import { Link } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import ricardoimg from '../../assets/images/ricardo2.jpg';
import { LanguageContext } from '../languagueProviderComponent/languagueContext'; // Importa el contexto
import navBarText from './NavbarText';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { language, toggleLanguage } = useContext(LanguageContext); // Obtén el idioma y la función para cambiarlo

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const text = navBarText[language]; // Obtén los textos según el idioma

  return (
    <>
      <header className="header">
        <nav className="nav" id="nav-menu">
          <div className="nav__content bd-flex">
            <div className="nav__perfil">
              <div className="nav__img">
                <img src={ricardoimg} alt="imagen del desarrollador Ricardo Gabriel Torrena" />
              </div>
              <Link to="home" smooth={true} duration={500} className="logo" >Gra<span className='nav__name'>byte</span></Link>
            </div>
            <FontAwesomeIcon className='nav__toggle' icon={isMenuOpen ? faXmark : faBars} onClick={toggleMenu} />
            <div className={`nav__menu ${isMenuOpen ? 'show' : ''}`}>
              <ul className="nav__list">
                <Link to="home" smooth={true} duration={500} className="nav__link">
                  {text.links.home}
                </Link>
                <Link to="projects" smooth={true} duration={500} className="nav__link">
                  {text.links.projects}
                </Link>
                <Link to="contact" smooth={true} duration={500} className="nav__link">
                  {text.links.contact}
                </Link>
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
            {/* Botón de cambio de idioma */}
            <div
              className="nav__language"
              onClick={toggleLanguage} // Cambia el idioma al hacer clic
            >
              {language === 'es' ? 'ES' : 'EN'} {/* Muestra ES o EN según el idioma */}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;