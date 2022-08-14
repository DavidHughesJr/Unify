import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, style } from "@mui/system";
import tmdbApi, { category } from "../../api/tmdbApi";
import { apiConfig } from "../../api/apiConfig";
import { Typography } from "@mui/material";
import { formatDataDate } from '../../helpers/formatters'
import Moment from "react-moment"
import { Link } from "react-router-dom";
import noImgPoster from '../../Assets/imgs/no-img-wide.jpg'
// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Lazy } from 'swiper';
import 'swiper/css';


export default function DetailsMoreLikeThis() {
    const [moreLikeThis, setMoreLikeThis] = useState([])
    let { category, id } = useParams();

    useEffect(() => {

        const getMore = async () => {
            try {
                const resMore = await tmdbApi.getMoreLikeThis(category, id)
                const moreLikeThisData = await resMore.json()
                setMoreLikeThis(moreLikeThisData.results)

            } catch (error) {
                console.error(error);
            }
        }
        getMore()
    }, [])

    return (

        <Box sx={{ width: '100%', height: '100%' }} >

            <Box>
                <Typography> {moreLikeThis.length === 0 ? 'N/a' : ''} </Typography>
                <Swiper
                    modules={[Lazy]}
                    spaceBetween={10}
                    slidesPerView={3}
                    preloadImages={false}
                    lazy={true}
                    breakpoints={{
                        1920: {
                            width: 1920,
                            slidesPerView: 4
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
                            width: 300,
                            slidesPerView: 1
                        },
                        100: {
                            width: 300,
                            slidesPerView: 1
                        }
                    }}
                >
                    {
                        moreLikeThis.map((details) => {
        
                            const detailsDate = formatDataDate(details.release_date? details.release_date : details.first_air_date)
                            return (
                                    <SwiperSlide>
                                    <Link to={`../${category}/${details.id}`} style={{textDecoration: 'none'}}>
                                        <div style={{ width: '100%' }}>
                                            <img style={{ objectFit: 'cover', height: '100%', width: '100%' }} src={details.backdrop_path ? apiConfig.originalImage(details.backdrop_path) : noImgPoster} alt={details.title ? details.title : details.name} loading="lazy" /> 
                                            <div>
                                                <Typography sx={{ color: 'black', fontWeight: 'bold' }} variant="subtitle2"> {details.title ? details.title : details.name} </Typography>
                                                <Typography sx={{ color: '#e71d60', fontWeight: 'bold' }} variant="subtitle2"> <Moment date={detailsDate} format="MMMM D YYYY" titleFormat="D MMM YYYY" withTitle /> </Typography>
                                            </div>
                                        </div>
                                         </Link>
                                       
                                    </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </Box>
        </Box>


    )
}