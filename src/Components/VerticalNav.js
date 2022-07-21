import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { NavTypography, NavTab } from "./MaterialStyles";
import {
  Home,
  Stream,
  OndemandVideo,
  Airplay,
  Movie,
  Undo,
  Favorite,
  Chair,
  SentimentVerySatisfied,
  FormatSize,
  Group,
  Bookmarks,
} from "@mui/icons-material";
import {
  MemoryRouter,
  Route,
  Routes,
  Link,
  matchPath,
  useLocation,
} from "react-router-dom";
import { StaticRouter } from "react-router-dom/server";
import logo from '../imgs/unify-logo-min.png'; // Tell webpack this JS file uses this image

function Router(props) {
  const { children } = props;
  if (typeof window === "undefined") {
    return <StaticRouter location="/drafts">{children}</StaticRouter>;
  }

  return (
    <MemoryRouter initialEntries={["/drafts"]} initialIndex={0}>
      {children}
    </MemoryRouter>
  );
}

Router.propTypes = {
  children: PropTypes.node,
};

function useRouteMatch(patterns) {
  const { pathname } = useLocation();

  for (let i = 0; i < patterns.length; i += 1) {
    const pattern = patterns[i];
    const possibleMatch = matchPath(pattern, pathname);
    if (possibleMatch !== null) {
      return possibleMatch;
    }
  }

  return null;
}


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalNav() {
    const routeMatch = useRouteMatch(["/", "/netflix", "/hulu"]);
    const currentTab = routeMatch?.pattern?.path;
  const [value, setValue] = React.useState(0);
  

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        borderRight: 1,
        borderColor: "divider",
        borderRadius: "1rem 0 0 1rem",
      }}
    >
      <Box sx={{ margin: "auto", paddingTop: 1 }}>
        <img style={{ width: "5rem" }} src={logo} alt="logo" />
      </Box>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={currentTab}
        onChange={handleChange}
        aria-label="Vertical tabs example"
      >
        <NavTypography> Menu
        </NavTypography>
        <NavTab icon={<Home />} label="Home" value="/" to="/" component={Link} />
        <NavTab icon={<Stream />} label="Nextflix" value="/netflix" to="/netflix" component={Link}/>
        <NavTab icon={<OndemandVideo />} label="Hulu" value="/hulu" to="/hulu" component={Link} />
        <NavTab icon={<Movie />} label="Amazon Prime" {...a11yProps(3)} />
        <NavTab icon={<Airplay />} label="Disney Plus" {...a11yProps(4)} />
        <NavTypography> Library </NavTypography>
        <NavTab icon={<Undo />} label="Recent" {...a11yProps(2)} />
        <NavTab icon={<Bookmarks />} label="Bookmarks" {...a11yProps(3)} />
        <NavTypography> Genres </NavTypography>
        <NavTab
          icon={<SentimentVerySatisfied />}
          label="Comedy"
          {...a11yProps(4)}
        />
        <NavTab icon={<FormatSize />} label="Thriller" {...a11yProps(4)} />
        <NavTab icon={<Favorite />} label="Romance" {...a11yProps(4)} />
        <NavTab icon={<Chair />} label="Reality Tv" {...a11yProps(4)} />
        <NavTab icon={<Group />} label="Show All" {...a11yProps(4)} />
      </Tabs>
    </Box>
  );
}
