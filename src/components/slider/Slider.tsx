import React, { memo, useCallback, useState } from "react";
import "./slider.scss";
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";
import { useSwipeable } from "react-swipeable";

type Props = {
  slides: {
    url: string;
    title: string;
  }[];
};

const Slider = memo(({ slides }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDirectionRight, setDirectionRight] = useState(true);

  const goToPrevious = useCallback(() => {
    setDirectionRight(false);
    setCurrentIndex((state) => {
      if (state === 0) {
        return slides.length - 1;
      }
      return (state - 1) % slides.length;
    });
  }, [slides.length]);

  const goToNext = useCallback(() => {
    setDirectionRight(true);
    setCurrentIndex((state) => {
      return (state + 1) % slides.length;
    });
  }, [slides.length]);

  const goToSlide = useCallback(
    (slideIndex: number, currentIndex: number): void => {
      if (slideIndex !== currentIndex) {
        slideIndex > currentIndex
          ? setDirectionRight(true)
          : setDirectionRight(false);
        setCurrentIndex(slideIndex);
      }
    },
    [],
  );

  // //change slide every 5 seconds
  React.useEffect(() => {
    const timer = setInterval(() => {
      goToNext();
    }, 5000);

    return () => clearInterval(timer);
  });

  const getSlidesContainterStyle = () => ({
    // width: width * slides.length,
    // transform: `translateX(${-(currentIndex * width)})px`,
  });

  const getSlideStyles = (slidesIndex: number) => ({
    backgroundImage: `url(${slides[slidesIndex].url})`,
    // width: width,
  });

  //react Swipeable
  const handlers = useSwipeable({
    onSwipedLeft: goToPrevious,
    onSwipedRight: goToNext,
  });
  const myRef = React.useRef<HTMLDivElement | null>(null);

  const refPassthrough = (el: HTMLDivElement | null) => {
    handlers.ref(el);
    myRef.current = el;
  };

  return (
    <div className="slider">
      <div className="sliderContainer" style={getSlidesContainterStyle()}>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            className={"slideItem"}
            style={getSlideStyles(slideIndex)}
            ref={refPassthrough}
          ></div>
        ))}
      </div>
      <ArrowBackIosOutlined
        className="sliderArrow left"
        onClick={goToPrevious}
      />
      <ArrowForwardIosOutlined
        className="sliderArrow right"
        onClick={goToNext}
      />
      <div className="sliderDots">
        {slides.map((slide, slideIndex) => (
          <div
            className={
              slideIndex === currentIndex ? "sliderDot Active" : "sliderDot"
            }
            key={slideIndex}
            onClick={() => goToSlide(slideIndex, currentIndex)}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
});

export default Slider;

// import React, { memo, useCallback, useState } from "react";
// import "./slider.scss";
// import {
//   ArrowBackIosOutlined,
//   ArrowForwardIosOutlined,
// } from "@mui/icons-material";
// import { useSwipeable } from "react-swipeable";
// import { animated, config, useTransition } from "@react-spring/web";
//
// type Props = {
//   slides: {
//     url: string;
//     title: string;
//   }[];
// };
//
// const Slider = memo(({ slides }: Props) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isDirectionRight, setDirectionRight] = useState(true);
//
//   const goToPrevious = useCallback(() => {
//     setCurrentIndex((state) => {
//       setDirectionRight(false);
//       if (state === 0) {
//         return slides.length - 1;
//       }
//       return (state - 1) % slides.length;
//     });
//   }, [slides.length]);
//
//   const goToNext = useCallback(() => {
//     setCurrentIndex((state) => {
//       setDirectionRight(true);
//       return (state + 1) % slides.length;
//     });
//   }, [slides.length]);
//
//   const goToSlide = useCallback(
//       (slideIndex: number, currentIndex: number): void => {
//         if (slideIndex !== currentIndex) {
//           slideIndex > currentIndex
//               ? setDirectionRight(true)
//               : setDirectionRight(false);
//           setCurrentIndex(slideIndex);
//         }
//       },
//       [],
//   );
//
//   // //change slide every 5 seconds
//   // React.useEffect(() => {
//   //   const timer = setInterval(() => {
//   //     goToNext();
//   //   }, 5000);
//   //
//   //   return () => clearInterval(timer);
//   // });
//
//   const backgroundImg = {
//     backgroundImage: `url(${slides[currentIndex].url})`,
//   };
//
//   //react Swipeable
//   const handlers = useSwipeable({
//     onSwipedLeft: goToPrevious,
//     onSwipedRight: goToNext,
//   });
//   const myRef = React.useRef<HTMLDivElement | null>(null);
//
//   const refPassthrough = (el: HTMLDivElement | null) => {
//     handlers.ref(el);
//     myRef.current = el;
//   };
//
//   const transition = useTransition(currentIndex, {
//     keys: currentIndex,
//     // from: {
//     //   // opacity: 0,
//     //   transform: isDirectionRight
//     //     ? "translate3d(100%,0,0)"
//     //     : "translate3d(-100%,0,0)",
//     // },
//     enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
//     leave: { opacity: 1, transform: "translate3d(-100%,0,0)" },
//
//     // leave: {
//     //   // opacity: 0,
//     //   transform: isDirectionRight
//     //     ? "translate3d(-100%,0,0)"
//     //     : "translate3d(100%,0,0)",
//     // },
//     config: config.default,
//   });
//
//   return (
//       <div className="slider">
//         {transition((style) => (
//             <animated.div
//                 className={"slideItem"}
//                 style={{ ...style, ...backgroundImg }}
//                 ref={refPassthrough}
//             />
//         ))}
//         <ArrowBackIosOutlined
//             className="sliderArrow left"
//             onClick={goToPrevious}
//         />
//         <ArrowForwardIosOutlined
//             className="sliderArrow right"
//             onClick={goToNext}
//         />
//         <div className="sliderDots">
//           {slides.map((slide, slideIndex) => (
//               <div
//                   className={
//                     slideIndex === currentIndex ? "sliderDot Active" : "sliderDot"
//                   }
//                   key={slideIndex}
//                   onClick={() => goToSlide(slideIndex, currentIndex)}
//               >
//                 ●
//               </div>
//           ))}
//         </div>
//       </div>
//   );
// });
//
// export default Slider;
