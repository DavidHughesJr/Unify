import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { style } from "@mui/system";
import tmdbApi from "../../api/tmdbApi";
import { apiConfig } from "../../api/apiConfig";
import { Box, Paper, Typography } from "@mui/material";
import Button from '@mui/material/Button';
import { Colors } from '../../Assets/colors/colors'
import CastInfoCard from './DetailsInfoCast'
import Bookmarker from "../common/Bookmarker"
import ShareIcon from '@mui/icons-material/Share';
import Moment from "react-moment"
import { formatDataDate, moneyFormatter } from "../../helpers/formatters";
import DetailsMoreLikeThis from "./DetailsInfoMoreLikeThis";
import Link from "@mui/material/Link";

export default function DetailsInfo() {
    const [details, setSelectedDetails] = useState([])
    const [companyDetails, setCompanyDetails] = useState([])
    const [genreNames, setGenreName] = useState([])
    const [cast, setCast] = useState([])
    const [videos, setVideos] = useState([])
    // const [watchProviders, setWatchProviders] = useState([])
    // const [watchProvidersName, setWatchProviderName] = useState([])
    // const [watchLink, setWatchLink] = useState('')
    const [watchProviderBackup, setWatchProvidersBackup] = useState('')
    let { category, id } = useParams();


    useEffect(() => {

        const getDetails = async () => {
            try {
                // get details includes title budget revenue etc..
                const resDetails = await tmdbApi.getDetails(category, id)
                const detailsData = await resDetails.json()
                setSelectedDetails(detailsData)

                // get cast members
                const resCast = await tmdbApi.getCredits(category, id)
                const creditsData = await resCast.json()
                const castMembers = creditsData.cast.map(cast => cast)
                setCast(castMembers)

                // set company details // clause for those with unavailable info 
                setCompanyDetails(detailsData.production_companies[0] ? detailsData.production_companies[0] : '')
            
                const genreNames = detailsData.genres.map(genre => genre.name)
                setGenreName(genreNames)

                // get link for watch trailer    
                const resVid = await tmdbApi.getVideos(category, id)
                const videoData = await resVid.json()
                setVideos(videoData.results[0])


                // const resProviderBackup = await tmdbApi.getWatchProviderBackup(category, id)
                // const providerBackupData = await resProviderBackup.json()
                // const providerData = await resProvider.json()
                // setWatchProvidersBackup(providerBackupData.results.US.link)
                // // setWatchProviders(providerData)
                // // setWatchProviderName(...Object.keys(providerData.streamingInfo))



            } catch (error) {
                console.error(error);
            }
        }
        getDetails()
    }, [category, id])


    // Convert mins to hours & mins
    const detailsReleaseDate = formatDataDate(details.release_date ? details.release_date : details.first_air_date)
    const detailsLastAir = formatDataDate(details.last_air_date)
    console.log(detailsLastAir)
    const detailHrs = Math.floor(details.runtime / 60)
    const detailMins = details.runtime % 60

    console.log(details)

    return (
        <Box>
            <Box sx={{ margin: '4rem', display: 'flex' }}>
                <Box sx={{ flexDirection: 'column', width: '10rem', marginRight: '1rem' }}>
                    <Box sx={{ width: '10rem' }}>
                        <img style={{ width: '100%' }} src={apiConfig.w300Image(details.poster_path)} alt="poster img" />
                    </Box>
                    <Typography variant="subtitle2"> <Moment date={detailsReleaseDate} format="MMMM D YYYY" titleFormat="D MMM YYYY" withTitle /> </Typography>
                  {
                        details.runtime ? <Typography variant="subtitle2"> {detailHrs === 0 ? '' : detailHrs} Hour {detailMins} Min  </Typography> : <Typography variant="subtitle2"> Last Air <Moment date={detailsLastAir} format="MMMM D YYYY" titleFormat="D MMM YYYY" withTitle /></Typography> 
                  }
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography variant="h2">  {details.title}</Typography>
                    <Typography variant="body">  </Typography>
                    <Box sx={{ marginTop: '1rem', display: 'flex', gap: '1rem' }}>
                        {
                            videos ? <Link sx={{ textDecoration: 'none' }} target="_blank" href={`https://www.youtube.com/watch?v=${videos.key}`}>
                                <Button sx={{ backgroundColor: Colors.primaryBtn }} variant="contained"> Watch Trailer </Button>
                            </Link> : ''
                        }
                        <Bookmarker />
                        <Button sx={{ color: Colors.primaryBtn, border: `1px solid ${Colors.primaryBtn}` }} variant="outlined"> <ShareIcon /> </Button>
                    </Box>
                    <Box>
                        <Box sx={{ display: 'flex', marginTop: '1rem' }}>
                            {genreNames.map(names => <Box sx={{ border: `1px solid ${Colors.outlineBtn}`, borderRadius: '1rem', marginRight: '1rem', padding: '.5rem', color: Colors.primaryText }}> <Typography variant="subtitle2" > {names} </Typography> </Box>)}
                        </Box>
                    </Box>
                    <Box sx={{ marginTop: '1rem', display: 'flex', width: '100%' }}>
                        <Box sx={{ width: '85%' }}>
                            <Typography variant="h6">  Storyline </Typography>
                            <Typography sx={{ paddingRight: '5rem' }}>
                                {details.overview}
                            </Typography>
                        </Box>
                        <Box sx={{ width: '30%' }}>
                            <Typography variant="h6">
                                {companyDetails.name}
                            </Typography>
                            <Typography>
                                {details.budget ? `Budget: ${moneyFormatter.format(details.budget)}` : `Seasons: ${details.number_of_seasons}`}
                            </Typography>
                            <Typography>
                                {details.revenue ? `Revenue: ${moneyFormatter.format(details.revenue) }` : `Number of Episodes: ${details.number_of_episodes}`}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ margin: '4rem' }}>
                <Typography variant="subtitle2"> More Like This  </Typography>
                <DetailsMoreLikeThis />
            </Box>
            <Box sx={{ margin: '4rem', overflow: 'hidden', minHeight: '20rem', }}>
                <Typography variant="subtitle2"> Cast </Typography>
                <CastInfoCard cast={cast} />
            </Box>
        </Box>

    )
}