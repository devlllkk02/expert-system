/* ----- Results.js ----- */
import React, { useEffect } from "react";
import "./Results.scss";

import Navbar from "../Navbar/Navbar";
import { useInfoStore, useMedicineStore } from "../../store/store";
import Degree from "../Degree/Degree";
function Results() {
  //State
  const info = useInfoStore();
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

  const medicine = useMedicineStore();

  useEffect(() => {
    recommendationGenerator();
  }, []);

  useEffect(() => {
    console.log(medicine);
  }, [medicine]);

  //Functions
  const recommendationGenerator = () => {
    // 01 - Medicine
    if (stream === "Bio Science") {
      var zscorefordistrict = medicine.zscore[district];
      if (zscorefordistrict == "NQC") zscorefordistrict = medicine.zscore.AVG;
      if (zscore >= zscorefordistrict) {
        medicine.setRecommendation("Recommended");
        medicine.setReason(
          "Your Z-score is higher than the recommended Z-score."
        );
      } else {
        medicine.setRecommendation("Not Recommended");
        medicine.setReason(
          "Your Z-score is lower than the recommended Z-score."
        );
      }
    } else {
      medicine.setRecommendation("Not Recommended");
      medicine.setReason(
        "You have to follow bio science stream, to be eligible for this degree."
      );
    }
  };

  return (
    <div className="results">
      <div className="results__navbar">
        <Navbar />
      </div>
      <div className="results__body">
        <div className="results__body__container">
          <div className="results__summary">
            <div className="results__header">
              <p>Summary of the Analysis</p>
            </div>
            <div className="results__summary__body">
              <div className="results__summary__body__details">
                <div className="results__subheader">
                  <p>Basic Information</p>
                </div>
                {/* Name */}
                <div className="results__row">
                  <p>Name</p>
                  <p>{`: ${name}`}</p>
                </div>
                {/* Stream */}
                <div className="results__row">
                  <p>Stream</p>
                  <p>{`: ${stream}`}</p>
                </div>
                {/* District */}
                <div className="results__row">
                  <p>District</p>
                  <p>{`: ${district}`}</p>
                </div>
                {/* Z-Score */}
                <div className="results__row">
                  <p>Z-Score</p>
                  <p>{`: ${zscore}`}</p>
                </div>
                {/* Results */}
                <div className="results__row">
                  <p>Results</p>
                  <p>{`: ${subject01} : ${grade01}`}</p>
                </div>
                <div className="results__row">
                  <p></p>
                  <p>{`: ${subject02} : ${grade02}`}</p>
                </div>
                <div className="results__row">
                  <p></p>
                  <p>{`: ${subject03} : ${grade03}`}</p>
                </div>
              </div>
              <div className="results__summary__body__charts">
                <div className="results__subheader">
                  <p>Overview</p>
                </div>
              </div>
            </div>
          </div>
          <div className="results__degrees">
            <div className="results__header">
              <p>Recommendation of Univeristy of Moratuwa Degrees</p>
            </div>
            {/* Medicine */}
            <Degree number="01" info={info} degree={medicine} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Results;
