import { React, useEffect, useState } from "react";
import SearchInput from "../common/SearchInput";
import { Box, Button, Typography, Rating } from "@mui/material";
import { apiConfig } from "../../api/apiConfig";
import tmdbApi, { category, movieType } from "../../api/tmdbApi";
import { CategoryTypography } from "../../Assets/muiStyles/MaterialStyles";
import { formatMergeGenre } from "../../helpers/formatters";
import { Link, useNavigate } from "react-router-dom";





export default function PopularCategory() {

    const [popularMovies, setPopularMovies] = useState([])
    const [movieGenres, setMovieGenres] = useState([])
    let navigate = useNavigate();

    const goToPopularPage = () => {
        navigate("/popular", { replace: true });
    }


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
        getPopularMovies()
    }, [])


    return (
        <Box sx={{ padding: '1rem' }}>
            <CategoryTypography variant="subtitle2"> Popular </CategoryTypography>
            {
                popularMovies.slice(0, 4).map((movie) => {
                    const genre = formatMergeGenre(movie.genre_ids, movieGenres)
                    return (
                            <div style={{ marginBottom: '1rem' }}>
                            <Link to={`../${movie.first_air_date ? category.tv : category.movie}/${movie.id}`} style={{ textDecoration: 'none', color: 'black'}}>
                                <Box sx={{ display: 'flex', gap: 1 }}>
                            
                                    <img style={{ width: '30%' }} src={apiConfig.w300Image(movie.poster_path)} alt="popular movies" />
                              
                                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                        
                                        <Typography variant="subtitle2"> {movie.title}  </Typography>
                                        <Typography variant="caption"> {genre.map(genre => genre.name + ' ')} </Typography>
                                        <Rating name="read-only" value={movie.vote_average / 2} readOnly sx={{ color: '#fa7c05' }} />
                                    </Box>
                                </Box>
                            </Link>
                            </div>
                    )
                })
            }
            <Button onClick={() => goToPopularPage()} size="medium" sx={{ backgroundColor: '#fde8ef', color: '#e71d60', width: '100%', textTransform: 'none' }} variant="text"> See More </Button>

        </Box>
    )
}