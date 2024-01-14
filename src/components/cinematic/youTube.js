import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import ReactPlayer from "react-player";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const YouTube = () => {
  return (
    <Box sx={{ flex: 5 }}>
      <Stack>
        <Item>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=-eZ1CsmInfQ"
            playing={false}
            height="100px"
            width="200px"
          />
        </Item>
        <Item>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=Vl7EenY_lZ0"
            playing={false}
            height="100px"
            width="200px"
          />
        </Item>
        <Item>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=3ez4o3sU_4A"
            playing={false}
            height="100px"
            width="200px"
          />
        </Item>
        <Item>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=msjG_3SFsSo"
            playing={false}
            height="100px"
            width="200px"
          />
        </Item>
      </Stack>
    </Box>
  );
};
export default YouTube;
