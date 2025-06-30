import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Technologies from "./components/Technologies"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import { useEffect } from "react"
import AOS from "aos";
import 'aos/dist/aos.css';

const App = () => {

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, [])

  return (
    <div>      
      <Navbar/>
      <Home/>
      <Technologies/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App
