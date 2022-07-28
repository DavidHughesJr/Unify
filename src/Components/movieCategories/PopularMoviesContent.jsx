import { React, useEffect, useState } from "react";
import SearchInput from "../common/SearchInput";
import { Box, Button, Typography, Rating } from "@mui/material";
import { apiConfig } from "../../api/apiConfig";
import tmdbApi, {category, movieType}  from "../../api/tmdbApi";
import { CategoryTypography } from "../../Assets/muiStyles/MaterialStyles";





export default function PopularCategory() {

const [popularMovies, setPopularMovies] = useState([])
const [movieGenres, setMovieGenres] = useState([])

useEffect(() => {
    const getPopularMovies = async (pageNum = 1) => {
       try {
           const [res1, res2] = await Promise.all([tmdbApi.getMoviesList(movieType.popular, pageNum), tmdbApi.getGenre(category.movie)])
           const popularMoviesData = await res1.json()
           const genreData = await res2.json()
           setMovieGenres(genreData.genres)
           setPopularMovies(popularMoviesData.results)
       } catch (error) {
        console.error(error);
       }
    }
    getPopularMovies(1)
}, [])
  
    return (
        <Box sx={{padding: '1rem'}}>
           <CategoryTypography variant="subtitle2"> Popular </CategoryTypography> 
            {
                popularMovies.map((movie) => {
                    const formatGenres = movieGenres.filter((genre, i) => {
                        const [ids] = movie.genre_ids
                           // if undefined 
                           
                        return genre.id === ids
                    }).map(genre => genre.name)

                    return <div style={{marginBottom: '1rem'}}>
                        <Box sx={{display: 'flex', gap: 1 }}>
                            <img style={{ width: '30%' }} src={apiConfig.w300Image(movie.poster_path)} alt="popular movies" />
                            <Box sx={{display: 'flex', flexDirection: 'column'}}>
                                <Typography variant="subtitle2"> {movie.title}  </Typography>
                                <Typography variant="caption"> {formatGenres} </Typography>
                                <Rating name="read-only" value={movie.vote_average / 2} readOnly sx={{ color: '#fa7c05'}} />
                            </Box>
                        </Box>
                   
                    </div>
                })
            }
            <Button size="medium" sx={{ backgroundColor: '#fde8ef', color: '#e71d60', width: '100%', textTransform: 'none'}} variant="text"> See More </Button>
        </Box>
    )
}