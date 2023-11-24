import RootLayout from "../../app/layout";
import { useState, useContext } from "react";
import LanguageContext from "../../context/LanguageContext";

function AboutPage() {
  const languageContext = useContext(LanguageContext);
  const { preferredLanguage, currentContent } = languageContext;
  const { title, paragraph } = currentContent.about;
  return (
    <div className="p-5 bg-cRedLight border border-cN300">
      <h1>{title}</h1>
      <p>{paragraph}</p>
    </div>
  );
}

AboutPage.Layout = RootLayout;

export default AboutPage;
