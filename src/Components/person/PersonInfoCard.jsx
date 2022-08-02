import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { apiConfig } from '../../api/apiConfig';
import Link from '@mui/material/Link'
import Moment from "react-moment"

export default function PersonInfoCard({ info }) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="300"
                image={apiConfig.w500Image(info.profile_path)}
                alt={info.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {info.name}
                </Typography>
                <Typography variant="subtitle2" color="text.secondary">
                    Birthplace: {info.place_of_birth}
                </Typography>
                <Typography variant="subtitle2" color="text.secondary">
                    Birthday: <Moment date={info.birthday} format="MMMM D YYYY" titleFormat="D MMM YYYY" withTitle />
                </Typography>
                {
                    info.deathday ? <Typography variant="subtitle2" color="text.secondary"> Deathday: <Moment date={info.deathday} format="MMMM D YYYY" titleFormat="D MMM YYYY" withTitle /> </Typography> : ''
                }
                <Typography variant="subtitle2" color="text.secondary">
                    Known For:  {info.known_for_department}
                </Typography>
            </CardContent>
            <CardActions>
                {
                    
                }
                <Link style={{ textDecoration: 'none' }} href={`https://www.imdb.com/name/${info.imdb_id}`} target="_blank">   <Button size="small">imdb</Button> </Link>
            </CardActions>
        </Card>
    );
}
