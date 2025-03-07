import '../styles/home.css'
import ricardoimg from '../assets/images/ricardo2.jpg'
import { Link } from 'react-scroll'
import { useTypewriter, Cursor } from 'react-simple-typewriter'; 
import PDFViewer from "../components/PdfViewer";
import Carousel from './InfinityScroll';

function Home() {
  // Texto con efecto de máquina de escribir
  const [text] = useTypewriter({
    words: [
      " de Front-End, como HTML, CSS, JavaScript, React y Angular.",
      " de Back-End, como Node.js, Express, MySQL y Firebase.",
      ". Además, destaco por mi capacidad para el trabajo en equipo y la resolución de problemas."
    ],
    loop: 0, // 0 significa que se repite infinito
    typeSpeed: 50, // Velocidad de escritura
    deleteSpeed: 20, // Velocidad de borrado
    delaySpeed: 6000 // Tiempo entre frases
  });

  return (
    <>
      <section className="home">
        <div className="home__content">
          <h1>Hola, soy <span>Ricardo Torrena</span></h1>
          <h2>Software <span>developer</span></h2>
          <p>
          Soy un desarrollador web en formación con una sólida base en programación Full Stack. Tengo experiencia en el desarrollo de aplicaciones web y móviles, utilizando diversas tecnologías y herramientas
            {text}
            <Cursor cursorStyle="|" />
          </p>
          <div className="btn__group">
            <PDFViewer />
            <Link to="contact" smooth={true} duration={500} className="btn">Contacto</Link>
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
