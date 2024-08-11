import Overview from "./components/overview";
import PartnersSponsers from "./components/partnersSponsers";
import Schedule from "./components/schedule";
import SchoolDescription from "./components/schoolDescription";

function IsnSchoolPage() {
  return (
    <div className="bg-cover bg-blend-soft-light bg-[url('/backgrounds/opportunities.svg')]">
      <Overview />
      <SchoolDescription />
      <Schedule />
      <PartnersSponsers />
    </div>
  );
}
export default IsnSchoolPage;
