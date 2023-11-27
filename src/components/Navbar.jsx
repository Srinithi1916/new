import React, { useContext, useMemo, useState } from "react";
import AppBar from "@mui/material/AppBar";
import { Stack } from "@mui/material";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, NavLink, useLocation } from "react-router-dom";
import logoimg from "./img/logo.jpg";
import { userContext } from "./Context";
import ProfileMenu from "./ProfileMenu";

const Navbar = () => {
  const co = ({ isActive }) => {
    return {
      backgroundColor: isActive ? "#03fcad" : "white",
      color: isActive ? "black" : "black",
      textDecoration: "none",
      borderRadius: "50px",
      paddingLeft: "30px",
      paddingTop: "10px",
      paddingBottom: "10px",
      paddingRight: "30px",
      marginRight: "20px",
      fontFamily: "Poppins",
      fontSize: "20px",
    };
  };
  const [user, setuser] = useContext(userContext);

  console.log(user);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{ backgroundColor: "white", height: "auto" }}
      >
        <Toolbar>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Box style={{ display: "flex", alignItems: "center" }}>
              <img
                src={logoimg}
                style={{ height: "70px", weight: "70px", marginLeft: "50px" }}
              ></img>
              <Typography
                variant="h4"
                fontFamily={"Poppins"}
                style={{ color: "grey" }}
              >
                quickFIX
              </Typography>
            </Box>
          </Link>
          <Box
            sx={{
              display: "flex",
              flexGrow: 1,
              marginLeft: "60px",
              flexDirection: "row",
            }}
          >
            <NavLink to="/service" style={co}>
              service
            </NavLink>

            <NavLink to="/pricing" style={co}>
              pricing
            </NavLink>

            <NavLink to="/about" style={co}>
              about
            </NavLink>

            <NavLink to="/contactus " style={co}>
              contactus
            </NavLink>
          </Box>
          {user ? (
            <ProfileMenu />
          ) : (
            <div>
              <NavLink to="/login">
                <Button
                  sx={{ color: "black", fontWeight: "bold" }}
                  variant="contained"
                  color="inherit"
                >
                  Login
                </Button>
              </NavLink>

              <NavLink to="/signup">
                <Button
                  sx={{
                    marginLeft: "20px",
                    color: "black",
                    fontWeight: "bold",
                  }}
                  color="inherit"
                  variant="contained"
                >
                  Signup
                </Button>
              </NavLink>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Navbar;
