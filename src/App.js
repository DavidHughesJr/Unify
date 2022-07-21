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
const STREAM_API_KEY = `'https://streaming-availability.p.rapidapi.com/get/basic?country=us&tmdb_id=movie%2F120&output_language=en`


function App() {

  const searchStream = async () => {
    const response = await fetch(`${STREAM_API_KEY}`)
    const data = await response.json()
    console.log(data)
  }

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/netflix" element={<Netflix />} />
    </Routes>
  );
}

export default App;
