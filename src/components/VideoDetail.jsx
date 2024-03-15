import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { Box, Stack, Typography } from '@mui/material'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import { Videos } from './'

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();
  
  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data.items[0]))

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setVideos(data.items))
  }, [id])

  if(!videoDetail?.snippet) return 'Loading...';

  const { snippet: { title, channelTitle, channelId }, statistics: { likeCount, viewCount } } = videoDetail;

  return (
    <Box minHeight='95vh'>
      <Stack direction={{ xs: 'column', md: 'row' }}>
        <Box flex={0.95} pl={{ xs: '20px', md: '45px'}} width={{ md: '100%' }} sx={{ position: 'sticky', top: { xs: '75px',md: '86px' }, backgroundColor: '#0f0f0f' }}>
          <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className='react-player' style={{ borderRadius: '20px' }} controls />
          <Typography color='#fff' variant='h5' fontWeight='bold' py={2} >
            {title}
          </Typography>
          <Stack direction='row' justifyContent='space-between' alignItems='center' py={1} >
            <Link to={`/channel/${channelId}`}>
              <Typography color='#fff' variant={{ sm: 'subtitle1', md: 'h6' }} >
                {channelTitle}
              </Typography>
            </Link>
            <Stack direction='row' gap='20px' alignItems='center'>
            <Typography color='#fff' variant='h7' sx={{ opacity: '0.7' }} >
              {parseInt(viewCount).toLocaleString()} views
            </Typography>
            <Typography color='#fff' variant='h7' sx={{ opacity: '0.7' }} >
              {parseInt(likeCount).toLocaleString()} likes
            </Typography>
            </Stack>
          </Stack>
        </Box>
        <Box px={2} py={{ xs: '5', md: '1' }} justifyContent='center' alignItems='center'>
          <Videos videos={videos} direction='column'  />
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail