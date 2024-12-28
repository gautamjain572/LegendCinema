"use client"
import React, { useState } from 'react'
import { assets } from '@/assets/assets.js'
import Link from 'next/link'
import NavLink from 'next/link'
import { IoMdHome } from "react-icons/io";
import { MdMovie } from "react-icons/md";
import { BiCameraMovie } from "react-icons/bi";
import { MdOutlineContactless } from "react-icons/md";
import { RiSearch2Line } from "react-icons/ri";
import { TfiLocationPin } from "react-icons/tfi";
import { MdArrowDropDown } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { RiMenu2Fill } from "react-icons/ri";
import LoactionPop from './LocationPop';
import Image from 'next/image.js';
import { usePathname } from "next/navigation";

const Navbar2 = () => {

  const [visible, setVisible] = useState(false);
  const [showPop, setShowPop] = useState(false);
  const pathname = usePathname();

  const [user, setUser] = React.useState<any>(null)
  const [loggedIn, setLoggedIn] = React.useState<boolean>(false)

  const getuser = async () => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/auth/getuser`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include'
    })
      .then((res) => res.json())
      .then((response) => {
        //console.log(response)
        setUser(response.data)
      })
      .catch((error) => { console.log(error) })
  }

  const handleLogout = async () => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/auth/logout`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include'
    })
      .then((res) => res.json())
      .then((response) => {
        //console.log(response)
        if (response.ok) {
          window.location.href = "/auth/signin"
        }
      })
      .catch((error) => {
        console.log(error)
        window.location.href = "/auth/signin"
      })
  }

  const checkLogin = async () => {
    // let authToken = await getCookie('authToken')
    // let refreshToken = await getCookie('refreshToken')
    // console.log(authToken, refreshToken)

    fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/auth/checklogin`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include'
    })
      .then((res) => res.json())
      .then((response) => {
        //console.log(response)
        if (response.ok) {
          setLoggedIn(true)
        }
        else {
          setLoggedIn(false)
        }
      })
      .catch((error) => {
        console.log(error)
        setLoggedIn(false)
      })
  }

  React.useEffect(() => {
    checkLogin()
    getuser()
  }, [])


  return (
    <nav className='flex justify-between items-center px-2 sm:px-10 p-3 sticky hrefp-0 z-50 bg-white'>
      <Link href='/' ><Image src={assets.logo} className='w-24 mt-1' alt='logo' /></Link>

      <ul className='hidden sm:flex gap-2 text-sm'>
        <NavLink href='/' className={`flex items-center gap-1 py-1 px-3 rounded-3xl hover:bg-gray-200 text-black font-bold ${pathname === '/' ? 'bg-orange-400' : ''}`}>
          <IoMdHome />
          <p>Home</p>
        </NavLink>
        <NavLink href='/showtimigs' className={`flex items-center gap-1 py-1 px-3 rounded-3xl hover:bg-gray-200 text-black font-bold ${pathname === '/showtimigs' ? 'bg-orange-400' : ''}`}>
          <BiCameraMovie />
          <p>Showtimings</p>
        </NavLink>
        <NavLink href='/profile' className={`flex items-center gap-1 py-1 px-3 rounded-3xl hover:bg-gray-200 text-black font-bold ${pathname === '/profile' ? 'bg-orange-400' : ''}`}>
          <MdMovie />
          <p>Profile</p>
        </NavLink>
        <NavLink href='/contact' className={`flex items-center gap-1 py-1 px-3 rounded-3xl hover:bg-gray-200 text-black font-bold ${pathname === '/contact' ? 'bg-orange-400' : ''}`}>
          <MdOutlineContactless />
          <p>Contact</p>
        </NavLink>
      </ul>


      <div className='flex items-center gap-2'>
        <div className='hidden sm:visible sm:flex items-center border border-gray-300 rounded-md pl-2 cursor-pointer'>
          < RiSearch2Line className='text-black' />
          <input className=' text-sm h-9 w-32 pr-2 pl-2 outline-0 text-black' type="text" placeholder='Search...' />
        </div>

        <div onClick={() => setShowPop(true)} className='border px-2 py-1.5 bg-slate-500 rounded-md'>
          <div className='flex justify-center items-center gap-1 cursor-pointer'>
            <TfiLocationPin />
            <p className='flex items-center'>
            {user ? user.city : "Select City"}<MdArrowDropDown />
            </p>
          </div>
        </div>
        <div className='flex items-center gap-1 border px-2 py-1.5 bg-orange-400 rounded-md cursor-pointer'>
          {
            loggedIn
              ? <button onClick={handleLogout} className='flex items-center'>Logout</button>
              : <Link href="/auth/signin" className='flex items-center gap-1' ><FaUserCircle />Login</Link>
          }
        </div>
      </div>

      {/* for small screen */}
      <span className='sm:hidden text-2xl'>< RiSearch2Line /></span>
      <span onClick={() => setVisible(true)} className='w-5 cursor-pointer sm:hidden text-2xl mr-2'><RiMenu2Fill /></span>

      <div className={`absolute hrefp-0 right-0 bothrefm-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
        <div className='flex flex-col text-gray-600'>
          <div onClick={() => setVisible(false)} className='flex items-center gap-2 p-3 cursor-pointer'>
            <span className='h-4 '><IoIosArrowBack /></span>
            <p>Back</p>
          </div>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' href='/'>Home</NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' href='/showtimings'>Showtimings</NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' href='/cinemas'>Movies</NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' href='/contact'>Contact</NavLink>
        </div>
      </div>
      {showPop && <LoactionPop onClose={() => setShowPop(false)} />}
    </nav>
  )
}

export default Navbar2