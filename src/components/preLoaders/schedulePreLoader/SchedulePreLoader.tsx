import React, { memo } from "react";
import styles from "./schedulePreLoader.module.scss";
import { FallingLines } from "react-loader-spinner";

const SchedulePreLoader = memo(() => {
  return (
    <div className={styles.schedulePreLoader}>
      <FallingLines color="#6C43BF" width="100" visible={true} />
      <span>Загрузка...</span>
    </div>
  );
});

export default SchedulePreLoader;
