import { useState } from "react";
import PropTypes from 'prop-types';
import { LanguageContext } from "./languagueContext";

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('es'); // Idioma inicial

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'es' ? 'en' : 'es'));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Definir PropTypes
LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};