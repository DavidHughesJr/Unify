import { useEffect, useState } from "react"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Bookmarker from "../common/Bookmarker"
import { MoviesBtnContainer, MoviesContainer, WatchNowBtn, CategoryTypography } from "../../Assets/muiStyles/MaterialStyles"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import tmdbApi, { tvType } from "../../api/tmdbApi"
import { movieType, category, tvList } from "../../api/tmdbApi"
import { apiConfig } from "../../api/apiConfig"
import 'swiper/css/autoplay'
import { LinearProgress } from "@mui/material"
import noImgPoster from '../../Assets/imgs/no-img-poster.jpg'
import { Link } from "react-router-dom";






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
                                                <Link to={`../${movie.episode_count ? category.tv : category.movie}/${movie.id}`} style={{ textDecoration: 'none' }}>
                                                <div key={movie.id} style={{ width: '100%' }}>
                                                    <img style={{ width: '100%' }} src={movie.poster_path ? apiConfig.w500Image(movie.poster_path) : noImgPoster} alt="New movies" />
                                                    <MoviesBtnContainer>
                            
                                                    </MoviesBtnContainer>
                                                </div>
                                                </Link>
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