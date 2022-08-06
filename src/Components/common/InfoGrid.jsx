import { apiConfig } from "../../api/apiConfig"
import { category } from "../../api/tmdbApi"
import { Grid, Box, Pagination } from "@mui/material"
import { Link } from "react-router-dom";
import noImgPoster from '../../Assets/imgs/no-img-poster.jpg'

export default function infoGrid({ data }) {


    return (
        <Box>
            <Grid container spacing={{ xs: 2, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {data.map((data) => (
                    <Grid item xs={6} sm={2} md={3} key={data.id}>
                        <Link to={`../${data.first_air_date ? category.tv : category.movie}/${data.id}`} style={{ textDecoration: 'none' }}>
                            <div style={{ width: '100%', height: '100%', }}>
                                <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src={data.poster_path ? apiConfig.w300Image(data.poster_path) : noImgPoster} alt="movies and tvshow images" />
                            </div>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}