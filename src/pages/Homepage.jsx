import youngImg from "../assets/cheerful-young.svg"
import { LiaHotelSolid } from "react-icons/lia";
import { FaChevronRight } from "react-icons/fa6";
import { GiArcheryTarget } from "react-icons/gi";
import { TbDeviceVisionPro } from "react-icons/tb";

function Homepage() {
  return (
    <div className="w-full min-h-[100vh] ">
      <div className="w-full h-[100vh]  flex items-start justify-center">
        <div className="w-[95%] h-[85%]  flex">
          <div className="w-[50%] h-[100%]  flex flex-col">
            <div className="w-full h-[50%]  flex items-end justify-start">
              <h1 className="text-[3vw] font-[400] text-[#06384A] leading-[7vh] tracking-wide">
                Empowering Efficiency,<br />
                Elevating Management <br />
                Your Solution, Our Expertise!
              </h1>
            </div>
            <div className="w-full h-[50%] ">
              <div className="w-full h-[50%]  flex items-center">
                <div className="w-[45%] h-[50%] bg-[#045E2E] rounded-[1.5vw]">
                  <button className="w-full h-[100%] rounded-[1.5vw] text-[1.8vw] font-[600] text-white">Book a free demo</button>
                </div>
              </div>
            </div>

          </div>
          <div className={`w-[50%] h-[100%]  bg-no-repeat bg-center  `} style={{ backgroundImage: `url(${youngImg})` }}>

            <div className="w-full h-[30%]  flex items-end">
              <div className="w-full h-[50%]  flex items-end">
                <div className="w-[32%] h-[60%] bg-[#025E7F] rounded-lg flex items-center justify-center">
                  <h5 className="text-white"> High performance</h5>
                </div>
              </div>
            </div>


            <div className="w-full h-[30%]   flex items-end">
              <div className="w-full h-[50%]   flex items-end justify-end">
                <div className="w-[32%] h-[60%] bg-[#057137] rounded-lg  flex items-center justify-center" >
                  <h5 className="text-white" >Cost effective</h5>
                </div>
              </div>

            </div>
            <div className="w-full h-[40%]  flex items-center " >
              <div className="w-full h-[30%]  flex items-center">
                <div className="w-[50%] h-[100%]  flex items-center justify-center">
                  <div className="w-[50%] h-[75%] bg-[#3E0069] rounded-lg flex items-center justify-center">
                    <h5 className="text-white">Advance tech</h5>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>

      <div className="w-full h-[100vh] ">
        <div className="w-full h-[10%]  flex items-center justify-center">
          <h1 className="text-[2vw] font-[400]">Our Apps</h1>
        </div>

        <div className="w-full h-[70%]  flex items-center justify-center">
          <div className="w-[95%] h-[90%]  grid grid-rows-2 grid-cols-3 items-center justify-items-center  ">


            <div className="w-[80%] h-[70%] bg-white flex items-center justify-center">
              <button className="w-full h-[100%] bg-[#c9c9c923] rounded-xl flex">
                <div className="w-[20%] h-[100%]  flex items-center justify-end text-[3vw]">< LiaHotelSolid /></div>
                <div className="w-[55%] h-[100%] ">
                  <div className="w-full h-[50%]  flex items-end">
                    <h1 className="text-[1.5vw] font-[600]">Hotels</h1>
                  </div>
                  <div className="w-full h-[50%]  flex items-start justify-start ">
                    <h5 className="text-left">Streamlining Hospitality, One Click at a Time.</h5>
                  </div>

                </div>
                <div className="w-[25%] h-[100%]  flex items-center justify-center">
                  <div className="w-[55%] h-[30%] bg-[#025E7F] rounded-lg flex items-center justify-center text-white text-[1.3vw]"><FaChevronRight /></div>
                </div>

              </button>
            </div>


            <div className="w-[80%] h-[70%] bg-white flex items-center justify-center">
              <button className="w-full h-[100%] bg-[#c9c9c923] rounded-xl flex">
                <div className="w-[20%] h-[100%]  flex items-center justify-end text-[3vw]">< LiaHotelSolid /></div>
                <div className="w-[55%] h-[100%] ">
                  <div className="w-full h-[50%]  flex items-end">
                    <h1 className="text-[1.5vw] font-[600]" >Humans</h1>
                  </div>
                  <div className="w-full h-[50%]  flex items-start justify-start ">
                    <h5 className="text-left">Revolutionizing HR: Empower Success, Enable Talent.</h5>
                  </div>

                </div>
                <div className="w-[25%] h-[100%]  flex items-center justify-center">
                  <div className="w-[55%] h-[30%] bg-[#025E7F] rounded-lg flex items-center justify-center text-white text-[1.3vw]"><FaChevronRight /></div>
                </div>

              </button>
            </div>

            <div className="w-[80%] h-[70%] bg-white flex items-center justify-center">
              <button className="w-full h-[100%] bg-[#c9c9c923] rounded-xl flex">
                <div className="w-[20%] h-[100%]  flex items-center justify-end text-[3vw]">< LiaHotelSolid /></div>
                <div className="w-[55%] h-[100%] ">
                  <div className="w-full h-[50%]  flex items-end">
                    <h1 className="text-[1.5vw] font-[600]" >Sales</h1>
                  </div>
                  <div className="w-full h-[50%]  flex items-start justify-start ">
                    <h5 className="text-left">Coming soon...</h5>
                  </div>

                </div>
                <div className="w-[25%] h-[100%]  flex items-center justify-center">
                  <div className="w-[55%] h-[30%] bg-[#025E7F] rounded-lg flex items-center justify-center text-white text-[1.3vw]"><FaChevronRight /></div>
                </div>

              </button>
            </div>


            <div className="w-[80%] h-[70%] bg-white flex items-center justify-center">
              <button className="w-full h-[100%] bg-[#c9c9c923] rounded-xl flex">
                <div className="w-[20%] h-[100%]  flex items-center justify-end text-[3vw]">< LiaHotelSolid /></div>
                <div className="w-[55%] h-[100%] ">
                  <div className="w-full h-[50%]  flex items-end">
                    <h1 className="text-[1.5vw] font-[600]" >Legal</h1>
                  </div>
                  <div className="w-full h-[50%]  flex items-start justify-start ">
                    <h5 className="text-left">Coming soon...</h5>
                  </div>

                </div>
                <div className="w-[25%] h-[100%]  flex items-center justify-center">
                  <div className="w-[55%] h-[30%] bg-[#025E7F] rounded-lg flex items-center justify-center text-white text-[1.3vw]"><FaChevronRight /></div>
                </div>

              </button>
            </div>


            <div className="w-[80%] h-[70%] bg-white flex items-center justify-center">
              <button className="w-full h-[100%] bg-[#c9c9c923] rounded-xl flex">
                <div className="w-[20%] h-[100%]  flex items-center justify-end text-[3vw]">< LiaHotelSolid /></div>
                <div className="w-[55%] h-[100%] ">
                  <div className="w-full h-[50%]  flex items-end">
                    <h1 className="text-[1.5vw] font-[600]" >Finance</h1>
                  </div>
                  <div className="w-full h-[50%]  flex items-start justify-start ">
                    <h5 className="text-left">Coming soon...</h5>
                  </div>

                </div>
                <div className="w-[25%] h-[100%]  flex items-center justify-center">
                  <div className="w-[55%] h-[30%] bg-[#025E7F] rounded-lg flex items-center justify-center text-white text-[1.3vw]"><FaChevronRight /></div>
                </div>

              </button>
            </div>


            <div className="w-[80%] h-[70%] bg-white flex items-center justify-center">
              <button className="w-full h-[100%] bg-[#c9c9c923] rounded-xl flex">
                <div className="w-[20%] h-[100%]  flex items-center justify-end text-[3vw]">< LiaHotelSolid /></div>
                <div className="w-[55%] h-[100%] ">
                  <div className="w-full h-[50%]  flex items-end">
                    <h1 className="text-[1.5vw] font-[600]" >Services</h1>
                  </div>
                  <div className="w-full h-[50%]  flex items-start justify-start ">
                    <h5 className="text-left">Coming soon...</h5>
                  </div>

                </div>
                <div className="w-[25%] h-[100%]  flex items-center justify-center">
                  <div className="w-[55%] h-[30%] bg-[#025E7F] rounded-lg flex items-center justify-center text-white text-[1.3vw]"><FaChevronRight /></div>
                </div>

              </button>
            </div>





          </div>
        </div>

        <div className="w-full h-[20%]  flex items-center justify-center">
          <div className="w-[20%] h-[45%] bg-[#025E7F] rounded-lg ">
            <button className="w-full h-[100%] rounded-lg text-white text-[1.5vw] font-[500]">View all products</button>
          </div>
        </div>

      </div>


      <div className="w-full h-[100vh] ">
        <div className="w-full h-[20%]  flex items-center justify-center">
          <h1 className="text-[2.5vw] font-[600]">Our Values</h1>
        </div>
        <div className="w-full h-[80%]  flex items-center justify-center">

          <div className="w-[70%] h-[100%]  flex justify-between ">
            <div className="w-[45%] h-[90%]  rounded-lg  flex flex-col items-center justify-center bg-[#EFEFEF]">
              <div className="w-[90%] h-[15%]  flex items-end text-[4vw]">
                <GiArcheryTarget />
              </div>
              <div className="w-[90%] h-[15%]  flex items-center">
                <h1 className="text-[2vw] font-[500]">Our Mission</h1>
              </div>
              <div className="w-[90%] h-[70%] ">
                <p className=" text-left text-[1.2vw] leading-15 tracking-widest">
                  Our mission is to empower our clients with state of the art software solutions tailored to their specific needs, ultimately enhancing productivity, decision-making capabilities, and customer satisfaction. We strive to be at the forefront of technological advancements and lead the way in providing cutting edge software and IoT solutions.
                </p>
              </div>

            </div>


            <div className="w-[45%] h-[90%]  rounded-lg  flex flex-col items-center justify-center bg-[#EFEFEF]">
              <div className="w-[90%] h-[15%]  flex items-end text-[4vw] ">
                <TbDeviceVisionPro />
              </div>
              <div className="w-[90%] h-[15%] flex items-center">
                <h1 className="text-[2vw] font-[500]">Our Vision</h1>
              </div>
              <div className="w-[90%] h-[70%] ">
                <p className=" text-left text-[1.2vw] leading-15 tracking-widest">
                  At OptiManage, we envision a world where businesses, hotels, medical facilities and educational institutions operate efficiently, make data-driven decisions, and leverage the power of AI and ML to stay ahead in a rapidly evolving digital landscape.
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>

      <div className="w-full h-[100vh]  flex items-center justify-center">
        <div className="w-[50%] h-[70%]  flex flex-col ">
          <div className="w-full h-[33%]  flex items-center justify-center ">
            <div className="w-[35%] h-[40%] bg-[#DE6164] rounded-lg">
            <button className="w-full h-[100%] rounded-lg text-white text-[1.3vw] font-[600]">More about us</button>
            </div>
          </div>
          <div className="w-full h-[33%]   flex items-center justify-center">
           <h5 className="text-[1.8vw] tracking-wide">Let’s get your work done in the best way</h5>
           </div>
          <div className="w-full h-[33%]  flex items-center justify-center ">
          <div className="w-[35%] h-[40%] bg-[#3E0069] rounded-lg">
          <button className="w-full h-[100%] rounded-lg text-white text-[1.3vw] font-[600]">Contact us!</button>
          </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Homepage
