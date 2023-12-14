import React, { memo } from "react";
import "./preLoader.scss";
import { FallingLines } from "react-loader-spinner";

const PreLoader = memo(() => {
  return (
    <div className={"preLoader"}>
      <FallingLines color="#6C43BF" width="100" visible={true} />
      <span>Загрузка...</span>
    </div>
  );
});

export default PreLoader;
