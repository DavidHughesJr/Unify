import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Bookmark from "@mui/icons-material/Bookmark"
import Button from "@mui/material/Button"
import Bookmarker from "./Bookmarker"

export default function NewestSubcategory(){
    return(
        <Box>
            <Typography sx={{ margin: '.5rem' }}> Newest </Typography>
            <div style={{ display: 'flex', width: "100%", height: "15rem", }} >
                <div style={{ backgroundColor: 'green', width: '20%' }}>
                    <img style={{ objectFit: 'cover', height: '100%', width: '100%' }} src="https://image.tmdb.org/t/p/w185/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg" alt="New movies" />
                    <div style={{ display: 'flex', justifyContent: 'center', position: 'relative', bottom: '100%', left: '35%' }}>
                        <Bookmarker />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', position: 'relative', bottom: '60%' }}>
                        <Button sx={{ padding: '0 2rem', borderRadius: '0', backgroundColor: '#e71d60', textTransform: 'none', }} variant="contained">Watch Now </Button>
                    </div>
                </div>
            </div>
        </Box>
    )
}