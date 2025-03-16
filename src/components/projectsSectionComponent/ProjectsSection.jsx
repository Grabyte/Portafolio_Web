import { useContext } from 'react'; // Importa useContext
import '../../styles/projects.css';
import EcommerseImg from '../../assets/images/ecommerse2.png';
import MuebleriaImg from '../../assets/images/muebleria2-min.png';
import TikTakToeImg from '../../assets/images/TikTakToe2.png';
import DivulgacionImg from '../../assets/images/InfoWeb-min.jpg';
import projectsSectionText from './ProjectsSectionText';
import { LanguageContext } from '../languagueProviderComponent/languagueContext'; // Importa el contexto

function ProjectsSection() {
  const { language } = useContext(LanguageContext); // Obtén el idioma del contexto
  const text = projectsSectionText[language]; // Usa el idioma para obtener los textos
  const images = [EcommerseImg, DivulgacionImg, TikTakToeImg, MuebleriaImg];

  return (
    <section className="projects" id="projects">
      <div className="projects__content">
        <h2 className='projects__heading'>{text.heading}</h2>
        <div className='projects__box'>
          {text.projects.map((project, index) => (
            <div className='project__card' key={index}>
              <img src={images[index]} alt={`proyecto${index + 1}`} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className='project__btns-group'>
                <a className='project__btn' target='_blank' rel='noopener noreferrer' href={project.linkSite}>
                  {project.buttonSite}
                </a>
                <a className='project__btn' target='_blank' rel='noopener noreferrer' href={project.linkCode}>
                  {project.buttonCode}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;