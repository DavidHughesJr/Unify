import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Routes/Homepage";
import Netflix from "./Routes/Netflix";

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '419bd5942fmshff5dd7dcf34cd06p1dd32djsne642e068e809',
    'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
  }
};
const MOVIES_API = `https://streaming-availability.p.rapidapi.com/search/basic?country=us&service=netflix&type=movie&genre=10751&output_language=en&language=en`
const SERIES_API = `https://streaming-availability.p.rapidapi.com/search/basic?country=us&service=netflix&type=series&genre=10751&output_language=en&language=en`

const genres = {
  "1": "Biography",
  "2": "Film Noir",
  "3": "Game Show",
  "4": "Musical",
  "5": "Sport",
  "6": "Short",
  "7": "Adult",
  "12": "Adventure",
  "14": "Fantasy",
  "16": "Animation",
  "18": "Drama",
  "27": "Horror",
  "28": "Action",
  "35": "Comedy",
  "36": "History",
  "37": "Western",
  "53": "Thriller",
  "80": "Crime",
  "99": "Documentary",
  "878": "Science Fiction",
  "9648": "Mystery",
  "10402": "Music",
  "10749": "Romance",
  "10751": "Family",
  "10752": "War",
  "10763": "News",
  "10764": "Reality",
  "10767": "Talk Show",
}



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
