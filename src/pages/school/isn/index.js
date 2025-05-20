import Overview from "./components/overview";
import PartnersSponsers from "./components/partnersSponsers";
import Schedule from "./components/schedule";
import SchoolComposition from "./components/schoolComposition";
import SchoolDescription from "./components/schoolDescription";
import CommingSoon from "./components/commingSoon";
import HistoryButton from "./components/historyButton";

function IsnSchoolPage() {
  return (
    <div className="bg-cover bg-blend-soft-light bg-[url('/backgrounds/opportunities.svg')]">
      <Overview />
      <SchoolComposition />
      <CommingSoon />
<<<<<<< HEAD
      {/* 
      <SchoolDescription />
      <Schedule />
      <PartnersSponsers /> */}
      <HistoryButton url="/school/isn/summer-2024"/>
=======

      {/* <SchoolDescription />
      <Schedule /> */}
      <PartnersSponsers />
      <HistoryButton url="/school/isn/summer-2024" />
>>>>>>> 3e50aa8 (fMRI and EEG update)
    </div>
  );
}
export default IsnSchoolPage;
