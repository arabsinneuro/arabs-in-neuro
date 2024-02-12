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
  const { shapingFutureNeuroscience, connectWithAiN } =
    languageContext.currentContent.footer;
  return (
    <footer className="bg-cRed">
      <div className="flex flex-col lg:flex-row lg:items-center">
        <div className="flex">
          <Link href="/">
            <img
              src="/logo/rounded_logo.svg"
              alt="Logo"
              style={{
                maxHeight: "200px",
                maxWidth: "200px",
                width: "100%",
                height: "auto",
                marginTop: "-30px",
              }}
            />
          </Link>
        </div>

        <div className="text-cWhite text-center lg:text-center mx-auto mt-5 lg:ml-4 lg:flex-grow">
          <h1 className="text-xl font-bold mx-10 lg:mt-0">
            {shapingFutureNeuroscience}
          </h1>
          <p dir="ltr" className="text-sm lg:mt-10">
            @2023 arabsinneuro
          </p>
        </div>

        <div className="flex flex-col lg:flex-col lg:items-center lg:ml-auto mx-10 mt-4 lg:mt-0">
          <Link href="/contact">
            <button className="bg-cPink text-cWhite py-2 px-4 my-5 rounded-md mx-auto lg:mx-0">
              {connectWithAiN}
            </button>
          </Link>

          <div className="flex items-center mx-auto lg:mx-0">
            <a href={emailLink}>
              <img src="/icons/email.svg" alt={emailName} />
            </a>
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
