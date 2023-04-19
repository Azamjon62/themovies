import React from 'react'
import img3 from "../../assets/img/img3.jpeg";

const section1 = () => {


  const style = {
    backgroundImage: `url(${img3})`,
    backgroundRepeat: `no-repeat`,
    backgroundSize: `cover`,
    backgroundPosition: `center`,
  };

  const styleBtn = {
    background: `linear-gradient(to right, rgb(26, 211, 172, 1) 0%, rgb(1, 181, 225, 1) 100%)`,
  };


  return (
    <section style={style} className='section-1 container mx-auto' >
        <div className='h-[300px] bg-[rgba(2,87,127,0.45)] text-white' >
            <div className=' flex flex-col justify-center h-full px-[40px] py-[30px]' >
                <div className='flex flex-col' >
                    <h2 className='text-[48px] font-semibold' >Welcome.</h2>
                    <h3 className='text-[32px] font-[400] mt-[-16px]' >Millions of movies, TV shows and people to discover. Explore now.</h3>
                </div>
                <div className='mt-[55px]' >
                    <form className='flex w-full bg-white rounded-full' >
                        <label className='py-[10px] px-[20px]' >
                            <input className='w-[1063px] outline-none text-[#00000079]' name="query" type="text" placeholder="Search for a movie, tv show, person......"/>
                        </label>

                        <input className='cursor-pointer py-[10px] px-[26px] rounded-full' style={styleBtn} type="submit" value="Search"></input>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default section1