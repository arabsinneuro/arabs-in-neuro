import HomeOverview from "./components/homeOverview";
import Intro from "./components/intro";
import JoinUs from "./components/joinUs";
import WhyJoin from "./components/whyJoin";
import WhatsAcheived from "./components/whatsAcheived";
import RootLayout from "../../app/layout";
function HomePage() {
  return (
    <div>
      <div className="bg-cover h-full bg-blend-soft-light bg-[url('/backgrounds/home-intro.svg')] ">
        <HomeOverview />
      </div>
      <div className="bg-contain bg-blend-soft-light bg-[url('/backgrounds/gr_red_green.svg')] ">
        <Intro />
        <JoinUs />
        <WhyJoin />
        <WhatsAcheived />
      </div>
    </div>
  );
}

export default HomePage;
