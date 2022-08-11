import * as React from 'react';
import Card from '@mui/material/Card';
import { useParams } from 'react-router-dom';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';
import { apiConfig } from '../../api/apiConfig';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Paper from '@mui/material/Paper';
import { margin } from '@mui/system';
import { Link } from 'react-router-dom';
import { person } from "../../api/tmdbApi"
import noImgPoster from '../../Assets/imgs/no-img-poster.jpg'



export default function CastInfoCard({ cast }) {

    return (

        <Box sx={{ display: "flex", width: "100%", minHeight: '22rem' }}>
            <Swiper
                spaceBetween={10}
                slidesPerView={6}
                breakpoints={{
                    1536: {
                        width: 1400,
                        slidesPerView: 7
                    },
                    1200: {
                        width: 1000,
                        slidesPerView: 6
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
                        width: 300,
                        slidesPerView: 2
                    }
                }}
            >
                {
                    cast.map((cast) => {
                        return (
                            <SwiperSlide>
                                <Link to={`../${person}/${cast.id}`} style={{ textDecoration: 'none', color: "black" }}>
                                    <Box key={cast.cast_id} sx={{ maxWidth: 200 }}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height="200"
                                                image={cast.profile_path ? apiConfig.w500Image(cast.profile_path) : noImgPoster}
                                                alt={cast.name}
                                            />
                                            <Box sx={{ minHeight: '6rem', marginTop: '1rem' }}>
                                                <Typography gutterBottom variant="body" component="div">
                                                    {cast.name}
                                                </Typography>
                                                <Typography variant="caption" color="text.secondary">
                                                    {cast.character}
                                                </Typography>
                                            </Box>
                                        </CardActionArea>
                                    </Box>
                                </Link>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </Box>
    )
}
