import { useState, useContext } from "react";
import '../../styles/navbar.css';
import { Link } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import ricardoimg from '../../assets/images/ricardo2.jpg';
import { LanguageContext } from '../languagueProviderComponent/languagueContext';
import navBarText from './NavbarText';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage } = useContext(LanguageContext);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const text = navBarText[language];

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
            {/* Botón de cambio de idioma con SVGs */}
            <div className="nav__language" onClick={toggleLanguage}>
              <div>
                {language === 'es' ? 'EN' : 'ES'}
              </div>
              {language === 'en' ? (
                <svg
                    viewBox="0 0 36 36"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    aria-hidden="true"
                    role="img"
                    preserveAspectRatio="xMidYMid meet"
                >
                    <path fill="#75AADB" d="M36 27a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v18z"></path>
                    <path fill="#EEE" d="M0 13h36v10H0z"></path>
                    <path fill="#FCBF49" d="M18 13l.488 2.548l1.426-2.167l-.525 2.54l2.146-1.457l-1.457 2.147l2.541-.524l-2.167 1.425L23 18l-2.548.488l2.167 1.426l-2.541-.525l1.457 2.146l-2.146-1.457l.525 2.541l-1.426-2.167L18 23l-.488-2.548l-1.425 2.167l.524-2.541l-2.147 1.457l1.457-2.146l-2.54.525l2.167-1.426L13 18l2.548-.488l-2.167-1.425l2.54.524l-1.457-2.147l2.147 1.457l-.524-2.54l1.425 2.167z"></path>
                    <path fill="#843511" d="M18 14.33l.242 1.265l.116.605l.339-.514l.708-1.076l-.261 1.261l-.125.604l.51-.346l1.066-.723l-.723 1.066l-.346.51l.603-.125l1.262-.26l-1.076.708l-.515.337l.605.116L21.67 18l-1.265.242l-.605.116l.514.339l1.076.708l-1.262-.261l-.604-.125l.346.51l.723 1.065l-1.065-.723l-.51-.346l.125.604l.261 1.262l-.708-1.076l-.338-.515l-.116.605L18 21.67l-.242-1.265l-.116-.605l-.339.515l-.708 1.076l.26-1.262l.125-.603l-.51.346l-1.066.723l.723-1.066l.346-.51l-.604.125l-1.261.261l1.076-.708l.514-.339l-.605-.116L14.33 18l1.265-.242l.605-.116l-.515-.339l-1.076-.708l1.261.26l.603.125l-.346-.51l-.724-1.066l1.066.724l.51.346l-.125-.603l-.26-1.261l.708 1.076l.339.515l.116-.605L18 14.33M18 13l-.488 2.548l-1.425-2.167l.524 2.541l-2.147-1.457l1.457 2.147l-2.54-.524l2.167 1.425L13 18l2.548.488l-2.167 1.426l2.54-.525l-1.457 2.146l2.147-1.457l-.524 2.541l1.425-2.167L18 23l.488-2.548l1.426 2.167l-.525-2.541l2.146 1.457l-1.457-2.146l2.541.525l-2.167-1.426L23 18l-2.548-.488l2.167-1.425l-2.541.524l1.457-2.147l-2.146 1.457l.525-2.541l-1.426 2.167L18 13zm1.914.381h.005h-.005zm1.621 1.083h.005h-.005zm1.084 1.623h.005h-.005z"></path>
                    <circle fill="#FCBF49" cx="18" cy="18" r="2"></circle>
                    <path fill="#843511" d="M18 20.125c-1.172 0-2.125-.953-2.125-2.125s.953-2.125 2.125-2.125s2.125.953 2.125 2.125s-.953 2.125-2.125 2.125zm0-4c-1.034 0-1.875.841-1.875 1.875s.841 1.875 1.875 1.875s1.875-.841 1.875-1.875s-.841-1.875-1.875-1.875z"></path>
                    <path fill="#C16540" d="M17.801 17.774c0 .155-.261.28-.583.28c-.323 0-.584-.125-.584-.28c0-.155.261-.28.584-.28c.322 0 .583.125.583.28zm1.553-.024c0-.161-.266-.292-.594-.292c-.328 0-.594.13-.594.292s.266.292.594.292c.329 0 .594-.131.594-.292z"></path>
                    <path fill="#ED8662" d="M17.463 18.874c0-.126.246-.229.548-.229c.303 0 .548.102.548.229c0 .126-.246.229-.548.229c-.303 0-.548-.103-.548-.229z"></path>
                </svg>
              ) : (
                <svg
                    viewBox="0 0 36 36"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    aria-hidden="true"
                    role="img"
                    preserveAspectRatio="xMidYMid meet"
                >
                    <path fill="#B22334" d="M35.445 7C34.752 5.809 33.477 5 32 5H18v2h17.445zM0 25h36v2H0zm18-8h18v2H18zm0-4h18v2H18zM0 21h36v2H0zm4 10h28c1.477 0 2.752-.809 3.445-2H.555c.693 1.191 1.968 2 3.445 2zM18 9h18v2H18z"></path>
                    <path fill="#EEE" d="M.068 27.679c.017.093.036.186.059.277c.026.101.058.198.092.296c.089.259.197.509.333.743L.555 29h34.89l.002-.004a4.22 4.22 0 0 0 .332-.741a3.75 3.75 0 0 0 .152-.576c.041-.22.069-.446.069-.679H0c0 .233.028.458.068.679zM0 23h36v2H0zm0-4v2h36v-2H18zm18-4h18v2H18zm0-4h18v2H18zM0 9zm.555-2l-.003.005L.555 7zM.128 8.044c.025-.102.06-.199.092-.297a3.78 3.78 0 0 0-.092.297zM18 9h18c0-.233-.028-.459-.069-.68a3.606 3.606 0 0 0-.153-.576A4.21 4.21 0 0 0 35.445 7H18v2z"></path>
                    <path fill="#3C3B6E" d="M18 5H4a4 4 0 0 0-4 4v10h18V5z"></path>
                    <path fill="#FFF" d="M2.001 7.726l.618.449l-.236.725L3 8.452l.618.448l-.236-.725L4 7.726h-.764L3 7l-.235.726zm2 2l.618.449l-.236.725l.617-.448l.618.448l-.236-.725L6 9.726h-.764L5 9l-.235.726zm4 0l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L9 9l-.235.726zm4 0l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L13 9l-.235.726zm-8 4l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L5 13l-.235.726zm4 0l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L9 13l-.235.726zm4 0l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L13 13l-.235.726zm-6-6l.618.449l-.236.725L7 8.452l.618.448l-.236-.725L8 7.726h-.764L7 7l-.235.726zm4 0l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L11 7l-.235.726zm4 0l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L15 7l-.235.726zm-12 4l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L3 11l-.235.726zM6.383 12.9L7 12.452l.618.448l-.236-.725l.618-.449h-.764L7 11l-.235.726h-.764l.618.449zm3.618-1.174l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L11 11l-.235.726zm4 0l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L15 11l-.235.726zm-12 4l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L3 15l-.235.726zM6.383 16.9L7 16.452l.618.448l-.236-.725l.618-.449h-.764L7 15l-.235.726h-.764l.618.449zm3.618-1.174l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L11 15l-.235.726zm4 0l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L15 15l-.235.726z"></path>
                </svg>
              )}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;