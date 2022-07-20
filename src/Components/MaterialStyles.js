import { styled, Typography, Box } from "@mui/material";
import Tab from "@mui/material/Tab";



// Main Dashboard
export const Dashboard = styled(Box)(() => ({
  backgroundColor: "#ffffff",
  width: "90%",
  height: "90vh",
  margin: " 3rem auto",
  borderRadius: "1rem",
}));
// Side Nav Bar Tabs
export const NavTypography = styled(Typography)(() => ({
  color: "#77879e",
  textAlign: "center",
}));
export const NavTab = styled(Tab)(() => ({
  flexDirection: "row",
  justifyContent: "start",
  alignItems: "center",
  gap: 1,
  color: "#77879e",
  textTransform: "none",
}));


