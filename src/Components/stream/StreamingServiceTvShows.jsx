import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, Pagination } from "@mui/material";
import InfoGrid from "../common/InfoGrid";
import { CategoryTypography } from "../../Components/muiStyles/CommonStyles";
import HeroSlider from "../../Components/common/HeroSlider"
import tmdbApi, { category } from "../../api/tmdbApi";
import { getNetworkId } from "../../helpers/navItems";



export default function StreamingServiceTvShows() {
    const [streamInfoByPopular, getStreamingInfoByPopular] = useState([])
    const [streamInfoByRelease, getStreamingInfoByRelease] = useState([])
    const [pageNum, setPageNum] = useState(1)

    let { navItems } = useParams()
    // provides more accuracy to the api for tv shows
    let networkId = getNetworkId(navItems)
    
    const handleChangePage = (e, value) => {
        setPageNum(value)
    }


    useEffect(() => {

        const getStreamingInfo = async () => {
            const res1 = await tmdbApi.getStreamingTvShows(category.releaseTv, networkId, navItems)
            const res2 = await tmdbApi.getStreamingTvShows(category.popular, networkId, navItems, pageNum)
            const streamInfo1 = await res1.json()
            const streamInfo2 = await res2.json()
            getStreamingInfoByRelease(streamInfo1.results)
            getStreamingInfoByPopular(streamInfo2.results)
        }
        getStreamingInfo()
    }, [navItems, pageNum])

    return (
        <Box>
            <HeroSlider data={streamInfoByRelease} title={'New Releases'} />
            <CategoryTypography variant="subtitle2"> Popular </CategoryTypography>
            <InfoGrid data={streamInfoByPopular} />
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '1rem' }}>
                <Pagination onChange={handleChangePage} count={50} />
            </Box>
        </Box>
    )
}