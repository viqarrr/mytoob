import React from 'react'
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import SearchBar from './SearchBar';

const Navbar = () => {
  return (
    <Stack 
    direction="row" 
    alignItems="center" 
    p={2} 
    sx={{ position: 'sticky', backgroundColor: '#0f0f0f', top: 0 }}
    >
      <Link to="/" style={{ display: 'flex', alignItems: 'center', }}>
        <img src={logo} alt="logo" height={35} style={{ marginLeft: '20px' }} />
      </Link>
      <SearchBar />
    </Stack>
  )
}

export default Navbar