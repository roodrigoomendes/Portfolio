import { createBrowserRouter } from "react-router-dom";
import { About } from "./Components/About";
import { Apresentation } from "./Components/Apresentation";
import Project from "./Components/Project";

import { Default } from "./layouts/Default";

export const router = createBrowserRouter([
  {
    path: '/',
    element:<Default/>,
    children:[
      {
        path: '/',
        element:<Apresentation/>
      },
      {
        path: '/about',
        element: <About/>
      },
      {
        path: '/project',
        element: <Project/>
      },
    ],
  },


])