import React, {useState} from 'react';
import "./slider.scss"
import {ArrowBackIosOutlined, ArrowForwardIosOutlined} from "@mui/icons-material";

type Props = {
    slides: {
        url: string;
        title: string;
    }[]
}

const Slider = ({slides}: Props) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };
    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };
    const goToSlide = (slideIndex: number) => {
        setCurrentIndex(slideIndex);
    };
    const backgroundImg = {
        backgroundImage: `url(${slides[currentIndex].url})`,
    };


    return (
        <div className="slider">
            <div className="slideItem" style={backgroundImg}>
                <ArrowBackIosOutlined
                    className="sliderArrow left"
                    onClick={goToPrevious}
                />
                <ArrowForwardIosOutlined
                    className="sliderArrow right"
                    onClick={goToNext}
                />
            </div>
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
