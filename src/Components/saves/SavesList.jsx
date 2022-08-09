import { apiConfig } from "../../api/apiConfig"
import { category } from "../../api/tmdbApi"
import { Grid, Box, Pagination, Typography } from "@mui/material"
import { Link } from "react-router-dom";
import noImgPoster from '../../Assets/imgs/no-img-poster.jpg'
import { CategoryTypography } from "../../Assets/muiStyles/MaterialStyles"

export default function Saves({ saves }) {

    return (
        <Box sx={{padding: '1rem'}}>
            <CategoryTypography variant="subtitle2"> Saves </CategoryTypography>
            {
                saves.length === 0 ? <Typography variant="h5"> Your saves are empty! </Typography>  : 
                    <Grid container spacing={{ xs: 2, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {saves.map((data) => (
                            <Grid item xs={6} sm={2} md={3} key={data.id}>
                                <Link to={`../${data.first_air_date ? category.tv : category.movie}/${data.id}`} style={{ textDecoration: 'none', color: "black" }}>
                                    <div style={{ width: '100%', height: '100%', }}>
                                        <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src={data.poster_path ? apiConfig.w300Image(data.poster_path) : noImgPoster} alt="movies and tvshow images" />
                                        <Typography variant="subtitle2"> {data.title} </Typography>
                                        <Typography variant="subtitle2"> {data.date} </Typography>
                                    </div>
                                </Link>
                            </Grid>
                        ))}
                    </Grid>
            }
        </Box>
    )
}