/* eslint-disable react/prop-types */
import React from 'react'
import { Stack } from "@mui/material";
import { categories } from "../utils/constants";

const Sidebar = ({ selectedCategory, setSelectedCategory, isOpen }) => {
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
            display: !isOpen && 'flex', flexDirection: !isOpen && 'column', justifyContent: !isOpen && 'center',
            background: category.name === selectedCategory && '#272727',
            color: '#e9e9e9',
            paddingLeft: !isOpen && '30px' 
          }}
          key={category.name}
        >
          <span style={{ alignItems: 'center', color: '#e9e9e9', marginRight: '15px' }}>{category.icon}<span style={{ display: isOpen ? 'none' : 'flex', fontSize: '10px' }} >{category.name}</span></span>
          <span style={{ display: !isOpen && 'none', opacity: category.name === selectedCategory ? '1' : '0.8', fontSize: '15px', fontWeight: '600' }}>{category.name}</span>
        </button>
      ))}
    </Stack>
  )
}

export default Sidebar