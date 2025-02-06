import { RefObject, useEffect, useRef } from "react";

const useScrollSnap = (): RefObject<HTMLDivElement | null> => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.style.scrollSnapType = "y mandatory";
      container.style.overflowY = "scroll";
      container.style.height = "100vh";
      container.style.scrollBehavior = "smooth"; // Enable smooth scrolling

      Array.from(container.children).forEach((child) => {
        const childElement = child as HTMLDivElement;
        childElement.style.scrollSnapAlign = "start";
        childElement.style.height = "100vh";
        childElement.style.transition = "transform 1s ease-in-out";
      });
    }
  }, []);

  return containerRef;
};

export default useScrollSnap;
