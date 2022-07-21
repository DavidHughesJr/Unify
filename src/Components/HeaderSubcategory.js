import Typography from "@mui/material/Typography";
import Bookmarker from "./Bookmarker";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { WatchNowBtn } from "./MaterialStyles";

const theme = createTheme({
    palette: {
        main: '#fde8ef'
    },
    components: {
        // Name of the component
        MuiButton: {
            styleOverrides: {
                // Name of the slot
                root: {
                    // Some CSS
                    color: 'white'
                },
            },
        },
    },
});
export default function HeaderSubcategory() {

    return (
        <ThemeProvider theme={theme}>
        <div
            style={{ width: "100%", height: "18rem", backgroundColor: "black" }}
        >
            <img
                style={{ width: "100%", height: "100%", objectFit: 'cover' }}
                src="https://image.tmdb.org/t/p/w1280/kwUQFeFXOOpgloMgZaadhzkbTI4.jpg"
            />
            <div style={{ position: 'relative', bottom: '65%', left: '5%' }}>
                <div> <Typography sx={{ background: '-webkit-linear-gradient(#eaecef, #b9c1c9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: 'bolder' }} variant="h3"> Avengers </Typography>  </div>
                <div> <Typography sx={{ color: '#eaecef' }} variant="subtitle"> Some assembly required. </Typography>  </div>
                <div> <Typography sx={{ color: '#b9c1c9' }} variant="subtitle2"> Thriller 1hr 20mins </Typography>  </div>
                <WatchNowBtn> Watch Now </WatchNowBtn>
                <Bookmarker />
            </div>
        </div>
        </ThemeProvider>

    );
}
