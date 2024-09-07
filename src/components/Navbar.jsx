import { Bell, Bookmark, ChevronDown, Search, ShoppingCart, Sparkles } from 'lucide-react'
import React from 'react'

const Navbar = () => {
  return (
    <div className='hidden  bg-slate-50 border-slate-200 shadow-lg w-full h-16 lg:flex items-center justify-between'>
        <div className='  w-[98%] mx-auto h-[90%]  flex items-center   '>
          <div className='  mx-auto w-[18%]'>
            <img src='./Logo.png' />
          </div>
          <div className='  mx-auto w-[28%] text-lg bg-stone-200    rounded-full flex justify-between'>
            <span className=' p-2 ml-2 font-medium text-zinc-600 text-xl'>Search</span>
            <span className=' bg-purple-800 py-2 px-3 flex justify-center items-center rounded-r-full'>
              <Search  size={30} className='text-white' />
            </span>
            

          </div>

          <div className='  flex mx-auto w-[22%] gap-2  justify-between'>
            <div className=' gap-2  flex  items-center justify-center '>
            <span className=' bg-purple-800 rounded-full p-2'><Sparkles size={24} className=' text-white'  /></span>
            
            <span className=' text-xl font-bold text-zinc-700'>Explore</span> 
            <span className=' font-bold text-xl'>
              <ChevronDown size={24} className=' text-purple-800 ' />
            </span>
          </div>

          <div className=' gap-2  flex  items-center justify-center '>
            <span className=' bg-purple-800 rounded-full p-2'><Sparkles size={24} className=' text-white'  /></span>
            
            <span className=' text-xl font-bold text-zinc-700'>Hobbies</span> 
            <span className=' font-bold text-xl'>
              <ChevronDown size={24} className=' text-purple-800 ' />
            </span>
          </div>


          </div>
          
          <button className='  mx-auto w-[20%] justify-between flex items-center  '>
            <Bookmark size={30} className=' fill-purple-900 text-transparent' />
            <Bell size={30} className=' fill-purple-900 text-transparent' />
            <ShoppingCart size={30} className=' fill-purple-900 text-transparent' />
            <div className='  rounded-xl text-xl p-2 font-medium text-purple-900 ring-purple-600 ring-1  '>
              Sign In
            </div>
            
          </button>

        </div>
        
    </div>
  )
}

export default Navbar