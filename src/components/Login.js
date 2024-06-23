import { Button, TextField } from "@mui/material";
import React from "react";

const Login = () => {
  return (
    <div className="container">
      <div className="logo-box">
        <img
          src="https://clipartcraft.com/images/twitter-logo-png-social-media.png"
          alt=""
          style={{ width: "100px", justifyContent: "flex-start" }}
        />
      </div>

      <form>
        <div className=""></div>
        <h1>Log in to Twitter</h1>
        <TextField
          id="outlined-basic"
          type="email"
          label="Phone number,email address"
          variant="outlined"
          style={{ padding: "10px", width: "250px" }}
        />
        <br />
        <TextField
          type="password"
          label="Password"
          variant="outlined"
          style={{ padding: "10px", width: "250px" }}
        />
      </form>
      <div className="">
        <Button variant="contained">Submit</Button>
      </div>
      <div>
        <Button
          variant="text"
          style={{
            textAlign: "end",
            padding: "10px",
            width: "350px",
            justifyContent: "left",
          }}
        >
          Forgot password?
        </Button>
        <Button
          variant="text"
          style={{
            textAlign: "end",
            padding: "10px",
            width: "150px",
            justifyContent: "left",
          }}
        >
          Sign Twitter
        </Button>
      </div>
    </div>
  );
};

export default Login;
