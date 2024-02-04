const addScrollListener = (ref, handleScroll) => {
    if (ref.current) {
      ref.current.addEventListener("scroll", handleScroll);
    }
  };
  
  const removeScrollListener = (ref, handleScroll) => {
    if (ref.current) {
      ref.current.removeEventListener("scroll", handleScroll);
    }
  };
  
  const scroll = (ref, scrollOffset) => {
    if (ref.current) {
      ref.current.scrollLeft += scrollOffset;
    }
  };
  
  export { addScrollListener, removeScrollListener, scroll };
  