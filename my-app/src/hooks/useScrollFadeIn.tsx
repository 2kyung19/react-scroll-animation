import { useRef, useEffect, useCallback } from "react";

const useScrollFadeIn = (direction = "up", duration = 1, delay = 0) => {
  const dom = useRef();

  const handleDirection = (direction: string) => {
    switch (direction) {
      case "up":
        return "translate3d(0, 50%, 0)";
      case "down":
        return "translate3d(0, -50%, 0)";
      case "left":
        return "translate3d(50%, 0, 0)";
      case "right":
        return "translate3d(-50%, 0, 0)";
      default:
        return;
    }
  };

  const onScroll = useCallback(
    ([entry]: IntersectionObserverEntry[]) => {
      const current: HTMLDivElement = dom.current;
      if (entry.isIntersecting) {
        console.log(current);
        current.style.transitionProperty = "all";
        current.style.transitionDuration = `${duration}s`;
        current.style.transitionTimingFunction = "cubic-bezier(0, 0, 0.2, 1)";
        current.style.transitionDelay = `${delay}s`;
        current.style.opacity = "1";
        current.style.transform = "translate3d(0, 0, 0)";
      }
    },
    [delay, duration],
  );

  useEffect(() => {
    let observer: IntersectionObserver;

    if (dom.current) {
      observer = new IntersectionObserver(onScroll, { threshold: 0.7 });
      observer.observe(dom.current);

      return () => observer && observer.disconnect();
    }
  }, [onScroll]);

  return {
    ref: dom,
    style: { opacity: 0, transform: handleDirection(direction) },
  };
};

export default useScrollFadeIn;
