"use client";
import React, { useState } from 'react'
import MovieCard from './MovieCard';
import { MovieCardType } from '@/types/types';
import { FaCircleChevronLeft } from "react-icons/fa6";
import { FaCircleChevronRight } from "react-icons/fa6";


const MovieCaraousel = () => {

    const [user, setUser] = React.useState<any>(null)
    const getuser = async () => {
        fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/auth/getuser`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include'
        })
            .then((res) => res.json())
            .then((response) => {
                if (response.ok) {
                    setUser(response.data)
                    //console.log(response)
                }
                else {
                    window.location.href = "/auth/signin"
                }
            })
            .catch((error) => { console.log(error) })
    }

    const [movies, setMovies] = React.useState<MovieCardType[]>([])
    const getMovies = async () => {
        fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/movie/movies`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include'
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.ok) {
                    //console.log(data)
                    setMovies(data.data)
                }
            })
            .catch((err) => { console.log(err) })
    }

    //slider
    const [currIndex, setCurrIndex] = useState(0);
    const [cardsShow, setCardsShow] = useState(1);

    const next = () => {
        setCurrIndex((prevIndex) => (prevIndex + 1) % movies.length)
    }
    const prev = () => {
        setCurrIndex((prevIndex) => prevIndex === 0 ? movies.length - 1 : prevIndex - 1)
    }
    //slider

    React.useEffect(() => {
        getMovies()
        getuser()
    }, [])

    // React.useEffect(() => {
    //     const updateCards = () => {
    //         if (window.innerWidth >= 1024) {
    //             setCardsShow(movies.length)
    //         }
    //         else{
    //             setCardsShow(1)
    //         }
    //     }
    //     updateCards();
    //     window.addEventListener('resize' , updateCards);
    //     return () => window.removeEventListener('resize' , updateCards);
    // },[])

    return (
        <div className='sliderout m-10 flex gap-10 relative'>
            <div className='overflow-hidden'>
                <div className='flex gap-6 transition-transform duration-500 ease-in-out'
                    style={{ transform: `translateX(-${(currIndex * 50) / cardsShow}%)` }}>
                    {
                        movies.map((Movie) => {
                            return (
                                <div key={Movie._id}>
                                    <MovieCard Movie={Movie} userdata={user} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <button onClick={prev} className='p-3 bg-gray-200 rounded mr-2 absolute top-[40%] -left-5 '>
                <FaCircleChevronLeft />
            </button>
            <button onClick={next} className='p-3 bg-gray-200 rounded mr-2 absolute top-[40%] -right-6 '>
                <FaCircleChevronRight />
            </button>
        </div>
    )
}

export default MovieCaraousel