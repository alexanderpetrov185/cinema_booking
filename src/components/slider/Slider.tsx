import React, {useState} from 'react';
import "./slider.scss"
import {ArrowBackIosOutlined, ArrowForwardIosOutlined} from "@mui/icons-material";
import {Link} from 'react-router-dom';
import {useSwipeable} from "react-swipeable";

type Props = {
    slides: {
        url: string;
        title: string;
    }[]
}

const Slider = ({slides}: Props) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitionEnd, setTransition] = useState(true)

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        isTransitionEnd && setCurrentIndex(newIndex);
        setTransition(false)
    };
    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        isTransitionEnd && setCurrentIndex(newIndex);
        setTransition(false)
    };
    const goToSlide = (slideIndex: number) => {
        isTransitionEnd && setCurrentIndex(slideIndex);
        setTransition(false)
    };
    const backgroundImg = {
        backgroundImage: `url(${slides[currentIndex].url})`,
    };

    const handleTransitionEvent = () => {
        setTransition(true)
    }

    React.useEffect(() => {
        const timer = setInterval(() => {
            goToNext();
        }, 5000);

        return () => clearInterval(timer);
    });

    const handlers = useSwipeable({onSwipedLeft: goToPrevious, onSwipedRight: goToNext})
    const myRef = React.useRef();

    const refPassthrough = (el: any) => {
        // call useSwipeable ref prop with el
        handlers.ref(el);

        // set myRef el so you can access it yourself
        myRef.current = el;
    }


    return (
        <div className="slider">
            <Link to={"/movieItem"}>
                <div className="slideItem" style={backgroundImg} onTransitionEnd={handleTransitionEvent}
                     ref={refPassthrough}/>
            </Link>
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
                    <div className={slideIndex === currentIndex ? "sliderDot Active" : "sliderDot"}
                         key={slideIndex}
                         onClick={() => goToSlide(slideIndex)}
                    >
                        ●
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Slider;
