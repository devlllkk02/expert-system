/* ----- Page03.js ----- */
import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import "./Page03.scss";
import { Link } from "react-router-dom";
import {useInfoStore} from "../../store/store";

//MUI
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

function Page03() {
  //State
  const {
    stream,
    subject01,
    setSubject01,
    subject02,
    setSubject02,
    subject03,
    setSubject03,
    grade01,
    setGrade01,
    grade02,
    setGrade02,
    grade03,
    setGrade03,
    setScore01,
    setScore02,
    setScore03,
  } = useInfoStore();

  //Subjects Options
  const [subjectOptions, setSubjectOptions] = useState([]);

  useEffect(() => {
    if (stream === "Arts") {
      setSubjectOptions([
        "Arabic",
        "Art",
        "Bharatha Natayam",
        "Buddhism",
        "Buddhist Civilization",
        "Chinese",
        "Christian Civilization",
        "Christianity",
        "Communication and Media Studies",
        "Dance",
        "Economics",
        "English",
        "French",
        "Geography",
        "German",
        "Greek and Roman Civilization",
        "Hindi Language",
        "Hindu Civilization",
        "Hinduism",
        "History",
        "Home Economics",
        "Islam",
        "Islamic Civilization",
        "Japan Language",
        "Logic and Scientific Method",
        "Oriental Music",
        "Pali Language",
        "Political Science",
        "Russian",
        "Sanskrit",
        "Sinhala",
        "Tamil",
        "Western Music",
      ]);
    } else if (stream === "Commerce") {
      setSubjectOptions([
        "Accounting",
        "Business",
        "Statistics Business",
        "Studies Economics",
      ]);
    } else if (stream === "Bio Science") {
      setSubjectOptions([
        "Agriculture",
        "Bio System Technology",
        "Biology",
        "Chemistry",
        "Physics",
        "Science for Technology",
      ]);
    } else if (stream === "Physical Science") {
      setSubjectOptions([
        "Chemistry",
        "Combine Mathematics",
        "Higher Mathematics",
        "Physics",
      ]);
    } else if (stream === "Technology") {
      setSubjectOptions([
        "Agro Technology",
        "Engineering Technology",
        "General Information Technology",
        "Information & Communication Technology",
      ]);
    } else {
      setSubjectOptions([]);
    }
  }, [stream]);

  //Results Options
  const resultsOptions = ["A", "B", "C", "S", "F"];

  //Functions
  const calculateScore = (grade) => {
    switch (grade) {
      case "A":
        return 4;
        break;
      case "B":
        return 3;
        break;
      case "C":
        return 2;
        break;
      case "S":
        return 1;
        break;
      default:
        return 0;
        break;
    }
  };

  return (
    <div className="page03">
      <div className="page03__navbar">
        <Navbar />
      </div>
      <div className="page03__container">
        <div className="page03__question">
          <p>Enter Your Results</p>
        </div>
        <div className="page03__options">
          {/* Subject 01 */}
          <div className="page03__options__row">
            <div className="page03__options__c1">
              <Autocomplete
                fullWidth
                disablePortal
                id="combo-box-demo"
                options={subjectOptions}
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params} label="Subject 01" />
                )}
                value={subject01}
                onChange={(event, newValue) => {
                  setSubject01(newValue);
                }}
              />
            </div>
            <div className="page03__options__c2">
              <Autocomplete
                fullWidth
                disablePortal
                id="combo-box-demo"
                options={resultsOptions}
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params} label="Results" />
                )}
                value={grade01}
                onChange={(event, newValue) => {
                  setGrade01(newValue);
                  setScore01(calculateScore(newValue));
                }}
              />
            </div>
          </div>
          {/* Subject 02 */}
          <div className="page03__options__row">
            <div className="page03__options__c1">
              <Autocomplete
                fullWidth
                disablePortal
                id="combo-box-demo"
                options={subjectOptions}
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params} label="Subject 02" />
                )}
                value={subject02}
                onChange={(event, newValue) => {
                  setSubject02(newValue);
                }}
              />
            </div>
            <div className="page03__options__c2">
              <Autocomplete
                fullWidth
                disablePortal
                id="combo-box-demo"
                options={resultsOptions}
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params} label="Results" />
                )}
                value={grade02}
                onChange={(event, newValue) => {
                  setGrade02(newValue);
                  setScore02(calculateScore(newValue));
                }}
              />
            </div>
          </div>
          {/* Subject 03 */}
          <div className="page03__options__row">
            <div className="page03__options__c1">
              <Autocomplete
                fullWidth
                disablePortal
                id="combo-box-demo"
                options={subjectOptions}
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params} label="Subject 03" />
                )}
                value={subject03}
                onChange={(event, newValue) => {
                  setSubject03(newValue);
                }}
              />
            </div>
            <div className="page03__options__c2">
              <Autocomplete
                fullWidth
                disablePortal
                id="combo-box-demo"
                options={resultsOptions}
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params} label="Results" />
                )}
                value={grade03}
                onChange={(event, newValue) => {
                  setGrade03(newValue);
                  setScore03(calculateScore(newValue));
                }}
              />
            </div>
          </div>
        </div>
        <div className="page03__buttons">
          <Link to="/Q2">
            <Button variant="contained">Back</Button>
          </Link>
          <Link to="/Q4">
            <Button variant="contained">Next</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Page03;
