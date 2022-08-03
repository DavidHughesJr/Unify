import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { Link } from 'react-router-dom';
import { MoviesContainer } from "../../Assets/muiStyles/MaterialStyles"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { apiConfig } from "../../api/apiConfig"
import 'swiper/css/autoplay'
import noImgPoster from '../../Assets/imgs/no-img-poster.jpg'
import { category } from "../../api/tmdbApi";






export default function PosterSlider({ data, title }) {
    return (
        <Box>
            <Box>
                <Typography variant="subtitle2"> {title} </Typography>
                <MoviesContainer>
                    <Swiper
                        spaceBetween={10}
                        slidesPerView={5}
                    >
                        {
                            data.map((data) => {
                                return (
                                    <SwiperSlide>
                                        <Link to={`../${data.episode_count ? category.tv : category.movie}/${data.id}`} style={{ textDecoration: 'none' }}>
                                            <Box key={data.id} style={{ width: '90%' }}>
                                                <img style={{ width: '100%' }} src={data.poster_path ? apiConfig.w500Image(data.poster_path) : noImgPoster} alt="New data" />
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