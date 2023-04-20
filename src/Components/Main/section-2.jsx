import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom"
import img5 from "../../assets/img/img5.svg";
import img14 from "../../assets/img/img14.svg";
import { api } from '../../helper/api/api';

const section2 = () => {

  const [movie, setMovie] = useState([]);
  // const [page, setPage] = useState(1);

  useEffect(() => {
    api.getPopularMovie().then((data) => {
      setMovie(data.data);
      console.log(data);
    });
  }, []);

  const style = {
    backgroundImage: `url(${img14})`,
    backgroundRepeat: `no-repeat`,
    backgroundSize: `contain`,
    backgroundPosition: `center`,
  };


  return (
    <section className="section-2 container mx-auto">
      <div className="mt-[30px]">
        <div className="flex flex-col">
          <div className=" flex items-center gap-[30px] mx-[30px]">
            <h2 className="text-[24px]">Trending</h2>
            <div className="border-black border w-[193px] flex justify-between rounded-full relative">
              <button className="focus:bg-[#042541] focus:text-white rounded-full w-[81px] ">
                Today
              </button>
              <button className="focus:bg-[#042541] focus:text-white rounded-full w-[110px] focus:gradient-to-r from-cyan-500 to-blue-500">
                This Week
              </button>
            </div>
          </div>
          <div style={style}>
            <div className="flex overflow-x-auto overflow-y-hidden h-[400px]">
              {movie && 
                movie?.results?.length > 0 &&
                movie.results.map((item) => {
                  return (
                      <div
                        key={item.id}
                        className="min-w-[150px] h-[341px] rounded mt-[28px] ml-[30px]"
                      >
                        <div className="img relative">
                          <a href="#">
                            <img
                              className=" right-[6px] top-[8px] absolute w-[25px] text-inherit hover:bg-[#05B4E4] hover:rounded-full"
                              src={img5}
                              alt="sdanjk"
                            />
                          </a>
                          <a href="#">
                            <img
                              className="rounded-lg h-[225px]"
                              src={
                                "https://image.tmdb.org/t/p/w500" +
                                item.poster_path
                              }
                              alt="man aunt"
                            />
                          </a>
                        </div>
                        <div className="p-[6px] relative">
                          <div className=" cursor-default mt-[-28px] absolute h-[38px] w-[38px] text-[16px] bg-[#081C22] rounded-full text-white flex items-center justify-center">
                            64<sup className="text-[8px]">%</sup>{" "}
                          </div>
                          <h2 className="mt-[15px] w-[130px] text-[16px] font-semibold hover:text-[#05B4E4]">
                            <a href="#">{item.original_title}</a>
                          </h2>
                          <p className=" text-slate-400 text-[16px]">
                            {item.release_date}
                          </p>
                        </div>
                      </div>
                  );
                })
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default section2