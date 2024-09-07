"use client"
import { Bell, Bookmark, ChevronDown, Search, ShoppingCart, Sparkles, Menu, Navigation } from 'lucide-react'
import Image from 'next/image';
import React, { useState } from 'react'

const Navbar = () => {
  const [isExploreOpen, setIsExploreOpen] = useState(false);

  const toggleExploreDropdown = () => {
    setIsExploreOpen(!isExploreOpen);
  };

  return (
    <div className='bg-white border-slate-200 shadow-lg w-full h-16 flex items-center justify-between'>
      <div className='w-[96%] mx-auto h-[90%] flex items-center justify-between'>
        
        <div className='lg:w-[18%] w-[60%]'>
          <Image src={'/Logo.png'} height={300} width={300} />
        </div>

        <div className='hidden lg:flex w-[26%] text-lg bg-stone-200 rounded-full justify-between'>
          <input 
            placeholder='Search'
            className='p-2 ml-2 font-medium focus:bg-neutral-200 text-zinc-600 text-xl bg-transparent'
          />
          <span className='bg-[#8064A2] py-2 px-3 flex justify-center items-center rounded-r-full'>
            <Search size={30} className='text-white' />
          </span>
        </div>

        {/* Explore and Hobbies Links (Hidden on small screens) */}
        <div className='hidden lg:flex w-[22%] gap-2 justify-between'>
          <div className='relative flex items-center gap-1'>
            <span className='bg-[#8064A2] rounded-full p-1'>
              <Navigation size={24} className='text-white' />
            </span>
            <button  onClick={toggleExploreDropdown} className='flex gap-2'>
            <span className='text-base font-bold text-zinc-700'>Explore</span>
            <ChevronDown size={20} className='text-purple-800' />
            
            {/* Dropdown for Explore */}
            {isExploreOpen && (
              <div className='absolute top-8 left-0 bg-white shadow-md w-48 rounded-md'>
                <ul className='py-2 text-zinc-700'>
                  <li className='px-4 py-2 hover:bg-purple-100'>People - Community</li>
                  <hr />
                  <li className='px-4 py-2 hover:bg-purple-100'>Places - Venues</li><hr />
                  <li className='px-4 py-2 hover:bg-purple-100'>Programs - Events</li><hr />
                  <li className='px-4 py-2 hover:bg-purple-100'>Products - Store</li><hr />
                  <li className='px-4 py-2 hover:bg-purple-100'>Blogs</li>
                </ul>
              </div>
            )}
            </button>
          </div>

          <button>

          <div className='flex items-center gap-1'>
            <span className='bg-[#8064A2]  rounded-full p-1'>
              <Sparkles size={24} className='text-white' />
            </span>
            <span className='text-base font-bold text-zinc-700'>Hobbies</span>
            <ChevronDown size={20} className='text-purple-800' />
          </div></button>
        </div>

        {/* Buttons (Sign In, Bookmark, Bell, Cart) */}
        <div className='hidden lg:flex w-[20%] justify-between items-center'>
          <Bookmark size={30} className='fill-[#8064A2] text-transparent' />
          <Bell size={30} className='fill-[#8064A2] text-transparent' />
          <ShoppingCart size={30} className='fill-[#8064A2] text-transparent' />
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
