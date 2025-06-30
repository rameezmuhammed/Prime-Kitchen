import html from "../assets/html.png"
import css from "../assets/css.png"
import js from "../assets/js.png"
import react from "../assets/react.png"
import tailwind from "../assets/tailwind.png"

const Technologies = () => {
  return (
    <div>
      <div>
        <div data-aos="fade" className="flex justify-center mb-15 mt-20">
            <h1 className="text-4xl font-bold">
                Technologies
            </h1>            
        </div>
        <div data-aos="fade" className="flex justify-center mb-10 gap-4 animate-bounce">
            <img src={html}
            className="w-25 h-15"/>
            <img src={css}
            className="w-10 h-15"/>
            <img src={js}
            className="w-18 h-14"/>
            <img src={react}
            className="w-18 h-13"/>
            <img src={tailwind}
            className="w-15 h-10 mt-2"/>
        </div>
      </div>
    </div>
  )
}

export default Technologies
