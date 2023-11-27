import React, { useContext, useEffect, useRef, useState } from "react";
import { Paper, Stack, TextField, Typography, Button } from "@mui/material";
import bimag from "./img/background-imag.jpg";
import TextFieldbox from "./TextFieldbox";
import { Link, Navigate, useNavigate } from "react-router-dom";
import CheckboxElement from "./CheckboxElement";
import Navbar from "./Navbar.jsx";
import axios from "axios";
import { userContext } from "./Context.jsx";

const LoginPage = () => {
  const userNameRef = useRef("");
  const passwordref = useRef("");

  const [user, setuser] = useContext(userContext);
  
  const [isNameFound, setNameFound] = useState(true);
  const [isValidPassword, setValidPassword] = useState(true);
  const [isFilled, setFilled] = useState();

  const [error, setError] = useState();
  const navigate = useNavigate();

  const size = { width: "450px", height: "550px", borderRadius: "30px" };
  const setCenter = {
    backgroundImage: `url(${bimag})`,
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  let mail = "";
  let password = "";

  useEffect(() => {
    setFilled(false);
  }, [userNameRef.current.value, passwordref.current.value]);

  const handleClick = () => {
    setFilled(
      userNameRef.current.value.trim() && passwordref.current.value.trim()
    );

    if (!isFilled) {
      axios
        .get(`http://localhost:1000/users?email=${userNameRef.current.value}`)
        .then((response) => {
          if (response.data[0]) {
            setNameFound(true);
            mail = response.data[0].email;
            password = response.data[0].password;
            if (passwordref.current.value === password) {
              setuser(response.data[0].name);
              navigate("/");
            } else {
              setValidPassword(false);
            }
          } else {
            setNameFound(false);
          }
        })
        .catch();
    }
  };
  return (
    <div>
      <div style={setCenter}>
        <Paper elevation={20} square={false} style={size}>
          <Stack
            spacing={1}
            direction={"column"}
            align={"flex-start"}
            style={{ setCenter, padding: "50px" }}
          >
            <Typography variant="h3" fontFamily={'"SemiBold",Poppins'}>
              Login
            </Typography>
            <br></br>
            <br></br>
            <Stack spacing={3}>
              <TextField
                error={!isNameFound}
                color="success"
                variant="outlined"
                required
                label="Name"
                type="text"
                placeholder="Enter Name"
                helperText={!isNameFound ? "Enter Valid Email" : null}
                inputRef={userNameRef}
                fullWidth
              ></TextField>
              <TextField
                required
                error={!isValidPassword}
                variant="outlined"
                type="text"
                color="success"
                label="Password"
                inputRef={passwordref}
                placeholder="Enter your password"
                helperText={
                  !isNameFound
                    ? !isValidPassword
                      ? "password didn't match"
                      : null
                    : null
                }
                id="name"
                fullWidth
              ></TextField>
            </Stack>
            <br></br>
            <CheckboxElement CheckboxLabel={"Remember me"}></CheckboxElement>
            <br></br>
            <Button
              style={{ borderRadius: "40px", backgroundColor: "green" }}
              variant="contained"
              size="large"
              onClick={handleClick}
            >
              SIGN IN
            </Button>
            <br></br>
            <Stack direction={"row"} spacing={1}>
              <Typography> Don't have an Account ?</Typography>
              <Link to="/signup">SignUp</Link>
            </Stack>
          </Stack>
        </Paper>
      </div>
    </div>
  );
};
export default LoginPage;
