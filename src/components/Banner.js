import React, { useEffect, useState } from 'react'
import axios from '../axios'
import { API_KEY, imageUrl } from '../constants/Constants'
import './Banner.css'

function Banner() {
    const [movie, setMovie] = useState([])
    useEffect(() => {
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
            console.log(response.data.results[7])
            setMovie(response.data.results.sort(() => Math.random() - 0.5)[0])
        })
    }, [])
    return (
        <div
            style={{ backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ""})` }}
            className='banner'>
            <div className='banner-contents'>
                <h1 className='banner-title'>{movie ? movie.title : ""}</h1>
                <div className='banner-buttons'>
                    <button className='banner-button'>Play</button>
                    <button className='banner-button'>My List</button>
                </div>
                <h1 className='banner-description'>{movie ? movie.overview : ""}</h1>
            </div>
            <div className='banner-fadeBottom'></div>


        </div>
    )
}

export default Banner