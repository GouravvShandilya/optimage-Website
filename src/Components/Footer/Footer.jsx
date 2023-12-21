import { Link } from "react-router-dom"
import osplLogo from "../../assets/osplLogo.svg"
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

function Footer() {
  return (
    <div className="w-full h-[60vh]  flex flex-col justify-between bg-[#EFEFEF]">
      <div className="w-full h-[20%] flex items-center justify-center ">  <div className="w-[95%] h-[85%] "> <img className="w-[15%]" src={osplLogo} alt="" /> </div>  </div>



      <div className="w-full h-[60%]  flex items-center justify-center ">
        <div className="w-[95%] h-[85%]   flex justify-between flex-col md:flex-row">


       {/** Links part */}
          <div className="w-[33%] h-[100%]  flex flex-col justify-around  ">
            <div className="w-full h-[20%] flex items-center">
              <h1 className="text-[1.5vw]">Links</h1>
            </div>
            <div className="w-full h-[10%] ">
              <Link>Home</Link>
            </div>
            <div className="w-full h-[10%] ">
              <Link>About Us</Link>
            </div>
            <div className="w-full h-[10%] ">
              <Link>Products</Link>
            </div>
            <div className="w-full h-[10%] ">
              <Link>Contact Us</Link>
            </div>
          </div>


       {/** Privacy part */}

          <div className="w-[33%] h-[100%] ">
            <div className="w-[100%] h-[100%]  flex flex-col justify-around  ">
              <div className="w-full h-[20%] flex items-center">
                <h1 className="text-[1.5vw]">Privacy</h1>
              </div>
              <div className="w-full h-[10%] ">
                <Link>Privacy Policy</Link>
              </div>
              <div className="w-full h-[10%] ">
                <Link>Terms and Conditions</Link>
              </div>
              <div className="w-full h-[10%] ">
                <Link>Refund Policy</Link>
              </div>
          
            </div>
          </div>


       {/** Contact part */}
          <div className="w-[33%] h-[100%] ">
            <div className="w-[100%] h-[100%]  flex flex-col justify-around  ">
              <div className="w-full h-[20%] flex items-center">
                <h1 className="text-[1.5vw]">Contact</h1>
              </div>
              <div className="w-full  h-[10%] ">
                <Link>+91 8602800258</Link>
              </div>
              <div className="w-full h-[10%] ">
                <Link>sonuyadav@optimanage.co.in</Link>
              </div>
              <div className="w-[20%]  h-[15%] flex items-center justify-between ">
                <Link className="text-[1.4vw]" ><FaInstagram /></Link>
                <Link className="text-[1.4vw]" ><FaWhatsapp/></Link>
                <Link className="text-[1.4vw]" ><CiLinkedin /> </Link>
              </div>
             
            </div>

          </div>

        </div>
      </div>
      <div className="w-full h-[15%]  flex items-center justify-center ">
       <div className="  ">
       <h5>OptiManage Software Private Limited 2023</h5>
       </div>
      
      
      </div>

    </div>
  )
}

export default Footer
