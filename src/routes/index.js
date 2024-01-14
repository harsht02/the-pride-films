import YouTube from "@mui/icons-material/YouTube";
import React from "react";
import { Routes, Route } from "react-router-dom";
// import About from "../components/about";
import CoverVideos from "../components/cinematic/coverVideos";
import Reels from "../components/cinematic/reels";
import Travel from "../components/cinematic/travel";
import Header from "../components/header/header";
import HomePage from "../components/homePage";
import Post from "../components/photoshoots/post";

const Index = () => {
  return (
    <>
<Routes component={props => <Header  {...props}/>}>
        <Route exact path="/" element={<HomePage /> } />
        <Route path="/about" element={<Post />} />
        <Route path="/reels" element={<Reels />} />
        <Route path="/youtube" element={<YouTube />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/cover" element={<CoverVideos />} />
        

      </Routes>
    </>
);    
};

export default Index;
