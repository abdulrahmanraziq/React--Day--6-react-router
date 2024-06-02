import { useState } from "react";
import NavbarFilter from "./component/NavbarFilter";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllImage from "./component/AllImage";
import FullStackDevelopment from "./component/FullStackDevelopment";
import DataScience from "./component/DataScience";
import CyberSecurity from "./component/CyberSecurity";
import Carrer from "./component/Carrer";
function App() {

  const AllData = [
    {
      id: 1,
      title: "Best Full-Stack Development Project Ideas in 2024",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/07/person-front-computer-working-html.jpg",
    },

    {
      id: 2,
      title: "How Long Would It Take to Be a Full Stack Developer? ",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/07/how-long-it-would-it-take-to-learn-full-stack-development_-2048x1072.webp",
    },
    {
      id: 3,
      title: "How does Apache work? A detailed introduction to Apache",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/02/1_6rDcIgFJQldloIERiUSmzw.png",
    },
    {
      id: 4,
      title: "10 Best Database Management Systems For Software Developers",
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/02/DBMS1.png",
    },

    {
      id: 5,
      title:
        "Hot Topics That You Need To Know In Full Stack Developer Syllabus | 2024 ",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2021/09/Full-Stack-Developer-course-syllabus.png",
    },
    {
      id: 6,
      title: "6 Essential Prerequisites For Learning ReactJS ",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2021/05/react-768x402.jpg",
    },
    {
      id: 7,
      title: "Top 10 High Paying Non-Coding Jobs in Data Science in 2024",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp",
    },

    {
      id: 8,
      title: "12 Real-World Data Science Examples: Power Of Data Science",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/07/Real-World-Data-Science-Examples-2048x1072.webp",
    },
    {
      id: 9,
      title: "Can A Commerce Student Do Data Science?",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2022/06/5.-data-science-2048x1072.png",
    },
    {
      id: 10,
      title: "Top Product-Based Companies for Data Scientists in 2024",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Top-Product-Based-Companies-for-Data-Scientists.webp",
    },

    {
      id: 11,
      title: "Roles and Responsibilities of a Data Scientist",
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/07/image-4.png",
    },
    {
      id: 12,
      title: "How Long Would It Take to Learn Data Science?",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/08/How-Long-Would-It-Take-to-Learn-Data-Science-2048x1072.png",
    },

    {
      id: 13,
      title: "Cybersecurity Vs Ethical Hacking: Top 10 Differences ",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2022/12/Yellow-Blue-Illustration-Business-Blog-Banner-2048x1152.png",
    },

    {
      id: 14,
      title: "Non-Coding Jobs in Cybersecurity: A Comprehensive Guide",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp",
    },
    {
      id: 15,
      title: "What Is Hacking? Types of Hacking",
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp",
    },
    {
      id: 16,
      title: "8 Different Types of Cybersecurity and Threats Involved ",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2022/11/Teal-Illustration-Digital-Business-Blog-Banner-1-2048x1152.png",
    },

    {
      id: 17,
      title:
        "What is Cybersecurity? Importance and its uses &amp; the growing challenge...",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2022/12/cybersecuity-.gif",
    },
    {
      id: 18,
      title:
        "Is coding required for cybersecurity? If yes, how crucial is coding for cyb... ",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/11/Top-10-Non-Coding-Jobs-in-DevOps.png",
    },
    {
      id: 19,
      title: "10 Best DevOps Project Ideas for 2024",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/07/DevOps-Project-Ideas-2048x1072.webp",
    },

    {
      id: 20,
      title: "9 Best YouTube Channels to Learn DevOps from Scratch",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/07/feature-image-Best-YouTube-Channels-to-Learn-DevOps-from-Scratch.jpg",
    },
    {
      id: 21,
      title: "How Long Will It Take to Learn DevOps?",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/08/Featured-image-Best-Way-to-Learn-DevOps-2048x1072.webp",
    },
    {
      id: 22,
      title: "Top 16 Product-Based Companies for DevOps Engineers in India",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-Product-Based-Companies-for-DevOps-Engineers-in-India.webp",
    },

    {
      id: 23,
      title: "As a Software Engineer, How Do I Shift My Career to DevOps?",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/05/2202.i402.018.S.m004.c13.Devops-engineer-flat-composition-2048x1575.jpg",
    },
    {
      id: 24,
      title: "Top High-Paying Non-Coding Jobs in DevOps [2024]",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/11/Top-10-Non-Coding-Jobs-in-DevOps.png",
    },

  ]
  const fullStackDevelopment = [
    {
      id: 1,
      title: "Best Full-Stack Development Project Ideas in 2024",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/07/person-front-computer-working-html.jpg",
    },

    {
      id: 2,
      title: "How Long Would It Take to Be a Full Stack Developer? ",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/07/how-long-it-would-it-take-to-learn-full-stack-development_-2048x1072.webp",
    },
    {
      id: 3,
      title: "How does Apache work? A detailed introduction to Apache",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/02/1_6rDcIgFJQldloIERiUSmzw.png",
    },
    {
      id: 4,
      title: "10 Best Database Management Systems For Software Developers",
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/02/DBMS1.png",
    },

    {
      id: 5,
      title:
        "Hot Topics That You Need To Know In Full Stack Developer Syllabus | 2024 ",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2021/09/Full-Stack-Developer-course-syllabus.png",
    },
    {
      id: 6,
      title: "6 Essential Prerequisites For Learning ReactJS ",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2021/05/react-768x402.jpg",
    },
  ];

  const dataScience = [
    {
      id: 1,
      title: "Top 10 High Paying Non-Coding Jobs in Data Science in 2024",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp",
    },

    {
      id: 2,
      title: "12 Real-World Data Science Examples: Power Of Data Science",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/07/Real-World-Data-Science-Examples-2048x1072.webp",
    },
    {
      id: 3,
      title: "Can A Commerce Student Do Data Science?",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2022/06/5.-data-science-2048x1072.png",
    },
    {
      id: 4,
      title: "Top Product-Based Companies for Data Scientists in 2024",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Top-Product-Based-Companies-for-Data-Scientists.webp",
    },

    {
      id: 5,
      title: "Roles and Responsibilities of a Data Scientist",
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/07/image-4.png",
    },
    {
      id: 6,
      title: "How Long Would It Take to Learn Data Science?",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/08/How-Long-Would-It-Take-to-Learn-Data-Science-2048x1072.png",
    },
  ];

  const cyberSecurity = [
    {
      id: 1,
      title: "Cybersecurity Vs Ethical Hacking: Top 10 Differences ",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2022/12/Yellow-Blue-Illustration-Business-Blog-Banner-2048x1152.png",
    },

    {
      id: 2,
      title: "Non-Coding Jobs in Cybersecurity: A Comprehensive Guide",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp",
    },
    {
      id: 3,
      title: "What Is Hacking? Types of Hacking",
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp",
    },
    {
      id: 4,
      title: "8 Different Types of Cybersecurity and Threats Involved ",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2022/11/Teal-Illustration-Digital-Business-Blog-Banner-1-2048x1152.png",
    },

    {
      id: 5,
      title:
        "What is Cybersecurity? Importance and its uses &amp; the growing challenge...",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2022/12/cybersecuity-.gif",
    },
    {
      id: 6,
      title:
        "Is coding required for cybersecurity? If yes, how crucial is coding for cyb... ",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/11/Top-10-Non-Coding-Jobs-in-DevOps.png",
    },
  ];

  const deveops = [
    {
      id: 1,
      title: "10 Best DevOps Project Ideas for 2024",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/07/DevOps-Project-Ideas-2048x1072.webp",
    },

    {
      id: 2,
      title: "9 Best YouTube Channels to Learn DevOps from Scratch",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/07/feature-image-Best-YouTube-Channels-to-Learn-DevOps-from-Scratch.jpg",
    },
    {
      id: 3,
      title: "How Long Will It Take to Learn DevOps?",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/08/Featured-image-Best-Way-to-Learn-DevOps-2048x1072.webp",
    },
    {
      id: 4,
      title: "Top 16 Product-Based Companies for DevOps Engineers in India",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-Product-Based-Companies-for-DevOps-Engineers-in-India.webp",
    },

    {
      id: 5,
      title: "As a Software Engineer, How Do I Shift My Career to DevOps?",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/05/2202.i402.018.S.m004.c13.Devops-engineer-flat-composition-2048x1575.jpg",
    },
    {
      id: 6,
      title: "Top High-Paying Non-Coding Jobs in DevOps [2024]",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/11/Top-10-Non-Coding-Jobs-in-DevOps.png",
    },
  ];
  return (
    <>
      <BrowserRouter>
        <NavbarFilter></NavbarFilter>
        <Routes>
          <Route exact path="all" element={<AllImage AllData={AllData}></AllImage>}></Route>
          <Route
            path="fullStackDevelopment"
            element={
              <FullStackDevelopment
                fullStackDevelopment={fullStackDevelopment}
              ></FullStackDevelopment>
            }
          ></Route>
          <Route
            path="dataScience"
            element={<DataScience dataScienceData={dataScience}></DataScience>}
          ></Route>
          <Route
            path="cyberSecurity"
            element={
              <CyberSecurity cyberSecurityData={cyberSecurity}></CyberSecurity>
            }
          ></Route>
          <Route path="carrer" element={<Carrer deveops={deveops}></Carrer>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
