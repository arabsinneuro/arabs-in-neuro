import LanguageContext from "@/context/LanguageContext";
import React, { useContext } from "react";

const SchoolDescription = () => {
  const languageContext = useContext(LanguageContext);
  const { currentContent } = languageContext;
  const {
    whyCompNeuroscience,
    compNeuroscienceRealm,
    compToolsUnlockMindMysteries,
    whatToExpect,
    comprehensiveCurriculum,
    courseForEveryone,
    interactiveLearning,
    engageWithMaterials,
    blendOfLecturesAndQAs,
    courseOutline,
    threeWeekJourney,
    masteringPython,
    joinCommunity,
    vibrantLearningEnvironment,
    connectAndForgeConnections,
    learningExperienceDetails,
    timeCommitment,
    dedicatedEffort,
    organization,
    structuredGroups,
    dailySchedule,
    structuredDailyRoutine,
    watchLectures,
    liveCodingSessions,
    interactiveQAs,
    toolsUsed,
    zoom,
    liveSessions,
    googleColab,
    codingSessions,
    discord,
    communicationPlatform,
    youtube,
    lecturesHosted,
    detailedSchedule,
    dailyActivities,
    applicationDetails,
    applyThroughLink,
    applicationDeadline,
    dontMissOut,
    applyNow,
  } = currentContent.description;

  return (
    <div className="text-cN800">
      <div className="mx-auto px-5 lg:px-20 lg:py-10 py-5">
        {/* <section clssName="mb-10 text-md">
          <h3 className="text-2xl font-bold mb-4 text-cRed">
            {whyCompNeuroscience}
          </h3>
          <p>{compNeuroscienceRealm}</p>
          <p>{compToolsUnlockMindMysteries}</p>
        </section>a */}

        <div className="grid md:grid-cols-2 md:gap-15 gap-5 text-md">
        <section className="lg:mb-10 mb-5  p-6 bg-cWhite rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105">
            <h3 className="text-2xl font-bold mb-4 text-cRed text-center">
              {whyCompNeuroscience}
            </h3>
            <p className="mb-4">{compNeuroscienceRealm}</p>
            <p>{compToolsUnlockMindMysteries}</p>
          </section>
          
          <section className="lg:mb-10 mb-5 p-6 bg-cWhite rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105">
            <h3 className="text-2xl font-bold mb-4 text-cRed text-center">
              {whatToExpect}
            </h3>
            <p className="mb-4">{comprehensiveCurriculum}</p>
            <p>{courseForEveryone}</p>
          </section>

          <section className="lg:mb-10 mb-5 p-6 bg-cWhite rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105">
            <h3 className="text-2xl font-bold mb-4 text-cRed text-center">
              {interactiveLearning}
            </h3>
            <p className="mb-4">{engageWithMaterials}</p>
            <p>{blendOfLecturesAndQAs}</p>
          </section>

          {/* <section className="lg:mb-10 mb-5  p-6 bg-cWhite rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105">
            <h3 className="text-2xl font-bold mb-4 text-cRed text-center">
              {courseOutline}
            </h3>
            <p className="mb-4">{threeWeekJourney}</p>
            <p>{masteringPython}</p>
          </section> */}

          <section className="lg:mb-10 mb-5  p-6 bg-cWhite rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105">
            <h3 className="text-2xl font-bold mb-4 text-cRed text-center">
              {joinCommunity}
            </h3>
            <p className="mb-4">{vibrantLearningEnvironment}</p>
            <p>{connectAndForgeConnections}</p>
          </section>
        </div>

        <section className="lg:py-20 py-10 text-md">
          <h3 className="text-2xl font-bold mb-4 text-cRed">
            {learningExperienceDetails}
          </h3>
          <ul className="list-disc pl-5">
            <li className="mb-4">
              <span className="font-bold">{timeCommitment}</span>{" "}
              {dedicatedEffort}
            </li>
            <li className="mb-4">
              <span className="font-bold">{organization}</span>{" "}
              {structuredGroups}
            </li>
            <li className="mb-4">
              <span className="font-bold">{dailySchedule}</span>{" "}
              {structuredDailyRoutine}
              <ul className="list-disc px-5 mt-2">
                <li className="mb-2">{watchLectures}</li>
                <li className="mb-2">{liveCodingSessions}</li>
                <li className="mb-2">{interactiveQAs}</li>
              </ul>
            </li>
            <li className="mb-4">
              <span className="font-bold">{toolsUsed}</span>
              <ul className="list-disc px-5 mt-2">
                <li className="mb-2">
                  <span className="font-bold">{zoom}</span> {liveSessions}
                </li>
                <li className="mb-2">
                  <span className="font-bold">{googleColab}</span>{" "}
                  {codingSessions}
                </li>
                <li className="mb-2">
                  <span className="font-bold">{discord}</span>{" "}
                  {communicationPlatform}
                </li>
                <li className="mb-2">
                  <span className="font-bold">{youtube}</span> {lecturesHosted}
                </li>
              </ul>
            </li>
            <li className="mb-4">
              <span className="font-bold">{detailedSchedule}</span>{" "}
              {dailyActivities}
            </li>
          </ul>
        </section>

        <section className="lg:py-20 py-10 px-4 py-6 bg-cWhite rounded-md shadow-xl transform transition duration-500 hover:scale-105">
          <h3 className="text-3xl font-bold mb-6 text-cRed text-center">
            {applicationDetails}
          </h3>
          <p className="mb-4 text-lg text-center text-gray-700">
            {applyThroughLink}
          </p>
          <p className="mb-8 text-lg font-semibold text-center text-gray-700">
            {applicationDeadline}
          </p>
          <div className="text-center">
            <p className="text-xl font-medium mb-10 text-gray-700">
              {dontMissOut}
            </p>
            <a
              href=""
              className="inline-block bg-cRed hover:bg-cRedLight text-cWhite font-bold py-3 px-8 rounded-lg text-lg shadow transition duration-300 ease-in-out transform hover:-translate-y-1"
            >
              {applyNow}
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SchoolDescription;
