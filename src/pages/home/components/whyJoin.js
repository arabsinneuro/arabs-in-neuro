import React, { useContext, useEffect, useRef, useState } from "react";
import LanguageContext from "../../.././context/LanguageContext";

const WhyJoin = () => {
  const languageContext = useContext(LanguageContext);
  const { currentContent } = languageContext;

  const {
    whyJoin,
    empoweringEducation,
    empoweringEducationDescription,
    communityEngagement,
    communityEngagementDescription,
    certificationRecognition,
    certificationRecognitionDescription,
    continuousSupport,
    continuousSupportDescription
  } = currentContent.home;

  const data = [
    {
      illustration: "/assets/home/illustration1.svg",
      title: `${empoweringEducation}`,
      description: `${empoweringEducationDescription}`,
    },
    {
      illustration: "/assets/home/illustration2.svg",
      title: `${communityEngagement}`,
      description: `${communityEngagementDescription}`,
    },
    {
      illustration: "/assets/home/illustration3.svg",
      title: `${continuousSupport}`,
      description: `${continuousSupportDescription}`,
    },
    {
      illustration: "/assets/home/illustration4.svg",
      title: `${certificationRecognition}`,
      description: `${certificationRecognitionDescription}`,
    },
  ];

  const [isIntersecting, setIsIntersecting] = useState(false);
  const widgetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isIntersecting) {
            setIsIntersecting(true);
          }
        });
      },
      {
        root: null, 
        rootMargin: '0px', 
        threshold: 0.2, 
      }
    );

    if (widgetRef.current) {
      observer.observe(widgetRef.current);
    }

    return () => {
      if (widgetRef.current) {
        observer.unobserve(widgetRef.current);
      }
    };
  }, [widgetRef, isIntersecting]);

  return (
    <div ref={widgetRef} className="py-10 lg:px-20 px-5 ">
      <h1 className="text-cBlack font-extrabold text-4xl text-center">
        {whyJoin} <span className="text-cRed"> AiN</span>{" "}
      </h1>
      <div className="mt-10 grid grid-cols-1 lg:px-20">
        {data &&
          data.map((item, index) => (
            <div
              key={index}
              
              className={`shadow-lg rounded-3xl lg:max-w-[60%] ${
                index % 2 === 0 ? "lg:mr-auto " : "lg:ml-auto "
              } grid grid-cols-4 gap-4 py-5 ${isIntersecting ? (index % 2 === 0 ? "animate-slide-in-left" : "animate-slide-in-right") : ""}`}
            >
              {index % 2 === 0 && (
                <div className="col-span-1">
                  <img
                    src={item.illustration}
                    alt="illustration"
                    className="overflow-visible bottom-0 w-32 h-32 md:w-40 md:h-40 object-cover"
                  />
                </div>
              )}

              <div className="col-span-3 flex flex-col justify-center py-5 lg:px-5 px-1">
                <h2 className="text-cBlack font-extrabold text-2xl mb-4">
                  {item.title}
                </h2>
                <p className="text-cBlack">{item.description}</p>
              </div>

              {index % 2 !== 0 && (
                <div className="col-span-1">
                  <img
                    src={item.illustration}
                    alt="illustration"
                    className="overflow-visible bottom-0 w-32 h-32 md:w-40 md:h-40 object-cover"
                  />
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default WhyJoin;


// import React from "react";
// import { useContext } from "react";
// import LanguageContext from "../../.././context/LanguageContext";

// const WhyJoin = () => {
//   const languageContext = useContext(LanguageContext);
//   const { currentContent } = languageContext;

//   const {
//     whyJoin,
//     empoweringEducation,
//     empoweringEducationDescription,
//     communityEngagement,
//     communityEngagementDescription,
//     certificationRecognition,
//     certificationRecognitionDescription,
//     continuousSupport,
//     continuousSupportDescription
//   } = currentContent.home;

//   const data = [
//     {
//       illustration: "/assets/home/illustration1.svg",
//       title: `${empoweringEducation}`,
//       description: `${empoweringEducationDescription}`,
//     },
//     {
//       illustration: "/assets/home/illustration2.svg",
//       title: `${communityEngagement}`,
//       description: `${communityEngagementDescription}`,
//     },
//     {
//       illustration: "/assets/home/illustration3.svg",
//       title: `${continuousSupport}`,
//       description: `${continuousSupportDescription}`,
//     },
//     {
//       illustration: "/assets/home/illustration4.svg",
//       title: `${certificationRecognition}`,
//       description: `${certificationRecognitionDescription}`,
//     },
//   ];

//   return (
//     <div className="py-10 lg:px-20 px-5 ">
//       <h1 className="text-cBlack font-extrabold text-4xl text-center">
//         {whyJoin} <span className="text-cRed"> AiN</span>{" "}
//       </h1>
//       <div className="mt-10 grid grid-cols-1 lg:px-20">
//         {data &&
//           data.map((item, index) => (
//             <div
//               key={index}
//               className={`shadow-lg rounded-3xl lg:max-w-[60%] ${
//                 index % 2 === 0 ? "lg:mr-auto  animate-slide-in-left" : "lg:ml-auto  animate-slide-in-right"
//               } grid grid-cols-4 gap-4 py-5`}
//             >
//               {index % 2 === 0 && (
//                 <div className="col-span-1">
//                   <img
//                     src={item.illustration}
//                     alt="illustration"
//                     className="overflow-visible bottom-0 w-32 h-32 md:w-40 md:h-40 object-cover"
//                   />
//                 </div>
//               )}

//               <div className="col-span-3 flex flex-col justify-center py-5 lg:px-5 px-1">
//                 <h2 className="text-cBlack font-extrabold text-2xl mb-4">
//                   {item.title}
//                 </h2>
//                 <p className="text-cBlack">{item.description}</p>
//               </div>

//               {index % 2 !== 0 && (
//                 <div className="col-span-1">
//                   <img
//                     src={item.illustration}
//                     alt="illustration"
//                     className="overflow-visible bottom-0 w-32 h-32 md:w-40 md:h-40 object-cover"
//                   />
//                 </div>
//               )}
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// };

// export default WhyJoin;
