import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { CategoryTypography } from "../../Components/muiStyles/CommonStyles";
import { category} from "../../api/tmdbApi"
import { apiConfig } from "../../api/apiConfig"
import noImgPoster from '../../Assets/imgs/no-img-wide.jpg'
import { formatDataDate } from '../../helpers/formatters'
import Moment from "react-moment"
import { Link } from "react-router-dom"
// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Lazy } from 'swiper'
import 'swiper/css';
import 'swiper/css/lazy'
import { useInView } from 'react-intersection-observer';



export default function BackDropSlider({ data, title }) {
  
    const { ref, inView } = useInView({
        root: null,
        rootMargin: '0px',
        threshold: 0.2,
        triggerOnce: true
    
    });

  console.log(inView)
    return (
        <Box className={inView? 'fade-in': 'faded'}  ref={ref}>
            <CategoryTypography variant="subtitle2"> {title} </CategoryTypography>
            <div style={{ display: 'flex', width: "100%", height: "100%" }} >
                <Swiper 
                    modules={[Lazy]}
                    spaceBetween={10}
                    preloadImages={false}
                    lazy={true}
                    slidesPerView={3}
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
                            width: 220,
                            slidesPerView: 1
                        },
                        0: {
                            width: 200,
                            slidesPerView: 1
                        }
                    }}
                >
                    {
                        data.map((data) => {
                            const movieDate = formatDataDate(data.release_date ? data.release_date : data.first_air_date)
                            return (
                                <SwiperSlide>
                                    <Link to={`../${data.first_air_date ? category.tv : category.movie}/${data.id}`} style={{ textDecoration: 'none' }}>
                                        <div  style={{ width: '100%', height: '100%' }}>
                                            <img style={{ objectFit: 'cover', height: '100%', width: '100%' }} src={data.backdrop_path ? apiConfig.originalImage(data.backdrop_path) : noImgPoster} alt={data.title ? data.title : data.name} loading="lazy" /> 
                                            <div style={{ position: 'relative', bottom: '4.4rem', left: '5%' }}>
                                                <Typography sx={{ color: 'white', fontWeight: 'bold', textShadow: '0 0 5px black' }} variant="subtitle2"> {data.title ? data.title : data.name}  </Typography>
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