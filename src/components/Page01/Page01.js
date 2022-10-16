/* ----- Page01.js ----- */
import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import "./Page01.scss";
import { Link } from "react-router-dom";
import {useInfoStore} from "../../store/store";

//MUI
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

function Page01() {
  //State
  const { name, setName } = useInfoStore();

  return (
    <div className="page01">
      <div className="page01__navbar">
        <Navbar />
      </div>
      <div className="page01__container">
        <div className="page01__question">
          <p>Enter Your Name</p>
        </div>
        <div className="page01__options">
          <TextField
            id="standard-basic"
            label="Name"
            variant="standard"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="page01__buttons">
          <Link to="/Q2">
            <Button variant="contained">Next</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Page01;
