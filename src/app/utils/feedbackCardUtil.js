import React, { useState } from 'react';

const useExpandedCard = () => {
  const [expandedCardIndex, setExpandedCardIndex] = useState(null);

  const handleCardClick = (index) => {
    setExpandedCardIndex(index === expandedCardIndex ? null : index);
  };

  return { expandedCardIndex, handleCardClick };
};

export default useExpandedCard;
