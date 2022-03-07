import React, { useEffect, useState } from "react";
import useScrollPosition from "../hooks/useScrollPosition";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const scrollPosition = useScrollPosition();
  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  //scroll-to-top classes: fixed, bottom:0, right:0
  return (
    <div className="fixed z-10 w-24 h-24 transition-all duration-700 ease-in-out bottom-6 right-6 ">
      {/* {scrollPosition > 0 && (
        <a className="flex w-full h-full bg-white " onClick={scrollToTop}>
          <p className="text-black">Go up!</p>
        </a>
      )} */}
    </div>
  );
}
