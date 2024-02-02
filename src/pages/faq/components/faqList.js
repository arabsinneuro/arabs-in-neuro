import React, { useState, useContext } from "react";
import LanguageContext from "../../../context/LanguageContext";
import faqEn from "../../../../public/data/faq/faqEn";
import faqAr from "../../../../public/data/faq/faqAr";
import FAQItem from "./faqItem";

const FaqList = () => {
  const [allAnswersVisible, setAllAnswersVisible] = useState(false);

  const toggleAllAnswers = () => {
    setAllAnswersVisible(!allAnswersVisible);
  };

  const languageContext = useContext(LanguageContext);
  const { preferredLanguage, currentContent } = languageContext;
  const { collapseAll, expandAll } = currentContent.faq;

  const data = preferredLanguage === "en" ? faqEn : faqAr;

  return (
    <div>
      <button
        className="mb-8 text-cBlack text-sm ltr:float-right rtl:float-left px-2 py-1 rounded-md border-b-2 border-cRed"
        onClick={toggleAllAnswers}
      >
        {allAnswersVisible ? collapseAll : expandAll}
      </button>
      <div style={{ clear: 'both' }}>
        {data.map((item, index) => (
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
