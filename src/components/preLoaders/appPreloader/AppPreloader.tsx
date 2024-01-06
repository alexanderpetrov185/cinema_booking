import React from "react";
import { ThreeCircles } from "react-loader-spinner";
import { ReactComponent as Logo } from "../../../static/icons/logo.svg";
import styles from "./appPreloader.module.scss";

const AppPreloader = () => {
  return (
    <div className={styles.appPreloader}>
      <ThreeCircles color={"#6C43BF"} />
      <Logo className={styles.logo} />
    </div>
  );
};

export default AppPreloader;
