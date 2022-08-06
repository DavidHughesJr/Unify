import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import InfoGrid from "../common/InfoGrid";
import { CategoryTypography } from "../../Assets/muiStyles/MaterialStyles";
import HeroSlider from "../../Components/common/HeroSlider"
import tmdbApi, { category } from "../../api/tmdbApi";
import { Box, Typography, Pagination } from "@mui/material";
import Moment from 'react-moment';


export default function StreamingServiceMovies() {
    const [streamInfoByRelease, setStreamingInfoByRelease] = useState([])
    const [streamInfoByPopular, setStreamingInfoByPopular] = useState([])
    const [pageNum, setPageNum] = useState(1)

    let { genreItem } = useParams()
    console.log(genreItem)

    const handleChangePage = (e, value) => {
        setPageNum(value)
    }

    // get current date in correct formate
    const date = new Date().toISOString().slice(0, 10)

    useEffect(() => {

        const getStreamingInfo = async () => {
            const res1 = await tmdbApi.getTvShowGenres(category.releaseTv, 1, 10759)
            const res2 = await tmdbApi.getTvShowGenres(category.popular, 1, 10759, )
            const res3 = await fetch(`https://api.themoviedb.org/3/genre/tv/list?api_key=e9ad43fd1d98a5d8435f4d49f1ec2644&language=en-US`)
            const data = await res3.json()
            console.log(data)
            const res4 = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=e9ad43fd1d98a5d8435f4d49f1ec2644&language=en-US`)
            const data2 = await res4.json()
            console.log(data2)

            const streamInfo1 = await res1.json()
            const streamInfo2 = await res2.json()
            setStreamingInfoByRelease(streamInfo1.results)
            setStreamingInfoByPopular(streamInfo2.results)
            console.log(streamInfo1)
        }
        getStreamingInfo()
    }, [])


    return (
        <Box>
            <HeroSlider data={streamInfoByRelease} title={'New Releases'} />
            <CategoryTypography variant="subtitle2"> Popular </CategoryTypography>
            <InfoGrid data={streamInfoByPopular} />
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '1rem' }}>
                <Pagination onChange={handleChangePage} count={100} />
            </Box>
        </Box>
    )
}