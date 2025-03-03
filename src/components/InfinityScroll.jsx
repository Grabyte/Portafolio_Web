import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faJsSquare, faHtml5, faCss3Alt, faNodeJs, faSass, faBootstrap, faGithub } from '@fortawesome/free-brands-svg-icons';
import "../styles/carrousel.css";

const Carousel = () => {
  return (
    <>
      <h2 className="slider__header">Habilidades</h2>
      <div className="slider reverse">
        <div className="list">
          <div className="item" style={{ "--position": 1 }}>
            <FontAwesomeIcon icon={faReact} color="#61DBFB" />
            <span>React</span>
          </div>
          <div className="item" style={{ "--position": 2 }}>
            <FontAwesomeIcon icon={faJsSquare} color="#F0DB4F" />
            <span>JavaScript</span>
          </div>
          <div className="item" style={{ "--position": 3 }}>
            <FontAwesomeIcon icon={faHtml5} color="#E34C26" />
            <span>HTML5</span>
          </div>
          <div className="item" style={{ "--position": 4 }}>
            <FontAwesomeIcon icon={faCss3Alt} color="#264de4" />
            <span>CSS3</span>
          </div>
          <div className="item" style={{ "--position": 5 }}>
            <FontAwesomeIcon icon={faNodeJs} color="#68A063" />
            <span>Node.js</span>
          </div>
          <div className="item" style={{ "--position": 6 }}>
            <FontAwesomeIcon icon={faSass} color="#b37399" />
            <span>Sass</span>
          </div>
          <div className="item" style={{ "--position": 7 }}>
            <FontAwesomeIcon icon={faBootstrap} color="#712cf9" />
            <span>Bootstrap</span>
          </div>
          <div className="item" style={{ "--position": 8 }}>
            <FontAwesomeIcon icon={faGithub} color="#FFFFFF" />
            <span>GitHub</span>
          </div>
          <div className="item" style={{ "--position": 9 }}>
            <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 252">
              <path d="M236 194c-14 0-25 1-34 5-3 1-7 1-7 4l3 6c2 3 5 8 9 11l11 8 21 10 11 9 6 4-3-6-5-5c-5-7-11-13-18-18-6-3-18-9-20-15h-1l12-3 18-3 8-2v-2l-9-10c-8-8-18-15-28-22l-18-8c-2-1-6-2-7-4l-7-13-15-30-8-20c-18-30-38-48-68-65-6-4-14-5-22-7l-13-1-8-6C34 5 8-9 1 9c-5 11 7 22 11 28l9 13 3 9c3 8 5 17 9 24l6 10c2 2 4 3 5 6-3 4-3 9-4 13-7 20-4 44 5 59 2 4 9 14 18 10 8-3 6-13 8-22l1-4 8 14c5 9 14 18 22 24 4 3 8 8 13 10l-4-4-9-10c-8-10-14-21-20-32l-7-17-3-6c-3 4-7 7-9 12-3 7-3 17-4 26h-1c-6-1-8-7-10-12-5-12-6-32-1-46 1-4 6-15 4-19-1-3-4-5-6-7l-7-12-10-30-9-13c-3-5-7-8-10-14-1-2-2-5 0-7l2-2c2-2 9 0 11 1 6 3 12 5 17 9l8 6h4c6 1 12 0 17 2 9 3 18 7 25 12 23 14 42 35 54 59 3 4 3 8 5 12l12 26c4 8 7 16 12 23 3 4 14 6 18 8l12 4 18 12c2 2 11 7 12 10Z" fill="#00546B" />
              <path d="m58 43-7 1 6 7 4 9v-1c3-1 4-4 4-8l-2-4-5-4Z" fill="#00546B" />
            </svg>
            <span>MySql</span>
          </div>
          <div className="item" style={{ "--position": 10 }}>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
              <path fill="#ff8f00" d="M8,37L23.234,8.436c0.321-0.602,1.189-0.591,1.494,0.02L30,19L8,37z"></path>
              <path fill="#ffa000" d="M8,36.992l5.546-34.199c0.145-0.895,1.347-1.089,1.767-0.285L26,22.992L8,36.992z"></path>
              <path fill="#ff6f00" d="M8.008 36.986L8.208 36.829 25.737 22.488 20.793 13.012z"></path>
              <path fill="#ffc400" d="M8,37l26.666-25.713c0.559-0.539,1.492-0.221,1.606,0.547L40,37l-15,8.743 c-0.609,0.342-1.352,0.342-1.961,0L8,37z"></path>
            </svg>
            <span>FireBase</span>
          </div>
        </div>
      </div>
      <div className="slider">
        <div className="list">
                    <div className="item" style={{ "--position": 10 }}>
            <FontAwesomeIcon icon={faReact} color="#61DBFB" />
            <span>React</span>
          </div>
          <div className="item" style={{ "--position": 9 }}>
            <FontAwesomeIcon icon={faJsSquare} color="#F0DB4F" />
            <span>JavaScript</span>
          </div>
          <div className="item" style={{ "--position": 8 }}>
            <FontAwesomeIcon icon={faHtml5} color="#E34C26" />
            <span>HTML5</span>
          </div>
          <div className="item" style={{ "--position": 7 }}>
            <FontAwesomeIcon icon={faCss3Alt} color="#264de4" />
            <span>CSS3</span>
          </div>
          <div className="item" style={{ "--position": 6 }}>
            <FontAwesomeIcon icon={faNodeJs} color="#68A063" />
            <span>Node.js</span>
          </div>
          <div className="item" style={{ "--position": 5 }}>
            <FontAwesomeIcon icon={faSass} color="#b37399" />
            <span>Sass</span>
          </div>
          <div className="item" style={{ "--position": 4 }}>
            <FontAwesomeIcon icon={faBootstrap} color="#712cf9" />
            <span>Bootstrap</span>
          </div>
          <div className="item" style={{ "--position": 3 }}>
            <FontAwesomeIcon icon={faGithub} color="#FFFFFF" />
            <span>GitHub</span>
          </div>
          <div className="item" style={{ "--position": 2 }}>
            <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 252">
              <path d="M236 194c-14 0-25 1-34 5-3 1-7 1-7 4l3 6c2 3 5 8 9 11l11 8 21 10 11 9 6 4-3-6-5-5c-5-7-11-13-18-18-6-3-18-9-20-15h-1l12-3 18-3 8-2v-2l-9-10c-8-8-18-15-28-22l-18-8c-2-1-6-2-7-4l-7-13-15-30-8-20c-18-30-38-48-68-65-6-4-14-5-22-7l-13-1-8-6C34 5 8-9 1 9c-5 11 7 22 11 28l9 13 3 9c3 8 5 17 9 24l6 10c2 2 4 3 5 6-3 4-3 9-4 13-7 20-4 44 5 59 2 4 9 14 18 10 8-3 6-13 8-22l1-4 8 14c5 9 14 18 22 24 4 3 8 8 13 10l-4-4-9-10c-8-10-14-21-20-32l-7-17-3-6c-3 4-7 7-9 12-3 7-3 17-4 26h-1c-6-1-8-7-10-12-5-12-6-32-1-46 1-4 6-15 4-19-1-3-4-5-6-7l-7-12-10-30-9-13c-3-5-7-8-10-14-1-2-2-5 0-7l2-2c2-2 9 0 11 1 6 3 12 5 17 9l8 6h4c6 1 12 0 17 2 9 3 18 7 25 12 23 14 42 35 54 59 3 4 3 8 5 12l12 26c4 8 7 16 12 23 3 4 14 6 18 8l12 4 18 12c2 2 11 7 12 10Z" fill="#00546B" />
              <path d="m58 43-7 1 6 7 4 9v-1c3-1 4-4 4-8l-2-4-5-4Z" fill="#00546B" />
            </svg>
            <span>MySql</span>
          </div>
          <div className="item" style={{ "--position": 1 }}>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
              <path fill="#ff8f00" d="M8,37L23.234,8.436c0.321-0.602,1.189-0.591,1.494,0.02L30,19L8,37z"></path>
              <path fill="#ffa000" d="M8,36.992l5.546-34.199c0.145-0.895,1.347-1.089,1.767-0.285L26,22.992L8,36.992z"></path>
              <path fill="#ff6f00" d="M8.008 36.986L8.208 36.829 25.737 22.488 20.793 13.012z"></path>
              <path fill="#ffc400" d="M8,37l26.666-25.713c0.559-0.539,1.492-0.221,1.606,0.547L40,37l-15,8.743 c-0.609,0.342-1.352,0.342-1.961,0L8,37z"></path>
            </svg>
            <span>FireBase</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;