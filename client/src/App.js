import React, { useState } from "react";
import { Routes, Route, HashRouter } from "react-router-dom";

import { Container } from "@material-ui/core";

import Home from "./components/Home/Home";
import FrontPage from "./components/Front Page/FrontPage";
import Navbar from "./components/Navbar/Navbar";
import CreateEmployeeData from "./components/CreateEmployeeData/CreateEmployeeData";
import SearchEmployeeDetails from "./components/SearchEmployeeDetails/SearchEmployeeDetails";
import Authentication from "./components/Authentication/Authentication";
import AuthSignUp from "./components/Authentication/Auth-Signup";

const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const user = JSON.parse(localStorage.getItem("profile"));

  return (
    <HashRouter>
      <Navbar />
      <Container maxWidth="lg">
        <Routes>
          {user?.result.name ? (
            <Route path="/" element={<Home />} />
          ) : (
            <Route path="/" element={<FrontPage />} />
          )}
          <Route path="/sign" element={<FrontPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/search" element={<SearchEmployeeDetails />} />
          <Route path="/employee-list" element={<SearchEmployeeDetails />} />
          <Route
            path="/add-employees"
            element={
              <CreateEmployeeData
                currentId={currentId}
                setCurrentId={setCurrentId}
              />
            }
          />

          <Route path="/auth" element={<Authentication />} />
          <Route path="/authsignup" element={<AuthSignUp />} />
        </Routes>
      </Container>
    </HashRouter>
  );
};

export default App;
