import officeImg from "../assets/officeBackgroundImage.png"
function Aboutus() {
    return (
        <div className='w-full min-h-[100vh] flex  items-center flex-col '>
            <div className="w-[100%] h-[75vh] bg-black flex items-center justify-center">
                <div className=' w-[100%] h-[100%] bg-pink-900 flex items-center justify-center'>
                    <img src={officeImg} className="w-[100%] h-[100%] bg-cover relative" alt="" />
                    <div className="w-[50%] h-[30%] bg-[#ffffff55]  absolute flex items-center justify-center rounded">
                        <h1 className="font-[600] text-[2vw] ">"Empowering Efficiency, Fueling Growth: <br />
                            Your Management Solution, Reinvented!"</h1>
                    </div>
                </div>
            </div>
            <div className="w-full min-h-[100vh] ">
                <div className="w-full h-[50vh]  flex items-center justify-center">
                    <div className="w-[90%] h-[90%] bg-white flex">
                        <div className="w-[40%]  h-[100%] flex items-center justify-center ">
                          <div className="w-[35%]  h-[30%] flex  justify-between">
                          <div className="w-[2%] h-[100%] bg-[#21718E]"></div>
                          <div className="w-[90%] h-[100%]  flex items-center"><h1 className="text-[2vw] font-[600]">About Us</h1></div>
                          </div>
                        </div>
                        <div className="w-[60%] h-[100%] flex items-center justify-start ">
                         <div className="w-[45%] h-[80%] flex items-center justify-center "> 
                         <h5 className="font-[700] text-[1vw] tracking-wide">"At Optimanage software private limited, we pioneer innovative management solutions tailored for your success. Born from a passion for efficiency, we blend cutting-edge technology with a customer-centric approach. Join us on the journey of streamlined operations and elevated performance."</h5></div>
                        </div>
                    </div>
                </div>
                <div className="w-full h-[50vh] bg-green-700"></div>
                <div className="w-full h-[50vh] bg-green-800"></div>

            </div>
        </div>
    )
}

export default Aboutus
