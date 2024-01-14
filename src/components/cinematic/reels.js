import React, { useState } from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Instacard from "./instacard";
import DSC09310 from "../../assets/DSC09310.jpg";
import DSC01180 from "../../assets/DSC01180.jpg";
import gun from "../../assets/gun.jpg";
import DSC01139 from "../../assets/DSC01139.jpg";
import DSC02132 from "../../assets/DSC02132.jpg";
import DSC02726 from "../../assets/DSC02726.jpg";
// import { AppContext } from "../../App";

// import AppContext from '../../App'
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));


const Reels = () => {
  // const [timer,setTimer]=useState(15)
  // const {buttonMenu}=useContext(AppContext)
  // console.log('buttonMenu',buttonMenu)

  const [itemData, setItemData] = useState([
    {
      img: DSC01180,
      title: "Bed",
      like: false,
      count: 5,
    },

    {
      img: gun,
      title: "Books",
      like: false,
      count: 10,
    },

    {
      img: DSC01139,
      title: "Kitchen",
      like: false,
      count: 15,
    },

    {
      img: DSC09310,
      title: "Chairs",
      like: false,
      count: 20,
    },
    {
      img: DSC02132,
      title: "Laptop",
      like: false,
      count: 25,
    },
    {
      img: DSC02726,
      title: "Model",
      like: false,
      count: 30,
    },
  ]);
  const likeMe = (obj, index) => {
    itemData[index].like = !itemData[index].like;
    setItemData([...itemData]);

  
  };

 

//   setTimeout(() => {
// timeShowing();
    
//   }, 1000);
  // setInterval(() => {
  //   timeShowing();
  // }, 1000);

  return (
    <Box sx={{ flex: 5, bgcolor: "gray" }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {itemData.map((obj, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Item>
              <Instacard
                Image={obj.img}
                text={"Our Influencer"}
                Title={obj.title}
                date={obj.count}
                color={obj.like ? "red" : "gray"}
                onClick={(e) => likeMe(obj, index)}
              />
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
export default Reels;
