import * as React from 'react';
import { apiConfig } from '../../api/apiConfig';
import { Box } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import 'swiper/css/autoplay'
import 'swiper/css/autoplay'
import 'swiper/css/effect-fade'
import "swiper/css/pagination";

export default function PersonInfoGallery({ images }) {

    return (
        <Box sx={{padding: "2rem"}}>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={100}
                slidesPerView={4}         
                scrollbar={{ draggable: true }}
                style={{borderRadius: '1rem'}}
                breakpoints={{
                    1536: {
                        width: 900,
                        slidesPerView: 5
                    },
                    1200: {
                        width: 1000,
                        slidesPerView: 4
                    },
                    600: {
                        width: 700,
                        slidesPerView: 3
                    },
                    320: {
                        width: 400,
                        slidesPerView: 2
                    },
                    0: {
                        width: 300,
                        slidesPerView: 1
                    }
                }}
            >
        {
         images.map((imgs) => {
            console.log(imgs.name)
            return (
                <SwiperSlide>
                    <Box sx={{borderRadius: '1rem'}}>
                        <img style={{ borderRadius: '1rem' }} src={apiConfig.w300Image(imgs.file_path)} alt={imgs.name} loading="lazy" />
                    </Box>
                </SwiperSlide>

            )
         })
        }
        </Swiper>
        </Box>
    );
}
