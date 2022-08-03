import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Bookmarker from "../common/Bookmarker"
import { Link } from 'react-router-dom';
import { MoviesBtnContainer, MoviesContainer, WatchNowBtn, CategoryTypography } from "../../Assets/muiStyles/MaterialStyles"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { apiConfig } from "../../api/apiConfig"
import 'swiper/css/autoplay'
import noImgPoster from '../../Assets/imgs/no-img-poster.jpg'






export default function MoviePosterSlider({ movies , title }) {
    return (
        <Box>
            <Box>
                <Typography variant="subtitle2"> {title} </Typography>
                <MoviesContainer>
                    <Swiper
                        spaceBetween={10}
                        slidesPerView={4}
                    >
                        {
                            movies.map((movie) => {
                                return (
                                    <SwiperSlide>
                                        <Link to={''}>
                                        <Box key={movie.id} style={{ width: '90%' }}>
                                            <img style={{ width: '100%' }} src={movie.poster_path ? apiConfig.w500Image(movie.poster_path) : noImgPoster} alt="New movies" />
                                            <MoviesBtnContainer>
                                            </MoviesBtnContainer>
                                        </Box>
                                    </Link>
                                    </SwiperSlide>
                                )
                            })
                        }

                    </Swiper>
                </MoviesContainer>
            </Box>
        </Box>
    )
}