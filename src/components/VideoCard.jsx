/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Box, Typography, Card, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelTitle, demoChannelUrl } from '../utils/constants'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import ChannelCard from './ChannelCard'

const VideoCard = ({ video: { id: { videoId }, snippet } }) => { 
  const [channelDetail, setChannelDetail] = useState(null)
  
  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${snippet?.channelId}`)
      .then((data) => setChannelDetail(data?.items[0]))
  }, [snippet?.channelId])
  
  return (
  <Card sx={{ width: { xs: '100%', sm: '358px', md: "320px", }, boxShadow: "none", background: 'transparent' }}>
    <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY` }>
      <CardMedia image={snippet?.thumbnails?.high?.url || demoThumbnailUrl} alt={snippet?.title} 
        sx={{ width: { xs: '100%', sm: '358px', md: '320px'}, height: 180, borderRadius: '10px' }} 
      />
    </Link>
    <Box sx={{ height: '106px', paddingTop: '5px', display: 'flex', alignItems: 'start' }}>
      <CardMedia
        image={channelDetail?.snippet?.thumbnails?.high?.url}
        sx={{ borderRadius: '50%', width: '45px', height: '45px', mr: '10px', border: '1px solid #e3e3e3' }}
      />
      <Box>
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
      </Box>
    </Box>
  </Card>
  )
}

export default VideoCard