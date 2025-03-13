import { useContext } from 'react'; // Importa useContext
import { LanguageContext } from '../languagueProviderComponent/languagueContext'; 
import HomeText from './HomeText';
import { Link } from 'react-scroll';
import TypewriterText from './typewriterText';
import PDFViewer from "../pdfViewerComponent/PdfViewer";
import Carousel from '../infinityScrollComponent/InfinityScroll';
import ricardoimg from '../../assets/images/ricardo2.jpg';
import '../../styles/home.css';

function Home() {
  const { language } = useContext(LanguageContext); // Obtén el idioma del contexto
  const text = HomeText[language]; // Usa el idioma para obtener los textos

  return (
    <>
      <section className="home" id="home">
        <div className="home__content">
          <h1>{text.greeting} <span>{text.name}</span></h1>
          <h2>{text.role}</h2>
          <p>
            {text.description}
            <TypewriterText key={language} words={text.typewriterText} />
          </p>
          <div className="btn__group">
            <PDFViewer />
            <Link to="contact" smooth={true} duration={500} className="btn">{text.contact}</Link>
          </div>
        </div>
        <div className="home__img">
          <img src={ricardoimg} alt="Ricardo Torrena" />
        </div>
      </section>
      <Carousel />
    </>
  );
}

export default Home;