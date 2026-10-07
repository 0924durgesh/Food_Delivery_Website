import React from 'react'
import { MdFastfood } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { LuShoppingBag } from "react-icons/lu";

function Nav() {
  return (
    <div className='w-full h-[100x] flex justify-between  items-center px-8 rounded-md px-3 md:px-5'>
      <div className='p-[5px] rounded-[20%] shadow-xl w-[60px] h-[60px] flex justify-center items-center  bg-white' >
        <MdFastfood className='w-[30px] h-[30px] text-green-500' />
      </div>
      
        <form className='w-[45%] gap-5 h-[60px] flex items-center bg-white  rounded-md shadow-xl md:w-[70%]'>
          <FaSearch className='w-[20px] h-[20px] text-green-500' />
          <input type='text' placeholder='search items....' className=' outline-none text-2xl w-[100%]' />
        </form>
      
      <div className='p-[5px] rounded-[20%] shadow-xl w-[60px] h-[60px] flex justify-center items-center  bg-white relative'>
        <span className='absolute top-0 right-2 text-green-500 font-bold'>0</span>
        <LuShoppingBag className='w-[30px] h-[30px] text-green-500' />
      </div>

    </div>

  )
}

export default Nav