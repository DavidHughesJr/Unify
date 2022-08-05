import { useEffect, useState } from "react"
import Box from "@mui/material/Box"
import tmdbApi, { movieType, category, tvList } from "../../api/tmdbApi"
import HeroSlider from '../common/HeroSlider'
import PosterSlider from '../common/PosterSlider'
import BackdropSlider from '../common/BackdropSlider'


export default function HomeMovieInfo() {

    const [upcomingMovies, setUpcomingMovies] = useState([])
    const [nowPlayingMovies, setNowPlayingMovies] = useState([])
    const [topRatedMovies, setTopRatedMovies] = useState([])
    const [isLoading, setLoadingProgress] = useState(true)

    useEffect(() => {
        const getTmdbData = async (pageNum = 1) => {
            try {
                const response1 = await tmdbApi.getMoviesList(movieType.upcoming, pageNum)
                const heroData = await response1.json()
                setUpcomingMovies(heroData.results)

                const response2 = await tmdbApi.getMoviesList(movieType.upcoming, pageNum)
                const data2 = await response2.json()
                setNowPlayingMovies(data2.results)

                const response3 = await tmdbApi.getMoviesList(movieType.top_rated, pageNum)
                const data3 = await response3.json()
                setTopRatedMovies(data3.results)


                setLoadingProgress()
            } catch (error) {
                console.error(error);
            }
        }
        getTmdbData()
    }, [])
    return (

        <Box>
            <HeroSlider data={upcomingMovies} title={'Upcoming Movies'}/>
            <PosterSlider data={nowPlayingMovies} title={'Now Playing'} /> 
            <BackdropSlider data={topRatedMovies} title={'Top Rated'} /> 
        </Box>

    )
}