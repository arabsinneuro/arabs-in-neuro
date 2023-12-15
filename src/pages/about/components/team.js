import React from "react";
import MemberCard from "./memberCard";

const Team = ({ languageContext }) => {
  const { teamBehindAiN, teamLeads, volunteers } =
    languageContext.currentContent.about;

  return (
    <div className="mt-20 mb-20">
      <div className="flex items-center justify-center mt-20 mb-20">
        <h1 className="bg-cWhite text-cGreen-500 px-20 py-4 rounded-md inline-block text-center shadow-md text-xl font-bold">
          {teamBehindAiN}
        </h1>
      </div>

      <br />
      <p className="text-cN500 font-bold pl-4">{teamLeads}</p>
      <br />
      <div className="flex flex-wrap justify-center gap-4">
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
      </div>
      <br />
      <p className="text-cN500 font-bold pl-4">{volunteers}</p>
      <br />
      <div className="flex flex-wrap justify-center gap-4">
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
      </div>
    </div>
  );
};

export default Team;
