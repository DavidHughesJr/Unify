import { useState, useEffect } from "react";
import { Routes, Route, } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Search from "./Pages/Search"
import DetailsPage from "./Pages/DetailsPage"
import StreamMediaPage from "./Pages/StreamMediaPage";
import PersonPage from "./Pages/PersonPage"
import PopularPage from "./Pages/PopularPage"
import GenresPage from "./Pages/GenresPage";
import ShowAllPage from "./Pages/ShowAll";
import TrendingPage from "./Pages/TrendingPage";
import SavesPage from "./Pages/SavesPage";
import * as React from 'react';



function App() {

  const [search, setSearch] = useState(['_'])
  const [saves, setSaves] = useState([])
  const getSavedItems = JSON.parse(localStorage.getItem('savedItems'))


  useEffect(() => {
    if (getSavedItems) {
      setSaves([...getSavedItems])
    }
  }, [])

  return (
      <Routes>
        <Route path="/" element={<Homepage setSearch={setSearch}/>} />
        <Route path="/search" element={<Search setSearch={setSearch} search={search} />} />
        <Route path="/popular" element={<PopularPage setSearch={setSearch}/>} />
        <Route path="/:category/:id" element={<DetailsPage saves={saves} setSaves={setSaves} setSearch={setSearch} />} />
        <Route path="/person/:id" element={<PersonPage setSearch={setSearch} />} />
        <Route path="/streaming/:navItems/:navId" element={<StreamMediaPage setSearch={setSearch} />} />
        <Route path="/genre/:genreName/:genreId" element={<GenresPage setSearch={setSearch} />} />
        <Route path="/showall" element={<ShowAllPage setSearch={setSearch} />} />
        <Route path="/trending" element={<TrendingPage setSearch={setSearch} />} />
        <Route path="/saves" element={<SavesPage saves={saves} setSaves={setSaves} setSearch={setSearch} />} />
      </Routes>
  );
}

export default App;
