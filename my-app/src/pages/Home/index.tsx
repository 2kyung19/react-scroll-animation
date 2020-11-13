import React, { useRef } from "react";
import classNames from "classnames/bind";
import styles from "./Home.module.css";
import FadeIn from "../FadeIn";
import useNavActive from "../../hooks/useNavActive";

const cx = classNames.bind(styles);

const Home = () => {
  const myRef = useRef();
  const main = useRef();

  const nav1 = useRef();
  const nav2 = useRef();

  const scrollToRef = (current: HTMLDivElement) => {
    current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={cx("App")}>
      <div className={cx("nav")}>
        <span ref={nav1} onClick={() => scrollToRef(main.current)}>
          Main
        </span>
        &nbsp;&nbsp;&nbsp;
        <span ref={nav2} onClick={() => scrollToRef(myRef.current)}>
          scrollToFadeIn
        </span>
      </div>

      <div
        ref={main}
        className={cx("space", "navRef")}
        {...useNavActive(main, nav1)}
      >
        TEST
        <br />
        FADE IN PAGE
        <br />↓
      </div>
      <div
        ref={myRef}
        className={cx("content", "navRef")}
        {...useNavActive(myRef, nav2)}
      >
        <FadeIn />
      </div>
      <div className={cx("space")}></div>
    </div>
  );
};

export default function () {
  return <Home />;
}
