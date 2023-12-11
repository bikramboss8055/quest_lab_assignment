import React from 'react'
import logo from '../assets/intercom-2.svg'
import { IoIosArrowDown } from "react-icons/io";
import TwoButtons from './TwoButtons';


const Navbar = () => {
  return (
    <>


      <div className='w-100% h-[107px] bg-[#041527] px-[150px] py-2 '>

        <div className='w-100% flex  justify-end text-white gap-5 font-semibold mb-1'>
          <p>Contact Sales</p>
          <p>Sign In</p>
        </div>
        <div className='w-100% h-[60px]  flex justify-between items-center gap-4  text-white '>
          <div className='flex items-center gap-12'>
            <div className=' flex gap-4  items-center'>
              <img width={'40px'} src={logo} alt="" />
              <p className='font-bold text-[20px] '>INTERCOM</p>
            </div>
            <div className=' flex gap-4 px-4 font-semibold'>
              <p className='flex items-center gap-1 '>Products <IoIosArrowDown /> </p>
              <p className='flex items-center gap-1'>Resources <IoIosArrowDown /> </p>
              <p>Customers</p>
              <p>Pricing</p>
            </div>
          </div>
          <div className=''>
            <TwoButtons />
          </div>
        </div>


      </div>
      <div className='w-full h-[10px] relative bg-gradient-to-t from-gray-900 from-10% via-gray-700  via-100% to-gray-100 '></div>
    </>
  )
}

export default Navbar
