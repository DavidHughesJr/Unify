import { HeroTypography} from "../../Components/muiStyles/CommonStyles";
import { styled, Typography, Box, Link } from "@mui/material";
import { Swiper, SwiperSlide } from 'swiper/react';
import { apiConfig } from "../../api/apiConfig"
import Moment from "react-moment"
import { formatDataDate } from '../../helpers/formatters'
import noImgPoster from '../../Assets/imgs/no-img-hero.jpg'
// swiper
import { Autoplay, EffectFade, Lazy } from 'swiper'
import 'swiper/css/autoplay'
import 'swiper/css';
import 'swiper/css/effect-fade'
import 'swiper/css/lazy'



export default function NewestSubcategory({ data, title }) {

    const HeroTextContainer = styled(Typography)(({ theme }) => ({
        position: 'relative', 
        bottom: '12rem', 
        left: '2%', 
        height: 0,
        [theme.breakpoints.down("lg")]: {
           bottom: '11rem'
        },
        [theme.breakpoints.down("md")]: {
            bottom: '8rem'
        },
        [theme.breakpoints.down("sm")]: {
            bottom: '8rem'
        },
        [theme.breakpoints.between('xs', 'sm')]: {
            bottom: '6rem'
        },
    }));

    const HeroHeadingText = styled(Typography)(({ theme }) => ({
        background: '-webkit-linear-gradient(white, #b9c1c9)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontWeight: 'bold',
        [theme.breakpoints.down("lg")]: {
          fontSize: '3em'
        },
        [theme.breakpoints.down("md")]: {
            fontSize: '2em'
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: '1.8em'
        },
        [theme.breakpoints.between('xs', 'sm')]: {
            fontSize: '1.5em'
        },
    }));

    const HeroDateText = styled(Typography)(({ theme }) => ({
        color: '#eaecef', 
        textShadow: '0 0 5px black',
        [theme.breakpoints.down("lg")]: {
            fontSize: '1.2em'
        },
        [theme.breakpoints.down("sm")]: {
          fontSize: '0.8rem'
        },
    }));



    return (
        <Box>
            <Box>
                <Box>
                    <HeroTypography variant="subtitle2"> {title} </HeroTypography>
                    <Swiper
                        modules={[Autoplay, EffectFade, Lazy]}
                        preloadImages={false}
                        lazy={true}
                        spaceBetween={50}
                        slidesPerView={1}
                        effect={"fade"}
                        autoplay={{ delay: 5000 }}
                        pagination={{ clickable: true }}
                    >
                        {
                            data.map((data) => {
                                const movieDate = formatDataDate(data.release_date ? data.release_date : data.first_air_date)
                                return (
                                    <SwiperSlide>
                                        <img
                                            style={{ width: "100%", height: "100%", }}
                                            src={data.backdrop_path ? apiConfig.originalImage(data.backdrop_path) : noImgPoster} alt={data.title ? data.title : data.name} loading="lazy"
                                        />
                                        <HeroTextContainer>
                                            <Box> <HeroHeadingText variant="h3">  {data.title ? data.title : data.name} </HeroHeadingText>  </Box>
                                            <Box> <HeroDateText variant="h6">  <Moment date={movieDate} format="MMMM D YYYY" titleFormat="D MMM YYYY" withTitle /> </HeroDateText>  </Box>
                                            <Link sx={{ textDecoration: 'none' }} href={''}>
                                            </Link>
                                        </HeroTextContainer>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </Box>
            </Box>
        </Box>

    )
}