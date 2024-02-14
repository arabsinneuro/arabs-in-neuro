import RootLayout from "../../app/layout";
import Overview from "./components/overview";
import Journey from "./components/journey";
import Team from "./components/team";

function AboutPage() {
  return (
    <div className="bg-cover bg-blend-soft-light bg-[url('/backgrounds/gr_red_green.svg')] " >
      <Overview />
      <Journey />
      <div className="lg:bg-cover bg-contain bg-cover bg-blend-soft-light bg-[url('/backgrounds/team_gr_bg.svg')] ">
        <Team />
      </div>
    </div>
  );
}

AboutPage.Layout = RootLayout;

export default AboutPage;
