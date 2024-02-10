import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { Navbar, Feed, SearchFeed, VideoDetail, ChannelDetail } from "./components";

const App = () => {
  const [isOpen, setIsOpen] = useState(true)
  
  return(
    <BrowserRouter>
      <Box>   
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
        <Routes>
          <Route path="/" exact element={<Feed isOpen={isOpen} />} />
          <Route path="/video/:id" exact element={<VideoDetail />} />
          <Route path="/channel/:id" exact element={<ChannelDetail />} />
          <Route path="/search/:searchTree" exact element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  )
}

export default App
