import { Details } from "@mui/icons-material";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Netflix from "./Pages/Netflix";
import HomepageSearch from "./Pages/HomepageSearch"
import NetflixSearch from "./Pages/NetflixSearch"



function App() {

  const [homepageSearch, setHomepageSearch] = useState('hi') 
  return (
    <Routes>
      <Route path="/" element={<Homepage setHomepageSearch={setHomepageSearch} homepageSearch={homepageSearch} />} />
      <Route path="/search" element={<HomepageSearch setHomepageSearch={setHomepageSearch} homepageSearch={homepageSearch} />} />
      <Route path="/:id" element={<Details />} />
      <Route path="/netflix" element={<Netflix />} />
      <Route path="/netflix/search" element={<NetflixSearch />} />  
    </Routes>
  );
}

export default App;
