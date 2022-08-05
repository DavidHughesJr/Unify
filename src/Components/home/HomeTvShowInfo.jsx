import { useEffect, useState } from "react"
import Box from "@mui/material/Box"
import tmdbApi, { movieType, category, tvList, tvType } from "../../api/tmdbApi"
import HeroSlider from '../common/HeroSlider'
import PosterSlider from '../common/PosterSlider'
import BackdropSlider from '../common/BackdropSlider'


export default function HomeMovieInfo() {

    const [onTheAirShows, setOnTheAirShows] = useState([])
    const [airingTodayShows, setAiringTodayShows] = useState([])
    const [topRatedShows, setTopRatedShows] = useState([])
    const [isLoading, setLoadingProgress] = useState(true)

    useEffect(() => {
        const getTmdbData = async (pageNum = 1) => {
            try {
                const response1 = await tmdbApi.getTvList(tvType.on_the_air, pageNum)
                const heroData = await response1.json()
                setOnTheAirShows(heroData.results)

                const response2 = await tmdbApi.getTvList(tvType.airing_today, pageNum)
                const data2 = await response2.json()
                setAiringTodayShows(data2.results)

                const response3 = await tmdbApi.getTvList(tvType.top_rated, pageNum)
                const data3 = await response3.json()
                setTopRatedShows(data3.results)
                

                setLoadingProgress()
            } catch (error) {
                console.error(error);
            }
        }
        getTmdbData()
    }, [])
    return (

        <Box>
            <HeroSlider data={onTheAirShows} title={'Latest Shows'} />
            <PosterSlider data={airingTodayShows} title={'Now Playing'} />
            <BackdropSlider data={topRatedShows} title={'Top Rated'} />
        </Box>

    )
}