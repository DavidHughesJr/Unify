import { React, useEffect, useState } from "react";
import SearchInput from "./SearchInput";
import { Box, Button, Typography, Rating } from "@mui/material";
import { apiConfig } from "../api/apiConfig";
import tmdbApi, {category, movieType}  from "../api/tmdbApi";





export default function PopularCategory() {

const [popularMovies, setPopularMovies] = useState([])

useEffect(() => {
    const getPopularMovies = async (pageNum) => {
       try {
           const response = await tmdbApi.getMoviesList(movieType.popular, pageNum)
           const popularMoviesData = await response.json()
           console.log(popularMoviesData)
           setPopularMovies(popularMoviesData.results)
       } catch (error) {
        console.error(error);
       }
    }
    getPopularMovies()
    console.log(popularMovies)
}, [])

    return (
        <Box sx={{marginTop: '3rem', padding: '1rem'}}>
            <SearchInput />
            CategoryTypo
            {
                popularMovies.slice(0, 2).map((movie) => {
                    return <div style={{marginBottom: '1rem'}}>
                        <Box sx={{display: 'flex', gap: 1 }}>
                            <img style={{ width: '30%' }} src={apiConfig.w300Image(movie.poster_path)} alt="popular movies" />
                            <Box sx={{display: 'flex', flexDirection: 'column'}}>
                                <Typography variant="subtitle2"> {movie.title}  </Typography>
                                <Typography variant="caption"> {movie.genre_ids}  </Typography>
                                <Rating name="read-only" value={2} readOnly />
                            </Box>
                        </Box>
                   
                    </div>
                })
            }
            <Button size="medium" sx={{ backgroundColor: '#fde8ef', color: '#e71d60', width: '100%', textTransform: 'none'}} variant="text"> See More </Button>
        </Box>
    )
}