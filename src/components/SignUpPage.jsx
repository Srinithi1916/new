import React, { useEffect, useRef, useState } from "react";
import { Paper, Stack, Typography, Button, TextField } from "@mui/material";
import bimag from "./img/background-imag.jpg";
import CheckboxElement from "./CheckboxElement";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const navigate = useNavigate();
  const nameref = useRef("");
  const emailref = useRef("");
  const passwordref = useRef("");
  const passwordcheck = useRef();

  // const [isValidName, setValidName] = useState(true);
  // const [isValidEmail, setValidEmail] = useState(true);
  // const [isValidPassword, setValidPassword] = useState(true);
  // const [isFilled, setFilled] = useState(false);

  let isValidEmail = true;
  let isValidName = true;
  let isValidPassword = true;
  let isFilled = false;

  const handleClick = () => {
    isValidName = nameref.current.value.trim();

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (emailRegex.test(emailref.current.value)) {
      isValidEmail = true;
    } else {
      isValidEmail = false;
    }

    if (isValidName && isValidEmail && isValidPassword) {
      isFilled = true;
    }

    if (isFilled) {
      axios
        .post("http://localhost:1000/users", {
          name: nameref.current.value,
          password: passwordref.current.value,
          email: emailref.current.value,
        })
        .then(() => {
          console.log("Your account has been added");
          navigate("/login");
        });
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${bimag})`,
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "30px",
      }}
    >
      <Paper
        elevation={20}
        square={false}
        style={{ width: "450px", height: "750px", borderRadius: "30px" }}
      >
        <Stack
          spacing={3}
          direction={"column"}
          align={"flex-start"}
          style={{ padding: "50px" }}
        >
          <Typography variant="h3" fontFamily={'"SemiBold",Poppins'}>
            SignUp
          </Typography>
          <br />
          <TextField
            error={!isValidName}
            color="success"
            variant="outlined"
            label="Name"
            inputRef={nameref}
            required
            type="text"
            helperText={!isValidName ? "Name should not be empty" : null}
            fullWidth
          />
          <TextField
            error={!isValidEmail}
            variant="outlined"
            label="Email"
            color="success"
            inputRef={emailref}
            required
            type="text"
            helperText={!isValidEmail ? "Enter Valid Email" : null}
            fullWidth
            style={{ borderRadius: "100px" }}
          />
          <TextField
            error={!isValidPassword}
            variant="outlined"
            label="Create Password"
            inputRef={passwordref}
            required
            type="password"
            color="success"
            fullWidth
          />
          <TextField
            error={!isValidPassword}
            variant="outlined"
            label="Confirm Password"
            inputRef={passwordcheck}
            color="success"
            required
            type="password"
            helperText={!isValidPassword ? "password didn't match" : null}
            fullWidth
          />
          <br />
          <CheckboxElement
            CheckboxLabel={"I have accepted the "}
            linkname={"terms and conditions"}
          />
          <br />
          <Button
            style={{ borderRadius: "40px", backgroundColor: "green" }}
            variant="contained"
            size="large"
            onClick={handleClick}
          >
            SIGN UP
          </Button>
          <br />
        </Stack>
      </Paper>
    </div>
  );
};

export default SignUpPage;
