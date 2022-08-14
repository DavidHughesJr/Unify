import { apiConfig } from "../../api/apiConfig"
import { category } from "../../api/tmdbApi"
import { Grid, Box, Pagination, Typography } from "@mui/material"
import { Link } from "react-router-dom";
import noImgPoster from '../../Assets/imgs/no-img-poster.jpg'
import { CategoryTypography } from "../../Components/muiStyles/CommonStyles";

export default function infoGrid({ data, title }) {


    return (
        <Box className="fade-in">
            <CategoryTypography variant="subtitle2"> {title} </CategoryTypography>
            <Grid container spacing={{ xs: 2, md: 1 }} columns={{ xs: 8, sm: 8, md: 12, lg: 15 }}>
                {data.map((data) => (
                    <Grid item xs={4} sm={4} md={3} key={data.id}>
                        <Link to={`../${data.first_air_date ? category.tv : category.movie}/${data.id}`} style={{ textDecoration: 'none' }}>
                            <div style={{ width: '100%', height: '100%', }}>
                                <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src={data.poster_path ? apiConfig.w300Image(data.poster_path) : noImgPoster} alt={data.title? data.title : data.name} loading="lazy" />
                            </div>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}