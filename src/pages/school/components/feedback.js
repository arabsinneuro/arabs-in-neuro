import React, { useState, useEffect, useContext, useRef } from "react";
import LanguageContext from "@/context/LanguageContext";
import ScrollButtons from "./scrollButtons";
import fetchData from "../../../app/utils/fetchData";
import { addScrollListener, removeScrollListener, scroll } from "../../../app/utils/scrollUtils";
import useExpandedCard from "../../../app/utils/feedbackCardUtil";

const Feedback = () => {
  const languageContext = useContext(LanguageContext);
  const { currentContent } = languageContext;
  const { participantsFeedbacks } = currentContent.school;

  const scrollRef = useRef(null);

  const [feedbackList, setFeedbackList] = useState([]);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const fetchDataAndSetState = async () => {
      const data = await fetchData("/data/feedback/feedback.json");
      if (data) {
        setFeedbackList(data.feedbackList);
      }
    };

    fetchDataAndSetState();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(scrollRef.current.scrollLeft);
    };

    addScrollListener(scrollRef, handleScroll);

    return () => {
      removeScrollListener(scrollRef, handleScroll);
    };
  }, []);

  const { expandedCardIndex, handleCardClick } = useExpandedCard();

  const isLeftDisabled = scrollPosition === 0;
  const isRightDisabled =
    scrollPosition !== 0 &&
    scrollRef.current &&
    scrollPosition + scrollRef.current.offsetWidth >=
      scrollRef.current.scrollWidth;

  return (
    <div className="p-10 lg:p-20">
      <div className="flex items-center mb-20">
        <h1 className="text-2xl text-cN600 font-extrabold ">{participantsFeedbacks}</h1>

        <ScrollButtons
          onScrollLeft={() => scroll(scrollRef, -200)}
          onScrollRight={() => scroll(scrollRef, 200)}
          isLeftDisabled={isLeftDisabled}
          isRightDisabled={isRightDisabled}
        />
      </div>

      <div
        className="flex overflow-x-scroll space-x-4 w-full"
        ref={scrollRef}
        style={{
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {feedbackList &&
          feedbackList.map((feedback, index) => (
            <div
              key={index}
              className={`flex-none bg-cGreen w-60 h-70 p-4 rounded-md text-cWhite ${
                index === expandedCardIndex ? "expanded-card" : ""
              }`}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
              onClick={() => handleCardClick(index)}
            >
              {index !== expandedCardIndex ? (
                <>
                  <div
                    className="text-sm font-semibold overflow-hidden"
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 5,
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    {feedback.feedback}
                  </div>
                </>
              ) : (
                <div className="expanded-content">
                  <p className="expanded-feedback">{feedback.feedback}</p>
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Feedback;
