import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CourseDescription from "./Components/courseDescription";
import Heading from "./Components/Heading";
import CoursesList from "./Components/CoursesList";

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Heading} />
      <Route path="/" exact component={CoursesList} />
      <Route path="/coursedetail/:id" component={CourseDescription} />
    </Router>
  );
};

export default App;
