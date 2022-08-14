import { Box, Button, Typography, Rating } from "@mui/material";
import { Link } from 'react-router-dom';
import { CategoryTypography, MoviesContainer } from "../../Components/muiStyles/CommonStyles";
import { Swiper, SwiperSlide } from 'swiper/react';
import { apiConfig } from "../../api/apiConfig"
import noImgPoster from '../../Assets/imgs/no-img-poster.jpg'
import { category } from "../../api/tmdbApi";
import { Navigation, Pagination, Scrollbar, A11y, Lazy } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/lazy'





export default function PosterSlider({ data, title }) {

    return (
        <Box className="fade-in">
            <Box>
                <CategoryTypography variant="subtitle2"> {title} </CategoryTypography>
                <MoviesContainer>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y, Lazy]}
                        spaceBetween={10}
                        slidesPerView={5}
                        // scrollbar={{ draggable: true }}
                        preloadImages={false}
                        lazy={true}
                        breakpoints={{
                            1536: {
                                width: 1400,
                                slidesPerView: 5
                            },
                            1200: {
                                width: 1000,
                                slidesPerView: 4
                            },
                            600: {
                                width: 500,
                                slidesPerView: 3
                            },
                            320: {
                                width: 300,
                                slidesPerView: 2
                            },
                            0: {
                                width: 200,
                                slidesPerView: 1
                            }
                        }}

                    >
                        {
                            data.map((data) => {
                                return (
                                        <SwiperSlide>
                                            <Link to={`../${data.first_air_date ? category.tv : category.movie}/${data.id}`} style={{ textDecoration: 'none' }}>
                                                <Box key={data.id} style={{ width: '100%' }}>
                                                <img style={{ width: '100%' }} src={data.poster_path ? apiConfig.w500Image(data.poster_path) : noImgPoster} alt={data.title ? data.title : data.name} loading="lazy" />
                                                </Box>
                                            </Link>

                                            <Typography variant="subtitle2">
                                                {data.title ? data.title : data.name}
                                            </Typography>
                                            {
                                                data.vote_average ? <Rating name="read-only" value={data.vote_average / 2} readOnly sx={{ color: '#fa7c05' }} /> : 'Not Yet Rated'
                                            }
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