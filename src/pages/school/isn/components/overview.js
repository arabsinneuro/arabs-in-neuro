import React, { useContext } from "react";
import LanguageContext from "@/context/LanguageContext";

const Overview = () => {
  const languageContext = useContext(LanguageContext);
  const { preferredLanguage, currentContent } = languageContext;
  const {
    ibnSinaNeurotech,
    fMRIandEEG,
    introNeuro,
    programOverview,
    experimentalProtocols,
    dataAnalysisModeling,
    requiredTimeCommitment,
  } = currentContent.isnSchool;

  // const applicationStatus = {
  //   en: "Stay tuned for the application opening!",
  //   ar: "ترقبوا فتح التقديم!",
  // };
  // const applicationStatus = {
  //   en: "We are no longer accepting applications.",
  //   ar: "لم نعد نقبل طلبات الالتحاق .",
  // };
  const schoolDuration = {
    en: "The program was held in person at Center for Brain and Health, New York University Abu Dhabi, Saadiyat Island - Abu Dhabi - United Arab Emirates\nEvent dates: 13-17 October\nOpen to: Africa, Asia-Pacific, Pan-Europe\n\nSchool Fees:\n- USD 1200 for international participants\n- USD 400 for Abu Dhabi local residents\n\nFees included accommodation, meals, local transportation, and all program materials\n*Flight costs were not included*\n Scholarships were provided for the most deserving students\n\n Language of Instruction:\nEnglish was the main language of instruction",
    ar: "عُقد البرنامج حضوريًا في مركز الدماغ والصحة، جامعة نيويورك أبوظبي، جزيرة السعديات - أبوظبي - الإمارات العربية المتحدة\nتاريخ الفعالية: 13-17 أكتوبر\nمفتوح للمشاركين من: إفريقيا، آسيا والمحيط الهادئ، أوروبا\n\nرسوم البرنامج:\n- 1200 دولار أمريكي للمشاركين الدوليين\n- 400 دولار أمريكي للمقيمين المحليين في أبوظبي\n\n شملت الرسوم الإقامة، الوجبات، المواصلات المحلية، وجميع مواد البرنامج\n*لم تشمل الرسوم تكاليف تذاكر الطيران* \nتم تقديم منح دراسية للطلاب الأكثر استحقاقًا \n\nلغة التدريس:\nاللغة الإنجليزية كانت اللغة الرئيسية للتدريس",
  };

  return (
    <div>
      <div className="md:py-20 py-10 grid grid-cols-1 gap-10">
        <div className="md:px-10 px-5 grid grid-cols-1 gap-4">
          <h1 className="lg:px-10 text-4xl font-extrabold text-cBlack">
            {ibnSinaNeurotech}
          </h1>
          <h1 className="lg:px-10 text-2xl font-extrabold text-cBlack">
            {fMRIandEEG}
          </h1>
          <p className="lg:px-10 text-lg font-extrabold italic text-cRed">
            {introNeuro}
          </p>

          <p className="lg:px-10 px-2 py-2 text-md text-cBlack">
            {programOverview}
            <br />
            <br />
            {experimentalProtocols}
            <br />
            <br />
            {dataAnalysisModeling}
          </p>
          <h3 className="lg:px-10 px-2 text-md font-extrabold text-cGreen whitespace-pre-line">
            {schoolDuration[preferredLanguage]}
          </h3>
          <p className="lg:px-10 px-2 text-md font-extrabold text-cGreen">
            {requiredTimeCommitment}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
