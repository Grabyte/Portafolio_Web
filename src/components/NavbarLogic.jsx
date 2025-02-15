import { useEffect } from 'react';

function NavbarLogic() {
  useEffect(() => {
    // Obtener todos los elementos nav__link
    const navLinks = document.querySelectorAll('.nav__link');

    navLinks.forEach(link => {
      link.addEventListener('click', (event) => {
        // Verificar si el enlace ya tiene la clase active
        if (!event.target.classList.contains('active')) {
          // Si no la tiene, eliminar la clase active de todos los links
          navLinks.forEach(link => link.classList.remove('active'));
          
          event.target.classList.add('active');
        }
      });
    });

    // Limpiar los event listeners al desmontar el componente
    return () => {
      navLinks.forEach(link => {
        link.removeEventListener('click', () => {});
      });
    };
  }, []);

  return null; // Este componente no renderiza nada, solo maneja la lógica
}

export default NavbarLogic;
