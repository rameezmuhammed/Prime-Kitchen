import phone from "../assets/phone.png"
import mail from "../assets/mail.png"

const Contact = () => {
  return (
    <div data-aos="fade-right">
      <div>
        <div className="flex justify-center mb-10 mt-20">
            <h1 className="text-4xl font-bold">
                Get in Touch
            </h1>
        </div>
        <div className="font-semibold mb-10">
            <div className="flex justify-center gap-2">
                <img src={phone} 
                className="w-6 h-7"/>
                <h3 className="mb-2">
                    +91 8943396090
                </h3>            
            </div>
            <div className="flex justify-center gap-2">
                <img src={mail} 
                className="w-6"/>
                <h3>
                    muhammedrameez6090@gmail.com
                </h3>        
            </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
