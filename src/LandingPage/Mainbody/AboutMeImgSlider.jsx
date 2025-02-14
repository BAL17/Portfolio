import React, { useState } from 'react'
import RightArrow from "../../assets/BSRightArrow.svg";
import LeftArrow from "../../assets/BSLeftArrow.svg";
import ME from "../../assets/DSC_9918.jpg";
import ME2 from "../../assets/Brandon-Stegall-11182022-1.jpg";
import ME3 from "../../assets/IMG_4141.jpg";
import ME4 from "../../assets/IMG_4141-2.jpg";
import ME5 from "../../assets/IMG_4141-3.jpg";
import ME6 from "../../assets/IMG_4141-4.jpg";


const AboutMeImgSlider = () => {
 const images = [ME3, ME];

 const [currentImageIndex, setCurrentImageIndex] = useState(0);

 const nextSlide = () => {
   setCurrentImageIndex((currentImageIndex + 1) % images.length);
 };

 const prevSlide = () => {
   setCurrentImageIndex(
     (currentImageIndex - 1 + images.length) % images.length
   );
 };

    return (
      <>
        <img
          src={images[currentImageIndex]}
          alt={`Slide ${currentImageIndex + 1}`}
          className="w-full h-1/2 opacity-90"
        />

      </>
    );
}

export default AboutMeImgSlider