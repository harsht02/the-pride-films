import React from "react";
import Box from "@mui/material/Box";
import { Typography, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import HomeCollection from "./photoshoots/homeCollection";
import GridYoutube from "./gridYoutube";

const HomePage = () => {
  const theme = createTheme();

  theme.typography.h3 = {
    fontSize: "15px",
    "@media (min-width:600px)": {
      fontSize: "20px",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "30px",
    },
  };
  return (
    <Box sx={{display:'flex',flexDirection:'row',flex:5}}>
        <Box
      sx={{
        flex: 4,
        flexDirection:'column',
        display: 'flex',
        backgroundColor: "#7d7170",
        
      }}
    >
      <Box
        sx={{
         flex:1,
         display:'flex',
         justifyContent:'center',
         
        
        
        }}
      >
        <ThemeProvider theme={theme}>
          <Typography variant="h3" sx={{ color:'white',textAlign:"center" }}>
            Let's Create Something Big Together
          </Typography>
        </ThemeProvider>
      </Box>
      <HomeCollection />
    </Box>
    <Box   sx={{
        flex: 1,
        flexDirection:'column',
        backgroundColor: "#141412",
        display: {xs:'none',sm:'none',md:'flex',lg:'flex',xl:'flex'},
      }}>
      <GridYoutube/>
    </Box>
    </Box>
  
  );
};
export default HomePage;
