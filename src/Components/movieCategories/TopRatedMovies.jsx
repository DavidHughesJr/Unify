import { useEffect, useState } from "react"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Bookmarker from "../common/Bookmarker"
import Link from "@mui/material/Link"
import { MoviesBtnContainer, MoviesContainer, WatchNowBtn, CategoryTypography } from "../muiStyles/MaterialStyles"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper'
import 'swiper/css';
import tmdbApi, { tvType } from "../../api/tmdbApi"
import { movieType, category, tvList } from "../../api/tmdbApi"
import { apiConfig } from "../../api/apiConfig"
import 'swiper/css/autoplay'
import { LinearProgress } from "@mui/material"
import noImgPoster from '../../imgs/no-img-poster.jpg';




export default function NowPlayingContent() {

    const [movieItems, setMovieItems] = useState([])
    const [topRatedMovies, setTopRatedMovies] = useState([])
    const [isLoading, setLoadingProgress] = useState(true)


    useEffect(() => {
        const getTopRatedMovies = async (pageNum = 1) => {
            try {
                const response = await tmdbApi.getMoviesList(movieType.top_rated, pageNum)
                const data = await response.json()
                setTopRatedMovies(data.results)
            } catch (error) {
                console.error(error);
            }
        }
        getTopRatedMovies()
    }, [])
    return (
            <Box>
                <CategoryTypography variant="subtitle2"> Top Rated Movies </CategoryTypography>
                <div style={{ display: 'flex', width: "100%", height: "100%" }} >
                    <Swiper
                        spaceBetween={10}
                        slidesPerView={3}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}>
                        {
                            topRatedMovies.map((movie) => {
                                return (
                                    <SwiperSlide>
                                        <div style={{ width: '100%' }}>
                                            <img style={{ objectFit: 'cover', height: '100%', width: '100%' }} src={`${apiConfig.originalImage(movie.backdrop_path)}`} alt="New movies" />
                                            <div style={{ position: 'relative', bottom: '2.5rem', left: '5%' }}>
                                                <Link sx={{ textDecoration: 'none' }}>
                                                    <Typography sx={{ color: 'white', fontWeight: 'bold', textShadow: '0 0 5px black' }} variant="caption"> {movie.title} </Typography>
                                                    <Typography sx={{ color: 'lightgrey' }} variant="caption"> , {movie.release_date} </Typography>
                                                </Link>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>
            </Box>

    )
}