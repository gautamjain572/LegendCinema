"use client"
import React from 'react'
import { FaRegHeart } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import DatePicker from "react-horizontal-datepicker";

const ShowTimeings = () => {

    const [selectedDate, setSelectedDate] = React.useState<any>(new Date())

    return (
        <div className='mx-20 h-[100vh] bg-gray-50'>
            <hr />
            <div className='flex items-center text-2xl mt-6 gap-2'>
                <FaRegHeart />
                <p className=''>Legend Cinema Lounges: Mall 51 gurgaon</p>
            </div>
            <div className='flex items-center text-lg mt-1 gap-2 mb-2'>
                <CiLocationOn className='text-2xl' />
                <p className=''>Mall Fifty One 104, Sector 51, Gurugram (Gurgaon), NCR 122003, India</p>
            </div>
            <hr />
            <div className='mt-2 mb-4'>
                <DatePicker
                    getSelectedDay={(date: any) => { setSelectedDate(date) }}
                    endDate={60}
                    selectDate={selectedDate}
                    labelFormat={"MMMM"}
                    color={"rgb(248, 68, 100)"}
                />
            </div>
            <hr />
            <div className='flex items-center my-4'>
                <div className='flex flex-col gap-1 ml-2'>
                    <p className='font-semibold'>Jawan : A legend story</p>
                    <p className='text-xs text-pink-600'>Hindi, <span className='text-black'>2D</span></p>
                </div>
                <div className='flex gap-3 ml-20'>
                    <button className='border-gray-600 hover:bg-pink-200 border px-5 py-2 text-green-500 text-sm rounded'>11:00 PM</button>
                    <button className='border-gray-600 hover:bg-pink-200 border px-5 py-2 text-green-500 text-sm rounded'>01:00 PM</button>
                    <button className='border-gray-600 hover:bg-pink-200 border px-5 py-2 text-green-500 text-sm rounded'>03:00 PM</button>
                    <button className='border-gray-600 hover:bg-pink-200 border px-5 py-2 text-green-500 text-sm rounded'>07:00 PM</button>
                </div>
            </div>
            <hr />
            <div className='flex items-center my-4'>
                <div className='flex flex-col gap-1 ml-2'>
                    <p className='font-semibold'>Jawan : A legend story</p>
                    <p className='text-xs text-pink-600'>Hindi, <span className='text-black'>2D</span></p>
                </div>
                <div className='flex gap-3 ml-20'>
                    <button className='border-gray-600 hover:bg-pink-200 border px-5 py-2 text-green-500 text-sm rounded'>11:00 PM</button>
                    <button className='border-gray-600 hover:bg-pink-200 border px-5 py-2 text-green-500 text-sm rounded'>01:00 PM</button>
                </div>
            </div>
            <hr />
            <div className='flex items-center my-4'>
                <div className='flex flex-col gap-1 ml-2'>
                    <p className='font-semibold'>Jawan : A legend story</p>
                    <p className='text-xs text-pink-600'>Hindi, <span className='text-black'>2D</span></p>
                </div>
                <div className='flex gap-3 ml-20'>
                    <button className='border-gray-600 hover:bg-pink-200 border px-5 py-2 text-green-500 text-sm rounded'>11:00 PM</button>
                    <button className='border-gray-600 hover:bg-pink-200 border px-5 py-2 text-green-500 text-sm rounded'>01:00 PM</button>
                    <button className='border-gray-600 hover:bg-pink-200 border px-5 py-2 text-green-500 text-sm rounded'>03:00 PM</button>
                    <button className='border-gray-600 hover:bg-pink-200 border px-5 py-2 text-green-500 text-sm rounded'>07:00 PM</button>
                    <button className='border-gray-600 hover:bg-pink-200 border px-5 py-2 text-green-500 text-sm rounded'>07:00 PM</button>
                </div>
            </div>
            <hr />
            <div className='flex items-center my-4'>
                <div className='flex flex-col gap-1 ml-2'>
                    <p className='font-semibold'>Jawan : A legend story</p>
                    <p className='text-xs text-pink-600'>Hindi, <span className='text-black'>2D</span></p>
                </div>
                <div className='flex gap-3 ml-20'>
                    <button className='border-gray-600 hover:bg-pink-200 border px-5 py-2 text-green-500 text-sm rounded'>11:00 PM</button>
                    <button className='border-gray-600 hover:bg-pink-200 border px-5 py-2 text-green-500 text-sm rounded'>01:00 PM</button>
                    <button className='border-gray-600 hover:bg-pink-200 border px-5 py-2 text-green-500 text-sm rounded'>03:00 PM</button>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default ShowTimeings