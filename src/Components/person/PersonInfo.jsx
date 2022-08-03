import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import tmdbApi from "../../api/tmdbApi";
import PersonInfoCard from "./PersonInfoCard"
import PersonInfoBio from "./PersonInfoBio"
import PersonInfoGallery from "./PersonInfoGallery"
import { Box, Paper, Typography } from "@mui/material";
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



    return (
        <Box sx={{ backgroundColor: '#e5eaf5;', display: 'flex', width: '100%', overflow: 'hidden' }}>
            {
                isLoading ? <LinearProgress sx={{ width: '100%', marginTop: '4rem',color: "#e71d60"}} color="inherit"/> :
                    <Box sx={{display: 'flex', width: '100%', padding: '2rem', gap: '1rem', overflow: 'hidden' }}>
                        <PersonInfoCard info={personInfo} />
                        <Paper elevation={2} variant="outlined" sx={{ width: '80%', overflow: 'scroll'}}>
                            <PersonInfoGallery images={personImages} />
                            <PersonInfoBio info={personInfo} />
                            <Box sx={{padding: '2rem', display: 'flex', flexDirection: 'column', gap:"2rem"}}>
                                <PosterSlider data={personMovies} title={'Movies'} />
                                <BackDropSlider data={personTvShows} title={'Tv Shows'} /> 
                            </Box>
                        </Paper>
                    </Box>
            }
        </Box>
    )

}