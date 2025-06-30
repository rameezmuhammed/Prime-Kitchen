import logo from "../assets/mr-logo.png"
import hamburger from "../assets/hamburger.png"
import insta from "../assets/blackinsta.png"
import fb from "../assets/blackfacebook.png"
import yt from "../assets/blackyt.png"
import github from "../assets/github.png"
import Hamburger from "./Hamburger"
import { useState } from "react"

const Navbar = () => {

  const [hamburgerPop, setHamburgerPop] = useState();

  return (

    <>

    <div data-aos="fade-down" className="relative">
      <div className="flex">
        <div className="flex">
          <img src={logo} 
          className="w-20 ml-8"/>
        </div>
        <div onClick={() => setHamburgerPop(!hamburgerPop)}
        className="absolute top-0 right-0 
        md:hidden mt-6 mr-4">
          <img src={hamburger}
          className="w-8"/>
        </div>
        <div className="hidden md:block
        absolute top-0 right-0 mt-6 mr-10">
          <div className="flex gap-2">
            <img src={insta}
            className="w-4 h-4"/>
            <img src={fb}
            className="w-4 h-4"/>
            <img src={yt}
            className="w-6 h-4"/>
            <img src={github}
            className="h-4 -ml-2"/>
          </div>          
        </div>
      </div>
    </div>

    {hamburgerPop && <Hamburger setHamburgerPop={setHamburgerPop}/>}

  </>  
    
  )
}

export default Navbar
