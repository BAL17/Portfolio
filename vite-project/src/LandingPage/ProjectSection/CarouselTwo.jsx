import { useState} from "react";
import RightArrow from "../../assets/ArrowRight.svg";
import LeftArrow from "../../assets/ArrowLeft.svg";
//import images for NVIDIA
import ARCH from "../../assets/Nvidia/architecture-screenshot.png";
import FEATURES from "../../assets/Nvidia/features-screenshot.png";
import PERF from "../../assets/Nvidia/performance-screenshot.png";
import SPLASH from "../../assets/Nvidia/VIDIA_splash.png";

const CarouselTwo = () => {
    const images = [SPLASH, PERF, ARCH, FEATURES];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
                className="object-cover h-48 w-96"
                loading="lazy"
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
