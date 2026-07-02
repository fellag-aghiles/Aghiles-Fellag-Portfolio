import { RouterProvider, createHashRouter } from "react-router-dom";
import "./App.scss";

import Home from "./Pages/Home/Home";
import Contacts from "./Pages/Contact/Contacts";
import AllProjects from "./Pages/AllProjects/AllProjects";
import AboutPage from "./Pages/About/AboutPage";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ParticlesBackground from "./component/Effects/ParticlesBackground";
import CustomCursor from "./component/Effects/CustomCursor";

function App() {
  useEffect(() => {
    AOS.init({ duration: 850, easing: "ease-out-cubic", once: true, offset: 80 });
  }, []);

  const router = createHashRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/contacts",
      element: <Contacts path={"contacts"} />,
    },
    {
      path: "/projects",
      element: <AllProjects path={"projects"} />,
    },
    {
      path: "/about",
      element: <AboutPage path={"about"} />,
    },
  ]);
  return (
    <div className="App">
      <ParticlesBackground />
      <CustomCursor />
      <div className="site-shell">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
