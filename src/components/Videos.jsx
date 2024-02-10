/* eslint-disable react/prop-types */
import React from 'react'
import { Stack, Box } from '@mui/material'
import { VideoCard, ChannelCard } from './'

const Videos = ({ videos, isOpen }) => {
  console.log(videos)
  return (
    <Stack
      direction='row'
      flexWrap='wrap'
      justifyContent={{ xs: 'center', md: 'start' }}
      gap={2}
    >
      {videos.map((item, idx) => (
        <Box key={idx} width={'30%'} sx={{ marginRight: 2 }} >
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos