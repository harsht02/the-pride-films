import { Stack } from "@mui/material";
import { Box } from "@mui/system";
import "./App.css";
import React, { useState, createContext, useEffect, useReducer } from "react";

import CustomDrawer from "./components/drawer/customDrawer";
import Header from "./components/header/header";
// import reducer from "./components/reducer";
import Index from "./routes";



export const AppContext = createContext();
const App = () => {
//   const initialState = {
//     loading: true,
//     premiumCutoffPercent: 0,
//     slug:'',
//     per_page:0,
//     title:'',
//     showData: [],
//   };
  // const [state, dispatch] = useReducer(reducer, initialState);
  const [buttonMenu, setButtonMenu] = useState("");

  useEffect(() => {
    const status = JSON.parse(localStorage.getItem("key"));
    console.log("---------------", buttonMenu);

    if (status) {
      setButtonMenu("OnLoad");
    } else {
      setButtonMenu("");
    }
  });

  return (
    <AppContext.Provider value={{ buttonMenu, setButtonMenu }}>
      <Box display={"flex"} flexDirection={"column"}>
        <Header />

        <Stack direction={"row"} spacing={2}>
          <Box display={"flex"} flex={1}>
            <CustomDrawer />
            <Index />
          </Box>  
        </Stack>
      </Box>
    </AppContext.Provider>
  );
};

export default App;
