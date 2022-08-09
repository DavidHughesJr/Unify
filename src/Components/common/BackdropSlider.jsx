import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Bookmarker from "../saves/SaveBtn"
import { MoviesBtnContainer, MoviesContainer, WatchNowBtn, CategoryTypography } from "../../Assets/muiStyles/MaterialStyles"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import tmdbApi, { tvType } from "../../api/tmdbApi"
import { movieType, category, tvList } from "../../api/tmdbApi"
import { apiConfig } from "../../api/apiConfig"
import 'swiper/css/autoplay'
import { LinearProgress } from "@mui/material"
import noImgPoster from '../../Assets/imgs/no-img-wide.jpg'
import { formatDataDate } from '../../helpers/formatters'
import Moment from "react-moment"
import { Link } from "react-router-dom"



export default function BackDropSlider({ data, title }) {
    return (
        <Box>
            <CategoryTypography variant="subtitle2"> {title} </CategoryTypography>
            <div style={{ display: 'flex', width: "100%", height: "100%" }} >
                <Swiper
                    spaceBetween={10}
                    slidesPerView={3}
                >
                    {
                        data.map((data) => {
                            const movieDate = formatDataDate(data.release_date ? data.release_date : data.first_air_date)
                            return (
                                <SwiperSlide>
                                    <Link to={`../${data.first_air_date ? category.tv : category.movie}/${data.id}`} style={{ textDecoration: 'none' }}>
                                        <div style={{ width: '100%', height: '100%' }}>
                                            <img style={{ objectFit: 'cover', height: '100%', width: '100%' }} src={data.backdrop_path ? apiConfig.originalImage(data.backdrop_path) : noImgPoster} alt="movies and tv show images" /> 
                                            <div style={{ position: 'relative', bottom: '4.4rem', left: '5%' }}>
                                                <Typography sx={{ color: 'white', fontWeight: 'bold', textShadow: '0 0 5px black' }} variant="subtitle2"> {data.title ? data.title : data.name} </Typography>
                                                <Typography sx={{ color: '#e71d60', fontWeight: 'bold' }} variant="subtitle2"> <Moment date={movieDate} format="MMMM D YYYY" titleFormat="D MMM YYYY" withTitle /> </Typography>
                                            </div>
                                        </div>
                                    </Link>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </Box>

    )
}