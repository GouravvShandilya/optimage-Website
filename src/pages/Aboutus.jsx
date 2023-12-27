import officeImg from "../assets/office.jpeg.jpg";
import sideBarVector from "../assets/sideBarVector.png";

function Aboutus() {
  return (
    <div className="w-full min-h-[100vh] flex  items-center flex-col ">
      <div className="w-[100%] h-[75vh]  flex items-center justify-center ">
        <div className=" w-[100%] h-[100%]  flex items-center justify-center">
          <img
            src={officeImg}
            className="w-[100%] h-[100%]   relative"
            alt=""
          />
          <div className="w-[50%] h-[30%] bg-[#ffffff55]  absolute flex items-center justify-center rounded">
            <h1 className="font-[600] text-[2vw] ">
              "Empowering Efficiency, Fueling Growth: <br />
              Your Management Solution, Reinvented!"
            </h1>
          </div>
        </div>
      </div>

      {/** main 2 */}

      <div className="w-full min-h-[100vh] ">
        <div className="w-full h-[50vh]  flex items-center justify-center">
          <div className="w-[90%] h-[90%] bg-white flex">
            <div className="w-[40%]  h-[100%] flex items-center justify-center ">
              <div className="w-[35%]  h-[30%] flex  justify-between">
                <div className="w-[2%] h-[100%] bg-[#21718E]"></div>
                <div className="w-[90%] h-[100%]  flex items-center">
                  <h1 className="text-[2vw] font-[600]">About Us</h1>
                </div>
              </div>
            </div>
            <div className="w-[60%] h-[100%] flex items-center justify-start ">
              <div className="w-[45%] h-[80%] flex items-center justify-center ">
                <h5 className="font-[700] text-[1vw] tracking-wide">
                  At Optimanage software private limited, we pioneer innovative
                  management solutions tailored for your success. Born from a
                  passion for efficiency, we blend cutting-edge technology with
                  a customer-centric approach. Join us on the journey of
                  streamlined operations and elevated performance.
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[50vh]  flex items-center justify-center ">
          <div className="w-[90%] h-[90%] bg-white flex">
            <div className="w-[40%]  h-[100%] flex items-center justify-center ">
              <div className="w-[35%]  h-[30%] flex  justify-between">
                <div className="w-[2%] h-[100%] bg-[#21718E]"></div>
                <div className="w-[90%] h-[100%]  flex items-center">
                  <h1 className="text-[2vw] font-[600]">Our Mission</h1>
                </div>
              </div>
            </div>
            <div className="w-[60%] h-[100%] flex items-center justify-start ">
              <div className="w-[45%] h-[80%] flex items-center justify-center ">
                <h5 className="font-[700] text-[1vw] tracking-wide">
                  Our mission is to empower our clients with state of the art
                  software solutions tailored to their specific needs,
                  ultimately enhancing productivity, decision-making
                  capabilities, and customer satisfaction. We strive to be at
                  the forefront of technological advancements and lead the way
                  in providing cutting edge software and IoT solutions.
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[50vh]  flex items-center justify-center ">
          <div className="w-[90%] h-[90%] bg-white flex">
            <div className="w-[40%]  h-[100%] flex items-center justify-center ">
              <div className="w-[35%]  h-[30%] flex  justify-between">
                <div className="w-[2%] h-[100%] bg-[#21718E]"></div>
                <div className="w-[90%] h-[100%]  flex items-center">
                  <h1 className="text-[2vw] font-[600]">Our Vision</h1>
                </div>
              </div>
            </div>
            <div className="w-[60%] h-[100%] flex items-center justify-start ">
              <div className="w-[45%] h-[80%] flex items-center justify-center ">
                <h5 className="font-[700] text-[1vw] tracking-wide">
                  At OptiManage, we envision a world where businesses, hotels,
                  medical facilities and educational institutions operate
                  efficiently, make data-driven decisions, and leverage the
                  power of AI and ML to stay ahead in a rapidly evolving digital
                  landscape.
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/** main 3 */}
      <div className="w-full min-h-[100vh]  ">
        <div className="w-full h-auto flex">
          <div className="w-[30%] h-auto ">
            <img className="w-auto" src={sideBarVector} alt="" />
          </div>

          <div className="w-[70%] h-auto   flex justify-end">
            <div className="w-[70%] h-[100%] flex flex-col justify-between items-center  ">
              <div className="w-full h-[5%]   flex items-center justify-start  ">
                <h1 className="text-[3vw] font-[600]">Why Us?</h1>
              </div>

              <div className="w-full h-[95%] flex flex-col justify-evenly">
                <div className="w-full h-[12%] ">
                  <div className="w-full h-[20%]  flex">
                    <div className="w-[2%] h-full  flex items-center">
                      <div className="w-[50%] h-[50%] bg-[#21718E] rounded"></div>
                    </div>
                    <div className="w-[95%] h-full ">
                      <div className="w-[50%] h-full flex items-center ">
                        <h1 className="text-[1.5vw] font-[400]">
                          Simplified Operations
                        </h1>
                      </div>
                    </div>
                  </div>

                  <div className="w-full h-[90%] ">
                    <div className="w-[70%] h-[70%] flex items-center  ">
                      <p className="text-[1.5vw]">
                        Our management system streamlines your day-to-day tasks,
                        simplifying complex operations into intuitive,
                        easy-to-use features.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="w-full h-[12%]  ">
                  <div className="w-full h-[20%]  flex">
                    <div className="w-[2%] h-full  flex items-center">
                      <div className="w-[50%] h-[50%] bg-[#21718E] rounded"></div>
                    </div>
                    <div className="w-[95%] h-full ">
                      <div className="w-[50%] h-full flex items-center ">
                        <h1 className="text-[1.5vw] font-[400]">
                          Tailored Solutions{" "}
                        </h1>
                      </div>
                    </div>
                  </div>

                  <div className="w-full h-[90%] ">
                    <div className="w-[70%] h-[70%] flex items-center ">
                      <p className="text-[1.5vw]">
                        We offer personalized solutions to fit your unique
                        business needs, ensuring that our system adapts
                        seamlessly to your industry and requirements.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="w-full h-[12%]  ">
                  <div className="w-full h-[20%]  flex">
                    <div className="w-[2%] h-full  flex items-center">
                      <div className="w-[50%] h-[50%] bg-[#21718E] rounded"></div>
                    </div>
                    <div className="w-[95%] h-full ">
                      <div className="w-[50%] h-full flex items-center ">
                        <h1 className="text-[1.5vw] font-[400]">
                          Enhanced Efficiency{" "}
                        </h1>
                      </div>
                    </div>
                  </div>

                  <div className="w-full h-[90%] ">
                    <div className="w-[70%] h-[70%] flex items-center  ">
                      <p className="text-[1.5vw]">
                        Experience heightened efficiency and productivity as our
                        system automates processes, allowing you to focus more
                        on growing your business and less on routine tasks.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="w-full h-[12%]  ">
                  <div className="w-full h-[20%]  flex">
                    <div className="w-[2%] h-full  flex items-center">
                      <div className="w-[50%] h-[50%] bg-[#21718E] rounded"></div>
                    </div>
                    <div className="w-[95%] h-full ">
                      <div className="w-[50%] h-full flex items-center ">
                        <h1 className="text-[1.5vw] font-[400]">
                          Reliable Support
                        </h1>
                      </div>
                    </div>
                  </div>

                  <div className="w-full h-[90%] ">
                    <div className="w-[70%] h-[70%] flex items-center  ">
                      <p className="text-[1.5vw]">
                        Our dedicated support team is always available to assist
                        you, providing prompt responses and continuous
                        improvements to ensure a smooth and satisfying user
                        experience.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="w-full h-[12%]  ">
                  <div className="w-full h-[20%]  flex">
                    <div className="w-[2%] h-full  flex items-center">
                      <div className="w-[50%] h-[50%] bg-[#21718E] rounded"></div>
                    </div>
                    <div className="w-[95%] h-full ">
                      <div className="w-[50%] h-full flex items-center ">
                        <h1 className="text-[1.5vw] font-[400]">
                          Scalability and Growth
                        </h1>
                      </div>
                    </div>
                  </div>

                  <div className="w-full h-[90%] ">
                    <div className="w-[70%] h-[70%] flex items-center  ">
                      <p className="text-[1.5vw]">
                        With scalability at its core, our system grows with your
                        business, ensuring it remains a reliable asset as your
                        company expands and evolves.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/** main 4 */}

      <div className="w-full h-[100vh] flex items-center justify-center">
        <div className="w-[60%] h-[40%]  flex flex-col justify-evenly">
          <div className="w-full h-[33%]  flex items-center justify-center ">
            {" "}
            <h1 className="font-[700] text-[1.5vw]">
              Get you one stop solution now!
            </h1>{" "}
          </div>
          <div className="w-full h-[33%]  flex items-center justify-center ">
            {" "}
            <h4 className="font-[500] text-[1vw]">Book a free demo</h4>{" "}
          </div>
          <div className="w-full h-[33%]  flex items-center justify-evenly">
            <div className="w-[55%] h-[50%] flex items-center justify-evenly">
              <div className="w-[40%] h-[100%]  rounded-lg bg-[#FD575B] ">
                <button className="w-[100%]  rounded-lg h-[100%] text-[1vw] font-[700] text-white">
                  SIGN UP
                </button>
              </div>
              <div className="w-[10%] h-[100%]  flex items-center justify-center">
                <h4>Or</h4>
              </div>
              <div className="w-[40%] h-[100%] rounded-lg bg-[#FD575B] ">
                <button className="w-[100%]  rounded-lg h-[100%] text-[1vw] font-[700] text-white">
                  CONTACT US
                </button>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
