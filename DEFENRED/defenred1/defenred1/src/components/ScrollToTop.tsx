import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    // Verificar si hay un fragmento en la URL (parte después del #)
    const element = document.getElementById(location.hash.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  return null; // No renderiza nada, solo maneja el desplazamiento
}

export default ScrollToTop;