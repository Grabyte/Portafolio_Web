import '../navbar.css'
import NavbarLogic from './NavbarLogic'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import ricardoimg from '../assets/images/ricardo2.jpg'

function Navbar() {
NavbarLogic();

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
                        <a href="#" className="nav__name">Ricardo Torrena</a>
                </div>

                <div className="nav__menu">
                    <ul className="nav__list">
                        <li className="nav__item"><a href="#" className="nav__link active" id='Home'>Home</a></li>
                        <li className="nav__item"><a href="#" className="nav__link" id='About'>About</a></li>
                        <li className="nav__item"><a href="#" className="nav__link" id='Skills'>Skills</a></li>
                        <li className="nav__item"><a href="#" className="nav__link" id='Portfolio'>Portfolio</a></li>
                        <li className="nav__item"><a href="#" className="nav__link" id='Contact'>Contact</a></li>
                    </ul>
                </div>

                <div className="nav__social">
                    <a href="#" className="nav__social-icon"><FontAwesomeIcon icon={faLinkedin} /></a>
                    <a href="#" className="nav__social-icon"><FontAwesomeIcon icon={faGithub} /></a>
                    <a href="#" className="nav__social-icon"><FontAwesomeIcon icon={faInstagram} /></a>
                </div>
            </div>
        </nav>
        </header>
    </>
);
}
export default Navbar;