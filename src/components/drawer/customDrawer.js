import React, { useContext } from "react";
// import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";

import List from "@mui/material/List";

import Divider from "@mui/material/Divider";

import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import VideocamIcon from "@mui/icons-material/Videocam";
import TimeToLeaveIcon from "@mui/icons-material/TimeToLeave";
import FilterVintageIcon from "@mui/icons-material/FilterVintage";
import NaturePeopleIcon from "@mui/icons-material/NaturePeople";
import WcIcon from "@mui/icons-material/Wc";

import { useNavigate } from "react-router-dom";
import { createTheme, ThemeProvider, Typography } from "@mui/material";
import { AppContext } from "../../App";

const CustomDrawer = () => {
  // const changingColor = useRef(0);
  // const [first, setfirst] = useState(false)
  const theme = createTheme();
  const { buttonMenu } = useContext(AppContext);

 
// console.log('changingColor',changingColor)
  theme.typography.h5 = {
    fontSize: "10px",

    "@media (maxWidth:900px)": {
      fontSize: "15px",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "20px",
    },
  };
  theme.hover = {
    backgroundColor: "#f1f1f1",
    "&:hover": {
      backgroundColor: "#f00",
    },
  };

  const drawerItem = [
    {
      text: "Travel",
      onpress: () => {
        navigate("/travel");
        
      },
      icon: <TimeToLeaveIcon />,
    },
    {
      text: " Reels",
      onpress: () => {
        navigate("/reels");
        
      },
      icon: <InstagramIcon />,
    },
    {
      text: "YouTube Vlogs",
      onpress: (e) => {
        navigate("/youtube");
       
      },
      icon: <YouTubeIcon />,
    },
    {
      text: "Cover Videos",
      onpress: () => {
        navigate("/cover");
        
      },
      icon: <VideocamIcon />,
    },
   
  ];
  const navigate = useNavigate();
  return (
    <>
      {(buttonMenu === "On" || buttonMenu === "OnLoad") && (
        <Box
          sx={{
            bgcolor: "#2f2f30",
            display: {
              md: "flex",
              sm: "flex",
              xs: "none",
              xl: "flex",
              lg: "flex",
            },
          }}
          flexDirection={"column"}
          flex={1}
          // height={'100%'}
        >
          <Box position={"fixed"} sx={{ bgcolor: "#2f2f30" }}>
            <ThemeProvider theme={theme}>
              <List sx={{}}>
                <Typography
                  variant="h5"
                  sx={{
                    color: "#7f7fb5",
                    ml: 1,
                    fontSize: { md: 18, xl: 25, lg: 20, xs: 7, sm: 10 },
                  }}
                >
                  Cinematography
                </Typography>
                {drawerItem.map((obj, index) => (
                  <ListItem key={obj.text} sx={{ mt: 2 }} disablePadding>
                    <ListItemButton onClick={obj.onpress} >
                      <ListItemIcon sx={{ minWidth: 20, color: "whitesmoke" }}>
                        {obj.icon}
                      </ListItemIcon>
                      {/* <ListItemText
                      sx={{  }}
                      primaryTypographyProps={{ style: theme }}
                      primary=
                      {obj.text}
                    /> */}
                      <Typography
                        variant="h5"
                        sx={{
                          ml: 1,
                          color: "wheat",
                          fontSize: { md: 13, xl: 20, sm: 10, lg: 17, xs: 8 },
                          display: {
                            xs: "none",
                            sm: "none",
                            md: "flex",
                            lg: "flex",
                            xl: "flex",
                          },
                        }}
                      >
                        {obj.text}
                      </Typography>
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
              <Divider />
              <List>
                <Typography
                  variant="h5"
                  sx={{
                    ml: 1,
                    color: "#7f7fb5",
                    fontSize: { md: 18, xl: 25, lg: 20, xs: 7, sm: 10 },
                  }}
                >
                  Photography
                </Typography>
                {["Vintage", "Street Style", "Pre Wedding"].map(
                  (text, index) => (
                    <ListItem key={text} sx={{ mt: 2 }} disablePadding>
                      <ListItemButton>
                        <ListItemIcon
                          sx={{ minWidth: 20, color: "whitesmoke" }}
                        >
                          {index === 0 ? (
                            <FilterVintageIcon />
                          ) : index === 1 ? (
                            <NaturePeopleIcon />
                          ) : index === 2 ? (
                            <WcIcon />
                          ) : (
                            ""
                          )}
                        </ListItemIcon>
                        <Typography
                          variant="h5"
                          sx={{
                            ml: 1,
                            color: "wheat",
                            fontSize: { md: 13, xl: 20, sm: 10, lg: 17, xs: 8 },
                            display: {
                              xs: "none",
                              sm: "none",
                              md: "flex",
                              lg: "flex",
                              xl: "flex",
                            },
                          }}
                        >
                          {text}
                        </Typography>
                      </ListItemButton>
                    </ListItem>
                  )
                )}
              </List>
              <Divider />
            </ThemeProvider>
          </Box>
        </Box>
      )}
    </>
  );
};
export default CustomDrawer;
