import React, { useContext } from "react";
import LanguageContext from "@/context/LanguageContext";

const PartnersSponsers = () => {
  const languageContext = useContext(LanguageContext);
  const { currentContent } = languageContext;
  const { sponsorsAndPartners } = currentContent.eegschool;

  const partnersSponsersData = [
    { image: "/assets/school/auc.png", alt: "AUC" },
    { image: "/assets/school/nyu.png", alt: "NYU" },
    { image: "/assets/school/simons.png", alt: "Simons Foundation" },
    { image: "/assets/school/ieee_sac.png", alt: "IEEE R8 SAC" },
    { image: "/assets/school/ibro.jpg", alt: "Ibro" },
    { image: "/assets/school/egyptscholars.png", alt: "Egypt Scholars" }
  ];

  return (
    <div className="lg:px-20 px-5 pb-10">
      <div className="text-2xl text-cN600 font-extrabold">
        <h1 className="py-10">{sponsorsAndPartners}</h1>
        <div className="lg:px-20 px-10 py-5 flex flex-wrap gap-10 lg:gap-20">
          {partnersSponsersData &&
            partnersSponsersData.map((item, itemIndex) => (
              <img
                key={itemIndex}
                src={item.image}
                alt={item.alt}
                className="md:w-1/4 w-full h-auto rounded-md"
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default PartnersSponsers;
