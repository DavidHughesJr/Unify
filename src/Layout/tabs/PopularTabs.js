import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import { NavTab } from "../../Components/muiStyles/LayoutStyles"
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ResultsContent from "../../Components/common/ResultsContent";
import { category } from '../../api/tmdbApi'
import PopularMovies from '../../Components/popular/PopularMovies'
import PopularTvShows from '../../Components/popular/PopularTvShows'

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

export default function SearchResultsTabs({ homepageSearch }) {


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
                    <NavTab label={category.movie.charAt(0).toUpperCase() + category.movie.slice(1) + 's'} {...a11yProps(0)} />
                    <NavTab label={category.tv.charAt(0).toUpperCase() + category.tv.slice(1) + ' Shows'} {...a11yProps(0)} {...a11yProps(1)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <PopularMovies /> 
            </TabPanel>
            <TabPanel value={value} index={1}>
                <PopularTvShows /> 
            </TabPanel>
        </Box>
    );
}
