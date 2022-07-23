import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Bookmarker from "./Bookmarker"
import Link from "@mui/material/Link"
import { MoviesBtnContainer, MoviesContainer, WatchNowBtn } from "./MaterialStyles"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


export default function NewestSubcategory({ stream, series }) {
    return (

        <Box>
            <div
                style={{ width: "100%", height: "18rem", backgroundColor: "black" }}
            >
                <img
                    style={{ width: "100%", height: "100%", objectFit: 'cover' }}
                    src="https://image.tmdb.org/t/p/w1280/kwUQFeFXOOpgloMgZaadhzkbTI4.jpg"
                />
                <div style={{ position: 'relative', bottom: '65%', left: '5%' }}>
                    <div> <Typography sx={{ background: '-webkit-linear-gradient(#eaecef, #b9c1c9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: 'bolder' }} variant="h3"> Avengers </Typography>  </div>
                    <div> <Typography sx={{ color: '#eaecef' }} variant="subtitle"> Some assembly required. </Typography>  </div>
                    <div> <Typography sx={{ color: '#b9c1c9' }} variant="subtitle2"> Thriller 1hr 20mins </Typography>  </div>
                    <WatchNowBtn> Watch Now </WatchNowBtn>
                    <Bookmarker />
                </div>
            </div>
            <Typography sx={{ margin: '.5rem' }}> Movies </Typography>
            <MoviesContainer>
        
               <Swiper
                    spaceBetween={50}
                    slidesPerView={4}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}> 
                { 
                    stream.map((streams) => {
                        return (
                            <SwiperSlide>
                                <div key={streams.id} style={{ width: '100%' }}>
                                    <img style={{ height: '100% !important', width: '100%' }} src={streams.posterURLs[185]} alt="New movies" />
                                    {/* <Bookmarker />
                                    <MoviesBtnContainer>
                                        <Link sx={{ textDecoration: 'none' }} href={streams.streamingInfo.netflix.us.link}>
                                            <WatchNowBtn>  Watch Now </WatchNowBtn>
                                        </Link>
                                    </MoviesBtnContainer> */}
                                </div>
                            </SwiperSlide>
                            
                        )
                    })
                }
               
                </Swiper>
            </MoviesContainer>
            <Box>
                <Typography sx={{ margin: '.5rem' }}> Top Rated </Typography>
                <div style={{ display: 'flex', width: "100%", height: "10rem"}} >
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={3}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}> 
                    {
                        series.map((series) => {
                            return (
                                <SwiperSlide>
                                <div style={{ width: '100%' }}>
                                    <img style={{ objectFit: 'cover', height: '100%', width: '100%' }} src={series.backdropURLs[300]} alt="New movies" />
                                    <div style={{ display: 'flex', justifyContent: 'center', position: 'relative', bottom: '30%' }}>
                                        <Link sx={{ textDecoration: 'none' }}>
                                            <Typography sx={{ color: 'white' }} variant="subtitle"> {series.title}, {series.year} </Typography>
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
        </Box>

    )
}