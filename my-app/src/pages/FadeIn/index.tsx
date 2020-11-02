import React from "react";
import classNames from "classnames/bind";
import styles from "./FadeIn.module.css";
import useScrollFadeIn from "../../hooks/useScrollFadeIn";

const cx = classNames.bind(styles);

const FadeIn = () => {
  const animaitedItem = {
    //방향, 속도, 지연시간 (default : up,1,0)
    0: useScrollFadeIn("down", 1, 0),
    1: useScrollFadeIn("up", 1, 0.5),
  };

  return (
    <div className={cx("content")}>
      <span className={cx("box", "left")} {...animaitedItem[0]} />
      <span className={cx("box", "right")} {...animaitedItem[1]} />
    </div>
  );
};

export default function () {
  return <FadeIn />;
}
