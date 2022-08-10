import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import InfoGrid from "../common/InfoGrid";
import { CategoryTypography } from "../../Components/muiStyles/CommonStyles";
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

    let {  genreName, genreId } = useParams()


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
            const [resMovieRelease, resMoviePopular] = await Promise.all([tmdbApi.getMoviesGenres(category.releaseMovie, pageNumMovie, genreId, date), tmdbApi.getMoviesGenres(category.popular, pageNumMovie, genreId, date)])
            const movieDataByRelease = await resMovieRelease.json()
            const movieDataByPopular = await resMoviePopular.json()
            setGenreInfoByReleaseMovie(movieDataByRelease.results)
            setGenreInfoByPopularMovie(movieDataByPopular.results)
            // tv info
            const [resTvRelease, resTvPopular] = await Promise.all([tmdbApi.getTvShowGenres(category.releaseMovie, pageNumTv, genreId, date), tmdbApi.getTvShowGenres(category.popular, pageNumTv, genreId, date)])
            const tvDataByRelease = await resTvRelease.json()
            const tvDataByPopular = await resTvPopular.json()
            setGenreInfoByReleaseTvShow(tvDataByRelease.results)
            setGenreInfoByPopularTvShow(tvDataByPopular.results)

        }
        getGenreInfo()
    }, [genreId, pageNumTv, pageNumMovie])

    return (
        <Box sx={{ padding: "1rem" }}>
            <Typography>
                {genreName.toUpperCase().slice(0, 1) + genreName.slice(1)}
            </Typography>
            {
                genreInfoByReleaseMovie.length == 0 ? '' :
                    <Box>
                        <BackdropSlider data={genreInfoByReleaseMovie} title={'Movies'} />
                        <PosterSlider data={genreInfoByPopularMovie} />
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '1rem' }}>
                            <Pagination onChange={handleChangePageMovie} count={10} />
                        </Box>
                    </Box>
            }
            {
                genreInfoByReleaseTvShow.length == 0 ? '' :
                    <Box>
                        <BackdropSlider data={genreInfoByReleaseTvShow} title={'Tv Shows'} />
                        <PosterSlider data={genreInfoByPopularTvShow}  />
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '1rem' }}>
                            <Pagination onChange={handleChangePageTv} count={10} />
                        </Box>
                    </Box>
            }
        </Box>
    )
}