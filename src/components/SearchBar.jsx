import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);

      setSearchTerm('');
    }
  };
  
  return (
    <Paper 
      component="form" 
      onSubmit={handleSubmit} 
      sx={{ borderRadius: 20, border: '1px solid #222222', pl: 2, padding: 2, paddingY: '2px',  margin: 'auto', boxShadow: 'none', alignItems: 'center', backgroundColor: '#121212' }} 
    >
      <input 
      className='search-bar' 
      placeholder='Search...' 
      value={searchTerm}
      onChange={(e) => {
        setSearchTerm(e.target.value)
        
      }} 
      style={{backgroundColor: '#121212', color: "white"}} />
      <IconButton type='submit' style={{ color: '#d5e3ef', }}> 
        <Search />
      </IconButton>
    </Paper>
  )
}

export default SearchBar