"use client"
import React from 'react'
import Link from 'next/link'
import { BiUserCircle, BiSearch } from 'react-icons/bi'
import { RiArrowDropDownFill } from 'react-icons/ri'
import { assets } from '@/assets/assets.js'
import Image from 'next/image'
import './Navbar.css'
import LocationPopup from '@/popups/location/LocationPopup'

const Navbar = () => {

  const [showLocationPopup, setShowLocationPopup] = React.useState<boolean>(false)

  return (
    <nav>
      <div className='left'>
        <Image src={assets.logo} alt="logo" width={100} height={100} />
        <div className='searchbox'>
          <BiSearch className='searchbtn' />
          <input type="text" placeholder="Search For a Movie" />
        </div>
      </div>
      <div className='right'>
        <p onClick={() => setShowLocationPopup(true)} className='dropdown'>Gurgaon <RiArrowDropDownFill className="dropicon" /></p>
        <Link href="/" className='theme_btn1 linkstylenone'>Logout</Link>
        <Link href="/profile" className='linkstylenone'>
          <BiUserCircle className='theme_icon1' />
        </Link>
      </div>
      {
        showLocationPopup && <LocationPopup setShowLocationPopup={setShowLocationPopup} />
      }
    </nav>
  )
}

export default Navbar