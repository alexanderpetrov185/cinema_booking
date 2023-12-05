import React, {
  memo,
  useCallback,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import "./slider.scss";
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";

type Props = {
  slides: {
    url: string;
    title: string;
  }[];
};

const Slider = memo(({ slides }: Props) => {
  const slidesToRender = useMemo(
    () => [slides[slides.length - 1], ...slides, slides[0]],
    [slides],
  );

  const containerRef = useRef<HTMLDivElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [translateX, setTranslateX] = useState(0);

  const goToNext = useCallback(() => {
    if (containerRef.current && currentIndex >= 1) {
      containerRef.current.style.transitionDuration = "400ms";
    }
    if (currentIndex !== slidesToRender.length - 1)
      setCurrentIndex((state) => (state + 1) % slidesToRender.length);
  }, [currentIndex, slidesToRender.length]);

  const goToPrevious = useCallback(() => {
    if (containerRef.current && currentIndex <= slidesToRender.length - 2) {
      containerRef.current.style.transitionDuration = "400ms";
    }
    if (currentIndex !== 0)
      setCurrentIndex((state) => (state - 1) % slidesToRender.length);
  }, [currentIndex, slidesToRender.length]);

  const getSlidesContainerStyle = useCallback(() => {
    return {
      transform: `translateX(${-translateX}px)`,
    };
  }, [translateX]);

  useLayoutEffect(() => {
    if (containerRef.current) {
      setTranslateX(containerRef.current.clientWidth * currentIndex);
    }
  }, [currentIndex]);

  const handleTransition = () => {
    if (containerRef.current && currentIndex === 0) {
      containerRef.current.style.transitionDuration = "0ms";
      setCurrentIndex(slidesToRender.length - 2);
    }

    if (containerRef.current && currentIndex === slidesToRender.length - 1) {
      containerRef.current.style.transitionDuration = "0ms";
      setCurrentIndex(1);
    }
  };

  return (
    <div className="slider">
      <div
        onTransitionEnd={handleTransition}
        className="sliderContainer"
        ref={containerRef}
        style={getSlidesContainerStyle()}
      >
        {slidesToRender.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            className={"slideItem"}
            style={{
              backgroundImage: `url(${slide.url})`,
            }}
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
              // slideIndex === currentIndex ? "sliderDot Active" :
              "sliderDot"
            }
            key={slideIndex}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
});

export default Slider;
