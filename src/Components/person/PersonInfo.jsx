import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import tmdbApi from "../../api/tmdbApi";
import PersonInfoCard from "./PersonInfoCard"
import PersonInfoCardExtra from "./PersonInfoCardExtra"
import PersonInfoBio from "./PersonInfoBio"
import PersonInfoGallery from "./PersonInfoGallery"
import { Box, Paper, Typography, styled} from "@mui/material";
import LinearProgress from '@mui/material/LinearProgress';
import PosterSlider from "../common/PosterSlider";
import BackDropSlider from "../common/BackdropSlider";



export default function PersonInfo() {

    let { id } = useParams()


    const [isLoading, setLoadingProgress] = useState(true)
    const [personInfo, setPersonInfo] = useState([])
    const [personImages, setPersonImages] = useState([])
    const [personMovies, setPersonMovies] = useState([])
    const [personTvShows, setPersonTvShows] = useState([])

    useEffect(() => {

        const getPersonData = async () => {
            try {
                const resPerson = await tmdbApi.getPeopleInfo(id)
                const personDetailsData = await resPerson.json()
                setPersonInfo(personDetailsData)
                setPersonImages(personDetailsData.images.profiles)
                setPersonMovies(personDetailsData.movie_credits.cast)
                setPersonTvShows(personDetailsData.tv_credits.cast)
                setLoadingProgress()
            } catch (error) {
                console.error(error);
            }
        }
        getPersonData()
    }, [])


    const PersonInfoContainer = styled(Box)(({ theme }) => ({
        backgroundColor: '#e5eaf5;', 
        display: 'flex', 
        width: '100%', 
        overflow: 'hidden',
        [theme.breakpoints.down("sm")]: {
            flexDirection: 'column',
            alignItems: 'center',
            justifyContents: 'center',
            margin: '1rem',
            textAlign: 'center',
            backgroundColor: 'white',
            overflowY: 'scroll'
        },
    }));
    const PersonInfoBox = styled(Box)(({ theme }) => ({
        display: 'flex', 
        width: '100%', 
        padding: '2rem', 
        gap: '1rem', 
    
        [theme.breakpoints.down("sm")]: {
            flexDirection: 'column',
            alignItems: 'center',
            justifyContents: 'center',
            margin: '1rem',
            textAlign: 'center',
            gap: 0,
            padding: 0,        
        },
    }));
    const GalleryPaper = styled(Box)(({ theme }) => ({
        width: '80%',
        overflow: 'scroll',
        backgroundColor: 'white',
        marginRight: '3rem',
        [theme.breakpoints.down("sm")]: {
            width: '100%',
            height: '100%',
            overflow : 'none',
            margin: 0
        },
    }));
    const SliderBox = styled(Box)(({ theme }) => ({
        padding: '2rem', 
        display: 'flex', 
        flexDirection: 'column', 
        gap: "2rem",
        [theme.breakpoints.down("sm")]: {
            gap: 0,
            padding: 0
        },
    }));



    return (
        <PersonInfoContainer>
            {
                isLoading ? <LinearProgress sx={{ width: '100%', marginTop: '4rem',color: "#e71d60"}} color="inherit"/> :
                    <PersonInfoBox>
                       <Box>
                            <PersonInfoCard info={personInfo} />
                            <PersonInfoCardExtra info={personInfo} />
                       </Box>
                        <GalleryPaper elevation={2} variant="outlined">
                            <PersonInfoGallery images={personImages} />
                            <PersonInfoBio info={personInfo} />
                            <SliderBox>
                                <PosterSlider data={personMovies} title={'Movies'} />
                                <BackDropSlider data={personTvShows} title={'Tv Shows'} /> 
                            </SliderBox>
                        </GalleryPaper>
                    </PersonInfoBox>
                    
            }
        </PersonInfoContainer>
    )

}