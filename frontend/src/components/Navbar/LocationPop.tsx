import React, { useRef, useState } from 'react'
import { IoMdCloseCircle } from "react-icons/io";

const LoactionPop = ({onClose}:any) => {
    
    const [selected, setselected] = useState('')
    const [save, setSave] = useState('')

    const popRef = useRef<HTMLInputElement>();
    const closeModel = (e:any) => {
        if (popRef.current === e.target) {
            onClose();
        }
    }
    console.log(save);
    

  return (
    <div ref={popRef} onClick={closeModel} className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
        <div className='flex flex-col gap-2'>
            <button onClick={onClose} className='text-2xl place-self-end text-red-600'><IoMdCloseCircle /></button>
            <div className='bg-white rounded-xl px-20 py-10 flex flex-col gap-5 items-center mx-4'>
                <h1 className='text-3xl font-extrabold'>Select Your City</h1>
                <button onClick={() => setselected('L')} className={`border rounded-full px-4 py-4 hover:bg-[#ea7700] ${selected === 'L' ? 'bg-[#ea7700]': ''} `}>Legend Cinemas Lounges</button>
                <button onClick={() => setselected('B')} className={`border rounded-full px-4 py-4 hover:bg-[#ea7700] ${selected === 'B' ? 'bg-[#ea7700]': ''} `}>Legend Cinemas Bhiwadi</button>
                <button onClick={() => setselected('F')} className={`border rounded-full px-4 py-4 hover:bg-[#ea7700] ${selected === 'F' ? 'bg-[#ea7700]': ''} `}>Legend Cinemas Faridabad</button>
                <button onClick={() => {setSave(selected);onClose()}} className='bg-[#ea7700] border border-transparent text-white px-4 py-2 rounded-lg'>Save</button>
            </div>
        </div>
    </div>
  )
}

export default LoactionPop