/* ----- Page04.js ----- */
import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./Page04.scss";
import { Link } from "react-router-dom";
import {useInfoStore} from "../../store/store";

//MUI
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

function Page04() {
  //State
  const { district, setDistrict } = useInfoStore();

  //Stream Options
  const districtOptions = [
    "Ampara",
    "Anuradhapura",
    "Badulla",
    "Batticaloa",
    "Colombo",
    "Galle",
    "Gampaha",
    "Hambantota",
    "Jaffna",
    "Kalutara",
    "Kandy",
    "Kegalle",
    "Kilinochchi",
    "Kurunegala",
    "Mannar",
    "Matale",
    "Matara",
    "Moneragala",
    "Mullaitivu",
    "NuwaraEliya",
    "Polonnaruwa",
    "Puttalam",
    "Ratnapura",
    "Trincomalee",
    "Vavuniya",
  ];

  return (
    <div className="page04">
      <div className="page04__navbar">
        <Navbar />
      </div>
      <div className="page04__container">
        <div className="page04__question">
          <p>Select Your District</p>
        </div>
        <div className="page04__options">
          <Autocomplete
            fullWidth
            disablePortal
            id="combo-box-demo"
            options={districtOptions}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="District" />}
            value={district}
            onChange={(event, newValue) => {
              setDistrict(newValue);
            }}
          />
        </div>
        <div className="page04__buttons">
          <Link to="/Q3">
            <Button variant="contained">Back</Button>
          </Link>
          <Link to="/Q5">
            <Button variant="contained">Next</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Page04;
