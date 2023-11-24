import { useState, useContext } from "react";
import LanguageContext from '../../context/LanguageContext';

function HomePage() {

  const languageContext = useContext(LanguageContext);
  const { preferredLanguage, currentContent } = languageContext;
  const { title, paragraph } = currentContent.home;
  return (
    <div className=" px-4">
      <h1>{title}</h1>
      <p>{paragraph}</p>
    </div>
  );
}


export default HomePage;