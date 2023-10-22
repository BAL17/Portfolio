import React, { useState, useContext } from "react";
import RightArrow from "../../assets/BSRightArrow.svg";
import LeftArrow from "../../assets/BSLeftArrow.svg";
//import images for NVIDIA
import ARCH from "../../assets/Nvidia/architecture-screenshot.png";
import FEATURES from "../../assets/Nvidia/features-screenshot.png";
import PERF from "../../assets/Nvidia/performance-screenshot.png";
import SPLASH from "../../assets/Nvidia/VIDIA_splash.png";

const CarouselTwo = () => {
    const images = [SPLASH, PERF, ARCH, FEATURES];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const ImgStyling = {
      height: "20rem",
      width: "50rem",
    };

    const nextSlide = () => {
        setCurrentImageIndex((currentImageIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentImageIndex(
            (currentImageIndex - 1 + images.length) % images.length
        );
    }
      
        return (
            <>
                <div className="image-slider">
                    <img
                        src={images[currentImageIndex]}
                        alt={`Slide ${currentImageIndex + 1}`}
                        style={ImgStyling}
                    />
                    <div className="flex justify-between mt-1">
                        <img onClick={prevSlide} src={LeftArrow}></img>
                        <img onClick={nextSlide} src={RightArrow}></img>
                    </div>
                </div>
            </>
        );
    }


export default CarouselTwo
