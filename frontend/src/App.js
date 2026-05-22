import React from "react";
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import mystore from "./redux/store";
import StudentHome from "./Screens/Student/Home";

const App = () => (
  <Provider store={mystore}>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="student" element={<StudentHome />} />
      </Routes>
    </Router>
  </Provider>
);

export default App;
