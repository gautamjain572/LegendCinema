import React from 'react'
import { CelebrityCardType } from '@/types/types'
import Image from 'next/image'
import './CelebCard.css'


const CelebCard = (data:CelebrityCardType) => {
  
  return (
    <div className='celebcard'>
        <Image src={data.celebImage} alt={data.celebName} width={200} height={200}/>
        <h3>{data.celebName}</h3>
        <h4>{data.celebRole}</h4>
    </div>
  )
}

export default CelebCard