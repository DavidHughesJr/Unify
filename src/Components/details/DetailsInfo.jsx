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



export default function DetailsInfo() {
    const [details, setSelectedDetails] = useState([])
    const [genreNames, setGenreName] = useState([])
    const [cast, setCast] = useState([])
    let { category, id } = useParams();


    useEffect(() => {

        const getDetails = async () => {
            try {
                const [resDetails, resCast] = await Promise.all([tmdbApi.getDetails(category, id), tmdbApi.getCredits(category, id)])
                const detailsData = await resDetails.json()
                const creditsData = await resCast.json()
                const genreNames = detailsData.genres.map(genre => genre.name)
                const castMembers = creditsData.cast.map(cast => cast)
                setSelectedDetails(detailsData)
                setGenreName(genreNames)
                setCast(castMembers)
                console.log(details.production_companies[0].name)
            } catch (error) {
                console.error(error);
            }
        }
        getDetails()
    }, [])


    return (
        <Box>
            <Box sx={{ margin: '2rem', display: 'flex' }}>
                <Box sx={{ flexDirection: 'column', width: '55%', justifyContent: 'space-evenly'}}>
                    <Box sx={{ width: '10rem' }}>
                        <img style={{ width: '100%' }} src={apiConfig.w500Image(details.poster_path)} alt="poster img" />
                    </Box>
                    <Typography> {details.release_date}</Typography>
                    <Typography> {details.runtime}</Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography variant="h2">  {details.title}</Typography>
                    <Typography variant="body">  </Typography>
                    <Box sx={{ marginTop: '1rem', display: 'flex', gap: '1rem' }}>
                        <Button variant="contained"> Watch Now On </Button>
                        <Bookmarker /> 
                        <Button variant="outlined"> <ShareIcon/> </Button>
                    </Box>
                    <Box>
                        <Box sx={{ display: 'flex', marginTop: '1rem' }}>
                            {genreNames.map(names => <Box sx={{ border: `1px solid ${Colors.outlineBtn}`, borderRadius: '1rem', marginRight: '1rem', padding: '.5rem', color: Colors.primaryText }}> <Typography variant="subtitle2" > {names} </Typography> </Box>)}
                        </Box>
                    </Box>
                    <Box sx={{ marginTop: '.5rem', display: 'flex', width: '100%' }}>
                        <Box sx={{ width: '85%' }}>
                            <Typography sx={{ marginTop: '1rem' }}>  Storyline </Typography>
                            <Typography sx={{ paddingRight: '5rem' }}>
                                {details.overview}
                            </Typography>
                        </Box>
                        <Box sx={{ width: '20%' }}>
                            <Typography sx={{ marginTop: '1rem' }}>  { } </Typography>
                            <Typography>
                                'info'
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ margin: '4rem', overflow: 'hidden', minHeight: '20rem' }}>
                <CastInfoCard cast={ cast } />
            </Box>
            <Box sx={{margin: '4rem'}}>
                Video
            </Box>
        </Box>

    )
}