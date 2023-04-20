import React from 'react'
import img7 from "../../assets/img/img7.jpeg"
import img9 from "../../assets/img/img9.jpeg"
import img10 from "../../assets/img/img10.jpeg";
import img11 from "../../assets/img/img11.jpeg";
import img12 from "../../assets/img/img12.jpeg";
import img13 from "../../assets/img/img13.svg";

const section3 = () => {

  const style = {
    backgroundImage: `url(${img9})`,
    backgroundRepeat: `no-repeat`,
    backgroundSize: `cover`,
    backgroundPosition: `center`,
  };
  const style2 = {
    backgroundImage: `url(${img7})`,
    backgroundRepeat: `no-repeat`,
    backgroundSize: `cover`,
    backgroundPosition: `center`,
  };

  return (
    <section className="section-3 container mx-auto mt-5">
      <div className=" w-full h-[350px]" style={style}>
        <div className=" bg-[#274e64b0] h-full">
          <div className="py-[30px]">
            <div className=" flex items-center gap-[30px] mx-[40px]">
              <h2 className="text-[24px] font-semibold text-white">
                Latest Trailers
              </h2>
              <div className="border border-[rgba(30,213,169,1)] w-[193px] flex justify-between rounded-full relative">
                <button className="focus:bg-gradient-to-r from-[#c0fecf] to-[#1ed5a9] focus:text-[#000] text-white rounded-full w-[81px] ">
                  Today
                </button>
                <button className="focus:bg-gradient-to-r from-[#c0fecf] to-[#1ed5a9] focus:text-[#000] text-white rounded-full w-[110px]">
                  This Week
                </button>
              </div>
            </div>
            <div className="pt-[15px] px-[40px] flex gap-[25px]">

              <div className="w-[300px]">
                <div className="" >
                  <a className="relative flex items-center justify-center" href="#">
                    <img className="rounded-lg " src={img10} alt="" />
                    <img className=" absolute w-[64px]" src={img13} alt="" />
                  </a>
                </div>
                <div className="text-center">
                  <h2 className="text-white text-[20px] mt-[5px]">
                    <a href="#">Melur Untuk Firdaus</a>
                  </h2>
                  <h3 className="text-white text-[16px] ">
                    Melur Untuk Firdaus 2 | Meerqeen
                  </h3>
                </div>
              </div>

              <div className="w-[300px]">
                <div className="">
                  <a className='relative flex items-center justify-center' href="#">
                    <img className=" rounded-lg" src={img11} alt="" />
                    <img className=" absolute w-[64px]" src={img13} alt="" />
                  </a>
                </div>
                <div className="text-center">
                  <h2 className="text-white text-[20px] mt-[5px]">
                    <a href="#">Melur Untuk Firdaus</a>
                  </h2>
                  <h3 className="text-white text-[16px] ">
                    Melur Untuk Firdaus 2 | Meerqeen
                  </h3>
                </div>
              </div>

              <div className="w-[300px]">
                <div>
                  <a className=' relative flex items-center justify-center' href="#">
                    <img className=" rounded-lg" src={img12} alt="" />
                    <img className=" absolute w-[64px]" src={img13} alt="" />
                  </a>
                </div>
                <div className="text-center">
                  <h2 className="text-white text-[20px] mt-[5px]">
                    <a href="#">Melur Untuk Firdaus</a>
                  </h2>
                  <h3 className="text-white text-[16px] ">
                    Melur Untuk Firdaus 2 | Meerqeen
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default section3