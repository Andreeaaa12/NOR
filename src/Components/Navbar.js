import React, { useState } from 'react'
import logoImg from "../Landing Page Assets/2S2-alb-color.png";
import {HiOutlineBars3} from "react-icons/hi2";
import {Link} from 'react-router-dom';

import {
    Box,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import HomeIcon from"@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

const Navbar = () => {
const [openMenu, setOpenMenu]=useState(false)
const menuOptions=[
    {
        text:"Home",
        icon:<HomeIcon/>
    },
    {
        text:"About",
        icon:<InfoIcon/>
    },
    {
        text:"Projects",
        icon:<CommentRoundedIcon/>
    },
    {
        text:"Team",
        icon:<PhoneRoundedIcon/>
    },
    {
        text:"Support us",
        icon:<ShoppingCartRoundedIcon/>
    },

];

  return(
    <nav>
        <div className="nav-logo-container">
            <img src={logoImg} width={268.83} height={133} alt="" />
        </div>
        <div className="navbar-links-container">
            <ul>
            <li><a href="">Home</a></li>           
            <li><a href="">About</a></li>
            <li><a href="">
                <div class="dropdown">
                     <button class="dropbtn">Projects 
                        <i class="fa fa-caret-down"></i>
                    </button>
                     <div class="dropdown-content">
                        <a href="">Project Eva</a>
                        <a href="">Project Luna</a>
                        <a href="">Qube2Space</a>
                    </div>
                </div> 
            </a></li>
            <li><a href="">Team</a></li>
            <button className="primary-button">Support us</button>
            </ul> 

  
        </div>
        
        <div className='navbar-menu-container'>
            <HiOutlineBars3 onClick={()=> setOpenMenu(true)} />
        </div>
        <Drawer open={openMenu} onClose={()=> setOpenMenu(false)}
        anchor='right' >
            <Box 
            sx={{width:250}}
            role="presentation"
            onClick={()=> setOpenMenu(false)}
            onKeyDown={()=>setOpenMenu(false)}
            >
                <List>
                    {menuOptions.map((item)=>(
                        <ListItem key={item.text} disablePadding>
                           <ListItemButton>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                            </ListItemButton> 
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Drawer>
    </nav>
  );
};

export default Navbar;