"use client"
import React from 'react'
import './SelectSeat.css'

const page = () => {

    const movie = {
        moviename: "Jawan",
        date: new Date(),
        language: "Hindi",
        type: "Action/Thriller",
        screens: [
            {
                name: "Audi 1",
                location: "Legend Cinemas Lounges, Mall 51"
            },
            {
                name: "Audi 2",
                location: "Legend Cinemas Lounges, Bhiwadi"
            },
            {
                name: "Audi 3",
                location: "Legend Cinemas Lounges, Faridabad"
            },
        ]
    }
    const screen = {
        name: 'screen 1',
        location: 'Legend Cinemas Lounges, Bhiwadi',
        timeslots: [
            {
                time: '10:00 AM',
                seats: [
                    {
                        type: 'platinum',
                        rows: [
                            {
                                rowname: 'H',
                                cols: [
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '10'
                                            },
                                        ]
                                    },
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '10'
                                            },
                                        ]
                                    },
                                ]
                            },
                            {
                                rowname: 'I',
                                cols: [
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '10'
                                            },
                                        ]
                                    },
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '10'
                                            },
                                        ]
                                    },
                                ]
                            },
                            {
                                rowname: 'J',
                                cols: [
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '10'
                                            },
                                        ]
                                    },
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '10'
                                            },
                                        ]
                                    },
                                ]
                            },
                        ],
                        price: 500
                    },
                    {
                        type: 'gold',
                        rows: [
                            {
                                rowname: 'K',
                                cols: [
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '10'
                                            },
                                        ]
                                    },
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '10'
                                            },
                                        ]
                                    },
                                ]
                            },
                            {
                                rowname: 'L',
                                cols: [
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '10'
                                            },
                                        ]
                                    },
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '10'
                                            },
                                        ]
                                    },
                                ]
                            },
                            {
                                rowname: 'M',
                                cols: [
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '10'
                                            },
                                        ]
                                    },
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '10'
                                            },
                                        ]
                                    },
                                ]
                            },
                        ],
                        price: 500
                    },
                    {
                        type: 'silver',
                        rows: [
                            {
                                rowname: 'N',
                                cols: [
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '10'
                                            },
                                        ]
                                    },
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '10'
                                            },
                                        ]
                                    },
                                ]
                            },
                            {
                                rowname: 'O',
                                cols: [
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '10'
                                            },
                                        ]
                                    },
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '10'
                                            },
                                        ]
                                    },
                                ]
                            },
                            {
                                rowname: 'P',
                                cols: [
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '10'
                                            },
                                        ]
                                    },
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '10'
                                            },
                                        ]
                                    },
                                ]
                            },
                        ],
                        price: 500
                    },
                ]
            },
            {
                time: '01:00 PM',
                seats: [
                    {
                        type: 'platinum',
                        rows: [
                            {
                                rowname: 'H',
                                cols: [
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '10'
                                            },
                                        ]
                                    },
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '10'
                                            },
                                        ]
                                    },
                                ]
                            },
                            {
                                rowname: 'I',
                                cols: [
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not -available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '10'
                                            },
                                        ]
                                    },
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '10'
                                            },
                                        ]
                                    },
                                ]
                            },
                            {
                                rowname: 'J',
                                cols: [
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not -available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '10'
                                            },
                                        ]
                                    },
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '10'
                                            },
                                        ]
                                    },
                                ]
                            },
                        ],
                        price: 500
                    },
                    {
                        type: 'gold',
                        rows: [
                            {
                                rowname: 'K',
                                cols: [
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '10'
                                            },
                                        ]
                                    },
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '10'
                                            },
                                        ]
                                    },
                                ]
                            },
                            {
                                rowname: 'L',
                                cols: [
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not -available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '10'
                                            },
                                        ]
                                    },
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '10'
                                            },
                                        ]
                                    },
                                ]
                            },
                            {
                                rowname: 'M',
                                cols: [
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not -available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '10'
                                            },
                                        ]
                                    },
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '10'
                                            },
                                        ]
                                    },
                                ]
                            },
                        ],
                        price: 500
                    },
                    {
                        type: 'silver',
                        rows: [
                            {
                                rowname: 'N',
                                cols: [
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '10'
                                            },
                                        ]
                                    },
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '10'
                                            },
                                        ]
                                    },
                                ]
                            },
                            {
                                rowname: 'O',
                                cols: [
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not -available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '10'
                                            },
                                        ]
                                    },
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '10'
                                            },
                                        ]
                                    },
                                ]
                            },
                            {
                                rowname: 'P',
                                cols: [
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not -available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '10'
                                            },
                                        ]
                                    },
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '10'
                                            },
                                        ]
                                    },
                                ]
                            },
                        ],
                        price: 500
                    },
                ]
            },
            {
                time: '04:00 PM',
                seats: [
                    {
                        type: 'platinum',
                        rows: [
                            {
                                rowname: 'H',
                                cols: [
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '10'
                                            },
                                        ]
                                    },
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '10'
                                            },
                                        ]
                                    },
                                ]
                            },
                            {
                                rowname: 'I',
                                cols: [
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not -available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '10'
                                            },
                                        ]
                                    },
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '10'
                                            },
                                        ]
                                    },
                                ]
                            },
                            {
                                rowname: 'J',
                                cols: [
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not -available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '10'
                                            },
                                        ]
                                    },
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '10'
                                            },
                                        ]
                                    },
                                ]
                            },
                        ],
                        price: 500
                    },
                    {
                        type: 'gold',
                        rows: [
                            {
                                rowname: 'K',
                                cols: [
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '10'
                                            },
                                        ]
                                    },
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '10'
                                            },
                                        ]
                                    },
                                ]
                            },
                            {
                                rowname: 'L',
                                cols: [
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not -available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '10'
                                            },
                                        ]
                                    },
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '10'
                                            },
                                        ]
                                    },
                                ]
                            },
                            {
                                rowname: 'M',
                                cols: [
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not -available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '10'
                                            },
                                        ]
                                    },
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '10'
                                            },
                                        ]
                                    },
                                ]
                            },
                        ],
                        price: 500
                    },
                    {
                        type: 'silver',
                        rows: [
                            {
                                rowname: 'N',
                                cols: [
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '10'
                                            },
                                        ]
                                    },
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '10'
                                            },
                                        ]
                                    },
                                ]
                            },
                            {
                                rowname: 'O',
                                cols: [
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not -available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '10'
                                            },
                                        ]
                                    },
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '10'
                                            },
                                        ]
                                    },
                                ]
                            },
                            {
                                rowname: 'P',
                                cols: [
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not -available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '10'
                                            },
                                        ]
                                    },
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '10'
                                            },
                                        ]
                                    },
                                ]
                            },
                        ],
                        price: 500
                    },
                ]
            },
            {
                time: '07:00 PM',
                seats: [
                    {
                        type: 'platinum',
                        rows: [
                            {
                                rowname: 'H',
                                cols: [
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '10'
                                            },
                                        ]
                                    },
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '10'
                                            },
                                        ]
                                    },
                                ]
                            },
                            {
                                rowname: 'I',
                                cols: [
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not -available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '10'
                                            },
                                        ]
                                    },
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '10'
                                            },
                                        ]
                                    },
                                ]
                            },
                            {
                                rowname: 'J',
                                cols: [
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not -available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '10'
                                            },
                                        ]
                                    },
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '10'
                                            },
                                        ]
                                    },
                                ]
                            },
                        ],
                        price: 500
                    },
                    {
                        type: 'gold',
                        rows: [
                            {
                                rowname: 'K',
                                cols: [
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '10'
                                            },
                                        ]
                                    },
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '10'
                                            },
                                        ]
                                    },
                                ]
                            },
                            {
                                rowname: 'L',
                                cols: [
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not -available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '10'
                                            },
                                        ]
                                    },
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '10'
                                            },
                                        ]
                                    },
                                ]
                            },
                            {
                                rowname: 'M',
                                cols: [
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not -available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '10'
                                            },
                                        ]
                                    },
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '10'
                                            },
                                        ]
                                    },
                                ]
                            },
                        ],
                        price: 500
                    },
                    {
                        type: 'silver',
                        rows: [
                            {
                                rowname: 'N',
                                cols: [
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '10'
                                            },
                                        ]
                                    },
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '10'
                                            },
                                        ]
                                    },
                                ]
                            },
                            {
                                rowname: 'O',
                                cols: [
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not -available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '10'
                                            },
                                        ]
                                    },
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '10'
                                            },
                                        ]
                                    },
                                ]
                            },
                            {
                                rowname: 'P',
                                cols: [
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not -available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '10'
                                            },
                                        ]
                                    },
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '10'
                                            },
                                        ]
                                    },
                                ]
                            },
                        ],
                        price: 500
                    },
                ]
            }
        ]
    }

    const generateSeatLayout = () => {
        const timeIndex = screen.timeslots.findIndex((t: any) => t.time === selectedTime.time)
        return screen.timeslots[timeIndex].seats.map((seatType: any, index: number) => (
            <div className='seat-type' key={index}>
                <h2>{seatType.type} - Rs. {seatType.price}</h2>
                <div className='seat-rows'>
                    {
                        seatType.rows.map((row: any, rowIndex: number) => (
                            <div className='seat-row' key={rowIndex}>
                                <p className='rowname'>{row.rowname}</p>
                                <div className='seat-cols'>
                                    {
                                        row.cols.map((cols: any, colIndex: number) => (
                                            <div className='seat-col' key={colIndex}>
                                                {
                                                    cols.seats.map((seat: any, seatIndex: number) => (
                                                        <div key={seatIndex}>
                                                            {
                                                                seat.status == 'available' &&
                                                                <span
                                                                onClick={() => selectdeselectseat({
                                                                    row: row.rowname,
                                                                    col: colIndex,
                                                                    seat_id: seat.seat_id,
                                                                    price: seatType.price
                                                                })}
                                                                    className={
                                                                        selectedSeats.find((s: any) => (
                                                                            s.row === row.rowname &&
                                                                            s.seat_id === seat.seat_id &&
                                                                            s.col === colIndex
                                                                        )) ? "seat-selected" : "seat-available"
                                                                    }
                                                                >
                                                                    {seatIndex + 1}
                                                                </span>
                                                            }
                                                            {
                                                                seat.status == 'not-available' &&
                                                                <span className='seat-unavailable'
                                                                >{seatIndex + 1}</span>
                                                            }
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        ))
    }

    const [selectedTime, setSelectedTime] = React.useState<any>(screen.timeslots[0])

    const [selectedSeats, setSelectedSeats] = React.useState<any[]>([
        {
            "row": "H",
            "col": 0,
            "seat_id": "1",
            "price": 500
        },
    ])
    const selectdeselectseat = (seat: any) => {
        const isselected = selectedSeats.findIndex((s: any) => {
            return s.row === seat.row && s.col === seat.col && s.seat_id === seat.seat_id
        })
        if (isselected) {
            setSelectedSeats(selectedSeats.filter((s: any) => s.seat_id !== seat.seat_id))
        }
        else {
            setSelectedSeats([...selectedSeats, seat])
        }
        console.log(selectedSeats , seat);
    }

    return (
        <div className='selectseatpage'>
            <div className='s1'>
                <div className='head'>
                    <h1>{movie.moviename} - {movie.language}</h1>
                    <h3>{movie.type}</h3>
                </div>
            </div>
            <div className="selectseat">
                <div className='timecont'>
                    {
                        screen.timeslots.map((time: any, index: number) => (
                            <h3 className={selectedTime.time === time.time ? 'time selected' : 'time'} key={index} onClick={() => setSelectedTime(time)}>
                                {time.time}
                            </h3>
                        ))
                    }
                </div>
                <div className='indicators'>
                    <div>
                        <span className='seat-unavailable'></span>
                        <p>Not available</p>
                    </div>
                    <div>
                        <span className='seat-available'></span>
                        <p>Available</p>
                    </div>
                    <div>
                        <span className='seat-selected'></span>
                        <p>Selected</p>
                    </div>
                </div>
                {generateSeatLayout()}
                <div className='totalcount'></div>
            </div>
        </div>
    )
}

export default page