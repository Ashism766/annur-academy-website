import React, { useState, useEffect } from "react";
import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import DrawerComp from "./leftSlide";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [value, setValue] = useState(0);
  const Navigate = useNavigate();

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));


  const [navbarScrolled, setNavbarScrolled] = useState(false);

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      // Get the scroll position
      const scrollPosition = window.scrollY;

      const isScrolled = scrollPosition > 100;


      setNavbarScrolled(isScrolled);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);



  return (
    <React.Fragment>
      <AppBar  elevation={navbarScrolled?3:0}
    
    sx={
    navbarScrolled
      ? {  backgroundColor: "#2F2B25",
          transition: "background-color 0.3s ease-in-out",}
      : {
        backgroundColor: "transparent", color:'Black'
        }
     }>
        <Toolbar>
          {/* <AddBusinessRoundedIcon sx={{ transform: "scale(2)" }} /> */}

          <img onClick={()=>Navigate("/")} style={{width:'50px', cursor:'pointer',}} src={require("./logo.png") } alt='logo'/>
          {isMatch ? (
            <>
              <Typography onClick={()=>Navigate("/")} sx={{ fontSize: "1.5rem",fontFamily:'cursive',cursor:'pointer', paddingLeft:'22%' }}>
                ANNUR SCHOOL
              </Typography>
              <DrawerComp />
            </>
          ) : (
            <>
            <Typography onClick={()=>Navigate("/")} sx={{ fontSize: "1.5rem",fontFamily:'cursive',cursor:'pointer', paddingLeft: "2%" }}>
                ANNUR SCHOOL
              </Typography>
              <Tabs
                sx={{ marginLeft: "auto" }}
                indicatorColor="primary"
                textColor="white"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                <Tab onClick={()=>Navigate("/")} label="Home" />
                <Tab onClick={()=>Navigate("/Admission")} label="Admission" />
                <Tab onClick={()=>Navigate("/student-corner")} label="Student Corner" />
                <Tab onClick={()=>Navigate("/notice")} label="Notice" />
                <Tab onClick={()=>Navigate("/about-us")} label="About Us" />
                <Tab onClick={()=>Navigate("/contanct-us")} label="Contanct Us" />
              </Tabs>
              <Button onClick={()=>Navigate("/login")} sx={{ marginLeft: "auto" }} variant="contained">
                Login
              </Button>
              {/* <Button sx={{ marginLeft: "10px" }} variant="contained">
                SignUp
              </Button> */}
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;