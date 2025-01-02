import React from 'react'
import { assets } from '@/assets/assets.js'
import Image from 'next/image'
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";


const Footer = () => {
    return (
        <footer className='bg-gradient-to-r from-black to-blue-950 text-white px-20'>
            <div className='flex flex-col sm:grid grid-cols-[1fr_1fr] gap-14 text-sm'>
                <div className='mt-4'>
                    <Image src={assets.logo} alt="" className=' w-28 mb-3' />
                    <p className='text-wrap md:w-2/3 text-gray-600'>
                        Head Office -  6,Legend Square,Infocity-II,Sector-33,Gurugram-122003
                    </p>
                    <div className='flex justify-center items-center gap-6 mt-4 w-3/5'>
                        <FaInstagramSquare className='text-4xl cursor-pointer'/>
                        <FaFacebookSquare className='text-4xl cursor-pointer'/>
                        <BsTwitterX className='text-4xl cursor-pointer'/>
                    </div>
                </div>
                <div className='mt-4'>
                    <p className='text-xl font-medium mb-2'>Cinemas - </p>
                    <ul className='flex flex-col gap-4  text-gray-600'>
                        <li>Legend Cinemas Lounges - 2nd Floor, Mall Fifty One, Sector 51, Gurugram</li>
                        <li>Legend Cinemas Bhiwadi - 3rd Floor, Legend Centra Mall, Bhiwadi, Rajasthan</li>
                        <li>Legend Cinemas Faridabad - 2nd Floor, SRS Mall, Faridabad, Haryana</li>
                        <li>Legend Cinemas Zirakpur - Paras Downtown mall , Zirakpur, Punjab</li>
                    </ul>
                </div>
            </div>
            <div className='flex flex-col sm:flex-row justify-between items-center'>
                <p className='py-5 text-sm text-center'>Copyright 2024@ Legendcinema.com - All Right Reserved</p>
                <ul className='flex gap-6 text-gray-400 cursor-pointer'>
                    <li>Home</li>
                    <li>Terms & Condition</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer