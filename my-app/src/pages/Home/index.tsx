import React, { useRef } from "react";
import classNames from "classnames/bind";
import styles from "./Home.module.css";
import FadeIn from "../FadeIn";

const cx = classNames.bind(styles);

const Home = () => {
  const myRef = useRef();

  const scrollToRef = (current: HTMLDivElement) => {
    current.scrollIntoView({ behavior: "smooth" });
  };

  const executeScroll = () => {
    scrollToRef(myRef.current);
  };

  return (
    <div className={cx("App")}>
      <div className={cx("nav")}>
        <span onClick={executeScroll}>scrollToFadeIn</span>
      </div>

      <div className={cx("space")}>
        TEST
        <br />
        FADE IN PAGE
        <br />↓
      </div>
      <div ref={myRef} className={cx("content")}>
        <FadeIn />
      </div>
      <div className={cx("space")}></div>
    </div>
  );
};

export default function () {
  return <Home />;
}
