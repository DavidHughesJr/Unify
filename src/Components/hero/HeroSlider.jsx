import { useEffect, useState } from "react"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Bookmarker from "../common/Bookmarker"
import Link from "@mui/material/Link"
import { WatchNowBtn } from "../../Assets/muiStyles/MaterialStyles"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper'
import tmdbApi, { movieType, category, tvList } from "../../api/tmdbApi"
import { apiConfig } from "../../api/apiConfig"
import { LinearProgress } from "@mui/material"
import noImgPoster from '../../Assets/imgs/no-img-backdrop.png'
// css 
import 'swiper/css/autoplay'
import 'swiper/css';
import 'swiper/css/effect-fade'
import { HeroTypography } from "../../Assets/muiStyles/MaterialStyles"
import Moment from "react-moment"
import { formatDataDate } from '../../helpers/formatters'


export default function NewestSubcategory() {

    const [upcomingMovies, setUpcomingMovies] = useState([])
    const [isLoading, setLoadingProgress] = useState(true)

    useEffect(() => {
        const getUpcomingMovies = async (pageNum = 1) => {
            try {
                const response = await tmdbApi.getMoviesList(movieType.upcoming, pageNum)
                const data = await response.json()
                setUpcomingMovies(data.results)
                setLoadingProgress()
            } catch (error) {
                console.error(error);
            }
        }
        getUpcomingMovies()
    }, [])
    return (

        <Box>
            <Box>
                {
                    isLoading ? < LinearProgress sx={{ color: "#e71d60" }} color="inherit" /> :
                        <Box> 
                            <HeroTypography variant="subtitle2"> Upcoming Movies </HeroTypography>
                            <Swiper
                                modules={[Autoplay, EffectFade]}
                                spaceBetween={50}
                                slidesPerView={1}
                                effect={"fade"}
                                autoplay={{ delay: 5000 }}
                                pagination={{ clickable: true }}
                                >
                                {
                                    upcomingMovies.map((movie) => {
                                        const movieDate = formatDataDate(movie.release_date)
                                        return (
                                            <SwiperSlide>
                                                <Box
                                                    sx={{ width: "100%", height: '35rem' }}
                                                >
                                                    <img
                                                        style={{ width: "100%", height: "100%", objectFit: 'cover' }}
                                                        src={movie.backdrop_path ? apiConfig.originalImage(movie.backdrop_path) : noImgPoster} alt="New movies"
                                                    />
                                                    <Box sx={{ position: 'relative', bottom: '12rem', left: '2%' }}>
                                                        <Box> <Typography sx={{ background: '-webkit-linear-gradient(white, #b9c1c9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: 'bold', }} variant="h3"> {movie.title} </Typography>  </Box>
                                                        <Box> <Typography sx={{ color: '#eaecef', textShadow: '0 0 5px black' }} variant="h6">  <Moment date={movieDate} format="MMMM D YYYY" titleFormat="D MMM YYYY" withTitle /> </Typography>  </Box>
                                                        <Link sx={{ textDecoration: 'none' }} href={''}>
                                                            <WatchNowBtn> Watch Trailer </WatchNowBtn>
                                                        </Link>
                                                        <Bookmarker />
                                                    </Box>
                                                </Box>
                                            </SwiperSlide>
                                        )
                                    })
                                }
                            </Swiper>
                        </Box>
                }
            </Box>
        </Box>

    )
}