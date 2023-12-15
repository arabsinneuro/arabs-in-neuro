import RootLayout from "../../app/layout";
import { useContext } from "react";
import LanguageContext from "../../context/LanguageContext";
import Overview from "./components/overview";
import Journey from "./components/journey";
import Team from "./components/team";

function AboutPage() {
  const languageContext = useContext(LanguageContext);

  return (
    <div className="bg-cover bg-blend-soft-light bg-[url('/backgrounds/gr_red_green.svg')] " >
      <Overview languageContext={languageContext} />

      <div className="bg-contain bg-blend-soft-light bg-[url('/backgrounds/gr_red_green.svg')] ">
        <Journey languageContext={languageContext} />
      </div>

      <div className="lg:bg-cover bg-contain bg-cover bg-blend-soft-light bg-[url('/backgrounds/team_gr_bg.svg')] ">
        <Team languageContext={languageContext} />
      </div>
    </div>
  );
}

AboutPage.Layout = RootLayout;

export default AboutPage;
