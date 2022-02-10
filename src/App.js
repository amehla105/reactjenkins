import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import reactDom from "react-dom";
import Aboutus from "./Components/Aboutus";
import Addcourse from "./Components/Addcourse";
import Contactus from "./Components/Contactus";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Viewcourse from "./Components/Viewcourse";
import Welcome from "./Components/Welcome";

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Fragment>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Welcome />} />
            <Route exact path="/welcome" element={<Welcome />} />
            <Route exact path="/addcourse" element={<Addcourse />} />
            <Route exact path="/viewcourse" element={<Viewcourse />} />
            <Route exact path="/contactus" element={<Contactus />} />
            <Route exact path="/aboutus" element={<Aboutus />} />
          </Routes>
        </Fragment>
      </Router>
    </div>
  );
}

export default App;
