import { useContext } from 'react'; // Importa useContext
import { LanguageContext } from '../languagueProviderComponent/languagueContext';
import FooterText from './FooterText';
import { Link } from "react-scroll"
import '../../styles/footer.css'

function Footer() {
  const { language } = useContext(LanguageContext);
  const text = FooterText[language];

  return (
    <footer className="footer">
      <div className="footer__links">
        <Link to="home" smooth={true} duration={500} className="footer__link">{text.links.home}</Link>
        <Link to="projects" smooth={true} duration={500} className="footer__link">{text.links.projects}</Link>
        <Link to="contact" smooth={true} duration={500} className="footer__link">{text.links.contact}</Link>
      </div>
      <p className="footer__text">{text.creatorText}</p>
    </footer>
  )
}

export default Footer;

