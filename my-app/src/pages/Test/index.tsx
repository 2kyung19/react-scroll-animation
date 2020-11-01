import React from "react";
import classNames from "classnames/bind";
import styles from "./Test.module.css";

const cx = classNames.bind(styles);

export default function Test() {
  return <div className={cx("text")}>hello world!</div>;
}
