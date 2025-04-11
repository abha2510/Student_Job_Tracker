import React, { useEffect, useState } from "react";
import { fetchJobs } from "../services/api";
import JobItem from "./JobItem";

const JobList = ({ refresh }) => {
  const [jobs, setJobs] = useState([]);

  const getAllJobs = async () => {
    try {
      const res = await fetchJobs();
      setJobs(res.data);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  useEffect(() => {
    getAllJobs();
  }, [refresh]);

  return (
    <div className="job-list">
      {jobs.length === 0 ? (
        <p>No jobs found</p>
      ) : (
        jobs.map((job) => <JobItem key={job._id} job={job} onStatusChange={getAllJobs} />)
      )}
    </div>
  );
};

export default JobList;
