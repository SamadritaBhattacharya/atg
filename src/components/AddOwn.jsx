import { PlusCircle } from 'lucide-react'
import React from 'react'

const AddOwn = () => {
  return (
    <div className=' w-full lg:p-4 p-2 flex items-center '>
        <div className=' bg-gray-200 w-full lg:w-[96%] mx-auto rounded-xl p-4'>
            <div className='   p-2 flex items-center gap-3'>
                <PlusCircle size={30} className=' fill-blue-500 rounded-full text-white font-normal ' />
                <div className=' text-2xl font-bold'>
                    Add your own
                </div>
                
            </div>

            <div className=' py-2'>
                <p className=' text-sm lg:text-xl'>
                Are you a teacher or expert? Do you sell or rent out equipment, venue or event tickets? Or, you know someone who should be on hobbycue? Go ahead and Add your Own page
                </p>
            </div>
            <div className=' p-4'>
                <button className=' bg-gray-50 ring-1 ring-purple-900 rounded-xl py-2 px-6 text-base font-medium'>
                    Add new
                </button>
            </div>
        </div>
    </div>
  )
}

export default AddOwn