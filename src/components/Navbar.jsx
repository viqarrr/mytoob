/* eslint-disable react/prop-types */
import React from 'react'
import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import SearchBar from './SearchBar';
import { DehazeOutlined } from '@mui/icons-material';

const Navbar = ({ isOpen, setIsOpen }) => {
  return (
    <Stack 
    direction="row" 
    alignItems="center" 
    p={2} 
    sx={{ pl: '35px',position: 'sticky', backgroundColor: '#0f0f0f', top: 0 }}
    >
      <button className='line' onClick={() => { setIsOpen(!isOpen) }} >
        <DehazeOutlined style={{ color: '#e9e9e9' }}/>
      </button>
      <Link to="/" style={{ display: 'flex', alignItems: 'center', }}>
        <img src={logo} alt="logo" height={30} style={{ marginLeft: '15px' }} />
        <Typography variant='h6' fontWeight='bold' ml={'5px'} sx={{ color: 'white' }} >
          MyTube
        </Typography>
      </Link>
      <SearchBar />
    </Stack>
  )
}

export default Navbar