import { useEffect, useState } from "react"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Bookmarker from "../common/Bookmarker"
import Link from "@mui/material/Link"
import { MoviesBtnContainer, MoviesContainer, WatchNowBtn, CategoryTypography } from "../../Assets/muiStyles/MaterialStyles"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import tmdbApi, { tvType } from "../../api/tmdbApi"
import { movieType, category, tvList } from "../../api/tmdbApi"
import { apiConfig } from "../../api/apiConfig"
import 'swiper/css/autoplay'
import { LinearProgress } from "@mui/material"
import noImgPoster from '../../Assets/imgs/no-img-poster.jpg'






export default function NowPlayingContent() {

    const [nowPlayingMovies, setNowPlayingMovies] = useState([])
    const [isLoading, setLoadingProgress] = useState(true)


    useEffect(() => {
        const getMovies = async (pageNum = 1) => {
            try {
                const response = await tmdbApi.getMoviesList(movieType.upcoming, pageNum)
                const data = await response.json()
                setNowPlayingMovies(data.results)
                setLoadingProgress()

            } catch (error) {
                console.error(error);
            }
        }
        getMovies()
    }, [])
    return (
        <Box>
            {
                isLoading ? < LinearProgress sx={{ color: "#e71d60" }} color="inherit" /> :
                    <Box>
                        <CategoryTypography variant="subtitle2"> Now Playing </CategoryTypography>
                        <MoviesContainer>
                            <Swiper
                                spaceBetween={10}
                                slidesPerView={4}
                               >
                                {
                                    nowPlayingMovies.map((movie) => {
                                       
                                        return (
                                            <SwiperSlide>
                                                <div key={movie.id} style={{ width: '100%' }}>
                                                    <img style={{ width: '100%' }} src={movie.poster_path ? apiConfig.w500Image(movie.poster_path) : noImgPoster} alt="New movies" />
                                                    <MoviesBtnContainer>
                                                        <Link sx={{ textDecoration: 'none' }} href={''}>
                                                            {/* <WatchNowBtn>  Watch Now </WatchNowBtn> */}
                                                        </Link>
                                                        {/* <Bookmarker /> */}
                                                    </MoviesBtnContainer>
                                                </div>
                                            </SwiperSlide>
                                        )
                                    })
                                }

                            </Swiper>
                        </MoviesContainer>
                    </Box>
            }
        </Box>
    )
}