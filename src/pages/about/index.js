import RootLayout from "../../app/layout";
import { useContext } from "react";
import LanguageContext from "../../context/LanguageContext";
import Overview from "./components/overview"; 
import Journey from "./components/journey"; 
import Team from "./components/team"; 

function AboutPage() {
  const languageContext = useContext(LanguageContext);

  return (
    <div className="p-4 lg:p-8">
    <Overview languageContext={languageContext} />
    <Journey languageContext={languageContext} />
    <Team languageContext={languageContext} />
    </div>
  );
}

AboutPage.Layout = RootLayout;

export default AboutPage;
