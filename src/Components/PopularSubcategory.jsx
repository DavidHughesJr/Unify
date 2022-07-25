import React, { useEffect } from "react";
import { useEffec, useState } from "react";
import SearchInput from "./SearchInput";
import { Box } from "@mui/material";
import { apiConfig } from "../api/apiConfig";
import tmdbApi, {category, movieType}  from "../api/tmdbApi";





export default function PopularCategory() {

const [popularMovies, setPopularMovies] = useState([])

useEffect(() => {
    const getPopularMovies = async (pageNum) => {
        const response = await tmdbApi.getMoviesList(movieType.popular, pageNum )
        const popularMoviesData = await response.json()
        setPopularMovies(popularMoviesData)
    }
    getPopularMovies()
    console.log(popularMovies)
}, [])

    return (
        <Box sx={{marginTop: '3rem'}}>
            <SearchInput />
        </Box>
    )
}