import React from 'react'
import img15 from "../../assets/img/img15.svg"

const Footer = () => {
  return (
    <footer className='bg-[#03213A]' >
      <div className='footer container mx-auto' >
        <div className='flex gap-[40px] pt-[40px] justify-center  h-[323px]' >
          <div className='flex flex-col gap-[54px] items-end' >
              <a href="#"><img className='w-[130px]' src={img15} alt="nsdnmk" /></a>
              <a href='#' className='px-[8px] py-[14px] w-[150px] text-center rounded-lg text-[#05B4E4] bg-[#fff] font-black text-[18px]'>Hi khzver_62!</a>
          </div>

        <div className='flex gap-[45px] items-start  mt-[40px] mb-[40px]' >
          <div className='text-white' >
            <h3 className=' font-bold text-[1.4rem]' >THE BASICS</h3>
            <ul className='list-none' >
              <li className='leading-[1.6rem] max-w-[260px]' ><a className='text-[1.2rem] text-white' href="#">About TMDB</a></li>
              <li className='leading-[1.6rem] max-w-[260px]' ><a className='text-[1.2rem] text-white' href="#">Contact Us</a></li>
              <li className='leading-[1.6rem] max-w-[260px]' ><a className='text-[1.2rem] text-white' href="#">Support Forums</a></li>
              <li className='leading-[1.6rem] max-w-[260px]' ><a className='text-[1.2rem] text-white' href="#">API</a></li>
              <li className='leading-[1.6rem] max-w-[260px]' ><a className='text-[1.2rem] text-white' href="#">System Status</a></li>
            </ul>
          </div>

          <div className='text-white' >
            <h3 className=' font-bold text-[1.4rem]' >GET INVOLVED</h3>
            <ul className='list-none' >
              <li className='leading-[1.6rem] max-w-[260px]' ><a className='text-[1.2rem] text-white' href="#">Contribution Bible</a></li>
              <li className='leading-[1.6rem] max-w-[260px]' ><a className='text-[1.2rem] text-white' href="#">Add New Movie</a></li>
              <li className='leading-[1.6rem] max-w-[260px]' ><a className='text-[1.2rem] text-white' href="#">Add New TV Show</a></li>
            </ul>
          </div>

          <div className='text-white' >
            <h3 className=' font-bold text-[1.4rem]' >COMMUNITY</h3>
            <ul className='list-none' >
              <li className='leading-[1.6rem] max-w-[260px]' ><a className='text-[1.2rem] text-white' href="#">Guidelines</a></li>
              <li className='leading-[1.6rem] max-w-[260px]' ><a className='text-[1.2rem] text-white' href="#">Discussions</a></li>
              <li className='leading-[1.6rem] max-w-[260px]' ><a className='text-[1.2rem] text-white' href="#">Leaderboard</a></li>
              <li className='leading-[1.6rem] max-w-[260px]' ><a className='text-[1.2rem] text-white' href="#">Twitter</a></li>
            </ul>
          </div>

          <div className='text-white' >
            <h3 className=' font-bold text-[1.4rem]' >LEGAL</h3>
            <ul className='list-none' >
              <li className='leading-[1.6rem] max-w-[260px]' ><a className='text-[1.2rem] text-white' href="#">Terms of Use</a></li>
              <li className='leading-[1.6rem] max-w-[260px]' ><a className='text-[1.2rem] text-white' href="#">API Terms of Use</a></li>
              <li className='leading-[1.6rem] max-w-[260px]' ><a className='text-[1.2rem] text-white' href="#">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        </div>
        <p className='text-center text-gray-700 text-[0.7rem]' >Build by khzver_62 (23204)</p>
      </div>
    </footer>
  )
}

export default Footer