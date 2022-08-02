import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Netflix from "./Pages/Netflix";
import HomepageSearch from "./Pages/HomepageSearch"
import NetflixSearch from "./Pages/NetflixSearch"
import Detailspage from "./Pages/Detailspage"
import Personpage from "./Pages/Personpage"


function App() {

  const [homepageSearch, setHomepageSearch] = useState(['_'])
  const [categoryId, setCategoryId] = useState('')


  return (
    <Routes>
      <Route path="/" element={<Homepage setHomepageSearch={setHomepageSearch} homepageSearch={homepageSearch} />} />
      <Route path="/search" element={<HomepageSearch setHomepageSearch={setHomepageSearch} homepageSearch={homepageSearch} />} />
      <Route path="/:category/:id" element={<Detailspage />} />
      <Route path="/person/:id" element={<Personpage />} />
      <Route path="/netflix" element={<Netflix />} />
      <Route path="/netflix/search" element={<NetflixSearch />} />  
    </Routes>
  );
}

export default App;
