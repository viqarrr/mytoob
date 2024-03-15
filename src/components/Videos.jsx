/* eslint-disable react/prop-types */
import React from 'react'
import { Stack, Box } from '@mui/material'
import { VideoCard, ChannelCard } from './'

const Videos = ({ videos, direction, gap }) => {
  if(!videos) return 'Loading...'
  return (
    <Stack direction={direction || { xs: 'column', md: 'row' }} flexWrap="wrap" justifyContent={{ xs: 'center', md: "start" }} alignItems="start" gap={gap || 4} >
      {videos.map((item, idx) => (
        <Box key={idx} >
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.playlistId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos