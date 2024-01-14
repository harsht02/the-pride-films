import * as React from "react";
// import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
// import Paper from "@mui/material/Paper";
import ReactPlayer from "react-player";
// import { Divider } from "@mui/material";

export default function GridYoutube() {
  return (
    <Box
    
      sx={{
       
        display: "flex",
     justifyContent:'center',
        backgroundColor: "white",
       
       
      }}
    >
      <Box
        position={"fixed"}
        sx={{
          display: "flex",
          flexDirection: "column",
         
          justifyContent:'space-evenly',
          height:'100%',
          overflow:'hidden',
          // overflowY: "scroll"
         
        }}
      >
        <Box>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=-eZ1CsmInfQ"
            playing={false}
            height="100px"
            width="200px"
            
          />
        </Box>
        <Box>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=Vl7EenY_lZ0"
            playing={false}
            height="100px"
            width="200px"
          />
        </Box>
        <Box>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=3ez4o3sU_4A"
            playing={false}
            height="100px"
            width="200px"
          />
        </Box>
        <Box>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=msjG_3SFsSo"
            playing={false}
            height="100px"
            width="200px"
          />
        </Box>
        {/* <Box>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=_WRRgrXLEMM"
            playing={false}
            height="100px"
            width="200px"
          />
        </Box>
        <Box>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=H5fYx8OvXTc"
            playing={false}
            height="100px"
            width="200px"
          />
        </Box> */}
      </Box>

      {/* <Box>
              <iframe
              
                src="https://www.youtube.com/embed/msjG_3SFsSo"
                title="YouTube video player"
                frameborder="0"

                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </Box> */}
    </Box>
  );
}
