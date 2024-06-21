/* eslint-disable react/prop-types */
import React from 'react'
import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import SearchBar from './SearchBar';
import { DehazeOutlined } from '@mui/icons-material';

const Navbar = () => {
  return (
    <Stack 
    direction="row" 
    alignItems="center" 
    p={2} 
    sx={{ pl: '30px', position: 'sticky', backgroundColor: '#0f0f0f', top: 0, zIndex: "99" }}
    >
      <Link to="/" style={{ display: 'flex', alignItems: 'center', }}>
        <img src={logo} alt="logo" height={30} />
        <Typography variant='h6' fontWeight='bold' ml={'5px'} sx={{ color: 'white' }} >
          MyToob
        </Typography>
      </Link>
      <SearchBar />
    </Stack>
  )
}

export default Navbar