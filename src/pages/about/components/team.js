import React from "react";
import { useContext } from "react";
import MemberCard from "./memberCard";
import LanguageContext from "../../.././context/LanguageContext";
import { teamLeadsData } from "../../../../public/data/team/team_leads_data";

const Team = () => {
  const languageContext = useContext(LanguageContext);
  const { preferredLanguage, currentContent } = languageContext;
  const { teamBehindAiN, teamLeads, volunteers, affiliation } =
    currentContent.about;

  return (
    <div className="p-10 lg:p-20">
      <div className="flex items-center justify-center mt-10 mb-10">
        <h1 className="text-3xl font-extrabold text-cRed">
          {teamBehindAiN}
        </h1>
      </div>

      <br />
      <p className="text-cGreen text-lg font-extrabold px-4">{teamLeads}</p>
      <br />

      <div className="flex flex-wrap justify-center lg:gap-8 gap-4">
        {teamLeadsData.map((member) => (
          <MemberCard
            key={member.name[preferredLanguage]}
            name={member.name[preferredLanguage]}
            team={member.team[preferredLanguage]}
            affiliation={member.affiliation[preferredLanguage]}
            affiliationTitle={affiliation}
            image={member.image}
            linkedinLink={member.linkedinLink}
            twitterLink={member.twitterLink}
            emailText={member.emailText}
          />
        ))}
      </div>
      <br />
      <p className="text-cGreen text-lg font-extrabold px-4 py-5">
        {volunteers}
      </p>
      <br />

      <iframe
        className="airtable-embed"
        srcDoc={`<iframe src="https://airtable.com/embed/app9zmLQ4yCvPwiCG/shrKroFcLaFoK1NN2?backgroundColor=gray" frameborder="0" onmousewheel="" width="100%" height="470" style="background: transparent; border: 1px solid #ccc;"></iframe>`}
        width="100%"
        height="500"
        style={{ background: "transparent", border: "1px solid #ccc" }}
        allowFullScreen
        sandbox="allow-scripts allow-same-origin"
      ></iframe>
    </div>
  );
};

export default Team;
