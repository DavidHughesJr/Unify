import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";

export default function TopRatedSubcategory(){
    return (
        <Box>
            <Typography sx={{ margin: '.5rem' }}> Top Rated </Typography>
            <div style={{ display: 'flex', width: "100%", height: "10rem", backgroundColor: "black" }} >
                <div style={{ backgroundColor: 'green', width: '30%' }}>
                    <img style={{ objectFit: 'cover', height: '100%', width: '100%' }} src="https://image.tmdb.org/t/p/w300/vRQnzOn4HjIMX4LBq9nHhFXbsSu.jpg" alt="New movies" />
                    <div style={{ display: 'flex', justifyContent: 'center', position: 'relative', bottom: '30%' }}>
                        <Typography sx={{ color: 'white' }} variant="subtitle"> Movie Title , Year </Typography>
                    </div>
                </div>
            </div>
        </Box>
    )
}