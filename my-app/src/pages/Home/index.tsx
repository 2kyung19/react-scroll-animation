import React from "react";
import classNames from "classnames/bind";
import styles from "./Home.module.css";
import FadeIn from "../FadeIn";

const cx = classNames.bind(styles);

const Home = () => {
  return (
    <div className={cx("App")}>
      <div className={cx("space")}>
        TEST
        <br />
        FADE IN PAGE
        <br />↓
      </div>
      <div className={cx("content")}>
        <FadeIn />
      </div>
      <div className={cx("space")}></div>
    </div>
  );
};

export default function () {
  return <Home />;
}
