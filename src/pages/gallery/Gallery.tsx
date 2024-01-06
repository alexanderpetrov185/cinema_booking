import React from "react";
import styles from "./gallery.module.scss";
import ComingSoon from "../../components/comingSoon/ComingSoon";

const Gallery = () => {
  return (
    <div className={"gallery"}>
      Gallery
      <ComingSoon />
    </div>
  );
};

export default Gallery;
