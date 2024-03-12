/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'react-router-dom'
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { demoProfilePicture } from "../utils/constants";

const ChannelCard = ({ channelDetail, marginTop }) => {
  return (
    <Box
      sx={{
        boxShadow: 'none',
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: { xs: '350px', md: '320px' },
        height: '326px',
        margin: 'auto',
        marginTop
      }}
    >
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent
          sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#fff' }}
        >
          <CardMedia
            image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
            sx={{ borderRadius: '50%', width: '180px', height: '180px', mb: '5px', border: '1px solid #e3e3e3' }}
          >
          </CardMedia>
          <Typography variant='h6'>
            {channelDetail?.snippet?.title}
          </Typography>
          {channelDetail?.statistics?.subscriberCount && (
            <Typography sx={{ fontSize: '15px', fontWeight: '500', color: 'gray' }}>
              {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString('en-us')} Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  )
}

export default ChannelCard