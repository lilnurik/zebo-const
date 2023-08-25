import React, { useState } from "react";
import "./Navbar.scss";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../../img/Logo.png";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { bgcolor } from "@mui/system";

const pages = ["Home", "About", "Services", "Project", "Location"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Navbar() {
  // const [anchorElNav, setAnchorElNav] = React.useState(null);
  // const [anchorElUser, setAnchorElUser] = React.useState(null);

  

  // const handleOpenNavMenu = (event) => {
  //   setAnchorElNav(event.currentTarget);
  // };
  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  // const handleCloseNavMenu = () => {
  //   setAnchorElNav(null);
  // };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };


  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };

  return (
    <div  className="logo1" >
    <img src={Logo} alt=""/>

    <nav className="nav">
    <ul className={active}>
      
      <li className="nav__item">
        <a href="#header" className="nav__link"  onClick={navToggle} >
          Home
        </a>
      </li>
      <li className="nav__item">
        <a href="#section" className="nav__link"  onClick={navToggle} >
          About
        </a>
      </li>
      <li className="nav__item">
        <a href="#service" className="nav__link"  onClick={navToggle} >
        Services
        </a>
      </li>
      <li className="nav__item">
        <a href="#project" className="nav__link"  onClick={navToggle} >
        Projects
        </a>
      </li>
      <li className="nav__item">
        <a href="#location" className="nav__link"  onClick={navToggle} >
        Location
        </a>
      </li>
      <li className="nav__item">
        <a href="tel:+07724339871" className="nav__link nav__link2">
        +07724339871
        </a>
      </li>
    </ul>
    <div onClick={navToggle} className={icon}>
      <div className="line1"></div>
      <div className="line2"></div>
      <div className="line3"></div>
    </div>
  </nav>
  </div>



    // <AppBar position="absolute" sx={{boxShadow:0, bgcolor:"transparent"}}>
    //   <Container maxWidth="xl" sx={{mt:"20px"}}>
    //     <Toolbar disableGutters>
    //       <Box sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
    //         <img src={Logo} alt="" />
    //       </Box>

    //       <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
    //         <IconButton
    //           size="large"
    //           aria-label="account of current user"
    //           aria-controls="menu-appbar"
    //           aria-haspopup="true"
    //           onClick={handleOpenNavMenu}
    //           color="inherit"
              
    //         >
    //           <MenuIcon />
    //         </IconButton>
    //         <Menu
    //           id="menu-appbar"
    //           anchorEl={anchorElNav}
    //           anchorOrigin={{
    //             vertical: "bottom",
    //             horizontal: "left",
    //           }}
    //           keepMounted
    //           transformOrigin={{
    //             vertical: "top",
    //             horizontal: "left",
    //           }}
    //           open={Boolean(anchorElNav)}
    //           onClose={handleCloseNavMenu}
    //           sx={{
    //             display: { xs: "block", md: "none" },
    //           }}
    //         >
    //           {pages.map((page) => (
    //             <MenuItem key={page} onClick={handleCloseNavMenu}>
    //               <Typography textAlign="center">{page}</Typography>
    //             </MenuItem>
    //           ))}
    //         </Menu>
    //       </Box>

    //       <Box sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}>
    //         <img src={Logo} alt="" />
    //       </Box>
    //       <Box
    //         sx={{
    //           flexGrow: 1,
    //           display: { xs: "none", md: "flex" },
              
    //           ml: "460px",
    //           float: "right",
    //         }}
    //       >
    //         {pages.map((page) => (
    //           <Button
    //             key={page}
    //             onClick={handleCloseNavMenu}
    //             sx={{ my: 2, color: "white", display: "block" }}
    //           >
    //             {page}
    //           </Button>
    //         ))}
    //       </Box>
    //     </Toolbar>
    //   </Container>
    // </AppBar>
  );
}

export default Navbar;
