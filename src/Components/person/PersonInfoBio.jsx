import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

export default function PersonInfoBio({ info }) {

    return (    
        <Box sx={{padding: '2rem'}}>
            <Typography variant='subtitle2'>
                Bio
            </Typography>
        <Typography variant='body2'>
                {info.biography}
        </Typography>
        </Box>
    );
}
