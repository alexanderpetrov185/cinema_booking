import React from "react";
import styles from "./about.module.scss";
import ComingSoon from "../../components/comingSoon/ComingSoon";

const About = () => {
  return (
    <div className={"about"}>
      About
      <ComingSoon />
    </div>
  );
};

export default About;
