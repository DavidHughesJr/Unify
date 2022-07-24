import { styled, Typography, Box, Button } from "@mui/material";
import Tab from "@mui/material/Tab";





// Main Dashboard
export const Dashboard = styled(Box)(() => ({
  display: 'flex',
  backgroundColor: "#ffffff",
  width: "95%",
  height: "90vh",
  margin: " 3rem auto",
  borderRadius: "1rem",
}));
export const BoardLeft = styled(Box)(() => ({
  width: "15%",
  height: "100%",
}));
export const BoardCenter = styled(Box)(() => ({
  width: "66%",
  height: "100%",
  overflow: 'hidden'
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
  gap: '1rem',
  overflow: 'hidden !IMPORTANT',

}));
export const MoviesContent = styled(Box)(() => ({
  backgroundColor:"grey",
  overflow: 'hidden'
}));
export const MoviesBtnContainer = styled(Box)(() => ({
  position: 'relative',
  bottom: '40%'
}));

