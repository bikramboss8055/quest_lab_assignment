import React from 'react'
import { IoArrowForwardSharp, } from "react-icons/io5";

const TwoButtons = () => {
    return (
        <div className='flex gap-4 text-white'>
            <button className='bg-[#0057ff] px-4 py-2 rounded-full font-semibold flex items-center gap-2'> Start free trail <IoArrowForwardSharp /> </button>
            <button className='border-2 border-solid  px-4 py-2 rounded-full font-semibold'> View demo</button>

        </div>
    )
}

export default TwoButtons
