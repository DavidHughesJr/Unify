import { apiConfig } from "../../api/apiConfig"
import { category } from "../../api/tmdbApi"
import { Grid, Box } from "@mui/material"
import { Link } from "react-router-dom";
import noImgPoster from '../../Assets/imgs/no-img-poster.jpg'

export default function InfoGrid({ info }) {
    return (
        <Box>
            <Grid container spacing={{ xs: 2, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {info.map((info) => (
                    <Grid item xs={6} sm={2} md={3} key={info.id}>
                        <Link to={`../${category.movie}/${info.id}`}>
                            <div style={{ width: '100%', height: '100%', }}>
                                <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src={info.poster_path ? apiConfig.w300Image(info.poster_path) : noImgPoster} alt="movies and tvshow images" />
                            </div>
                        </Link>
                    </Grid>

                ))}
            </Grid>
            {/* // pagination  */}
        </Box>
    )
}