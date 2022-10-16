/* ----- Degree.js ----- */
import React, { useState, useEffect } from "react";
import "./Degree.scss";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    //   legend: {
    //     position: 'top' as const,
    //   },
    title: {
      display: true,
      text: "Variation of Z-Scores",
    },
  },
};

const labels = [""];

function Degree({ number, info, degree }) {
  const [zscoredifference, setzscoredifference] = useState("");

  useEffect(() => {
    calculateZScore();
  }, []);

  //Functions
  const calculateZScore = () => {
    if (degree.zscore[info.district] === "NQC") {
      setzscoredifference((info.zscore - degree.zscore.AVG).toFixed(4));
    } else {
      setzscoredifference(
        (info.zscore - degree.zscore[info.district]).toFixed(4)
      );
    }
  };

  const recommendedBoxStyles = () => {
    if (degree.recommendation === "Recommended") {
      return { backgroundColor: "#D6F9E8", borderColor: "#227754" };
    } else {
      return { backgroundColor: "#FFE7E7", borderColor: "#D60024" };
    }
  };

  const recommendedTextStyles = () => {
    if (degree.recommendation === "Recommended") {
      return { color: "#227754" };
    } else {
      return { color: "#D60024" };
    }
  };

  //Chart
  const data = {
    labels,
    datasets: [
      {
        label: "Your Z-Score",
        data: [info.zscore],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Recommended Z-Score",
        data:
          degree.zscore[info.district] === "NQC"
            ? [degree.zscore.AVG]
            : [degree.zscore[info.district]],
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <div className="degree">
      <div className="degree__header">
        <div className="degree__title">
          <p>{`${number}. ${degree.name}`}</p>
        </div>
        <div className="degree__recommendation">
          <div
            className="degree__recommendation__box"
            style={recommendedBoxStyles()}
          >
            <div className="degree__recommendation__text">
              <p style={recommendedTextStyles()}>{degree.recommendation}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="degree__body">
        <div className="degree__details">
          {/* Faculty */}
          <div className="degree__row">
            <p>Faculty</p>
            <p>{`: ${degree.faculty}`}</p>
          </div>
          {/* Degree */}
          <div className="degree__row">
            <p>Degree</p>
            <p>{`: ${degree.degree}`}</p>
          </div>
          {/* Z-Score Difference */}
          <div className="degree__row">
            <p>Z-Score Difference</p>
            <p>{`: ${zscoredifference}`}</p>
          </div>
          {/* Reason */}
          <div className="degree__row">
            <p>Reason</p>
            <p>{`: ${degree.reason}`}</p>
          </div>
        </div>
        <div className="degree__charts">
          <Bar options={options} data={data} />
        </div>
      </div>
    </div>
  );
}

export default Degree;
