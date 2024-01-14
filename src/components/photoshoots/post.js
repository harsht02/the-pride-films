import { Box, Button, Input, Modal, styled, Typography } from "@mui/material";
import { getObject } from "@syncfusion/ej2-react-grids";
import React, { useState } from "react";

const Post = () => {
  const StyleModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });
  const [picture, setPicture] = useState(null);
  const [imgData, setImgData] = useState(null);
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [state, setState] = useState({
    username: '',
    caption: '',
    
  });

  const go = e => {
    // let duplicateData = inputData;
    const{name,value} = e.target ;
    console.log(name,value)

    setState( pre => ({
        ...pre,
        [name]: value
    }))
    console.log('==============================',state)

 

    

  };


  const onChangePicture = (e) => {
    if (e.target.files[0]) {
      //   console.log("picture: ", e.target.files);
      setPicture(e.target.files[0]);
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImgData(reader.result);
      });

      reader.readAsDataURL(e.target.files[0]);
    }
  };
  return (
    <>
      <Box sx={{ flex: 5, height: 10000,display:'flex' }}>
        <Box
          sx={{
            width: "100%",
            height: 40,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection:'column'
          }}
        >
          <Typography variant="h3">Your feed </Typography>
          <Button
            variant="contained"
            sx={{ ml: 4 }}
            onClick={() => setOpen(!open)}
          >
            Add post{" "}
          </Button>
          <Box sx={{ height: 50, display: "flex", justifyContent: "center" }}>
              <Input
                type="text"
                placeholder="Username"
                // value={inputData.username}
                onChange={go}
                name="username"
                disableUnderline={true}
                sx={{
                  width: 500,
                  border: 3,
                  mb: 1,
                  color: "whitesmoke",
                  borderRadius: 2,
                  borderColor: "whitesmoke",
                }}
              />
            </Box>

            <Box
              sx={{ height: 100, display: "flex", justifyContent: "center" }}
            >
              <Input
                type="text"
                placeholder="Write a caption"
                
                onChange={go}
                name="caption"
                sx={{
                  width: 500,
                  border: 3,
                  color: "whitesmoke",
                  borderRadius: 2,
                  borderColor: "whitesmoke",
                }}
              />
            </Box>
        </Box>
      </Box>
      <StyleModal
        open={open}
        bgcolor={"white"}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          width={900}
          height={450}
          bgcolor={"#383633"}
          borderRadius={3}
          justifyContent={"space-evenly"}
        >
          <Box
            style={{
              display: "flex",
              flexDirection: "column",

              height: 400,
            }}
          >
            <Box
              sx={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
              }}
            >
              <Input
                id="profilePic"
                type="file"
                onChange={onChangePicture}
                disableUnderline={true}
                sx={{ marginLeft: 10 }}
              />
            </Box>
            {imgData && (
              <Box style={{ height: 200, width: 120 }}>
                <img
                  src={imgData}
                  style={{ height: "100%", width: "100%", marginLeft: 400 }}
                />
              </Box>
            )}
            {imgData && (
              <Button sx={{}} onClick={() => setImgData(null)}>
                Remove image
              </Button>
            )}
            
            <Box sx={{ height: 50, display: "flex", justifyContent: "center" }}>
              <Input
                type="text"
                name="category"
                placeholder="Add your category here"
                disableUnderline={true}
                onChange={go}
                sx={{
                  width: 500,
                  border: 3,
                  mt: 1,
                  color: "whitesmoke",
                  borderRadius: 2,
                  borderColor: "whitesmoke",
                }}
              />
            </Box>
            <button name="username" onClick={go}></button>

            <Box
              sx={{
                height: 40,
                display: "flex",
                justifyContent: "flex-end",
                width: 700,
                mt: 1,
              }}
            >
              <Button variant="contained">Post</Button>
            </Box>
          </Box>
        </Box>
      </StyleModal>
    </>
    //
  );
};

export default Post;
