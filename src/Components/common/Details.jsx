import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, style } from "@mui/system";
import tmdbApi  from "../../api/tmdbApi";
import { apiConfig } from "../../api/apiConfig";




export default function Details() {
    const [selectedDetails, setSelectedDetails] = useState([])
    let {category, id} = useParams();

   console.log(category, id)

    useEffect(() => {

        const getDetails = async () => {
            try {
                
                const res = await tmdbApi.getDetails(category, id)
                const detailsData = await res.json()
                console.log(detailsData)
                setSelectedDetails(detailsData)


            } catch (error) {
                console.error(error);
            }
        }
        getDetails()
    }, [])


    const styles = {
        detailsBackground: {
            backgroundImage: `url(${apiConfig.originalImage(selectedDetails.backdrop_path)})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed',
            height: '100vh',
            width: '100vw',
        }
    };
    
    return (
        <Box style={styles.detailsBackground}>
            <Box>
            </Box>
        </Box>
    )
}