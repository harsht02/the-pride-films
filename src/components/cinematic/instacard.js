import  React,{useEffect} from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { brown } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Skeleton from "@mui/material/Skeleton";

const Instacard = ({ text, Image, Title, onClick, date, color }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  useEffect(() => {
   setTimeout(() => {
    setIsLoading(false)
   },3000);
  }, [])
  

  return (
    <Card sx={{ maxWidth: 545 }}>
      <CardHeader
        avatar={
          <>
            {isLoading && (
              <Skeleton variant="circular" width={40} height={40}></Skeleton>
            )}
            {!isLoading && (
              <Avatar sx={{ bgcolor: brown[500] }} aria-label="recipe">
                H
              </Avatar>
            )}
          </>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={Title}
        subheader={date}
      />
      <>
      {isLoading && (
                    <Skeleton variant="rectangular" sx={{backgroundColor:'gray'}} width={460} height={194} />

            )}
            {!isLoading && (
             
             <CardMedia component="img" height="194" image={Image} alt="Insta Work" />
            
            )}
      </>
      <CardContent>
      <Typography variant="body2" color="text.secondary">
        {text}
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
      <IconButton aria-label="add to favorites" onClick={onClick}>
        <FavoriteIcon sx={{ color: color }} />
      </IconButton>
      <IconButton
        aria-label="share"
        onClick={handleClick}
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        <ShareIcon />
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <MenuItem onClick={handleClose}>Instagram Link here</MenuItem>
          <MenuItem onClick={handleClose}>Youtube Link here </MenuItem>
          <MenuItem onClick={handleClose}>Facebook Link here</MenuItem>
        </Menu>
      </IconButton>
    </CardActions>
    
    </Card>
  );
};
export default Instacard;
