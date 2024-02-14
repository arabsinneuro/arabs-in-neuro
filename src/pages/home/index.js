import Overview from "./components/overview";
import Intro from "./components/intro";
import JoinUs from "./components/joinUs";
import WhyJoin from "./components/whyJoin";
import WhatsAcheived from "./components/whatsAcheived";

function HomePage() {
  return (
    <div className="bg-cover bg-blend-soft-light bg-[url('/backgrounds/gr_red_green.svg')] ">
      <Overview />
      <Intro />
      <JoinUs />
      <WhyJoin />
      <WhatsAcheived />
    </div>
  );
}

export default HomePage;
