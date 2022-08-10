import { styled, Typography, Box, Button } from "@mui/material";
// Main Dashboard

// breakpoints
// xs, extra - small: 0px
// sm, small: 600px
// md, medium: 900px
// lg, large: 1200px
// xl, extra - large: 1536px

// Start Dashboard Styles
export const HeroTypography = styled(Typography)(() => ({
    margin: '.5rem',
    color: '#37456a',
}));
export const CategoryTypography = styled(Typography)(() => ({
    margin: '1rem 0.5rem', color: '#37456a'
}));
export const WatchNowBtn = styled(Button)(() => ({
    minHeight: '3rem !important',
    height: 0,
    padding: '0 2rem',
    borderRadius: '0',
    backgroundColor: '#e71d60',
    textTransform: 'none',
    color: 'white'
}));
// Movies Section
export const MoviesContainer = styled(Box)(() => ({
    display: 'flex',
    width: "100%",
    overflow: 'hidden !IMPORTANT',
}));
export const MoviesContent = styled(Box)(() => ({
    backgroundColor: "grey",
    overflow: 'hidden'
}));
export const MoviesBtnContainer = styled(Box)(() => ({
    position: 'relative',
    bottom: '3.4rem'
}));
