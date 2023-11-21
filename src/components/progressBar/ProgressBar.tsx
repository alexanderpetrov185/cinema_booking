import React from "react";
import useMeasure from "react-use-measure";
import { animated, useTransition } from "@react-spring/web";

const ProgressBar = ({ loading }: { loading: boolean }) => {
  const [ref, { width }] = useMeasure();
  // const props = useSpring({
  //   from: { width: 0, height: 0 },
  //   to: {
  //     width: progress ? width : 0,
  //     height: progress ? 4 : 0,
  //     background: "hotpink",
  //     visibility: progress,
  //   },
  //   onRest: () => setIsProgress(false),
  // });

  // const props = useTransition({});

  return (
    <div ref={ref} className={"progressBar"}>
      {/*<animated.div style={props} />*/}
    </div>
  );
};

export default ProgressBar;
