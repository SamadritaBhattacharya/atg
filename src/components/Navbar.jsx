import { Bell, Bookmark, ChevronDown, Search, ShoppingCart, Sparkles, Menu, Navigation } from 'lucide-react'
import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-slate-50 border-slate-200 shadow-lg w-full h-16 flex items-center justify-between'>
      <div className='w-[98%] mx-auto h-[90%] flex items-center justify-between'>
        
        {/* Logo */}
        <div className='w-[18%]'>
          <img src='./Logo.png' alt='Logo' />
        </div>

        {/* Search Bar (Hidden on small screens) */}
        <div className='hidden lg:flex w-[28%] text-lg bg-stone-200 rounded-full justify-between'>
          <span className='p-2 ml-2 font-medium text-zinc-600 text-xl'>Search</span>
          <span className='bg-purple-800 py-2 px-3 flex justify-center items-center rounded-r-full'>
            <Search size={30} className='text-white' />
          </span>
        </div>

        {/* Explore and Hobbies Links (Hidden on small screens) */}
        <div className='hidden lg:flex w-[22%] gap-2 justify-between'>
          <div className='flex items-center gap-1'>
            <span className='bg-purple-800 rounded-full p-1'>
              <Navigation size={24} className='text-white' />
            </span>
            <span className='text-base font-bold text-zinc-700'>Explore</span>
            <ChevronDown size={20} className='text-purple-800' />
          </div>
          <div className='flex items-center gap-1'>
            <span className='bg-purple-800 rounded-full p-1'>
              <Sparkles size={24} className='text-white' />
            </span>
            <span className='text-base font-bold text-zinc-700'>Hobbies</span>
            <ChevronDown size={20} className='text-purple-800' />
          </div>
        </div>

        {/* Buttons (Sign In, Bookmark, Bell, Cart) */}
        <div className='hidden lg:flex w-[20%] justify-between items-center'>
          <Bookmark size={30} className='text-purple-900' />
          <Bell size={30} className='text-purple-900' />
          <ShoppingCart size={30} className='text-purple-900' />
          <div className='rounded-xl text-xl p-2 font-medium text-purple-900 ring-purple-600 ring-1'>
            Sign In
          </div>
        </div>

        {/* Mobile Hamburger Menu & Icons */}
        <div className='flex lg:hidden gap-4 items-center'>
          <Search size={30} className='text-purple-800' />
          <Bell size={30} className='text-purple-800' />
          <Menu size={30} className='text-purple-800' />
        </div>

      </div>
    </div>
  );
}

export default Navbar;
