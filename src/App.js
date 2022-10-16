/* ----- App ----- */

import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";

//Pages
import Landing from "./components/Landing/Landing";
import Page01 from "./components/Page01/Page01";
import Page02 from "./components/Page02/Page02";
import Page03 from "./components/Page03/Page03";
import Page04 from "./components/Page04/Page04";
import Page05 from "./components/Page05/Page05";
import Results from "./components/Results/Results";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/Q1" element={<Page01 />} />
          <Route exact path="/Q2" element={<Page02 />} />
          <Route exact path="/Q3" element={<Page03 />} />
          <Route exact path="/Q4" element={<Page04 />} />
          <Route exact path="/Q5" element={<Page05 />} />
          <Route exact path="/results" element={<Results />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
