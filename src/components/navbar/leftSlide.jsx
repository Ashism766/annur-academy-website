import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close"; 
import { Link} from "react-router-dom";


const pages = [
{ name: "Home", link:"/" },
  { name: "Admission", link:"/admission"},
  { name: "Student corner",  link:"/student-corner" },
  { name: "About Us", link: "/about-us"},
  { name: "Contanct Us", link: "/contanct-us"},
  { name: "Login", link: "/login"},
]





const DrawerComp = () => {

 
  const [openDrawer, setOpenDrawer] = useState(false);
    const [activeItem, setActiveItem] = useState('Home');

  return (
    <React.Fragment>
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        sx={{
          "& .MuiDrawer-paper": {
            background: "#1C1C1C",
            width: '40vw'
           
          },
          "& .MuiListItemText-primary": {
            color: "white",
            },
        }}
      >

        <IconButton
          sx={{
            position: "relative",
            top: "8px",
            right: "8px",
            color: "red",

          }}
          onClick={() => setOpenDrawer(false)}
        >
          <CloseIcon />
        </IconButton>


        <List sx={{padding: '10px'}}>
          {pages.map((page, index) => (
            <ListItemButton component={Link}
            to={page.link}
             onClick={()=>{setOpenDrawer(false); setActiveItem(page.name)}} key={index}
            
            sx={{backgroundColor: activeItem === page.name?"rgba(255, 255, 255, 0.3)":"transparent",
            borderRadius: "8px", marginBottom: "8px",
            
            }}
            >

                <ListItemText>{page.name}</ListItemText>
              
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "white", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon color="white" />
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComp;