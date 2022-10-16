/* ----- Page02.js ----- */
import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./Page02.scss";
import { Link } from "react-router-dom";
import {useInfoStore} from "../../store/store";

//MUI
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

function Page02() {
  //State
  const {
    stream,
    setStream,
    setSubject01,
    setSubject02,
    setSubject03,
    setGrade01,
    setGrade02,
    setGrade03,
  } = useInfoStore();

  //Stream Options
  const streamOptions = [
    "Arts",
    "Commerce",
    "Bio Science",
    "Physical Science",
    "Technology",
  ];

  return (
    <div className="page02">
      <div className="page02__navbar">
        <Navbar />
      </div>
      <div className="page02__container">
        <div className="page02__question">
          <p>Select Your Stream</p>
        </div>
        <div className="page02__options">
          <Autocomplete
            fullWidth
            disablePortal
            id="combo-box-demo"
            options={streamOptions}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Stream" />}
            value={stream}
            onChange={(event, newValue) => {
              setStream(newValue);
              setSubject01(null);
              setSubject02(null);
              setSubject03(null);
              setGrade01(null);
              setGrade02(null);
              setGrade03(null);
            }}
          />
        </div>
        <div className="page02__buttons">
          <Link to="/Q1">
            <Button variant="contained">Back</Button>
          </Link>
          <Link to="/Q3">
            <Button variant="contained">Next</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Page02;
