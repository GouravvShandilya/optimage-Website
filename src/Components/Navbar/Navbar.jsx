import { Link } from "react-router-dom"
import osplLogo from "../../assets/osplLogo.svg"
import { IoIosSearch } from "react-icons/io";
import { PiBellRingingLight } from "react-icons/pi";



function Navbar() {
    return (
        <div className='w-full h-[10vh]  bg-[#f9f8f8] flex'>
            <div className="w-[15%] h-[100%]  flex items-center justify-center">
               <Link to='/'>  <img src={osplLogo} alt="" /></Link>
            </div>
            <div className=" w-[55%] h-[100%]  ">
                <div className="w-[45%] h-[100%] flex items-center justify-around ">
                    <div><Link to="/aboutus">About us</Link></div>
                    <div><Link to="/productpage">Products</Link></div>
                    <div><Link to="/productpage">Contact</Link></div>
                </div>
            </div>
            <div className="w-[30%] h-[100%]  flex justify-center items-start ">
                <div className="w-[80%] h-[100%]  flex  " >

                    <div className="w-[30%]   h-[100%]  flex items-center justify-around">
                        <div className="text-[1.8vw]  font-[600]"><IoIosSearch /></div>
                        <div className="text-[1.8vw]  "><PiBellRingingLight /></div>
                    </div>

                    <div className="w-[70%] h-100%  flex justify-around items-center">
                        <div className="w-[45%] h-[55%] rounded-[5vw] border-[#21718E] border-2 "><Link className="w-[100%] h-[100%] flex items-center justify-center">Login</Link> </div>
                        <div className="w-[45%] h-[60%] rounded-[5vw]   bg-[#20718f]"> <Link className="w-[100%] h-[100%] flex items-center justify-center text-white">Sign up</Link>  </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Navbar
