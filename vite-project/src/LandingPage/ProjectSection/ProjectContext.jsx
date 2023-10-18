// import React, { createContext, useState, useEffect, useContext} from "react";
// import { useNavigate } from "react-router-dom";

// //IMPORTING IMGS FOR INSIGHT
// import LoginPage from "../../assets/InsightLMS/LoginPage.png";
// import AdminPage from "../../assets/InsightLMS/AdminPageLMS.png";
// import StudentPage from "../../assets/InsightLMS/StudentPageLMS.png";
// import TeacherPage from "../../assets/InsightLMS/TeacherPageLMS.png";

// //create context here
// export const ProjectContext = createContext();

// export const ProjectProvider = ({ children }) => {
//   //usestate for insight
//       const [currentImage, setCurrentImage] = useState([
//         { image: LoginPage },
//         { image: AdminPage },
//         { image: StudentPage },
//         { image: TeacherPage },
//       ]);

//   //   const navigate = useNavigate();

//   return (
//     <ProjectContext.Provider
//       value={{
//         currentImage,
//         setCurrentImage,
//       }}
//     >
//       {children}
//     </ProjectContext.Provider>
//   );
// };

// export default ProjectContext;
