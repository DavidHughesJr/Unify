import { useEffect, useState } from "react"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Bookmarker from "../common/Bookmarker"
import Link from "@mui/material/Link"
import { WatchNowBtn } from "../muiStyles/MaterialStyles"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper'
import 'swiper/css';
import tmdbApi  from "../../api/tmdbApi"
import { movieType, category, tvList } from "../../api/tmdbApi"
import { apiConfig } from "../../api/apiConfig"
import 'swiper/css/autoplay'
import { LinearProgress } from "@mui/material"
import noImgPoster from '../../imgs/no-img-poster.jpg';




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
            <div>
                {
                    isLoading ? < LinearProgress sx={{ color: "#e71d60" }} color="inherit" /> : 
                    <Swiper
                        modules={Autoplay}
                        spaceBetween={50}
                        slidesPerView={1}
                        autoplay={true}
                        navigation
                        pagination={{ clickable: true }}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}>

                        {
                            upcomingMovies.map((movie) => {
                                return (
                                    <SwiperSlide>
                                        <div
                                            style={{ width: "100%", height: '35rem' }}
                                        >
                                            <img
                                                style={{ width: "100%", height: "100%", objectFit: 'cover' }}
                                                src={movie.backdrop_path ? apiConfig.originalImage(movie.backdrop_path) : noImgPoster} alt="New movies"
                                            />
                                            <div style={{ position: 'relative', bottom: '10rem', left: '5%' }}>
                                                <div> <Typography sx={{ background: '-webkit-linear-gradient(#eaecef, #b9c1c9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: 'bolder' }} variant="h4"> {movie.title} </Typography>  </div>
                                                <div> <Typography sx={{ color: '#eaecef' }} variant="subtitle"> {movie.release_date} </Typography>  </div>
                                                <Link sx={{ textDecoration: 'none' }} href={''}>
                                                    <WatchNowBtn> Watch Trailer </WatchNowBtn>
                                                </Link>
                                                <Bookmarker />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )

                            })
                        }
                    </Swiper>
                }
            </div>
        </Box>

    )
}