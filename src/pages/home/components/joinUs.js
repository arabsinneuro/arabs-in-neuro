import React, { useContext, useEffect, useRef, useState } from "react";
import LanguageContext from "../../.././context/LanguageContext";
import Link from "next/link";

const JoinUs = () => {
  const languageContext = useContext(LanguageContext);
  const { currentContent } = languageContext;

  const {
    joinUs,
    inOur,
    inPersonEvent,
    onlineEvent,
    introCompNeuroCourse,
    introNeurophysiology,
    passionateAboutBrain,
    courseDesigned,
    dontMissOpportunity,
    learnMore,
    eegSchool,
    isnSchool,
    readyToDive,
    eventInvitation,
    isnSummerSchool,
  } = currentContent.home;

  const [isIntersecting, setIsIntersecting] = useState(false);
  const widgetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isIntersecting) {
            setIsIntersecting(true);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.3,
      }
    );

    if (widgetRef.current) {
      observer.observe(widgetRef.current);
    }

    return () => {
      if (widgetRef.current) {
        observer.unobserve(widgetRef.current);
      }
    };
  }, [widgetRef, isIntersecting]);

  return (
    <div ref={widgetRef} className="py-20 lg:px-20 px-5">
      <div className="flex flex-col lg:flex-row justify-center lg:w-3/4 lg:mx-auto">
        <div
          className={`flex-1 px-4 my-auto text-center lg:text-left ${
            isIntersecting ? "animate-shrink" : ""
          }`}
        >
          <h1 className="text-cGreen font-extrabold text-4xl text-center">
            {joinUs}
          </h1>
          <p className="text-cN700 font-bold text-lg mt-2 mb-8 text-center">
            {inPersonEvent}
          </p>
          <p className="text-cBlack font-extrabold text-3xl text-center">
            {isnSchool}
          </p>
          <p className="text-cGreenDark font-semibold text-xl mt-5 text-center">
            "{introNeurophysiology}"
          </p>
        </div>
        <div className="flex-1 px-4 py-5">
          <div className="bg-cWhite text-md shadow-md shadow-cGreenLight p-4 rounded-2xl">
            <p>{readyToDive}</p>
            <br />
            <p>{eventInvitation}</p>
            <br />
            <p className="font-bold">{dontMissOpportunity}</p>
            <br />
            <Link href="/school/isn">
              <button className="w-full bg-cGreen text-cWhite px-4 py-2 mt-4 rounded hover:bg-cGreenLight shadow-lg">
                {learnMore}
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-center lg:w-3/4 lg:mx-auto lg:my-20 my-10">
        <div className="flex-1 px-4 py-5">
          <div className="bg-cWhite text-md shadow-md shadow-cRedLight p-4 rounded-2xl">
            <p>{passionateAboutBrain}</p>
            <br />
            <p>{courseDesigned}</p>
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
        <div
          className={`flex-1 px-4 my-auto text-center lg:text-left ${
            isIntersecting ? "animate-shrink" : ""
          }`}
        >
          <h1 className="text-cRed font-extrabold text-4xl text-center">
            {joinUs}
          </h1>
          <p className="text-cN700 font-bold text-lg mt-2 mb-8 text-center">
            {onlineEvent}
          </p>
          <p className="text-cBlack font-extrabold text-3xl text-center">
            {introCompNeuroCourse}
          </p>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
