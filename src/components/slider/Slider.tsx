import React, { memo, useCallback, useState } from "react";
import "./slider.scss";
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";
import { useSwipeable } from "react-swipeable";
import useMeasure from "react-use-measure";

type Props = {
  slides: {
    url: string;
    title: string;
  }[];
};

const Slider = memo(({ slides }: Props) => {
  const [ref, { width }] = useMeasure();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitionEnd, setTransition] = useState(true);

  const handleTransitionEvent = useCallback(() => {
    setTransition(true);
  }, []);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((state) => {
      if (state === 0) {
        return slides.length - 1;
      }
      return (state - 1) % slides.length;
    });
    setTransition(false);
  }, [slides.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((state) => {
      return (state + 1) % slides.length;
    });
    setTransition(false);
  }, [slides.length]);

  const goToSlide = useCallback(
    (slideIndex: number, currentIndex: number): void => {
      if (slideIndex !== currentIndex) {
        setCurrentIndex(slideIndex);
        setTransition(false);
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

  const getSlidesContainerStyle = () => ({
    width: `${width * slides.length}px`,
    transform: `translateX(${-(currentIndex * width)}px)`,
  });

  const getSlideStyles = (slidesIndex: number) => ({
    backgroundImage: `url(${slides[slidesIndex].url})`,
    width: `${width}px`,
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
    <div className="slider" ref={ref}>
      <div
        className="sliderContainer"
        style={getSlidesContainerStyle()}
        onTransitionEnd={handleTransitionEvent}
      >
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
        style={!isTransitionEnd ? { pointerEvents: "none" } : {}}
      />
      <ArrowForwardIosOutlined
        className="sliderArrow right"
        onClick={goToNext}
        style={!isTransitionEnd ? { pointerEvents: "none" } : {}}
      />
      <div className="sliderDots">
        {slides.map((slide, slideIndex) => (
          <div
            className={
              slideIndex === currentIndex ? "sliderDot Active" : "sliderDot"
            }
            key={slideIndex}
            onClick={() => goToSlide(slideIndex, currentIndex)}
            style={!isTransitionEnd ? { pointerEvents: "none" } : {}}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
});

export default Slider;
