import { Button, TextField } from "@mui/material";
import React from "react";

const Signin = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-1">
          <img
            src=" https://clipartcraft.com/images/twitter-logo-png-social-media.png"
            alt=""
            style={{ width: "50px", justifyContent: "flex-start" }}
          />
          <h1 style={{ padding: "5px", width: "850px" }}>Create an account</h1>
          <form>
            <TextField
              label="Name"
              style={{ padding: "10px", width: "500px" }}
            />
            <br />
            <TextField
              label="Phone number"
              style={{ padding: "10px", width: "500px" }}
            />
          </form>
          <div className="col-lg-4">
            <Button variant="text" style={{ width: "700px" }}>
              Use Email
            </Button>
            <div className="">
              <h3 style={{ padding: "5px", width: "700px" }}>Date of birth</h3>
              <span>
                Facilisi sem pulvinar velit nunc, gravida scelerisque amet nibh
                sit. Quis bibendum ante phasellus metus, magna lacinia sed
                augue. Odio enim nascetur leo mauris vel eget. Pretium id
                ullamcorper blandit viverra dignissim eget tellus. Nibh mi massa
                in molestie a sit. Elit congue.
              </span>
              <div className=""></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
