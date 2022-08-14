import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import { Favorite } from "@mui/icons-material";
import { useState, useEffect } from "react";
import { Box, Typography, styled } from "@mui/material";

export default function Bookmarker({ saves, setSaves, saveData }) {
  const [selected, setSelected] = useState(false);

  const addSaves = (itemToSave) => {
    let addArray = true
    for (let i = 0; i < saves.length; i++) {
      if (saves[i].id === itemToSave.id) {
        saves.splice(i, 1);
        addArray = false
      }
    }
    if (addArray) {
      saves.push(itemToSave)
    }
    setSaves([...saves])
    // save to local storage
    localStorage.setItem('savedItems', JSON.stringify(saves))
    // identify local storage to check if it is null
    const storage = localStorage.getItem('savedItems' + (saves))
    // conditional statement to check where to add or remove from storage
    if (storage.length == 0) {
      localStorage.setItem(('savedItems' + (saves)), JSON.stringify(saves.items))
    } else {
      localStorage.removeItem('savedItems' + (saves))
    }
  }

  useEffect(() => {

    const savedItems = JSON.parse(localStorage.getItem('savedItems'))

    if (savedItems) {
      for (let i = 0; i < savedItems.length; i++) {
        if (savedItems[i].id === saveData.id) {
          setSelected(true)
          // break to stop statement from throwing false 
          break
        } else if (savedItems[i].id !== saveData.id) {
          setSelected(false)
        }
      } 
    }
 
  }, [saveData?.id])



  return (
    <Box>
      <ToggleButton className="save-btn" sx={{ borderRadius: '0' }}
        value="saves"
        selected={selected}
        onChange={() => {
          setSelected(!selected);
          addSaves(saveData)
        }}
      >
        <Favorite sx={{ zIndex: 10, backgroundColor: "" }} />
      </ToggleButton>
      <Typography className="hide" color="text.secondary" variant="subtitle2"> { !selected? 'Save Item' : 'Remove Item'} </Typography>
    </Box>
 

  );
}
