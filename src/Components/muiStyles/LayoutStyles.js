import { styled, Tab, Typography } from "@mui/material";
// Main Dashboard

// breakpoints
// xs, extra - small: 0px
// sm, small: 600px
// md, medium: 900px
// lg, large: 1200px
// xl, extra - large: 1536px
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