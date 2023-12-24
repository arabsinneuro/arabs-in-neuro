import React, { useState, useContext } from "react";
import LanguageContext from "../../../context/LanguageContext";
import faqData from "../faqData";
import FAQItem from "./faqItem";

const FaqList = () => {
  const [allAnswersVisible, setAllAnswersVisible] = useState(false);

  const toggleAllAnswers = () => {
    setAllAnswersVisible(!allAnswersVisible);
  };

  const languageContext = useContext(LanguageContext);
  const { currentContent } = languageContext;
  const { collapseAll, expandAll } = currentContent.faq;

  return (
    <div>
      <button
        className="mb-8 text-cBlack text-sm float-right px-2 py-1 rounded-md border-b-2 border-cRed"
        onClick={toggleAllAnswers}
      >
        {allAnswersVisible ? collapseAll : expandAll}
      </button>
      <div style={{ clear: 'both' }}>
        {faqData.map((item, index) => (
          <FAQItem
            key={index}
            question={item.question}
            answer={item.answer}
            isAllAnswersVisible={allAnswersVisible}
          />
        ))}
      </div>
    </div>
  );
  
  
};

export default FaqList;
