import '../home.css'
import ricardoimg from '../assets/images/ricardo2.jpg'
import cv from '../assets/CV.pdf'
import { Link } from 'react-scroll'

function Home() {
  return (
    <>
    <section className="home">
      <div className="home__content">
        <h1>Hola, soy <span>Ricardo Torrena</span></h1>
        <h2>Software <span>developer</span></h2>
        <p>Soy un desarrollador web en formación con una sólida base en programación Full Stack. Me destaco por ser organizado, proactivo y responsable, con una gran predisposición para el trabajo en equipo y la resolución de problemas.</p>
        <div className="btn__group">
        <a href={cv} download="Ricardo_Torrena_Curriculum.pdf" className="btn">Curriculum</a> 
          <Link to="contact" smooth={true} duration={500} className="btn">Contacto</Link>
        </div>
      </div>
      <div className="home__img">
          <img src={ricardoimg} alt="" />
      </div>
    </section>
    </>
  )
}

export default Home