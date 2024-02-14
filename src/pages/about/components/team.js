import React from "react";
import { useContext } from "react";
import MemberCard from "./memberCard";
import LanguageContext from "../../.././context/LanguageContext";

const Team = () => {
  const languageContext = useContext(LanguageContext);
  const { currentContent } = languageContext;
  const { teamBehindAiN, teamLeads, volunteers } = currentContent.about;

  return (
    <div className="p-4 lg:p-8">
      <div className="flex items-center justify-center mb-20">
        <h1 className="bg-cGreen text-cWhite px-20 py-4 rounded-xl text-center shadow-xl text-2xl font-extrabold">
          {teamBehindAiN}
        </h1>
      </div>

      <br />
      <p className="text-cN600 font-bold pl-4">{teamLeads}</p>
      <br />
      
      <iframe
        className="airtable-embed"
        srcDoc={`<iframe src="https://airtable.com/embed/app9zmLQ4yCvPwiCG/shrfnV7F71yckhAPn?backgroundColor=gray" frameborder="0" onmousewheel="" width="100%" height="470" style="background: transparent; border: 1px solid #ccc;"></iframe>`}
      
        width="100%"
        height="500"
        style={{ background: "transparent", border: "1px solid #ccc" }}
        allowFullScreen
        sandbox="allow-scripts allow-same-origin"
      ></iframe>
      {/* <div className="flex flex-wrap justify-center gap-4">
       <MemberCard
          name="Mohammad Abdelhack"
          role="Software Engineer"
          affiliation="ABC Corporation"
          image="/assets/team/mabdelhack.svg"
          linkedinLink="https://www.linkedin.com/in/johndoe/"
          twitterLink="https://twitter.com/johndoe/"
          emailText="johndoe@example.com"
        />

        <MemberCard
          name="Sarah hosni"
          role="UX Designer"
          affiliation="XYZ Agency"
          image="/assets/team/sarah.svg"
          linkedinLink="https://www.linkedin.com/in/janesmith/"
          twitterLink="https://twitter.com/janesmith/"
          emailText="janesmith@example.com"
        /> 
      </div> */}
      <br />
      <p className="text-cN600 font-bold pl-4 py-5">{volunteers}</p>
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
      {/* <div className="flex flex-wrap justify-center gap-4 pb-20">
      <MemberCard
          name="John Doe"
          role="Software Engineer"
          team='Communication'
          affiliation="ABC Corporation"
          linkedinLink="https://www.linkedin.com/in/johndoe/"
          twitterLink="https://twitter.com/johndoe/"
          emailText="johndoe@example.com"
        />

        <MemberCard
          name="Jane Smith"
          role="UX Designer"
          team='Fundraising'
          affiliation="XYZ Agency"
          linkedinLink="https://www.linkedin.com/in/janesmith/"
          twitterLink="https://twitter.com/janesmith/"
          emailText="janesmith@example.com"
        /> 
     </div> */}
    </div>
  );
};

export default Team;
