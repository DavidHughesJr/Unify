import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Routes/Homepage";
import Netflix from "./Routes/Netflix";
import { Subcategory } from "./Components/Subcategory";
import tmdbApi from "./api/tmdbApi";

console.log(tmdbApi.getWatchProviders(66732))

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '419bd5942fmshff5dd7dcf34cd06p1dd32djsne642e068e809',
    'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
  }
};
const MOVIES_API = `https://streaming-availability.p.rapidapi.com/search/basic?country=us&service=netflix&type=movie&genre=10751&output_language=en&language=en`
const SERIES_API = `https://streaming-availability.p.rapidapi.com/search/basic?country=us&service=netflix&type=series&genre=10751&output_language=en&language=en`


function App() {
  const [stream, setStream] = useState([])
  const [series, setSeries] = useState([])
  const [genre, setGenre] = useState()

  const searchStream = async (genre) => {
    try {
      const [data1, data2] = await Promise.all([
        fetch(`${MOVIES_API}`, options),
        fetch(`${SERIES_API}`, options),
      ])
      const movies = await data1.json()
      const shows = await data2.json()

      setStream(movies.results)
      setSeries(shows.results)
      console.log(shows.results)
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    // searchStream()
  }, [])
  return (
    <Routes>
      <Route path="/" element={<Homepage stream={stream} series={series}/>} />
      <Route path="/netflix" element={<Netflix />} />
    </Routes>
  );
}

export default App;
