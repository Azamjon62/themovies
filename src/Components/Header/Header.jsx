import React from "react";
import img1 from "../../assets/img/img1.svg"

const Header = () => {
  return (
    <header className="bg-[#042541]  " >
      <div className="flex container mx-auto px-7 ">

        <div className="flex justify-between items-center w-full h-[65px] text-[#fff] text-base not-italic">

          <div className="flex gap-6 items-center">
            <a href="#">
              <img src={img1} alt="" width={154} height={20} />
            </a>
            <ul className="flex gap-[30px]" >

              <li className="group inline-block relative z-50" >
                <a href="#" className="" >Movies</a>
                <div className=" absolute hidden ml-[-10px] w-[172px] bg-white py-[8px] rounded text-[#000] group-hover:block" >
                  <ul className="flex flex-col">
                    <li className="hover:bg-slate-200 px-[25px] py-[4px]"><a href="#">Popular</a></li>
                    <li className="hover:bg-slate-200 px-[25px] py-[4px]"><a href="#">Now Playing</a></li>
                    <li className="hover:bg-slate-200 px-[25px] py-[4px]"><a href="#">Upcoming</a></li>
                    <li className="hover:bg-slate-200 px-[25px] py-[4px]"><a href="#">Top Rated</a></li>
                  </ul>
                </div>
              </li>

              <li className="group inline-block relative z-50" >
                <a href="#">TV Shows</a>
                <div className="absolute hidden ml-[-10px] w-[172px] bg-white py-[8px] rounded text-[#000] group-hover:block" >
                  <ul className="flex flex-col" >
                    <li className="hover:bg-slate-200 px-[25px] py-[4px]"><a href="#">Popular</a></li>
                    <li className="hover:bg-slate-200 px-[25px] py-[4px]"><a href="#">Airing Today</a></li>
                    <li className="hover:bg-slate-200 px-[25px] py-[4px]"><a href="#">On TV</a></li>
                    <li className="hover:bg-slate-200 px-[25px] py-[4px]"><a href="#">Top Rated</a></li>
                  </ul>
                </div>
              </li>

              <li className="group inline-block relative z-50" >
                <a href="#">People</a>
                <div className="absolute hidden ml-[-10px] w-[172px] bg-white py-[8px] rounded text-[#000] group-hover:block" >
                  <ul className="flex flex-col">
                    <li className="hover:bg-slate-200 px-[25px] py-[4px]" ><a href="#">Popular People</a></li>
                  </ul>
                </div>
              </li>

              <li className="group inline-block relative z-50">
                <a href="#">More</a>
                <div className="absolute hidden z-50 ml-[-10px] w-[172px] bg-white  py-[8px] rounded text-[#000] group-hover:block" >
                  <ul className="flex flex-col ">
                    <li className="hover:bg-slate-200 px-[25px] py-[4px]" ><a href="#">Discussions</a></li>
                    <li className="hover:bg-slate-200 px-[25px] py-[4px]"><a href="#">Leaderboard</a></li>
                    <li className="hover:bg-slate-200 px-[25px] py-[4px]"><a href="#">Support</a></li>
                    <li className="hover:bg-slate-200 px-[25px] py-[4px]"><a href="#">API</a></li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>

          <div className="flex " >
            <ul className="flex items-center gap-[30px]">
              <li className="mt-[6px]" ><a href="#"><ion-icon name="add"></ion-icon></a></li>
              <li className="border rounded text-center cursor-pointer" ><div className="w-[28px] h-[26px]" >EN</div></li>
              <li className="mt-[6px]" ><a href="#"><ion-icon name="notifications-sharp"></ion-icon></a></li>
              <li className="bg-[#959595] w-8 h-8 rounded-[50%] flex items-center justify-center" ><a className="mt-[5px]" href="#"><ion-icon name="person-circle-sharp"></ion-icon></a></li>
              <li className="mt-[7px]" ><a className="text-05B4E4" href="#"><ion-icon name="search-sharp"></ion-icon></a></li>
            </ul>
          </div>

        </div>

      </div>
    </header>
  );
};

export default Header;
