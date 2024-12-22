import React, { useContext } from "react";
import LanguageContext from "@/context/LanguageContext";
import Link from "next/link";
import { ainMembershipFormLink } from "@/app/constants";

const JoinUsOverview = () => {
  const languageContext = useContext(LanguageContext);
  const { currentContent } = languageContext;
  const { pioneerDistinctivePath, applyHere, ainMembership, ainMemberDescription, joinMemberDatabase } =
    currentContent.opportunities;

  return (
    <div>
      <div className="md:py-20 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="md:col-span-2 md:px-10 px-5 grid grid-cols-1 gap-4">
          <p className="lg:px-10 text-4xl font-extrabold text-cBlack">
            {ainMembership}
          </p>
          <p className="lg:px-10 text-md font-extrabold italic text-cRed">
            {pioneerDistinctivePath}
          </p>

          <p className="lg:px-10 px-2 py-3 text-md text-cBlack">
            {ainMemberDescription}
          </p>
        </div>

        <div className="md:col-span-1 flex flex-col justify-start items-start">
          <Link
            href={ainMembershipFormLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-72 h-[fit-content] bg-cRed shadow-md px-5 rounded-md space-y-1 mt-10 ltr:ml-auto rtl:mr-auto"
          >
            <div>
              <h2 className="font-extrabold text-xl py-3 text-cWhite">
                {joinMemberDatabase}
              </h2>

              <button
                className="flex items-center bg-cWhite text-cBlack px-5 py-2 rounded-md h-10 mx-auto"
                type="submit"
                role="button"
              >
                {applyHere}
                <img
                  className="ml-2"
                  src="/icons/arrow-up-right.svg"
                  alt="arrow"
                />
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JoinUsOverview;
