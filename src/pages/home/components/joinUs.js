import React from "react";
import { useContext } from "react";
import LanguageContext from "../../.././context/LanguageContext";
import Link from "next/link";

const JoinUs = () => {
  const languageContext = useContext(LanguageContext);
  const { currentContent } = languageContext;

  const {
    joinUs,
    inOur,
    introCompNeuroCourse,
    courseJourney,
    courseDescription,
    dontMissOpportunity,
    learnMore,
  } = currentContent.home;

  return (
    <div className="py-20 lg:px-20 px-5">
      <div className="flex flex-col lg:flex-row justify-center">
        {/* <div className="flex-1 px-5 mb-8 lg:mb-0">
          <img src="/assets/home/joinus.svg" alt="Join Us" className="h-64 w-64 mx-auto" />
        </div> */}
        <div className="flex-1 px-4 text-center lg:text-left">
          <h1 className="text-cRed font-extrabold text-4xl text-center">
            {joinUs}
          </h1>
          <p className="text-cN700 font-bold text-lg mb-8 text-center">
            {inOur}
          </p>
          <p className="text-cBlack font-extrabold text-3xl text-center">
            {introCompNeuroCourse}
          </p>
        </div>
        <div className="flex-1 px-4">
          <div className="bg-cWhite text-sm shadow p-4 rounded-xl">
            <p>{courseJourney}</p>
            <br />
            <p>{courseDescription}</p>
            <br />
            <p className="font-bold">{dontMissOpportunity}</p>
            <br />
            <Link href="/school">
              <button className="w-full bg-cRed text-cWhite px-4 py-2 mt-4 rounded hover:bg-cRedLight shadow-lg">
                {learnMore}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
