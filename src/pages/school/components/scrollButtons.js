import React from "react";

const ScrollButtons = ({ onScrollLeft, onScrollRight, isLeftDisabled, isRightDisabled }) => {
  return (
    <div className="flex items-center ml-auto space-x-4">
      <button
        className={`cursor-pointer bg-${isLeftDisabled ? "cWhite" : "cRed"} rounded-full p-2 shadow-md`}
        onClick={onScrollLeft}
        disabled={isLeftDisabled}
      >
        <img src="icons/chevron-left.svg" alt="Left Chevron" className="w-6 h-6 text-white" />
      </button>
      <button
        className={`cursor-pointer bg-${isRightDisabled ? "cWhite" : "cRed"} rounded-full p-2 shadow-md`}
        onClick={onScrollRight}
        disabled={isRightDisabled}
      >
        <img src="icons/chevron-right.svg" alt="Right Chevron" className="w-6 h-6 text-white" />
      </button>
    </div>
  );
};

export default ScrollButtons;
