import React from 'react'
import MainLogo from '../assets/logo.svg'
import Slogan from '../assets/slogantext.svg'

const Naveth = () => {
  return (
    <>
    <nav className='flex flex-row w-full h-[6rem]'>
        {/* Logo */}
        <div className='w-[26rem] flex justify-center items-center content-center'>
            <img src={MainLogo} className='w-[8rem]' alt="" />
        </div>
        {/* slogan-text */}
        <div className='w-[70rem]  flex justify-center items-center content-center '>
            <img src={Slogan} className='w-[28rem]' alt="" />
        </div>
        {/* signup and login buttons */}
        <div className='w-[24rem] flex flex-row gap-5 items-center justify-center'>
            <button className='bg-black w-[11rem] rounded-full h-[4rem]'>Log In</button>
            <button className='bg-black w-[11rem] rounded-full h-[4rem]'>Sign Up</button>
        </div>
    </nav>
    </>
  )
}

export default Naveth