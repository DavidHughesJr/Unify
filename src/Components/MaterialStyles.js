import { styled, Typography, Box, Button } from "@mui/material";
import Tab from "@mui/material/Tab";





// Main Dashboard
export const Dashboard = styled(Box)(() => ({
  display: 'flex',
  backgroundColor: "#ffffff",
  width: "100%",
  height: "100vh",
  borderRadius: "1rem",
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
export const BoardLeft = styled(Box)(() => ({
  width: "15%",
  height: "100%",
}));
export const BoardCenter = styled(Box)(() => ({
  width: "66%",
  height: "100%",
  overflow: 'scroll'
}));
export const BoardRight = styled(Box)(() => ({
  width: "20%",
  height: "100%",
  borderLeft: "1px solid #e0e0e0",
}));
// Side Nav Bar Tabs
export const NavTypography = styled(Typography)(() => ({
  color: "#77879e",
  fontWeight: "bold",
  paddingLeft: "1rem",
}));
export const NavTab = styled(Tab)(() => ({
  flexDirection: "row",
  justifyContent: "start",
  alignItems: "center",
  gap: 1,
  color: "#77879e",
  textTransform: "none",
}));
export const NavLink = styled(Tab)(() => ({
  color: 'green'
}));
// Start Dashboard Styles 
export const DashTypography1 = styled(Typography)(() => ({
  color: "#77879e",
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
  height: '28rem'

}));
export const MoviesContent = styled(Box)(() => ({
  backgroundColor:"grey",
  overflow: 'hidden'
}));
export const MoviesBtnContainer = styled(Box)(() => ({
  position: 'relative',
  bottom: '3.4rem'
}));

