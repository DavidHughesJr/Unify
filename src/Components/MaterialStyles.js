import { styled, Typography, Box, Button } from "@mui/material";
import Tab from "@mui/material/Tab";
import { Link } from "react-router-dom";





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
export const DashTypography1 = styled(Typography)(() => ({
  color: "#77879e",
}));
// Buttons 
export const WatchNowBtn = styled(Button)(() => ({
  padding: '0 3rem', borderRadius: '0', backgroundColor: '#e71d60', textTransform: 'none'
}));


