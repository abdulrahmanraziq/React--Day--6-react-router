import { useState } from "react";
import NavbarFilter from "./component/NavbarFilter";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllImage from "./component/AllImage";
import FullStackDevelopment from "./component/FullStackDevelopment";
import DataScience from "./component/DataScience";
import CyberSecurity from "./component/CyberSecurity";
import Carrer from "./component/Carrer";
import {
  bestFullStackDevelopment,
  fullStackDevelopment2,
  fullStackDevelopment3,
  fullStackDevelopment4,
  fullStackDevelopment5,
  fullStackDevelopment6,
  dataScience1,
  dataScience2,
  dataScience3,
  dataScience4,
  dataScience5,
  dataScience6,
  cyberSecurity1,
  cybersecuity2,
  cybersecuity3,
  cybersecuity4,
  cybersecuity5,
  cybersecuity6,
  deveops1,
  deveops2,
  deveops3,
  deveops4,
  deveops5,
  deveops6,
} from "./assets/image";

function App() {
  const AllData = [
    {
      id: 1,
      title: "Best Full-Stack Development Project Ideas in 2024",
      image: bestFullStackDevelopment,
    },

    {
      id: 2,
      title: "How Long Would It Take to Be a Full Stack Developer? ",
      image: fullStackDevelopment2,
    },
    {
      id: 3,
      title: "How does Apache work? A detailed introduction to Apache",
      image: fullStackDevelopment3,
    },
    {
      id: 4,
      title: "10 Best Database Management Systems For Software Developers",
      image: fullStackDevelopment4,
    },

    {
      id: 5,
      title:
        "Hot Topics That You Need To Know In Full Stack Developer Syllabus | 2024 ",
      image: fullStackDevelopment5,
    },
    {
      id: 6,
      title: "6 Essential Prerequisites For Learning ReactJS ",
      image: fullStackDevelopment6,
    },
    {
      id: 7,
      title: "Top 10 High Paying Non-Coding Jobs in Data Science in 2024",
      image: dataScience1,
    },

    {
      id: 8,
      title: "12 Real-World Data Science Examples: Power Of Data Science",
      image: dataScience2,
    },
    {
      id: 9,
      title: "Can A Commerce Student Do Data Science?",
      image: dataScience3,
    },
    {
      id: 10,
      title: "Top Product-Based Companies for Data Scientists in 2024",
      image: dataScience4,
    },

    {
      id: 11,
      title: "Roles and Responsibilities of a Data Scientist",
      image: dataScience5,
    },
    {
      id: 12,
      title: "How Long Would It Take to Learn Data Science?",
      image: dataScience6,
    },

    {
      id: 13,
      title: "Cybersecurity Vs Ethical Hacking: Top 10 Differences ",
      image: cyberSecurity1,
    },

    {
      id: 14,
      title: "Non-Coding Jobs in Cybersecurity: A Comprehensive Guide",
      image: cybersecuity2,
    },
    {
      id: 15,
      title: "What Is Hacking? Types of Hacking",
      image: cybersecuity3,
    },
    {
      id: 16,
      title: "8 Different Types of Cybersecurity and Threats Involved ",
      image: cybersecuity4,
    },

    {
      id: 17,
      title:
        "What is Cybersecurity? Importance and its uses &amp; the growing challenge...",
      image: cybersecuity5,
    },
    {
      id: 18,
      title:
        "Is coding required for cybersecurity? If yes, how crucial is coding for cyb... ",
      image: cybersecuity6,
    },
    {
      id: 19,
      title: "10 Best DevOps Project Ideas for 2024",
      image: deveops1,
    },

    {
      id: 20,
      title: "9 Best YouTube Channels to Learn DevOps from Scratch",
      image: deveops2,
    },
    {
      id: 21,
      title: "How Long Will It Take to Learn DevOps?",
      image: deveops3,
    },
    {
      id: 22,
      title: "Top 16 Product-Based Companies for DevOps Engineers in India",
      image: deveops4,
    },

    {
      id: 23,
      title: "As a Software Engineer, How Do I Shift My Career to DevOps?",
      image: deveops5,
    },
    {
      id: 24,
      title: "Top High-Paying Non-Coding Jobs in DevOps [2024]",
      image: deveops6,
    },
  ];
  const fullStackDevelopment = [
    {
      id: 1,
      title: "Best Full-Stack Development Project Ideas in 2024",
      image: bestFullStackDevelopment,
    },

    {
      id: 2,
      title: "How Long Would It Take to Be a Full Stack Developer? ",
      image: fullStackDevelopment2,
    },
    {
      id: 3,
      title: "How does Apache work? A detailed introduction to Apache",
      image: fullStackDevelopment3,
    },
    {
      id: 4,
      title: "10 Best Database Management Systems For Software Developers",
      image: fullStackDevelopment4,
    },

    {
      id: 5,
      title:
        "Hot Topics That You Need To Know In Full Stack Developer Syllabus | 2024 ",
      image: fullStackDevelopment5,
    },
    {
      id: 6,
      title: "6 Essential Prerequisites For Learning ReactJS ",
      image: fullStackDevelopment6,
    },
  ];

  const dataScience = [
    {
      id: 1,
      title: "Top 10 High Paying Non-Coding Jobs in Data Science in 2024",
      image: dataScience1,
    },

    {
      id: 2,
      title: "12 Real-World Data Science Examples: Power Of Data Science",
      image: dataScience2,
    },
    {
      id: 3,
      title: "Can A Commerce Student Do Data Science?",
      image: dataScience3,
    },
    {
      id: 4,
      title: "Top Product-Based Companies for Data Scientists in 2024",
      image: dataScience4,
    },

    {
      id: 5,
      title: "Roles and Responsibilities of a Data Scientist",
      image: dataScience5,
    },
    {
      id: 6,
      title: "How Long Would It Take to Learn Data Science?",
      image: dataScience6,
    },
  ];

  const cyberSecurity = [
    {
      id: 1,
      title: "Cybersecurity Vs Ethical Hacking: Top 10 Differences ",
      image: cyberSecurity1,
    },

    {
      id: 2,
      title: "Non-Coding Jobs in Cybersecurity: A Comprehensive Guide",
      image: cybersecuity2,
    },
    {
      id: 3,
      title: "What Is Hacking? Types of Hacking",
      image: cybersecuity3,
    },
    {
      id: 4,
      title: "8 Different Types of Cybersecurity and Threats Involved ",
      image: cybersecuity4,
    },

    {
      id: 5,
      title:
        "What is Cybersecurity? Importance and its uses &amp; the growing challenge...",
      image: cybersecuity5,
    },
    {
      id: 6,
      title:
        "Is coding required for cybersecurity? If yes, how crucial is coding for cyb... ",
      image: cybersecuity6,
    },
  ];

  const deveops = [
    {
      id: 1,
      title: "10 Best DevOps Project Ideas for 2024",
      image: deveops1,
    },

    {
      id: 2,
      title: "9 Best YouTube Channels to Learn DevOps from Scratch",
      image: deveops2,
    },
    {
      id: 3,
      title: "How Long Will It Take to Learn DevOps?",
      image: deveops3,
    },
    {
      id: 4,
      title: "Top 16 Product-Based Companies for DevOps Engineers in India",
      image: deveops4,
    },

    {
      id: 5,
      title: "As a Software Engineer, How Do I Shift My Career to DevOps?",
      image: deveops5,
    },
    {
      id: 6,
      title: "Top High-Paying Non-Coding Jobs in DevOps [2024]",
      image: deveops6,
    },
  ];
  return (
    <>
      <BrowserRouter>
        <NavbarFilter></NavbarFilter>
        <Routes>
          <Route
            exact
            path="/"
            element={<AllImage AllData={AllData}></AllImage>}
          ></Route>
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
          <Route
            path="carrer"
            element={<Carrer deveops={deveops}></Carrer>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
