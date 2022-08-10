import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { NavTypography, NavTab } from "../../Components/muiStyles/LayoutStyles";
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
  Group,
  Bookmarks,
  Abc
} from "@mui/icons-material";
import {
  MemoryRouter,
  Link,
  matchPath,
  useLocation,
  useNavigate
} from "react-router-dom";
import { StaticRouter } from "react-router-dom/server";
import logo from '../../Assets/imgs/unify-logo-min.png';
import { navItems } from "../../helpers/navItems";
import { useEffect, useState } from 'react'




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
  const [genres, setGenres] = useState([])


  const routeMatch = useRouteMatch(["/", `streaming/${navItems[0].name}/${navItems[0].id}`, `streaming/${navItems[1].name}/${navItems[1].id}`, `streaming/${navItems[2].name}/${navItems[2].id}`, `streaming/${navItems[3].name}/${navItems[3].id}`, 
  '/saves', 'genre/comedy/35', 'genre/family/10751', 'genre/mystery/9648', '/showall'
  ]);


  const currentTab = routeMatch?.pattern?.path;
  const [value, setValue] = useState(0);


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
 
  let navigate = useNavigate()


  useEffect(() => {
    const getGenres = async () => {
      const res1 = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=e9ad43fd1d98a5d8435f4d49f1ec2644&language=en-US`)
      const data1 = await res1.json()
      const res2 = await fetch(`https://api.themoviedb.org/3/genre/tv/list?api_key=e9ad43fd1d98a5d8435f4d49f1ec2644&language=en-US`)
      const data2 = await res2.json()

      
      const mergeGenres = data1.genres.filter(item => {
        // filter if names don't match return the items that do not match
        if (!data2.genres.some(item2 => item.name == item2.name)) {
          return item
        }
      }).concat(data2.genres) // add item that do not match to tv genres array
      setGenres(mergeGenres)



    }
    getGenres()
  }, [])


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
        aria-label="Vertical tabs"
        
      >
        <NavTypography> Menu
        </NavTypography>
        <NavTab icon={<Home />} label="Home" value="/" to="/" component={Link} />
        <NavTab icon={<Stream />} label="Netflix " value={`streaming/${navItems[0].name}/${navItems[0].id}`} to={`../streaming/${navItems[0].name}/${navItems[0].id}`} component={Link} />
        <NavTab icon={<OndemandVideo />} label="Hulu" value={`streaming/${navItems[1].name}/${navItems[1].id}`} to={`../streaming/${navItems[1].name}/${navItems[1].id}`} component={Link} />
        <NavTab icon={<Movie />} label="Amazon Prime" value={`streaming/${navItems[2].name}/${navItems[2].id}`} to={`../streaming/${navItems[2].name}/${navItems[2].id}`} component={Link} />
        <NavTab icon={<Airplay />} label="Disney Plus" value={`streaming/${navItems[3].name}/${navItems[3].id}`} to={`../streaming/${navItems[3].name}/${navItems[3].id}`} component={Link} />
        <NavTypography> Library </NavTypography>
        <NavTab icon={<Undo />} label="Recent" onClick={() => navigate(-1)} />
        <NavTab icon={<Favorite />} value="/saves" label="Saves" to={`/saves`} component={Link} />
        <NavTypography> Genres </NavTypography>
        {
          genres.slice(13, 14).map((genre, i) => {
            return (
              <NavTab icon={<SentimentVerySatisfied />} label={genre.name} value='genre/comedy/35' to={`../genre/${genre.name.toLowerCase().replace(/\s+/g, '')}/${genre.id}`} component={Link} />
            )
          })
        }
        {
          genres.slice(17, 18).map((genre, i) => {
            return (
              <NavTab icon={<Group />} label={genre.name} value='genre/family/10751' to={`../genre/${genre.name.toLowerCase().replace(/\s+/g, '')}/${genre.id}`} component={Link} />
            )
          })
        }
        {
          genres.slice(19, 20).map((genre, i) => {
            return (
              <NavTab icon={<Chair />} label={genre.name} value='genre/mystery/9648' to={`../genre/${genre.name.toLowerCase().replace(/\s+/g, '')}/${genre.id}`} component={Link} />
            )
          })
        }
        <NavTab icon={<Abc />} label="Show All" value={`/showall`} to={`/showall`} component={Link} />
      </Tabs>
    </Box>
  );
}
