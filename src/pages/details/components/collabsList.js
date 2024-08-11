import React from "react";

const CollabsList = ({ collabsData, language }) => {
  return (
    <div className="lg:px-20 px-5">
      {collabsData &&
        collabsData.map((collab, index) => (
          <div
            key={index}
            className="mt-20 mb-5 text-2xl text-cN600 font-extrabold"
          >
            <h1>{collab.type[language]}</h1>
            <div className="lg:px-40 px-10 py-5">
              {collab.items &&
                collab.items.map((item, itemIndex) => (
                  <img
                    key={itemIndex}
                    src={item.image}
                    alt={item.alt}
                    className="md:w-1/3 lg:h-auto w-full h-full rounded-md mb-4"
                  />
                ))}
            </div>
          </div>
        ))}
    </div>
  );
};

export default CollabsList;
