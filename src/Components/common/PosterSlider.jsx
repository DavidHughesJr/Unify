import { Box, Button, Typography, Rating } from "@mui/material";
import { Link } from 'react-router-dom';
import { CategoryTypography, MoviesContainer } from "../../Components/muiStyles/CommonStyles";
import { Swiper, SwiperSlide } from 'swiper/react';
import { apiConfig } from "../../api/apiConfig"
import noImgPoster from '../../Assets/imgs/no-img-poster.jpg'
import { category } from "../../api/tmdbApi";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';





export default function PosterSlider({ data, title }) {

    return (
        <Box>
            <Box>
                <CategoryTypography variant="subtitle2"> {title} </CategoryTypography>
                <MoviesContainer>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={10}
                        slidesPerView={5}
                        scrollbar={{ draggable: true }}
                        breakpoints={{
                            1920: {
                                width: 1920,
                                slidesPerView: 5
                            },
                            1280: {
                                width: 1280,
                                slidesPerView: 4
                            },
                            1020: {
                                width: 1020,
                                slidesPerView: 3
                            },
                            640: {
                                width: 640,
                                slidesPerView: 2
                            },
                            320: {
                                width: 220,
                                slidesPerView: 1
                            },
                            100: {
                                width: 100,
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
                                                    <img style={{ width: '100%', minHeight: '20rem' }} src={data.poster_path ? apiConfig.w500Image(data.poster_path) : noImgPoster} alt="New data" />
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