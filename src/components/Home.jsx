import '../home.css'
import ricardoimg from '../assets/images/ricardo2.jpg'

function Home() {
  return (
    <>
    <section className="home">
      <div className="home__content">
        <h1>Hola soy <br /><span>Ricardo Torrena</span></h1>
        <h3>Desarrollador <span>Web</span></h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam in asperiores similique, saepe dolor repellat tempore aliquam, sapiente consequatur sunt eum eligendi nisi nesciunt inventore temporibus magni laudantium, quas dolore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid porro beatae maxime debitis. Laudantium ipsum hic libero, dolorem asperiores eaque quae recusandae ducimus fuga architecto aperiam maxime molestias. Veniam, minima.</p>
        <div className="btn__group">
          <a href="" className="btn">Curriculum</a> 
          <a href="#contact" className="btn">Contactar</a>
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