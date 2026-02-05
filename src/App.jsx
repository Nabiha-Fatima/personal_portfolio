
import Home from "./views/Home"
import AboutView from "./views/About"
import SkillsView from "./views/Skills"
import ProjectsView from "./views/Projects"
import ContactView from "./views/Contact"
import AppLayout from "./layouts/AppLayout"
import { createBrowserRouter, RouterProvider } from "react-router-dom"


function App() {
  const router = createBrowserRouter ([
    {
      path: "/",
      element : <AppLayout/>,
      children : [
        {
          index: true,
          element: <Home/>
        },
        {
          path: "about",
          element: <AboutView/>
        },
        {
          path: "skills",
          element: <SkillsView/>
        },
        {
          path: "projects",
          element: <ProjectsView/>
        },
        {
          path: "contacts",
          element: <ContactView/>
        },
      ]
    }
  ]);

  return (
  <RouterProvider router={router}/>
  )
}

export default App
