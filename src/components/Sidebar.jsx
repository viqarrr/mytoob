/* eslint-disable react/prop-types */
import React from 'react'
import { Stack } from "@mui/material";
import { categories } from "../utils/constants";

const selectedCategory = "New";

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <Stack 
    direction='row'
    sx={{
      paddingX: '10px',
      overflowY: 'auto',
      height: { sx: 'auto', md: '92vh' },
      flexDirection: { md: 'column' }
    }}
    >
      {categories.map((category) => (
        <button
          className='category-btn'
          onClick={() => setSelectedCategory(category.name)}
          style={{
            background: category.name == selectedCategory && '272727',
            color: '#e9e9e9'
          }}
          key={category.name}
        >
          <span style={{ color: '#e9e9e9', marginRight: '15px' }}>{category.icon}</span>
          <span style={{ opacity: category.name === selectedCategory ? '1' : '0.8',paddingRight: '40px' }}>{category.name}</span>
        </button>
      ))}
    </Stack>
  )
}

export default Sidebar