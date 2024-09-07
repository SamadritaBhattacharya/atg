import Image from 'next/image'
import React from 'react'

const Community = () => {
  return (
    <div className=' w-full p-4 lg:p-8'>
        <div className=' w-full lg:w-[98%] mx-auto rounded-lg bg-neutral-200'>
            <div className=' p-8'>
                <div className=' py-4 text-xl lg:text-5xl font-semibold'>
                    You <span className=' text-purple-700'>Hobby</span> , Your <span className=' text-sky-500'>Community...</span>
                </div>
                <button className=' bg-purple-700 p-2 rounded-xl text-white opacity-80'>Get Started</button>
            </div>

            <div className='flex items-center justify-center'>
                <Image src={'/Group 99.png'} height={1200} width={1200} />
            </div>
        </div>
    </div>
  )
}

export default Community