import React from "react";

const ProgressBar = ({ loading }: { loading: boolean }) => {
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
    <div className={"progressBar"}>{/*<animated.div style={props} />*/}</div>
  );
};

export default ProgressBar;
