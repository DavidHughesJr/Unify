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
export default function CastInfoCard({ cast }) {


    return (

        <Box sx={{ display: "flex", width: "100%", minHeight: '20rem' }}>
            <Swiper
                spaceBetween={10}
                slidesPerView={6}
            >
                {
                    cast.map((cast) => {
                        return (
                            <SwiperSlide>
                                <Card key={cast.cast_id} sx={{ maxWidth: 200, }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="200"
                                            image={apiConfig.w300Image(cast.profile_path)}
                                            alt=''
                                        />
                                        <CardContent sx={{ minHeight: '5rem' }}>
                                            <Typography gutterBottom variant="body" component="div">
                                                {cast.name}
                                            </Typography>
                                            <Typography variant="caption" color="text.secondary">
                                                {cast.character}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </Box>
    )
}
