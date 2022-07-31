import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, style } from "@mui/system";
import tmdbApi  from "../../api/tmdbApi";
import { apiConfig } from "../../api/apiConfig";
import { Typography } from "@mui/material";




export default function DetailsInfoHero() {
    const [details, setSelectedDetails] = useState([])
    let {category, id} = useParams();
    


    useEffect(() => {

        const getDetails = async () => {
            try {
                
                const res = await tmdbApi.getDetails(category, id)
                const detailsData = await res.json()
        
                setSelectedDetails(detailsData)
               

            } catch (error) {
                console.error(error);
            }
        }
        getDetails()
    }, [])


    const styles = {
        detailsBackground: {
            backgroundImage: `url(${apiConfig.originalImage(details.backdrop_path)})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            height: '100%',
            width: '100%',
            borderRadius: '0 0 0 3rem'
        }
    };
    
    return (
        <Box style={styles.detailsBackground}>
            <Box sx={{ backgroundColor: 'black', width: '100%', height: '100%', opacity: 0.4, borderRadius: '0 0 0 3rem'}} >                
            </Box>
        </Box>
    )
}