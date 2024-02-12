import LanguageContext from "@/context/LanguageContext";
import React, { useContext, useState } from "react";

const MaterialRow = ({ topic, tutorialLink, videoLink, slidesLink }) => {
  return (
    <tr className="border-b">
      <td className="p-4">{topic}</td>
      <td className="p-4">
        {tutorialLink && (
          <a href={tutorialLink} target="_blank" rel="noopener noreferrer">
            <img
              src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
              alt="Tutorial"
              className="w-16 h-12"
            />
          </a>
        )}
      </td>
      <td className="p-4">
        {videoLink && (
          <a href={videoLink} target="_blank" rel="noopener noreferrer">
            <img
              src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"
              alt="Video"
              className="w-16 h-12"
            />
          </a>
        )}
      </td>
      <td className="p-4">
        {slidesLink && (
          <a href={slidesLink} target="_blank" rel="noopener noreferrer">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Google_Drive_icon_%282020%29.svg/120px-Google_Drive_icon_%282020%29.svg.png"
              alt="Slides"
              className="w-12 h-12"
            />
          </a>
        )}
      </td>
    </tr>
  );
};

const CourseMaterials = ({
  courseMaterialsTitle,
  materialsData,
  welcomeVideoUrl,
}) => {
  const [showMoreButton, setShowMoreButton] = useState(false);
  const languageContext = useContext(LanguageContext);
  const { currentContent } = languageContext;
  const { topic, tutorial, video, slides, showLess, showMore, welcomeVideo } =
    currentContent.details;

  const toggleShowMore = () => setShowMoreButton(!showMoreButton);

  const displayedData = showMoreButton
    ? materialsData
    : materialsData && materialsData.slice(0, 3);

  return (
    <div className="lg:px-20 px-5">
      <h1 className="mt-20 mb-10 text-2xl text-cN600 font-extrabold">
        {courseMaterialsTitle}
      </h1>
      <div className="flex grid grid-cols-1 px-4">
        <div>
          <a
            href={welcomeVideoUrl}
            className="text-cGreen visited:text-cGreenDark hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {welcomeVideo}
          </a>
        </div>
        <div className="overflow-x-auto">
          <table className="text-left mt-6">
            <thead className="bg-cN100">
              <tr>
                <th className="p-4">{topic}</th>
                <th className="p-4">{tutorial}</th>
                <th className="p-4">{video}</th>
                <th className="p-4">{slides}</th>
              </tr>
            </thead>
            <tbody>
              {displayedData && displayedData.map((data, index) => (
                <MaterialRow
                  key={index}
                  topic={data.topic}
                  tutorialLink={data.tutorialLink}
                  videoLink={data.videoLink}
                  slidesLink={data.slidesLink}
                />
              ))}
              <tr>
                <td
                  colSpan="4"
                  className="p-4 text-center cursor-pointer text-cRed"
                  onClick={toggleShowMore}
                >
                  {showMoreButton ? showLess : showMore}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CourseMaterials;
