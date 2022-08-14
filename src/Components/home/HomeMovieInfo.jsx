import { useEffect, useState } from "react"
import Box from "@mui/material/Box"
import tmdbApi, { movieType, } from "../../api/tmdbApi"
import HeroSlider from '../common/HeroSlider'
import PosterSlider from '../common/PosterSlider'
import BackdropSlider from '../common/BackdropSlider'
import InfoGrid from "../common/InfoGrid"
import { Pagination } from "@mui/material"
import { LinearProgress, Typography} from "@mui/material"



export default function HomeMovieInfo() {

    const [upcomingMovies, setUpcomingMovies] = useState([])
    const [nowPlayingMovies, setNowPlayingMovies] = useState([])
    const [topRatedMovies, setTopRatedMovies] = useState([])
    const [popularMovies, setPopularMovies] = useState([])
    const [pageNum, setPageNum] = useState(1)

    const [isLoading, setLoadingProgress] = useState(true)

    useEffect(() => {
        const getTmdbData = async () => {
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

                const response4 = await tmdbApi.getMoviesList(movieType.popular, pageNum)
                const data4 = await response4.json()
                setPopularMovies(data4.results)

                setLoadingProgress()
            } catch (error) {
                console.error(error);
            }
        }
        getTmdbData()
    }, [pageNum])

    const handleChangePage = (e, value) => {
        setPageNum(value)
    }
    return (

        <Box>
            { 
                isLoading ? <Box>  < LinearProgress sx={{ color: "#e71d60" }} color="inherit" />  <Box sx={{ paddingTop: '1rem' }}> <Typography variant="subtitle">  </Typography> </Box>  </Box> : 
                <Box>
                    <HeroSlider data={upcomingMovies} title={'Upcoming Movies'} />
                    <PosterSlider data={nowPlayingMovies} title={'Now Playing'} />
                    <BackdropSlider data={topRatedMovies} title={'Top Rated'} />
                    <InfoGrid data={popularMovies} title={'Popular'} />
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '1rem' }}>
                        <Pagination onChange={handleChangePage} count={100} />
                    </Box>
                    </Box>
               
            }
        </Box>

    )
}