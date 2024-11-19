import React from 'react'
import { MovieCardType } from '@/types/types';
import { useRouter } from 'next/navigation';
import { BsFillStarFill } from 'react-icons/bs';
import './MovieCard.css'

const MovieCard = (data: MovieCardType) => {
  const { _id, imageUrl, type, title, rating, } = data;
  const city = "guragon"
  const router = useRouter();

  return (
    <div className='moviecard justify-center items-center w-[230px]' onClick={() => { router.push(`/${city}/movies/${title}`) }}>
      <div className='movieimg' style={{ backgroundImage: `url(${imageUrl})` }}>
        <p className='rating'><BsFillStarFill className='star' />&nbsp;&nbsp;{rating} / 10</p>
      </div>
      <div className='details'>
        <p className='title'>{title}</p>
        <p className='type'>{type}</p>
      </div>
    </div>
  )
}

export default MovieCard