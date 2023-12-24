import { useContext } from "react";
import LanguageContext from "../../context/LanguageContext";
import FaqList from "./components/faqList";

function FaqPage() {
  const languageContext = useContext(LanguageContext);
  const { currentContent } = languageContext;
  const { faqsSection, beyondAnswers } = currentContent.faq;

  return (
    <div className="bg-cover bg-blend-soft-light bg-[url('/backgrounds/faq.svg')]">
      <div className=" lg:px-20 px-10 md:grid-cols-2 py-20">
        <div className="pb-10">
          <h1 className="text-3xl font-extrabold text-cBlack">{faqsSection}</h1>
          <p className="my-2 text-sm font-bold text-cRed">{beyondAnswers}</p>
        </div>
        <div>
          <FaqList />
        </div>
      </div>
    </div>
  );
}

export default FaqPage;
