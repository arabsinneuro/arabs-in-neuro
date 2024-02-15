import RootLayout from "../../app/layout";
import AboutOverview from "./components/aboutOverview";
import Journey from "./components/journey";
import Team from "./components/team";

function AboutPage() {
  return (
    <div>
      <AboutOverview />
      <div className="lg:bg-cover h-full w-full bg-contain bg-blend-soft-light bg-[url('/backgrounds/team_gr_bg.svg')] ">
        <Journey />
        <Team />
      </div>
    </div>
  );
}

AboutPage.Layout = RootLayout;

export default AboutPage;
