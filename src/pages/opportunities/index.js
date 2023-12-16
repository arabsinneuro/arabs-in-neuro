import { useState, useContext } from "react";
import LanguageContext from '../../context/LanguageContext';

function OpportunitiesPage() {

  const languageContext = useContext(LanguageContext);
  const { preferredLanguage, currentContent } = languageContext;
  const { title, paragraph } = currentContent.opportunities;
  return (
    <div className="px-4 py-10">
      <h1>{title}</h1>
      <p>{paragraph}</p>
    </div>
  );
}


export default OpportunitiesPage;