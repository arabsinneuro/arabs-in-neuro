import React from "react";
import { useContext } from "react";
import LanguageContext from "../../../context/LanguageContext";
const OverviewComponent = () => {
  const languageContext = useContext(LanguageContext);
  const { preferredLanguage, currentContent } = languageContext;
  const isRTL = preferredLanguage == "ar" ? true : false;

  const { connectWithUs, embarkJourney, virtualDoorsOpen, reachOut } =
    currentContent.contact;

  return (
    <div className="flex-shrink-0 lg:w-1/2">
      <div className="text-center ltr:lg:text-left rtl:lg:text-right lg:w-1/2 mx-auto">
        <h1 className="text-xl font-bold text-cBlack">{connectWithUs}</h1>
        <br />
        <p>{embarkJourney}</p>
        <br />
        <p>{virtualDoorsOpen}</p>
        <br />
        <p className="font-bold italic">{reachOut}</p>

        <br />
        <br />
        <img
          src="assets/contact/illustration.svg"
          alt="illustration"
          style={{
            transform: isRTL ? "scaleX(-1)" : "scaleX(1)",
            maxHeight: "250px",
            maxWidth: "250px",
            width: "100%",
            height: "auto",
          }}
        />
      </div>
    </div>
  );
};

export default OverviewComponent;
