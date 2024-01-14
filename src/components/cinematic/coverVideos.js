import { Box, Button } from "@mui/material";
import React, { useState, useEffect } from "react";

const CoverVideos = () => {
  const [showValue, setShowValue] = useState([]);
  let dataAPI =
  "https://techcrunch.com/wp-json/wp/v2/posts?per_page=100&context=embed";

  const showFetchData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setShowValue([...data])
     
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    showFetchData(dataAPI);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flex: 5,
        flexDirection: "column",
        height: '100%',
        backgroundColor: "#f1f1f1",
        justifyContent: "center",
      }}
    >
     {showValue.map((item,index)=>(
      <h1 style={{backgroundColor:'gray'}}>{item.slug}</h1>
     ))} 
    
      
    </div>
  );
};
export default CoverVideos;
