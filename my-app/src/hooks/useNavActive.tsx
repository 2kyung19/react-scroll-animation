import { useEffect, useCallback, RefObject } from "react";

const useScrollFadeIn = (
  dom: RefObject<HTMLDivElement>,
  nav: RefObject<HTMLSpanElement>,
) => {
  const onScroll = useCallback(([entry]: IntersectionObserverEntry[]) => {
    const current: HTMLSpanElement = nav.current;
    if (entry.isIntersecting) {
      current.style.color = "#01C8F9";
    } else {
      current.style.color = "#fff";
    }
  }, []);

  useEffect(() => {
    if (dom.current) {
      const observer = new IntersectionObserver(onScroll, { threshold: 0.7 });
      observer.observe(dom.current);

      return () => observer && observer.disconnect();
    }
  }, [onScroll]);
};

export default useScrollFadeIn;
