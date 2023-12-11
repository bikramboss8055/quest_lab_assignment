import React from 'react'
import img from '../assets/banner-image.jpg'
import { IoArrowForwardSharp,  } from "react-icons/io5";

const Header = () => {
    return (
        <>
            <div className=' w-100% h-[150px]  bg-gradient-to-r from-blue-300 via-pink-300 to-yellow-300 px-[150px] pt-[20px] overflow-hidden flex  gap-12'>
                <div className='w-auto  '>
                    <img width={'250px'} src={img} alt="" />
                </div>
                <div className='w-auto  flex justify-between gap-14'>
                    <div className='  w-full flex flex-col justify-center px-5'>
                        <p className='font-bold text-3xl '>Meet Fin, a breakthrough AI bot.</p>
                        <p className='font-sans text-3xl'>Resolve 50% of your support questions. Instantly.</p>
                    </div>
                    <div className=' grid content-center '>
                        <button className='bg-black text-white w-[150px] px-4 py-2 rounded-lg flex justify-between font-semibold'> Learn more <span className='flex '><IoArrowForwardSharp size={'1.5em'} /> </span> </button>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Header
