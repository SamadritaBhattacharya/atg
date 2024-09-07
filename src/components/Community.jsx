import Image from 'next/image'
import React from 'react'

const Community = () => {
  return (
    <div className=' w-full p-4 lg:p-8'>
        <div className=' w-full lg:w-[98%] mx-auto rounded-xl bg-[#F7FDFF] space-y-2'>
            <div className=' p-8 space-y-0 lg:space-y-4'>
                <div className=' py-4 text-xl lg:text-5xl font-semibold'>
                    You <span className=' text-[#8064A2]'>Hobby</span> , Your <span className=' text-[#0096C8]'>Community...</span>
                </div>
                <button className=' bg-[#8064A2] p-2 rounded-xl text-white'>Get Started</button>
            </div>

            <div className='flex items-center justify-center'>
                <Image src={'/Group 99.png'} height={1200} width={1200} />
            </div>
        </div>
    </div>
  )
}

export default Community