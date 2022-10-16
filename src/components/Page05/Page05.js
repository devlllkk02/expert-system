/* ----- Page05.js ----- */
import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import "./Page05.scss";
import { Link } from "react-router-dom";
import {useInfoStore} from "../../store/store";
//MUI
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

function Page05() {
  const {
    name,
    stream,
    subject01,
    subject02,
    subject03,
    grade01,
    grade02,
    grade03,
    score01,
    score02,
    score03,
    district,
    zscore,
    setZscore,
  } = useInfoStore();

  const display = () => {
    console.log(
      name,
      stream,
      subject01,
      subject02,
      subject03,
      grade01,
      grade02,
      grade03,
      score01,
      score02,
      score03,
      district,
      zscore
    );
  };

  return (
    <div className="page05">
      <div className="page05__navbar">
        <Navbar />
      </div>
      <div className="page05__container">
        <div className="page05__question">
          <p>Enter Your Z-Score</p>
        </div>
        <div className="page05__options">
          <TextField
            id="standard-basic"
            label="Z-Score"
            variant="standard"
            fullWidth
            value={zscore}
            onChange={(e) => setZscore(e.target.value)}
          />
        </div>
        <div className="page05__buttons">
          <Link to="/Q4">
            <Button variant="contained">Back</Button>
          </Link>
          <Link to="/results">
          <Button variant="contained" onClick={display}>
            Next
          </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Page05;
