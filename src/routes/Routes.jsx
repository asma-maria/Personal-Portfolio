// import React from 'react';

import { createBrowserRouter } from "react-router-dom";
import CommonLayout from "../layout/CommonLayout";

import About from "../pages/About";
import Projects from "../pages/Projects";
import Services from "../pages/Services";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Skills from "../shared/Skills";


const router = createBrowserRouter([
    {
      path: "/",
      element: <CommonLayout></CommonLayout>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/about",
          element: <About></About>,
        },
        {
          path: "/contact",
          element: <Contact></Contact>,
        },
        {
          path: "/skills",
          element: <Skills></Skills>,
        },
        {
          path: "/projects",
          element: <Projects></Projects>,
        },
        {
          path: "/services",
          element: <Services></Services>,
        },
      ],
    },

  ]);

export default router;