/* eslint-disable react/prop-types */
import React from 'react'
import { Stack, Box, Grid} from '@mui/material'
import { VideoCard, ChannelCard } from './'
import Loading from './Loading'

const Videos = ({ videos, direction, margin }) => {
  if(!videos?.length) return <Loading />;

  return (
    <Stack direction={direction || "row"} flexWrap="wrap" justifyContent={{ xs: 'center', md: "start" }} alignItems="start" gap={2} margin={margin}>
      {videos.map((item, idx) => (
        <Box width={{ xs: "100%", sm: "auto" }} key={idx} >
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.playlistId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
        ))}
    </Stack>
  )
}

export default Videos