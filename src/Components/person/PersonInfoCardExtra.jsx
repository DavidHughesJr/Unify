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
import { Box } from '@mui/material';

export default function PersonInfoCardExtra({ info }) {

    const definePopularity = (popularity) => {
        if (info.popularity <= 20 ){
            popularity = 'Low'
        }
        if (info.popularity <= 40) {
            popularity = 'Mid'
        }
        if (info.popularity > 30) {
            popularity = 'High'
        }
        return popularity
    }

    // To determine current age in years
    const birthday = new Date(info.birthday)
    const currentDate = new Date()
    const age = currentDate.getFullYear() - birthday.getFullYear();


    return (
        <Card sx={{ maxWidth: 345, maxHeight: '60%', marginTop: '2rem'}}>
            <Box sx={{padding: '1rem'}}>
                <Typography variant='subtitle2'>
                    {info.gender === 1 ? 'Female' : 'Male'}
                </Typography>
                <Typography variant='subtitle2' color="text.secondary">
                    Age: {age}
                </Typography>
                <Typography variant='subtitle2' color="text.secondary">
                    Popularity: {
                        definePopularity(info.popularity)
                    }
                </Typography>
            </Box>
        </Card>
    );
}
