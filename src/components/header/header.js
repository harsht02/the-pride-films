import React, { useState,useContext, useCallback } from "react";
// import AppBar from '@mui/material/AppBar';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useNavigate } from "react-router-dom";
import { Divider, Modal, styled } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { AppContext } from "../../App";
const Header = () => {
  const {buttonMenu,setButtonMenu}=useContext(AppContext)
  const [status, setStatus] = useState(false);

  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
 
  const openDrawer =() => {
    if(buttonMenu===''){
      setButtonMenu('On');
    setStatus(true)
    // console.log('==>>>>>>>>>>>>>>>>>>>>>>>>>>>',buttonMenu)
    // console.log('===================>>>>>>>>>>>>',status)

    localStorage.setItem("key", JSON.stringify(status));
   


    }
    else{
    // console.log('==>>>>>>>>>>>>>>>>>>>>>>>>>>>',buttonMenu)

      setButtonMenu('')
      setStatus(false)
    localStorage.setItem("key", JSON.stringify(status));

    }
  
  
    // console.log(buttonMenu);
  
  };
  
  
  const StyleModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: "black",
        flex: 1.5,
        minHeight: 50,
        position: "sticky",
        top: "0px",
        zIndex: 99999,
      }}
    >
      <Box
        flex={0.6}
        sx={{
          display: "flex",
          // justifyContent: "center",
          position: "sticky",
          top: "0px",
          zIndex: 99999,
          alignItems:'center',
         
          
          
        }}
      >
        <Button
          variant="containd"
          startIcon={<MenuIcon  />}
          onClick={() => openDrawer()}
          sx={{ color: "white"}}
        ></Button>
        <Button onClick={() => navigate("/")} sx={{ color: "#fff",fontSize:{xs:10,sm:10,md:12,lg:13,xl:15} }}>
          Home
        </Button>
        <Button onClick={() => navigate("/about")} sx={{ color: "#fff" ,fontSize:{xs:10,sm:10,md:12,lg:13,xl:15}}}>
          About
        </Button>
      </Box>

      <Box
        flex={4}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "black",
         
        }}
      >
        <Typography
          variant="h6"
          component="div"
          sx={{
            alignItems:'center',
            color: "white",
          }}
        >
          The Pride Films
        </Typography>
      </Box>

      <Box sx={{ flex: 0.7, justifyContent: "center",alignItems:'center', display: "flex",minHeight:50 }}>
        <Button
          variant="outlined"
          onClick={(e) => setOpen(!open)}
          sx={{ color: "#fff", backgroundColor: "gray",maxHeight:30 }}
        >
          <Typography sx={{fontSize:{xl:14,lg:10,md:8,sm:8,xs:6}}}>
          Contact Us
          </Typography>
         
        </Button>
      </Box>

      <StyleModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          width={450}
          height={250}
          bgcolor={"white"}
          borderRadius={3}
          justifyContent={"space-evenly"}
          pl={3}
        >
          <Box sx={{ alignItems: "center" }}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              <MailOutlineIcon />
              thepride4films@gmail.com
            </Typography>
          </Box>
          <Divider />
          <Box>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              <InstagramIcon />
              @thepridefilms
            </Typography>
          </Box>
          <Divider />
          <Box>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              <LocalPhoneIcon />
              9759662582
            </Typography>
          </Box>
          <Divider />
          <Box>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              <LocationOnIcon />
              Chandigarh,India
            </Typography>
          </Box>
        </Box>
      </StyleModal>
    </Box>
  );
};
export default Header;
