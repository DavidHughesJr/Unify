import { styled, Typography, Box } from "@mui/material";
import Tab from "@mui/material/Tab";
import { borderBottom } from "@mui/system";



// Main Dashboard
export const Dashboard = styled(Box)(() => ({
  display: 'flex',
  backgroundColor: "#ffffff",
  width: "90%",
  height: "90vh",
  margin: " 3rem auto",
  borderRadius: "1rem",
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


