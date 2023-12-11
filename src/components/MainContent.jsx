import React from 'react'
import TwoButtons from './TwoButtons'
import chaticon from '../assets/chat.png'

const MainContent = () => {
    return (
        <div className='w-100% h-[65vh] bg-[#041527] px-[200px] py-[30px] text-white flex flex-col gap-8'>
            <div>
                <p className='text-[95px] leading-none tracking-wide font-serif text-center'>The only AI customer service solution you need</p>
            </div>
            <div className='px-[170px]'>
                <p className='text-[25px] text-center'>The only solution that combines an AI chatbot, help desk, and proactive support—so you can keep costs low, support teams happy, and customers satisfied.</p>
            </div>
            <div className='flex justify-center'>
                <TwoButtons/>
            </div>
            <div>
                <button  className='absolute bottom-10 right-10 bg-blue-600 p-4 rounded-full'><img width={'30px'}  src={chaticon} alt="" /> </button>
            </div>

        </div>
    )
}

export default MainContent
