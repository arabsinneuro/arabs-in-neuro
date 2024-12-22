// import { useState, useContext } from "react";
// import LanguageContext from "../../context/LanguageContext";
// import JobList from "./components/jobCard";
// import JobData from "../../../public/data/opportunities/jobsData";
// import Link from "next/link";
import JoinUsOverview from "./components/joinUsOverview";

function OpportunitiesPage() {
  // const languageContext = useContext(LanguageContext);
  // const { preferredLanguage, currentContent } = languageContext;

  // const { makeNeuronDifference, applyHere, joinTodayThriveTomorrow, ainMembership, ainMemberDescription, joinMemberDatabase } =
  //   currentContent.opportunities;

  // const volunteerStatus = {
  //   en: "New Volunteering Positions Available!",
  //   ar: "وظائف تطوع جديدة متاحة!",
  // };

  return (
    <div className="bg-cover bg-blend-soft-light bg-[url('/backgrounds/faq.svg')] min-h-screen">
      <JoinUsOverview />
      <div className=" mx-auto pb-20 lg:px-20 px-10">
        <iframe
          className="airtable-embed"
          srcDoc={`<iframe src="https://airtable.com/embed/app9zmLQ4yCvPwiCG/shrhFTBjN6ARtuf5s?viewControls=on" viewControls=on" frameborder="0" onmousewheel="" width="100%" height="533" style="background: transparent; border: 1px solid #ccc;"></iframe>`}
          width="100%"
          height="550"
          style={{ background: "transparent", border: "1px solid #ccc" }}
          allowFullScreen
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
      </div>
      {/* <div className=" mx-auto pb-20 lg:px-20 px-10 lg:w-4/5">
        <JobList jobData={JobData[preferredLanguage]} />
      </div> */}
    </div>
  );
}

export default OpportunitiesPage;
