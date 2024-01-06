import React, { memo, useCallback, useEffect, useMemo, useState } from "react";
import styles from "./slider.module.scss";
import useMeasure from "react-use-measure";
import { useSwipeable } from "react-swipeable";
import { mergeRefs } from "react-merge-refs";
import { ReactComponent as ArrowRight } from "../../static/icons/arrow-right.svg";
import { ReactComponent as ArrowLeft } from "../../static/icons/arrow-left.svg";

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

  const [ref, { width }] = useMeasure();
  const [currentIndex, setCurrentIndex] = useState(1);
  const [translateX, setTranslateX] = useState(
    document.documentElement.clientWidth * currentIndex,
  );
  const [transitionState, setTransitionState] = useState(false);
  const [isTransitionEnd, setIsTransitionEnd] = useState(true);

  const goToNext = useCallback(() => {
    setIsTransitionEnd(false);
    if (currentIndex >= 1) setTransitionState(true); //duplicate code
    setCurrentIndex((state) => (state + 1) % slidesToRender.length);
  }, [currentIndex, slidesToRender.length]);

  const goToPrevious = useCallback(() => {
    setIsTransitionEnd(false);
    if (currentIndex <= slidesToRender.length - 2) setTransitionState(true); //duplicate code
    setCurrentIndex((state) => (state - 1) % slidesToRender.length);
  }, [currentIndex, slidesToRender.length]);

  const goToSlide = useCallback(
    (slideIndex: number) => {
      if (currentIndex >= 1) setTransitionState(true); //duplicate code
      if (currentIndex <= slidesToRender.length - 2) setTransitionState(true); //duplicate code
      setIsTransitionEnd(false);
      setCurrentIndex(slideIndex);
    },
    [currentIndex, slidesToRender.length],
  );

  const getSlidesContainerStyle = useCallback(
    () => ({
      transform: `translateX(${-translateX}px)`,
      transition: `${transitionState ? "transform 0.5s ease-in-out" : false}`,
    }),
    [transitionState, translateX],
  );

  const handleTransition = () => {
    setIsTransitionEnd(true);
    if (currentIndex === 0) {
      setTransitionState(false);
      setCurrentIndex(slidesToRender.length - 2);
    }
    if (currentIndex === slidesToRender.length - 1) {
      setTransitionState(false);
      setCurrentIndex(1);
    }
  };

  useEffect(() => {
    //для того чтобы не было видно смещения при первом рендере
    if (width === 0) {
      return;
    }
    setTranslateX(width * currentIndex);
  }, [currentIndex, width]);

  //auto-slide
  useEffect(() => {
    const timer = setInterval(() => {
      goToNext();
    }, 5000);
    return () => clearInterval(timer);
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
    <div className={styles.slider}>
      <div
        onTransitionEnd={handleTransition}
        className={styles.sliderContainer}
        ref={mergeRefs([ref, refPassthrough])}
        style={getSlidesContainerStyle()}
      >
        {slidesToRender.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            className={styles.slideItem}
            style={{
              backgroundImage: `url(${slide.url})`,
            }}
          ></div>
        ))}
      </div>
      <button
        className={`${styles.sliderArrow} ${styles.arrowLeft}`}
        onClick={goToPrevious}
        disabled={!isTransitionEnd}
      >
        <ArrowLeft />
      </button>
      <button
        className={`${styles.sliderArrow} ${styles.arrowRight}`}
        onClick={goToNext}
        disabled={!isTransitionEnd}
      >
        <ArrowRight />
      </button>
      <div className={styles.sliderDots}>
        {slides.map((slide, slideIndex) => (
          <div
            className={
              slideIndex + 1 === currentIndex || //if the number of the current slide is equal to the currentIndex
              (slideIndex === 0 && //if we switch from the last slide to the first
                currentIndex === slidesToRender.length - 1) ||
              (slideIndex === slides.length - 1 && currentIndex === 0) //if we switch from the first slide to the last
                ? `${styles.sliderDot} ${styles.active}`
                : styles.sliderDot
            }
            key={slideIndex}
            onClick={() => goToSlide(slideIndex + 1)}
          />
        ))}
      </div>
    </div>
  );
});

export default Slider;
