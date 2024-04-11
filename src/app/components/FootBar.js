import React, { useContext } from "react";
import Link from "next/link";
import LanguageContext from "../../context/LanguageContext";
import {
  emailLink,
  emailName,
  facebookLink,
  facebookName,
  instagramLink,
  instagramName,
  twiterLink,
  twiterName,
  linkedinLink,
  linkedinName,
} from "../constants.js";

function Footbar({ setPreferredLanguage }) {
  const languageContext = useContext(LanguageContext);
  const { preferredLanguage, currentContent } = languageContext;
  const { shapingFutureNeuroscience, connectWithAiN, allRightsReserved } =
  currentContent.footer;
    
  const isRTL = preferredLanguage == "ar" ? true : false;
  return (
    <footer className="bg-cRed">
      <div className="flex flex-col lg:flex-row items-center">
        <div className="flex">
          <Link href="/">
            <img
              src="/logo/round_logo.png"
              alt="Logo"
              style={{
                maxHeight: "200px",
                maxWidth: "200px",
                width: "100%",
                height: "auto",
                marginTop: "-20px",
                marginRight: isRTL?  "-15px" : "0px",
                marginLeft: isRTL? "0px" : "-15px"
              }}
            />
          </Link>
        </div>

        <div className="text-cWhite text-center lg:text-center mx-auto my-5 lg:ml-4 lg:flex-grow">
          <h1 className="text-xl font-bold mx-10 lg:mt-0">
            {shapingFutureNeuroscience}
          </h1>
          <p dir="ltr" className="text-sm mt-10">
            © Arabs in Neuroscience
          </p>
          <p className="text-sm"> {allRightsReserved} </p>
        </div>

        <div className="flex flex-col lg:flex-col items-center lg:ml-auto mx-10 mt-4 lg:mt-0">
          <Link href="/contact">
            <button className="bg-cPink text-cWhite py-2 px-4 my-5 rounded-md mx-auto lg:mx-0">
              {connectWithAiN}
            </button>
          </Link>

          <div className="flex items-center mx-auto lg:mx-0">
            {/* <a href={emailLink}>
              <img src="/icons/email.svg" alt={emailName} />
            </a> */}
            <a href={facebookLink}>
              <img src="/icons/facebook.svg" alt={facebookName} />
            </a>
            <a href={linkedinLink}>
              <img src="/icons/linkedin.svg" alt={linkedinName} />
            </a>
            <a href={instagramLink}>
              <img src="/icons/instagram.svg" alt={instagramName} />
            </a>
            <a href={twiterLink}>
              <img src="/icons/twitter.svg" alt={twiterName} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footbar;
