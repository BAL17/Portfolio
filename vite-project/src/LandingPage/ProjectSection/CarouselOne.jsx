import {useState} from 'react'
//IMPORTING IMGS FOR INSIGHT
import LoginPage from "../../assets/InsightLMS/LoginPage.png";
import AdminPage from "../../assets/InsightLMS/AdminPageLMS.png";
import StudentPage from "../../assets/InsightLMS/StudentPageLMS.png";
import TeacherPage from "../../assets/InsightLMS/TeacherPageLMS.png";
import RightArrow from "../../assets/ArrowRight.svg";
import LeftArrow from "../../assets/ArrowLeft.svg";

const CarouselOne = () => {

  const images = [
    LoginPage,
    AdminPage,
    StudentPage,
    TeacherPage,
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);


  const nextSlide = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="image-slider">
      <img
        src={images[currentImageIndex]}
        alt={`Slide ${currentImageIndex + 1}`}
        className="object-cover h-48 w-96"
        loading='lazy'
      />
      <div className="flex justify-between mt-1">
        <img onClick={prevSlide} src={LeftArrow}></img>
        <img onClick={nextSlide} src={RightArrow}></img>
      </div>
    </div>
  );
};

export default CarouselOne