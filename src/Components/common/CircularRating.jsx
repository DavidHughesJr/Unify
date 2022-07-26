import * as React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function CircularRating({data}) {
    return (
        <Box sx={{display: 'flex', gap: '1rem'}}>
              <Typography> Rating: </Typography>
            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
                <CircularProgress variant="determinate" sx={{ color: '#e71d60' }} value={data.vote_average * 10} />
                <Box
                    sx={{
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        position: 'absolute',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Typography variant="caption" component="div" color="text.secondary">
                        {data.vote_average === 0 ? 'Not Rated' : (data.vote_average * 1 + '').slice(0, 3)}
                    </Typography>
                </Box>
            </Box>
        </Box>
       
    );
}