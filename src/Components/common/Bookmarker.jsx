import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import Bookmark from '@mui/icons-material/Bookmark';

export default function Bookmarker() {
  const [selected, setSelected] = React.useState(false);

  return (
    <ToggleButton sx={{borderRadius: '0'}}
      value="bookmark"
      selected={selected}
      onChange={() => {
        setSelected(!selected);
      }}
    >
      <Bookmark sx={{zIndex: 10, backgroundColor:""}} />
    </ToggleButton>
    
  );
}
