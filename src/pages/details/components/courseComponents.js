import LanguageContext from "@/context/LanguageContext";
import { useContext } from "react";

const CourseDayComponent = ({ title, description, schedule }) => {
  const languageContext = useContext(LanguageContext);
  const { currentContent } = languageContext;
  const {
    timeHour, lecture
  } = currentContent.details;
  return (
    <div className="border border-cN200 overflow-hidden">
      <div className="bg-cRed text-cWhite p-2 flex justify-center items-center md:flex-row md:gap-2">
        <h2 className="text-center font-extrabold">{title}</h2>
      </div>

      <div className="md:flex md:flex-row md:divide-x divide-cN200">
        <div className="bg-cGreen text-cWhite text-sm p-2 md:w-96">
          <p>{description}</p>
        </div>

        <div className="bg-cWhite w-full">
          <table className="w-full text-center">
            <thead className="bg-cPink text-cWhite text-center">
              <tr>
                <th>{timeHour}</th>
                <th>{lecture}</th>
              </tr>
            </thead>
            <tbody>
              {schedule.map((item, index) => (
                <tr key={index} className="border-b">
                  <td className="p-2">{item.time}</td>
                  <td className="p-2">{item.lecture}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};




  const CourseDays = ({courseDays}) => {
 
    return (
      <div className="lg:px-20 px-5 space-y-10">
        {courseDays.map((courseDay, index) => (
          <CourseDayComponent
            key={index}
            title={courseDay.title}
            description={courseDay.description}
            schedule={courseDay.schedule}
          />
        ))}
      </div>
    );
  
}

export default CourseDays;



// const CourseDayComponent = ({ title, description, schedule }) => {
//     return (
//       <div className="flex border border-gray-200 overflow-hidden">
//         {/* Title Column with fixed width */}
//         <div className="w-64 bg-cRed text-cWhite p-2 flex justify-center items-center" >
//   <h2 className="text-center font-extrabold">{title}</h2>
// </div>

//         {/* Content Column */}
//         <div className="flex-1">
//           {/* Description Row */}
//           <div className="bg-cGreen text-white text-sm p-2">
//             <p>{description}</p>
//           </div>
//           {/* Schedule Row */}
//           <div className="bg-cPink text-cWhite text-sm font-extrabold p-2 grid grid-cols-2 text-center">
//             <div>Time (Hour)</div>
//             <div>Lecture</div>
//           </div>
//           {/* Data Rows */}
//           <div className="bg-cWhite pt-2">
//             <table className="w-full text-center">
//               <tbody>
//                 {schedule.map((item, index) => (
//                   <tr key={index} className="border-b">
//                     <td className="p-2">{item.time}</td>
//                     <td className="p-2">{item.lecture}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     );
//   };
  
//   export default CourseDayComponent;
  