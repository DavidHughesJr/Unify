import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Bookmarker from "./Bookmarker"
import Link from "@mui/material/Link"
import { WatchNowBtn } from "../../Assets/muiStyles/MaterialStyles"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper'
import { apiConfig } from "../../api/apiConfig"
import { LinearProgress } from "@mui/material"
import noImgPoster from '../../Assets/imgs/no-img-wide.jpg'
// css 
import 'swiper/css/autoplay'
import 'swiper/css';
import 'swiper/css/effect-fade'
import { HeroTypography } from "../../Assets/muiStyles/MaterialStyles"
import Moment from "react-moment"
import { formatDataDate } from '../../helpers/formatters'


export default function NewestSubcategory({ data, title }) {
    return (
        <Box>
            <Box>
                <Box>
                    <HeroTypography variant="subtitle2"> {title} </HeroTypography>
                    <Swiper
                        modules={[Autoplay, EffectFade]}
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
                                        <Box
                                            sx={{ width: "100%", height: '35rem' }}
                                        >
                                            <img
                                                style={{ width: "100%", height: "100%", objectFit: 'cover' }}
                                                src={data.backdrop_path ? apiConfig.originalImage(data.backdrop_path) : noImgPoster} alt="images upcoming"
                                            />
                                            <Box sx={{ position: 'relative', bottom: '12rem', left: '2%' }}>
                                                <Box> <Typography sx={{ background: '-webkit-linear-gradient(white, #b9c1c9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: 'bold', }} variant="h3">  {data.title ? data.title : data.name} </Typography>  </Box>
                                                <Box> <Typography sx={{ color: '#eaecef', textShadow: '0 0 5px black' }} variant="h6">  <Moment date={movieDate} format="MMMM D YYYY" titleFormat="D MMM YYYY" withTitle /> </Typography>  </Box>
                                                <Link sx={{ textDecoration: 'none' }} href={''}>
                                                    <WatchNowBtn> More Info </WatchNowBtn>
                                                </Link>
                                                <Bookmarker />
                                            </Box>
                                        </Box>
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