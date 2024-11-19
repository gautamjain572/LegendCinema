"use client"
import React from 'react'
import { BsShare } from 'react-icons/bs'
import { BsFillStarFill } from 'react-icons/bs';
import './MoviePage.css'
import MovieCaraousel from '@/components/MovieCard/MovieCaraousel';
import CelebCard from '@/components/CelebCrad/CelebCard';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const MoviePage = () => {
    const pathname = usePathname();

    const movie = {
        wideposter: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/the-sabarmati-report-et00383800-1730284391.jpg",
        portraitposter: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/the-sabarmati-report-et00383800-1730284391.jpg",
        title: "Jawan",
        description: "Inspired by true events that took place in the `Sabarmati Express` on the morning of 27 Feb 2002.",
        rating: 8.5,
        halls: [
            "2D",
            "3D"
        ],
        langauges: [
            "telugu",
            "tamil",
            "Hindi",
            "English",
        ],
        duration: "2h 15m",
        type: "Action/Thriller",
        realseDate: "Sep 3 2024",
        cast: [
            {
                _id: "1",
                name: "Shah Rukh Khan",
                role: "Actor",
                imageUrl: "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/vikrant-massey-34299-24-03-2017-13-57-50.jpg"
            },
            {
                _id: "2",
                name: "Shah Rukh Khan",
                role: "Actor",
                imageUrl: "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/vikrant-massey-34299-24-03-2017-13-57-50.jpg"
            },
            {
                _id: "3",
                name: "Shah Rukh Khan",
                role: "Actor",
                imageUrl: "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/vikrant-massey-34299-24-03-2017-13-57-50.jpg"
            },
        ],
        crew: [
            {
                _id: "1",
                name: "Shah Rukh Khan",
                role: "Actor",
                imageUrl: "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/vikrant-massey-34299-24-03-2017-13-57-50.jpg"
            },
            {
                _id: "2",
                name: "Shah Rukh Khan",
                role: "Actor",
                imageUrl: "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/vikrant-massey-34299-24-03-2017-13-57-50.jpg"
            },
            {
                _id: "3",
                name: "Shah Rukh Khan",
                role: "Actor",
                imageUrl: "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/vikrant-massey-34299-24-03-2017-13-57-50.jpg"
            },
        ],
    }


    return (
        <div className='moviepage'>

            <div className='c1' style={{ backgroundImage: `url(${movie.wideposter})` }}>
                <div className='c11'>
                    <div className='left'>
                        <div className='movie_poster' style={{ backgroundImage: `url(${movie.portraitposter})` }}><p>In cinemas</p></div>
                        <div className='movie_details'>
                            <p className='title'>{movie.title}</p>
                            <p className='rating flex items-center'><BsFillStarFill className='star' />&nbsp;{movie.rating}/10</p>
                            <div className='halls_languages'>
                                <p className='halls'>
                                    {movie.halls.map((halls, index) => (
                                        <span key={index}>{halls} </span>
                                    ))}
                                </p>
                                <p className='languages'>
                                    {movie.langauges.map((languages, index) => (
                                        <span key={index}>{languages}  </span>
                                    ))}
                                </p>
                            </div>
                            <p className='duration_type_releasedat'>
                                <span className='duration'>{movie.duration}</span>
                                <span>•</span>
                                <span className='type'>{movie.type}</span>
                                <span>•</span>
                                <span className='releasedat'>{movie.realseDate}</span>
                            </p>
                            <Link href={`${pathname}/buytickets`} className='linkstylenone'>
                            <button className='bookbtn'>Book Tickets</button>
                            </Link>
                        </div>
                    </div>
                    <div className="right">
                        
                        <button className='sharebtn flex items-center gap-2'><BsShare className='shareicon' />Share</button>
                        
                    </div>
                </div>
            </div>

            <div className='c2'>
                <h1>About the Movie</h1>
                <p>{movie.description}</p>
                <div className='line'></div>
                <h1>Cast</h1>
                <div className='circlecardslider flex '>
                    {
                        movie.cast.map((cast, index) => {
                            return (
                                <div key={index}>
                                    <CelebCard {...cast} />
                                </div>
                            )
                        })
                    }
                </div>
                <div className='line'></div>
                <h1>Crew</h1>
                <div className='circlecardslider flex'>
                {
                        movie.cast.map((cast, index) => {
                            return (
                                <div key={index}>
                                    <CelebCard {...cast} />
                                </div>
                            )
                        })
                    }
                </div>
                <div className='line'></div>
                <div className='line'></div>
                <h1>Your might also like</h1>
                <MovieCaraousel />
            </div>

        </div>
    )
}

export default MoviePage