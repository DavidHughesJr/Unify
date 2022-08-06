import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import InfoGrid from "../common/InfoGrid";
import { CategoryTypography } from "../../Assets/muiStyles/MaterialStyles";
import HeroSlider from "../../Components/common/HeroSlider"
import tmdbApi, { category } from "../../api/tmdbApi";
import { Box, Typography, Pagination } from "@mui/material";

export default function StreamingServiceMovies() {
    const [streamInfoByPopular, getStreamingInfoByPopular] = useState([])
    const [streamInfoByRelease, getStreamingInfoByRelease] = useState([])
    const [pageNum, setPageNum] = useState(1)

    let { navItems } = useParams()

    const handleChangePage = (e, value) => {
        setPageNum(value)
    }

    useEffect(() => {

        const getStreamingInfo = async () => {
            const res1 = await tmdbApi.getStreamingMovies(category.releaseMovie, navItems)
            const res2 = await tmdbApi.getStreamingMovies(category.popular, navItems, pageNum)
      
            const streamInfo1 = await res1.json()
            const streamInfo2 = await res2.json()
            getStreamingInfoByRelease(streamInfo1.results)
            getStreamingInfoByPopular(streamInfo2.results)
            console.log(streamInfoByPopular)
        }
        getStreamingInfo()
    }, [navItems, pageNum])


    return (
        <Box>
            <HeroSlider data={streamInfoByRelease} title={'New Releases'}/> 
            <CategoryTypography variant="subtitle2"> Popular </CategoryTypography>
            <InfoGrid data={streamInfoByPopular}/>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '1rem' }}>
                <Pagination onChange={handleChangePage} count={50} />
            </Box>
        </Box>
    )
}