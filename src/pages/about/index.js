import AboutOverview from "./components/aboutOverview";
import Journey from "./components/journey";
import Team from "./components/team";

function AboutPage() {
  return (
    <div>
      <div style={{clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 90%)"}} className="relative bg-cover h-full bg-blend-soft-light bg-[url('/backgrounds/about_overview.svg')]">
        <AboutOverview />
      </div>
      <div className="relative lg:bg-cover h-full w-full bg-cover bg-blend-soft-light bg-[url('/backgrounds/team_gr_bg.svg')]">
        <Journey />
        <Team />
      </div>
    </div>
  );
}

export default AboutPage;
