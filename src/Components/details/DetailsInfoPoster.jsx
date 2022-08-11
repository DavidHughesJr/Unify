import { formatDataDate } from '../../helpers/formatters'
import { Box, Paper, Typography } from "@mui/material";
import { apiConfig } from '../../api/apiConfig';
import Moment from "react-moment"

export default function DetailsInfoPoster({details}){
    

    const detailsReleaseDate = formatDataDate(details.release_date ? details.release_date : details.first_air_date)
    const detailsLastAir = formatDataDate(details.last_air_date)
    const detailHrs = Math.floor(details.runtime / 60)
    const detailMins = details.runtime % 60

    return (
        <Box sx={{ flexDirection: 'column', width: '10rem', marginRight: '1rem' }}>
            <Box sx={{ width: '10rem' }}>
                <img style={{ width: '100%' }} src={apiConfig.w300Image(details.poster_path)} alt="poster img" />
            </Box>
            <Typography variant="subtitle2"> <Moment date={detailsReleaseDate} format="MMMM D YYYY" titleFormat="D MMM YYYY" withTitle /> </Typography>
            {
                details.runtime ? <Typography variant="subtitle2"> {detailHrs === 0 ? '' : detailHrs} Hour {detailMins} Min  </Typography> : <Typography variant="subtitle2"> Last Air <Moment date={detailsLastAir} format="MMMM D YYYY" titleFormat="D MMM YYYY" withTitle /></Typography>
            }
        </Box>
    )
}