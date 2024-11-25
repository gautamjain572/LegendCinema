"use client"
import React from 'react'
import DatePicker from "react-horizontal-datepicker";
import './BuyTicketsPage.css'
import Link from 'next/link';
import { usePathname, useParams } from 'next/navigation'

const BuyTicketsPage = () => {

    const pathname = usePathname()
    const params = useParams();
    const [selectedDate, setSelectedDate] = React.useState<any>(new Date())
    const { movieid, cityname } = params
    const [movie, setMovie] = React.useState<any>(null)
    const [theatres, setTheatres] = React.useState<any>(null)

    const getMovie = async () => {
        fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/movie/movies/${movieid}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include'
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.ok) {
                    //console.log(data)
                    setMovie(data.data)
                }
            })
            .catch((err) => console.log(err))
    }

    const getTheatres = async (date: string) => {
        let movieId = movieid
        let city = cityname
        fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/movie/screensbymovieschedule/${city}/${date}/${movieId}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include'
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.ok) {
                    //console.log(data)
                    setTheatres(data.data)
                }
                else {
                    console.log(data)
                }
            })
            .catch((err) => console.log(err))
    }

    React.useEffect(() => {
        getMovie()
    }, [])

    React.useEffect(() => {
        getTheatres(selectedDate)
    }, [selectedDate])

    // const movie = {
    //     moviename: 'Jawan',
    //     screen: '4Dx',
    //     date: new Date(),
    //     language: 'Hindi',
    //     type: 'Action/Thriller',
    //     screens: [
    //         {
    //             name: 'Screen 1',
    //             location: 'PVR Cinemas, Forum Mall, Koramangala'
    //         },
    //         {
    //             name: 'Screen 2',
    //             location: 'PVR Cinemas, Forum Mall, Koramangala'
    //         },
    //         {
    //             name: 'Screen 3',
    //             location: 'PVR Cinemas, Forum Mall, Koramangala'
    //         }
    //     ]
    // }

    return (
        <>
            {
                movie &&
                <div className='buytickets'>
                    <div className='s1'>
                        <div className='head'>
                            <h1>{movie.title} - {movie.language}</h1>
                            <h3>{movie.genre.join(",")}</h3>
                        </div>
                        <DatePicker
                            getSelectedDay={(date: any) => { setSelectedDate(date) }}
                            endDate={100}
                            selectDate={selectedDate}
                            labelFormat={"MMMM"}
                            color={"rgb(248, 68, 100)"}
                        />
                    </div>
                    {
                        theatres && theatres.length > 0 &&
                        <div className='screens'>
                            {
                                theatres.map((screen: any, index: any) => {
                                    let screenid = screen._id
                                    return (
                                        <div className='screen' key={index}>
                                            <div>
                                                <h2>{screen.name}</h2>
                                                <h3>{screen.location}</h3>
                                            </div>
                                            <Link href={`${pathname}/${screenid}?date=${selectedDate}`} className='theme_btn1 linkstylenone'>Select</Link>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    }
                </div>
            }
        </>
    )
}

export default BuyTicketsPage 