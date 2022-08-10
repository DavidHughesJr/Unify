import { useState, useEffect } from "react";
import { Routes, Route,  } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import HomepageSearch from "./Pages/HomepageSearch"
import StreamPage from "./Pages/StreamPage";
import DetailsPage from "./Pages/DetailsPage"
import PersonPage from "./Pages/PersonPage"
import PopularPage from "./Pages/PopularPage"
import GenresPage from "./Pages/GenresPage";
import ShowAllPage from "./Pages/ShowAll";
import TrendingPage from "./Pages/TrendingPage";
import SavesPage from "./Pages/SavesPage";
import * as React from 'react';
import { red } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#e71d60',
    },
  },
});




function App() {

  const [homepageSearch, setHomepageSearch] = useState(['_'])
  const [saves, setSaves] = useState([])
  const getSavedItems = JSON.parse(localStorage.getItem('savedItems'))


  useEffect(() => {
    if(getSavedItems){
      setSaves([...getSavedItems])
    }
  }, [])

  return (
    <ThemeProvider theme={theme}>
    <Routes>
      <Route path="/" element={<Homepage setHomepageSearch={setHomepageSearch} homepageSearch={homepageSearch} />} />
      <Route path="/search" element={<HomepageSearch setHomepageSearch={setHomepageSearch} homepageSearch={homepageSearch} />} />
      <Route path="/popular" element={<PopularPage setHomepageSearch={setHomepageSearch} homepageSearch={homepageSearch} />} />
      <Route path="/:category/:id" element={<DetailsPage saves={saves} setSaves={setSaves} />} />
      <Route path="/person/:id" element={<PersonPage />} />
      <Route path="/streaming/:navItems/:navItems" element={<StreamPage />} />
      <Route path="/genre/:genreName/:genreId" element={<GenresPage />} />
      <Route path="/showall" element={<ShowAllPage />} />
      <Route path="/trending" element={<TrendingPage setHomepageSearch={setHomepageSearch} homepageSearch={homepageSearch} />} />
      <Route path="/saves" element={<SavesPage saves={saves} setSaves={setSaves} setHomepageSearch={setHomepageSearch} homepageSearch={homepageSearch} />} />      
    </Routes>
    </ThemeProvider>
  );
}

export default App;
