import React, { useState, useEffect } from "react";

function FAQItem({ question, answer, isAllAnswersVisible }) {
    const [isAnswerVisible, setIsAnswerVisible] = useState(false);
  
    useEffect(() => {
      setIsAnswerVisible(isAllAnswersVisible);
    }, [isAllAnswersVisible]);
  
    const toggleAnswer = () => {
      setIsAnswerVisible(!isAnswerVisible);
    };
  
    return (
      <div className="bg-cWhite shadow-md rounded-lg mb-4">
        <div className="p-4 cursor-pointer flex justify-between items-center" onClick={toggleAnswer}>
          <h2 className="text-xl font-bold text-primary">{question}</h2>
          <span className={`toggle-icon transform ${isAnswerVisible ? "rotate-180" : ""}`}>
            <img className="ml-2" src="icons/arrow.svg" alt="arrow" />
          </span>
        </div>
        <div className="m-4 pb-8" style={{ display: isAnswerVisible ? "block" : "none" }}>
          {Array.isArray(answer) ? (
            <ul className="pl-4 list-none list-inside">
              {answer.map((item, index) => (
                <li
                  key={index}
                  className="text-cBlack relative before:inline-block before:w-3 before:h-3 before:mr-2 before:bg-cRed before:rounded-full"
                >
                  {item}
                </li>
              ))}
            </ul>
          ) : (
            <div className="ml-4 border-l-4 border-cRed pl-4 lg:pr-20 pr-10">
              <p>{answer}</p>
            </div>
          )}
        </div>
      </div>
    );
  }
  
export default FAQItem;  