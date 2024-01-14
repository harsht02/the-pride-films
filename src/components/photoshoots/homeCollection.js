import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import DSC00028 from "../../assets/DSC00028.jpg";
// import DSC00106 from "../../assets/DSC00106.jpg";
import DSC09310 from "../../assets/DSC09310.jpg";
import DSC01139 from "../../assets/DSC01139.jpg";
import DSC01180 from "../../assets/DSC01180.jpg";
import DSC02726 from "../../assets/DSC02726.jpg";
import DSC02132 from "../../assets/DSC02132.jpg";
import gun from "../../assets/gun.jpg"
import mate from "../../assets/mate.jpg"
import { Typography } from "@mui/material";

export default function HomeCollection() {
  return (
    <Box sx={{display:'flex',justifyContent:'space-around',flexDirection:'column'}}>
      <Box sx={{justifyContent:'space-around',display:'flex'}}>
      <Typography variant="h4"  sx={{backgroundColor:'gray',textAlign:'center'}} color={'white'}>
        Our collections 
      </Typography>
      </Box>
      <Box  sx={{display:'flex',justifyContent:'center',backgroundColor:'whitesmoke',m:3,borderRadius:5}} >
      <ImageList variant="masonry" cols={4} gap={20} >
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar position="below" title={item.author} />
          </ImageListItem>
        ))}
      </ImageList>
      </Box>
    </Box>
  );
}

const itemData = [
  {
    img: DSC01180,
    title: "Bed",
    
  },

  {
    img: DSC00028,
    title: "Bed",
    // author: "Dhruv Singh",
  },
  {
    img: gun,
    title: "Books",
    // author: "Harsh tyagi",
  },
  {
    img: DSC02726,
    title: "Sink",
    // author: "Harsh tyagi",
  },
  {
    img: DSC01139,
    title: "Kitchen",
    // author: "Hardik Sharma",
  },
  {
    img: mate,
    title: "Blinds",
    // author: "Amulya ratan",
  },
  {
    img: DSC09310,
    title: "Chairs",
    // author: "",
  },
  {
    img: DSC02132,
    title: "Laptop",
    // author: "Aakash Sharma",
  },
  

];
