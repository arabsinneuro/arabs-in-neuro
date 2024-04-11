import LanguageContext from "@/context/LanguageContext";
import React, { useContext } from "react";

const ScrollButtons = ({ onScrollLeft, onScrollRight, isLeftDisabled, isRightDisabled }) => {
  const { preferredLanguage } = useContext(LanguageContext);

  const isRtl = preferredLanguage === "ar";

  return (
    <div className={`flex items-center ${isRtl ? "mr-auto" : "ml-auto"} space-x-4 ${isRtl && "flex-row-reverse"}`}>
      {isRtl ? (
        // For RTL: Right button first
        <>
          <button
            className={`cursor-pointer bg-${isRightDisabled ? "cWhite" : "cRed"} rounded-full p-2 shadow-md`}
            onClick={onScrollLeft} 
            disabled={isRightDisabled}
          >
            <img src={`${isRightDisabled ? "icons/chevron-left.svg" : "icons/chevron-left-white.svg"} `} alt="Left Chevron" className="w-6 h-6 text-cWhite" />
          </button>
          <button
            className={`cursor-pointer bg-${isLeftDisabled ? "cWhite" : "cRed"} rounded-full p-2 shadow-md`}
            onClick={onScrollRight} 
            disabled={isLeftDisabled}
          >
            <img src={`${isLeftDisabled ? "icons/chevron-right.svg" : "icons/chevron-right-white.svg"} `} alt="Right Chevron" className="w-6 h-6 text-cWhite" />
          </button>
        </>
      ) : (
        
        <>
          <button
            className={`cursor-pointer bg-${isLeftDisabled ? "cWhite" : "cRed"} rounded-full p-2 shadow-md`}
            onClick={onScrollLeft}
            disabled={isLeftDisabled}
          >
            <img src={`${isLeftDisabled ? "icons/chevron-left.svg" : "icons/chevron-left-white.svg"} `} alt="Left Chevron" className="w-6 h-6 text-white" />
          </button>
          <button
            className={`cursor-pointer bg-${isRightDisabled ? "cWhite" : "cRed"} rounded-full p-2 shadow-md`}
            onClick={onScrollRight}
            disabled={isRightDisabled}
          >
            <img src={`${isRightDisabled ? "icons/chevron-right.svg" : "icons/chevron-right-white.svg"} `} alt="Right Chevron" className="w-6 h-6 text-white" />
          </button>
        </>
      )}
    </div>
  );
};

export default ScrollButtons;
