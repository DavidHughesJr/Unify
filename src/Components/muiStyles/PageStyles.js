import { styled, Typography, Box, Button, Tab } from "@mui/material";
// Main Dashboard

// breakpoints 
// xs, extra - small: 0px
// sm, small: 600px
// md, medium: 900px
// lg, large: 1200px
// xl, extra - large: 1536px

export const Dashboard = styled(Box)(() => ({
  display: 'flex',
  backgroundColor: "#ffffff",
  width: "100%",
  height: "100vh",
  '*::-webkit-scrollbar': {
    width: '0.1em',
  },
  '*::-webkit-scrollbar-thumb': {
    backgroundColor: '#e71d60',
  },
  '*::-webkit-scrollbar-track:vertical ': {
    '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
  },
}));
export const Board = styled(Box)(() => ({
  width: "100%",
  height: "100%",
}));
export const BoardLeft = styled(Box)(({ theme }) => ({
  width: "15%",
  height: "100%",
  [theme.breakpoints.down("lg")]: {
    display: 'none'
  },
}));
export const BoardCenter = styled(Box)(({theme}) => ({
  width: "80%",
  height: "100%",
  overflow: 'scroll',
  [theme.breakpoints.down("lg")]: {
    width: '75%'
  },
  [theme.breakpoints.down("md")]: {
    width: '65%'
  },
  [theme.breakpoints.down("sm")]: {
    width: '100%'
  }
}));
export const BoardRight = styled(Box)(({ theme }) => ({
  width: "25%",
  height: "100%",
  borderLeft: "1px solid #e0e0e0",
  overflow: 'scroll',
  [theme.breakpoints.down("md")]: {
    width: '35%'
  },
  [theme.breakpoints.down("sm")]: {
    display: 'none'
  }
}));
export const BoardHero = styled(Box)(() => ({
  width: "100%",
  height: "50%",
}));
export const BoardBottom = styled(Box)(({theme}) => ({
  width: "100%",
  height: "50%",
  [theme.breakpoints.down("lg")]: {
    width: '100%'
  },
}));
export const DetailsBoard = styled(Box)(({theme}) => ({
  width: '87%',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'scroll',
  [theme.breakpoints.down("lg")]: {
    width: '100%'
  },
}));
export const MobileBoard = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  display: 'none',
  [theme.breakpoints.down("lg")]: {
    display: 'block'
  },
}));



