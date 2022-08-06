import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import InfoGrid from "../common/InfoGrid";


export default function StreamingService() {
    const [streamInfo, getStreamingInfo] = useState([])

    let { navItem } = useParams()

    useEffect(() => {

        console.log(navItem)
        const getMoreStreamingInfo = async (navId, pageNum) => {

            const res1 = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=e9ad43fd1d98a5d8435f4d49f1ec2644&language=en-US&sort_by=popularity.desc&page=1&with_watch_providers=${navItem}&watch_region=US&with_watch_monetization_types=free`)
            const res2 = await fetch(`https://api.themoviedb.org/3/watch/providers/movie?api_key=e9ad43fd1d98a5d8435f4d49f1ec2644&language=en-US`)
            const streamInfo = await res1.json()
            const streamProviders = await res2.json()
            console.log(streamProviders)
            getStreamingInfo(streamInfo.results)
        }
        getMoreStreamingInfo()
    }, [navItem])

    console.log(streamInfo)

    return (
        <Box>
            <InfoGrid info={streamInfo}/>
        </Box>
    )
}