import { React, useState, useEffect } from 'react'
import { Box, Stack, Typography } from "@mui/material";

import { fetchFromAPI } from '../utils/fetchFromAPI';
import { Sidebar, Videos } from "./";

const Feed = () => {

const [selectedCategory, setselectedCategory] = useState('New')

useEffect(() => {
  fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
}, [selectedCategory])

  return (
    <Stack sx={{flexDirection: { sx: 'column', md: 'row' }, backgroundColor: '#0f0f0f' }}>
      <Box sx={{ height: { sx: 'auto', md: '92vh' }, px: { sx: 0, md: 2 } }}>
        <Sidebar 
          selectedCategory={selectedCategory} 
          setSelectedCategory={setselectedCategory}
        />
      </Box>
      <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
        <Typography variant='h4' fontWeight='bold' mb={2} sx={{ color: 'white' }} >
          {selectedCategory} <span style={{ color: '#f31503' }}>videos</span>
        </Typography>
        <Videos />
      </Box>
    </Stack>
  )
}

export default Feed