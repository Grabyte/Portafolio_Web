import '../proyects.css'
import EcommerseImg from '../assets/images/ecommerse2.png'
import MuebleriaImg from '../assets/images/muebleria2-min.png'
import TikTakToeImg from '../assets/images/TikTakToe2.png'
import DivulgacionImg from '../assets/images/infoWeb-min.png'

function ProyectsSection() {
  return (
    <>
    <section className="proyects">
      <div className="proyects__content">
        <h2 className='proyects__heading'>Proyectos</h2>
        {/* 
        <div className='proyects__menu'>
          <ul className='proyects__list'>
            <li><a className='proyects__link' href="">Todos</a></li>
            <li><a className='proyects__link' href="">Ecommerse</a></li>
            <li><a className='proyects__link' href="">Muebleria</a></li>
            <li><a className='proyects__link' href="">Divulgación</a></li>
            <li><a className='proyects__link' href="">TikTakToe</a></li>
          </ul>
        </div>
        */}

        <div className='proyects__box'>
          <div className='proyect__card'>
            <img src={EcommerseImg} alt="proyecto1" />
            <h3>Ecommerse de ropa</h3>
            <p>Mi proyecto de E-commerce es una tienda en línea que permite a los usuarios registrarse e iniciar sesión, para poder acceder a comprar productos de ropa. Los productos se obtienen desde una API y se muestran dinámicamente en la tienda.</p>
            <a className='proyect__btn' target='_blank' href="https://github.com/Grabyte/UTN_Full_Stack_Developer/tree/main/M2_TrabajoPractico/Ecommerse">Visitar codigo</a>
          </div>
          <div className='proyect__card'>
            <img src={DivulgacionImg} alt="proyecto2" />
            <h3>Divulgación informática</h3>
            <p>La web de divulgación es una página dedicada a la historia de la programación, mostrando su evolución y figuras clave. Los usuarios pueden explorar contenido interactivo y aprender sobre los lenguajes más influyentes. </p>
            <a className='proyect__btn' target='_blank' href="https://github.com/Grabyte/UTN_Professional_Front_End_Developer/tree/main/Proyecto_CodeInfoWeb">Visitar codigo</a>
          </div>
          <div className='proyect__card'>
            <img src={TikTakToeImg} alt="proyecto3" />
            <h3>Tik tak toe </h3>
            <p>Un juego interactivo de Tik Tak Toe desarrollado en React, donde los jugadores pueden competir en tiempo real. Su valor principal radica en el uso de hooks, como useState y useEffect, para gestionar el estado y la lógica del juego.</p>
            <a className='proyect__btn' target='_blank' href="https://github.com/Grabyte/UTN_Full_Stack_Developer/tree/main/React_Practicas/proyecto_3_en_ralla">Visitar codigo</a>
          </div>
          <div className='proyect__card'>
            <img src={MuebleriaImg} alt="proyecto4" />
            <h3>Muebleria Itatí</h3>
            <p>Una tienda en línea de muebles desarrollada con Bootstrap. El proyecto hace uso de componentes de Bootstrap como tarjetas, modales y carruseles para ofrecer una experiencia de usuario intuitiva y atractiva. La página es completamente responsiva, adaptándose perfectamente a diferentes tamaños de pantalla.</p>
            <a className='proyect__btn' target='_blank' href="https://github.com/Grabyte/UTN_Professional_Front_End_Developer/tree/main/Proyecto_Muebleria">Visitar codigo</a>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default ProyectsSection