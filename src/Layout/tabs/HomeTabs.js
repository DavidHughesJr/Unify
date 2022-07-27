import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import { NavTab } from  "../../Components/muiStyles/MaterialStyles"
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import NowPlayingContent from "../../Components/movieCategories/NowPlayingContent";
import HeroSlider from "../../Components/hero/HeroSlider"
import TopRatedMovies from "../../Components/movieCategories/TopRatedMovies"


function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
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
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}

export default function CategoryTabs() {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                >
                    <NavTab label="Movies" {...a11yProps(0)} />
                    <NavTab label="Series" {...a11yProps(1)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <HeroSlider />
                <NowPlayingContent />
                <TopRatedMovies /> 
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
        </Box>
    );
}
