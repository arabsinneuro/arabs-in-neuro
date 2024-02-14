import React from "react";
import { useContext } from "react";
import LanguageContext from "../../.././context/LanguageContext";

const Intro = () => {
  const languageContext = useContext(LanguageContext);
  const { preferredLanguage, currentContent } = languageContext;
  const isRTL = preferredLanguage == "ar" ? true : false;
  const {
    we,
    unlockBrainsPotential,
    missionStatement,
    innovateAndAdvance,
    innovationStatement,
    empowerThroughKnowledge,
    empowermentStatement,
  } = currentContent.home;

  const timelineItems = [
    {
      title: `${unlockBrainsPotential}`,
      description: `${missionStatement}`,
    },
    {
      title: `${innovateAndAdvance}`,
      description: `${innovationStatement}`,
    },
    {
      title: `${empowerThroughKnowledge}`,
      description: `${empowermentStatement}`,
    },
  ];

  return (
    <div className="py-10">
      <div className="flex justify-center items-center pb-10 font-extrabold text-4xl">
        <span className="text-black mr-2">{we}</span>
        <span className="text-cRed">AIN</span>
      </div>

      <div className="lg:grid grid-cols-4 w-full h-full">
        
        <div className="hidden lg:flex flex-col space-y-4">
          <img
            src="/assets/home/multipleLines1.svg"
            alt="Top"
            className="h-full"
          />
          <img
            src="/assets/home/multipleLines2.svg"
            alt="Bottom"
            className="h-full"
          />
        </div>

        
        <div className="lg:col-span-3 flex flex-col justify-between">
          {timelineItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-row justify-around items-center p-4"
            >
              
              <div className="flex flex-col justify-center items-center w-1/2">
                <h3 className="text-cGreen text-xl font-semibold">
                  {item.title}
                </h3>
              </div>

              <div className="lg:col-span-2 flex flex-row justify-start items-center">

              
              <div className="flex flex-col justify-between items-center ">
                <img src="/assets/home/arrowup.svg" alt="up arrow" className="lg:w-3/4 "/>
                <br/>
                <img src="/assets/home/arrowdown.svg" alt="down arrow"  className="lg:w-3/4 "/>
              </div>

             
              <div className="flex flex-col justify-center items-center lg:w-1/2">
                <div className="rounded-xl shadow-lg p-4">
                  <p className="text-sm">{item.description}</p>
                </div>
              </div>
            </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile View */}
      {/* <div className="lg:hidden grid grid-cols-2 w-full h-full">
        <div className="flex flex-col justify-between">
          {timelineItems.map((item, index) => (
            <div
              key={index}
              className="h-full flex items-center justify-center"
            >
              <h3 className="text-center text-cGreen text-lg font-semibold">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

        <div className="flex flex-col justify-between">
          {timelineItems.map((item, index) => (
            <div
              key={index}
              className="h-full flex items-center justify-center p-4"
            >
              <div className="rounded-xl shadow-lg p-4">
                <p className="text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default Intro;

// import React from "react";
// import { useContext } from "react";
// import LanguageContext from "../../.././context/LanguageContext";

// const Intro = () => {
//   const languageContext = useContext(LanguageContext);
//   const { preferredLanguage, currentContent } = languageContext;
//   const isRTL = preferredLanguage == "ar" ? true : false;
//   const {
//     we,
//     unlockBrainsPotential,
//     missionStatement,
//     innovateAndAdvance,
//     innovationStatement,
//     empowerThroughKnowledge,
//     empowermentStatement,
//   } = currentContent.home;

//   const timelineItems = [
//     {
//       title: `${unlockBrainsPotential}`,
//       description: `${missionStatement}`,
//     },
//     {
//       title: `${innovateAndAdvance}`,
//       description: `${innovationStatement}`,
//     },
//     {
//       title: `${empowerThroughKnowledge}`,
//       description: `${empowermentStatement}`,
//     },
//   ];
//   return (
//     <div className="py-10">
//       <div className="flex justify-center items-center pb-10 font-extrabold text-4xl">
//         <span className="text-black mr-2">{we}</span>
//         <span className="text-cRed">AIN</span>
//       </div>

//       {/* first column */}
//       <div className="hidden lg:grid grid-cols-4 w-full h-full">
//         <div className="flex flex-col space-y-4">
//           <img
//             src="/assets/home/multipleLines1.svg"
//             alt="Top"
//             className="h-1/2"
//           />
//           <img
//             src="/assets/home/multipleLines2.svg"
//             alt="Bottom"
//             className="h-1/2"
//           />
//         </div>

//        {/* second column */}

//         <div className="flex flex-col justify-between font-bold">
//           {timelineItems.map((item, index) => (
//             <div
//               key={index}
//               className="h-full flex items-center justify-center"
//             >
//               <h3 className="text-center text-cGreen text-lg font-semibold">
//                 {item.title}
//               </h3>
//             </div>
//           ))}
//         </div>

//         <div className="flex flex-col justify-between">
//           {timelineItems.map((item, index) => (
//             <div key={index} className="h-1/2 w-1/2">
//               <br />

//               <img src="/assets/home/arrowup.svg" alt="line" />
//               <br />
//               <img src="/assets/home/arrowdown.svg" alt="line" />
//             </div>
//           ))}
//         </div>

//         <div
//           className={` ${
//             isRTL ? "pl-10" : "pr-10"
//           } flex flex-col justify-between`}
//         >
//           {timelineItems.map((item, index) => (
//             <div
//               key={index}
//               className="h-full flex items-center justify-center p-4"
//             >
//               <div className="rounded-xl shadow-lg p-4">
//                 <p className="text-sm">{item.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="lg:hidden grid grid-cols-2 w-full h-full">
//         <div className="flex flex-col justify-between">
//           {timelineItems.map((item, index) => (
//             <div
//               key={index}
//               className="h-full flex items-center justify-center"
//             >
//               <h3 className="text-center text-cGreen text-lg font-semibold">
//                 {item.title}
//               </h3>
//             </div>
//           ))}
//         </div>

//         <div className="flex flex-col justify-between">
//           {timelineItems.map((item, index) => (
//             <div
//               key={index}
//               className="h-full flex items-center justify-center p-4"
//             >
//               <div className="rounded-xl shadow-lg p-4">
//                 <p className="text-sm">{item.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Intro;
