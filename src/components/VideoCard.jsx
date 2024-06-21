/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Typography, Card, CardMedia, CardContent } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelTitle, demoChannelUrl } from '../utils/constants'

const VideoCard = ({ video: { id: { videoId }, snippet } }) => { 
  return (
  <Card sx={{ width: { xs: '100%', sm: '358px', md: "345px", }, boxShadow: "none", background: 'transparent' }}>
    <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY` }>
      <CardMedia image={snippet?.thumbnails?.high?.url || demoThumbnailUrl} alt={snippet?.title} 
        sx={{ width: { xs: '100%', sm: '345px'}, height: { xs: 245,sm: 195 }, borderRadius: '10px' }} 
      />
    </Link>
    <CardContent sx={{ height: '106px', paddingLeft: 0 }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl } >
          <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}...
          </Typography>
        </Link>
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} >
          <Typography variant="subtitle2" color="gray">
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircle sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
          </Typography>
        </Link>
    </CardContent>  
  </Card>
  )
}

export default VideoCard