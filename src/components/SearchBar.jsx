import { React, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar = () => {
  return (
    <Paper component="form" onSubmit={() => {}} sx={{ borderRadius: 20, border: '1px solid #222222', pl: 2, padding: 2, paddingY: '2px', boxShadow: 'none', alignItems: 'center', backgroundColor: '#121212', margin: 'auto', }} >
      <input className='search-bar' placeholder='Search...' onChange={() => {}} style={{backgroundColor: '#121212'}} />
      <IconButton type='submit' style={{ color: '#d5e3ef', }}> 
        <Search />
      </IconButton>
    </Paper>
  )
}

export default SearchBar