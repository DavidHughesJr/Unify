import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import InfoGrid from "../common/InfoGrid";
import { CategoryTypography } from "../../Assets/muiStyles/MaterialStyles";
import HeroSlider from "../common/HeroSlider"
import tmdbApi, { category } from "../../api/tmdbApi";
import { Box, Typography, Pagination } from "@mui/material";
import PosterSlider from "../common/PosterSlider"
import BackdropSlider from "../common/BackdropSlider"


export default function Genres() {
    // movie state
    const [genreInfoByReleaseMovie, setGenreInfoByReleaseMovie] = useState([])
    const [genreInfoByPopularMovie, setGenreInfoByPopularMovie] = useState([])
    const [pageNumMovie, setPageNumMovie] = useState(1)
    // tv state
    const [genreInfoByReleaseTvShow, setGenreInfoByReleaseTvShow] = useState([])
    const [genreInfoByPopularTvShow, setGenreInfoByPopularTvShow] = useState([])
    const [pageNumTv, setPageNumTv] = useState(1)

    let { genreItem } = useParams()
    console.log(genreItem)

    const handleChangePageMovie = (e, value) => {
        setPageNumMovie(value)
    }
    const handleChangePageTv = (e, value) => {
        setPageNumTv(value)
    }

    // get current date in correct formate
    const date = new Date().toISOString().slice(0, 10)

    useEffect(() => {

        const getGenreInfo = async () => {
            // movies info
            const [resMovieRelease, resMoviePopular] = await Promise.all([tmdbApi.getMoviesGenres(category.releaseMovie, 1, 28, date), tmdbApi.getMoviesGenres(category.popular, pageNumMovie, 28, date)])
            const movieDataByRelease = await resMovieRelease.json()
            const movieDataByPopular = await resMoviePopular.json()
            setGenreInfoByReleaseMovie(movieDataByRelease.results)
            setGenreInfoByPopularMovie(movieDataByPopular.results)
            // tv info
            const [resTvRelease, resTvPopular] = await Promise.all([tmdbApi.getTvShowGenres(category.releaseMovie, 1, 10759, date), tmdbApi.getTvShowGenres(category.popular, pageNumTv, 10759, date)])
            const tvDataByRelease = await resTvRelease.json()
            const tvDataByPopular = await resTvPopular.json()
            setGenreInfoByReleaseTvShow(tvDataByRelease.results)
            setGenreInfoByPopularTvShow(tvDataByPopular.results)

            const res1 = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=e9ad43fd1d98a5d8435f4d49f1ec2644&language=en-US`)
            const data1 = await res1.json()
            console.log(data1)
            const res2 = await fetch(`https://api.themoviedb.org/3/genre/tv/list?api_key=e9ad43fd1d98a5d8435f4d49f1ec2644&language=en-US`)
            const data2 = await res2.json()
            console.log(data2)


            console.log(movieDataByPopular)
            console.log(tvDataByPopular)
        }
        getGenreInfo()
    }, [genreItem, pageNumTv, pageNumMovie])

    console.log(genreInfoByPopularMovie)
    return (
        <Box sx={{ padding: "1rem" }}>
            {
                genreInfoByReleaseMovie.length == 0 ? '' :
                    <Box>
                        <BackdropSlider data={genreInfoByReleaseMovie} title={'New Release Movies'} />
                        <PosterSlider data={genreInfoByPopularMovie} title={'Popular Movies'} />
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '1rem' }}>
                            <Pagination onChange={handleChangePageMovie} count={10} />
                        </Box>
                    </Box>
            }
            {
                genreInfoByReleaseTvShow.length == 0 ? '' :
                    <Box>
                        <BackdropSlider data={genreInfoByReleaseTvShow} title={'New Release Tv Shows'} />
                        <PosterSlider data={genreInfoByPopularTvShow} title={'Popular Tv Shows'} />
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '1rem' }}>
                            <Pagination onChange={handleChangePageTv} count={10} />
                        </Box>
                    </Box>
            }
        </Box>
    )
}