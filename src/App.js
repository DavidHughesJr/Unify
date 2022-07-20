import { Dashboard } from "./Components/MaterialStyles";
import VerticalNav from "./Components/VerticalNav";
import Box from "@mui/material/Box";

function App() {
  return (
    <Dashboard>
      <VerticalNav />
      <Box sx={{ backgroundColor: "grey", width: "55%", height: "100%" }} />
      <Box sx={{ width: "25%", height: "100%", borderLeft: '1px solid #e0e0e0' }} />
    </Dashboard>
  );
}

export default App;
