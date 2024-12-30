import React, { useRef, useState } from 'react'
import { IoMdCloseCircle } from "react-icons/io";
import { toast } from 'react-toastify'

const LoactionPop = ({onClose}:any) => {
    
    const [selected, setselected] = useState('')
    //const [save, setSave] = useState('')

    const popRef = useRef<HTMLInputElement>(null);
    const closeModel = (e:any) => {
        if (popRef.current === e.target) {
            onClose();
        }
    }

    const handleSave = () => {
        if (selected) {
          fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/auth/changeCity`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({ city: selected })
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.ok) {
                toast(data.message, { type: 'success' })
                onClose();
                window.location.reload()
              }
            })
            .catch((err) => { toast(err.message, { type: 'error' }) })
        }
        else{
            onClose();
        }
      }
    
  return (
    <div ref={popRef} onClick={closeModel} className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
        <div className='flex flex-col gap-2'>
            <button onClick={onClose} className='text-2xl place-self-end text-red-600'><IoMdCloseCircle /></button>
            <div className='bg-white rounded-xl px-20 py-10 flex flex-col gap-5 items-center mx-4'>
                <h1 className='text-black text-3xl font-extrabold'>Select Your City</h1>
                <button onClick={() => setselected('Gurgaon')} className={`text-black border rounded-full px-4 py-4 hover:bg-[#ea7700] ${selected === 'Gurgaon' ? 'bg-[#ea7700]': ''} `}>Legend Cinemas Lounges Gurgaon</button>
                <button onClick={() => setselected('Bhiwadi')} className={`text-black border rounded-full px-4 py-4 hover:bg-[#ea7700] ${selected === 'Bhiwadi' ? 'bg-[#ea7700]': ''} `}>Legend Cinemas Bhiwadi</button>
                <button onClick={() => setselected('Faridabad')} className={`text-black border rounded-full px-4 py-4 hover:bg-[#ea7700] ${selected === 'Faridabad' ? 'bg-[#ea7700]': ''} `}>Legend Cinemas Faridabad</button>
                <button onClick={() => setselected('Zirakpur')} className={`text-black border rounded-full px-4 py-4 hover:bg-[#ea7700] ${selected === 'Zirakpur' ? 'bg-[#ea7700]': ''} `}>Legend Cinemas Zirakpur</button>
                <button onClick={handleSave} className='bg-[#ea7700] border border-transparent text-white px-4 py-2 rounded-lg'>Save</button>
            </div>
        </div>
    </div>
  )
}

export default LoactionPop