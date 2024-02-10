/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Card,CardContent, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelTitle, demoChannelUrl } from '../utils/constants'

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
  return (
    <Card sx={{ width: { md: '350px', xs: '100%' },  marginBottom: 4, boxShadow: 'none', borderRadius: '10px', background: 'transparent' }}>
      <Link to={ videoId ? `/video/${videoId}` : demoVideoUrl }>
        <CardMedia 
        image={snippet?.thumbnails?.high?.url}
        alt={snippet?.title}
        sx={{ width: { md: '340px', xs: '100%' }, height: { md: '190px', xs: '250px' }, borderRadius: '10px' }}
        />
      </Link>
      <CardContent sx={{ height: '100%', paddingY: '5px' }} />
      <Link to={ videoId ? `/video/${videoId}` : demoVideoUrl }>
        <Typography variant='subtitle1' fontWeight='medium' color='#fff' >
          {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}...
        </Typography>
      </Link>
      <Link to={ snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl }>
        <Typography variant='subtitle2' fontWeight='medium' color='gray' >
          {snippet?.channelTitle || demoChannelTitle}
          <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: '5px' }} />
        </Typography>
      </Link>
    </Card>
  )
}

export default VideoCard