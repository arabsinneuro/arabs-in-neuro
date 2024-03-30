import React, { useContext, useEffect, useRef, useState } from "react";
import LanguageContext from "../../../context/LanguageContext";

const Card = ({ number, text, icon }) => (
  <div
    className="rounded-2xl border border-cN300 shadow-md relative overflow-hidden"
    style={{ width: "240px", height: "130px" }}
  >
    <div className="absolute inset-0 bg-cover bg-blend-soft-light bg-[url('/backgrounds/home_overview.svg')] rounded-2xl"></div>

    <div className="relative flex flex-col justify-center items-center h-full px-4">
      <p className="pb-3 text-cRed font-extrabold text-2xl">{number}</p>
      <p className="text-sm text-cN800">{text}</p>
    </div>

    <div className="absolute top-2 right-2 bg-cWhite rounded-full shadow-md w-8 h-8 flex items-center justify-center">
      <img src={icon} alt="Icon" className="w-5 h-5" />
    </div>
  </div>
);

const WhatsAcheived = () => {
  const languageContext = useContext(LanguageContext);
  const { preferredLanguage, currentContent } = languageContext;

  const {
    countries,
    applicants,
    teacherAssistants,
    instructorsAndGuestSpeakers,
    what,
    achieved,
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
        threshold: 0.5,
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
    <div ref={widgetRef} className="py-10 lg:px-20 px-5">
      <div className="flex flex-col lg:flex-row justify-around items-center">
        <div className="relative mb-5 lg:mb-0">
          <img
            src="/assets/home/brain.png"
            alt="Brain"
            className="lg:w-96 w-64"
          />
          <div className="absolute lg:bottom-20 bottom-5 right-0 text-center lg:text-center font-extrabold text-2xl">
            <p>{what}</p>
            <p className="text-cRed">AiN</p>
            {preferredLanguage === "en" ? <p>{achieved}?</p> : <></>}
          </div>
        </div>
        <div className="lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className={`${isIntersecting ? " animate-grow" : ""}`}>
              <Card
                number="13+"
                text={countries}
                icon="/assets/home/map-pin.svg"
              />
            </div>
            <div className={`${isIntersecting ? " animate-grow" : ""}`}>
              <Card
                number="400+"
                text={applicants}
                icon="/assets/home/users.svg"
              />
            </div>
            <div className={`${isIntersecting ? " animate-grow" : ""}`}>
              <Card
                number="10+"
                text={teacherAssistants}
                icon="/assets/home/user-check.svg"
              />
            </div>
            <div className={`${isIntersecting ? " animate-grow" : ""}`}>
              <Card
                number="10+"
                text={instructorsAndGuestSpeakers}
                icon="/assets/home/award.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsAcheived;
