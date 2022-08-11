import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import tmdbApi from "../../api/tmdbApi";
import { apiConfig } from "../../api/apiConfig";
import { Box, Paper, Typography, styled, Button } from "@mui/material";
import { Colors } from '../../Assets/colors/colors'
import CastInfoCard from './DetailsInfoCast'
import Bookmarker from "../saves/SaveBtn"
import ShareIcon from '@mui/icons-material/Share';
import { formatDataDate, moneyFormatter } from "../../helpers/formatters";
import Link from "@mui/material/Link";
import DetailsMoreLikeThis from "./DetailsInfoMoreLikeThis";
import DetailsInfoPoster from "./DetailsInfoPoster";


export default function DetailsInfo({ saves, setSaves }) {
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


    let saveData = {
        id: details.id,
        title: details.title ? details.title : details.name,
        first_air_date: details.first_air_date ? details.first_air_date : '',
        poster_path: details.poster_path,

    }
    const DetailsInfoContainer = styled(Box)(({ theme }) => ({
        margin: '4rem',
        display: 'flex',
        [theme.breakpoints.down("lg")]: {
            margin: '3rem'
        },
        [theme.breakpoints.down("md")]: {
            margin: '2rem'
        },
        [theme.breakpoints.down("sm")]: {
            flexDirection: 'column',
            alignItems: 'center',
            justifyContents: 'center',
            margin: '1rem',
            textAlign: 'center',
        },
    }));
    const SliderBox = styled(Box)(({ theme }) => ({
        margin: '4rem',
        [theme.breakpoints.down("lg")]: {
            margin: '3rem'
        },
        [theme.breakpoints.down("md")]: {
            margin: '2rem'
        },
        [theme.breakpoints.down("sm")]: {
            margin: '2rem'
        },
        [theme.breakpoints.between('xs', 'sm')]: {
            margin: '1rem'
        },
    }));
    const ButtonsContainer = styled(Box)(({ theme }) => ({
        marginTop: '1rem',
        display: 'flex',
        gap: '1rem',
        [theme.breakpoints.down("lg")]: {
            margin: '3rem'
        },
        [theme.breakpoints.down("md")]: {
            margin: '2rem'
        },
        [theme.breakpoints.down("sm")]: {
            flexDirection: 'column',
            alignItems: 'center',
            justifyContents: 'center',
            margin: '2rem',
            textAlign: 'center'
        },
        [theme.breakpoints.between('xs', 'sm')]: {
            margin: '1rem'
        },
    }));
    const TextBox = styled(Box)(({ theme }) => ({
        marginTop: '1rem',
        display: 'flex',
        width: '100%',
        [theme.breakpoints.down("md")]: {
            fontSize: '1.8em',
            flexDirection: 'column',
            gap: 5,
            paddingRight: 0,
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: '1.8em',
        },
        [theme.breakpoints.between('xs', 'sm')]: {
            fontSize: '1.5em',
        },
    }));
    const StorylineBox = styled(Box)(({ theme }) => ({
        width: '85%',
        [theme.breakpoints.down("md")]: {
            width: '100%'
        },
    }));
    const CompanyBox = styled(Box)(({ theme }) => ({
        width: '35%',
        [theme.breakpoints.down("md")]: {
            width: '100%'
        },
    }));
    const BodyText = styled(Typography)(({ theme }) => ({
        paddingRight: '5rem',
        [theme.breakpoints.down("md")]: {
            flexDirection: 'column',
            gap: 5,
            paddingRight: 0,
            padding: '1rem'
        },
    }));



    return (
        <Box>
            <DetailsInfoContainer>
                <DetailsInfoPoster details={details} />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography variant="h2">  {details.title ? details.title : details.name}</Typography>
                    <ButtonsContainer>
                        <Box sx={{ marginTop: '1rem', display: 'flex', gap: '1rem', }}>
                            {
                                videos ? <Link sx={{ textDecoration: 'none' }} target="_blank" href={`https://www.youtube.com/watch?v=${videos.key}`}>
                                    <Button sx={{ backgroundColor: Colors.primaryBtn }} variant="contained"> Watch Trailer </Button>
                                </Link> : ''
                            }
                            <Bookmarker saves={saves} details={details} setSaves={setSaves} saveData={saveData} />
                            <Button sx={{ color: Colors.primaryBtn, border: `1px solid ${Colors.primaryBtn}` }} variant="outlined"> <ShareIcon /> </Button>
                        </Box>
                    </ButtonsContainer>
                    <Box>
                        <Box sx={{ display: 'flex', marginTop: '1rem', alignItems: 'center' }}>
                            {genreNames.map(names => <Box sx={{ border: `1px solid ${Colors.outlineBtn}`, borderRadius: '1rem', marginRight: '1rem', padding: '.5rem', color: Colors.primaryText }}> <Typography variant="subtitle2" > {names} </Typography> </Box>)}
                        </Box>
                    </Box>
                    <TextBox>
                        <StorylineBox>
                            <Typography variant="h6">  Storyline </Typography>
                            <BodyText>
                                {details.overview}
                            </BodyText>
                        </StorylineBox>
                        <CompanyBox sx={{ width: '30%' }}>
                            <Typography variant="h6">
                                {companyDetails.name}
                            </Typography>
                            <Typography>
                                {category === 'movie' ? `Budget: ${moneyFormatter.format(details.budget)}` : `Seasons: ${details.number_of_seasons}`}
                            </Typography>
                            <Typography>
                                {category === 'movie' ? `Revenue: ${moneyFormatter.format(details.revenue)}` : `Number of Episodes: ${details.number_of_episodes}`}
                            </Typography>
                            <Typography variant="caption">
                                {details.revenue === 0 ? 'Revenue Not Yet Available' : ''}
                            </Typography>
                        </CompanyBox>
                    </TextBox>
                </Box>
            </DetailsInfoContainer>
            <SliderBox sx={{ margin: '4rem' }}>
                <Typography variant="subtitle2"> More Like This  </Typography>
                <DetailsMoreLikeThis />
            </SliderBox>
            <SliderBox sx={{ margin: '4rem', overflow: 'hidden', minHeight: '20rem', }}>
                <Typography variant="subtitle2"> Cast </Typography>
                <CastInfoCard cast={cast} />
            </SliderBox>
        </Box>


    )
}