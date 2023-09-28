import React, {useState, useContext} from 'react'
import RightArrow from "../../assets/BSRightArrow.svg";
import LeftArrow from "../../assets/BSLeftArrow.svg";
import { ProjectContext } from "../../LandingPage/ProjectSection/ProjectContext";

//IMPORTING IMGS FOR INSIGHT
import LoginPage from "../../assets/InsightLMS/LoginPage.png";
import AdminPage from "../../assets/InsightLMS/AdminPageLMS.png";
import StudentPage from "../../assets/InsightLMS/StudentPageLMS.png";
import TeacherPage from "../../assets/InsightLMS/TeacherPageLMS.png";

const slides = [
  { image: LoginPage},
  { image: AdminPage},
  { image: StudentPage },
  { image: TeacherPage}
]
  

const CarouselOne = () => {
  const { currentImage } = useContext(ProjectContext);
  const currentIndex = currentImage.length

  //CSS STYLING START
  const sliderStyles = {
    height: '100%',
    position: 'relative',
  }
  const slideStyles = {
    backgroundImage:`${slides[currentIndex]}`,
    height: '100%',
    width: '100%',
    borderRadius: '10px',
    backgroundPosition: 'center',
    // backgroundsize: 'cover',
  }
  const leftArrowStyles = {}
  const rightArrowStyles = {}
  //CSS STYLING ENd
  
    return (
      <>
        <div style={sliderStyles}>
          <div className="flex" style={slideStyles}>
            {currentImage.map((slide, index) => {
              return (
                <img
                  key={index} // Add a unique key to each image
                  className="w-1/2 h-1/2"
                  src={slide.image}
                  alt="Insight logins"
                ></img>
              );
            })}
            ;
          </div>
          <img className="h-2 w-2" src={LeftArrow}></img>
          <img className="h-2 w-2" src={RightArrow}></img>
      </div>
        </>
    );
}

export default CarouselOne