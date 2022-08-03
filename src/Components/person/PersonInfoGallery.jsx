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
                spaceBetween={10}
                slidesPerView={4}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                style={{borderRadius: '1rem'}}
            >
        {
         images.map((imgs) => {
            return (
                <SwiperSlide>
                    <Box sx={{borderRadius: '1rem'}}>
                        <img style={{borderRadius: '1rem'}}  src={apiConfig.w300Image(imgs.file_path)} alt="person imgs" />
                    </Box>
                </SwiperSlide>

            )
         })
        }
        </Swiper>
        </Box>
    );
}
