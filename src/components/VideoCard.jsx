/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Card,CardContent, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelTitle, demoChannelUrl } from '../utils/constants'

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
  return (
    <Card sx={{ width: { xs: '358px', md: "320px", }, boxShadow: "none", background: 'transparent' }}>
      <Link to={ videoId ? `/video/${videoId}` : demoVideoUrl }>
        <CardMedia 
        image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
        alt={snippet?.title}
        sx={{ width: '100%', height: 180, borderRadius: '10px' }} 
        />
      </Link>
      <CardContent sx={{ height: '100%', paddingY: '5px', flexGrow: 1 }} />
      <Link to={ videoId ? `/video/${videoId}` : demoVideoUrl }>
        <Typography variant='subtitle1' fontWeight='medium' color='#fff' >
          {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}...
        </Typography>
      </Link>
      <Link to={ snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl }>
        <Typography variant='subtitle2' fontWeight='medium' color='gray' sx={{ display: 'flex', alignItems: 'center' }} >
          {snippet?.channelTitle || demoChannelTitle}
          <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: '5px' }} />
        </Typography>
      </Link>
    </Card>
  )
}

export default VideoCard