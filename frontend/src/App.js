import React from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import JobForm from "./components/JobForm";
import JobList from "./components/JobList";
import "./App.css";

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isJobListPage = location.pathname === "/jobs";

  return (
    <div className="container">
      <div className="heading">
        <h1>🎯 Student Job Tracker</h1>
        {isJobListPage ? (
          <button onClick={() => navigate("/")} className="back-btn">
            ← Back
          </button>
        ) : (
          <a href="/jobs">Job List</a>
        )}
      </div>

      <Routes>
        <Route path="/" element={<JobForm />} />
        <Route path="/jobs" element={<JobList />} />
        <Route path="jobs/:id" element={<JobForm />} /> 
      </Routes>
    </div>
  );
};

export default App;
