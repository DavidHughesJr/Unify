import { useEffect, useState } from "react"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Bookmarker from "../common/Bookmarker"
import Link from "@mui/material/Link"
import { MoviesBtnContainer, MoviesContainer, WatchNowBtn, CategoryTypography } from "../../Assets/muiStyles/MaterialStyles"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper'
import 'swiper/css';
import tmdbApi, { tvType } from "../../api/tmdbApi"
import { movieType, category, tvList } from "../../api/tmdbApi"
import { apiConfig } from "../../api/apiConfig"
import 'swiper/css/autoplay'
import { LinearProgress } from "@mui/material"
import noImgPoster from '../../Assets/imgs/no-img-poster.jpg'
import { formatDataDate } from '../../helpers/formatters'
import Moment from "react-moment"



export default function NowPlayingContent() {

    const [topRatedMovies, setTopRatedMovies] = useState([])
    const [isLoading, setLoadingProgress] = useState(true)


    useEffect(() => {
        const getTopRatedMovies = async (pageNum = 1) => {
            try {
                const response = await tmdbApi.getMoviesList(movieType.top_rated, pageNum)
                const data = await response.json()
                setTopRatedMovies(data.results)
            } catch (error) {
                console.error(error);
            }
        }
        getTopRatedMovies()
    }, [])
    return (
        <Box>
            <CategoryTypography variant="subtitle2"> Top Rated Movies </CategoryTypography>
            <div style={{ display: 'flex', width: "100%", height: "100%" }} >
                <Swiper
                    spaceBetween={10}
                    slidesPerView={3}
                    >
                    {
                        topRatedMovies.map((movie) => {
                            const movieDate = formatDataDate(movie.release_date)
                            return (
                                <SwiperSlide>
                                    <div style={{ width: '100%' }}>
                                        <img style={{ objectFit: 'cover', height: '100%', width: '100%' }} src={`${apiConfig.originalImage(movie.backdrop_path)}`} alt="New movies" />
                                        <div style={{ position: 'relative', bottom: '3.2rem', left: '5%' }}>
                                            <Link sx={{ textDecoration: 'none' }}>
                                                <Typography sx={{ color: 'white', fontWeight: 'bold', textShadow: '0 0 5px black' }} variant="subtitle2"> {movie.title} </Typography>
                                                <Typography sx={{ color: '#e71d60', fontWeight: 'bold' }} variant="subtitle2"> <Moment date={movieDate} format="MMMM D YYYY" titleFormat="D MMM YYYY" withTitle /> </Typography>
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </Box>

    )
}