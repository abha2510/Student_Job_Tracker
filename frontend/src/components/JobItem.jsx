import React from "react";
import { updateJob, deleteJob } from "../services/api";
import { useNavigate } from "react-router-dom";

const JobItem = ({ job, onStatusChange }) => {
    const navigate = useNavigate();

    const handleEdit = () => {
      navigate(`/jobs/${job._id}`);
    };
  const handleStatusChange = async (e) => {
    await updateJob(job._id, { status: e.target.value });
    onStatusChange();
  };

  const handleDelete = async () => {
    await deleteJob(job._id);
    onStatusChange();
  };

  return (
    <div className="job-card">
      <div className="job-header">
        <h3>{job.role} @ {job.company}</h3>
        <p className={`status ${job.status.toLowerCase()}`}>{job.status}</p>
      </div>
      <p><strong>Date Applied:</strong> {new Date(job.appliedDate).toLocaleDateString()}</p>
      {job.link && (
        <p><a href={job.link} target="_blank" rel="noreferrer">🔗 View Job</a></p>
      )}
      <div className="job-actions">
        <select value={job.status} onChange={handleStatusChange}>
          <option>Applied</option>
          <option>Interview</option>
          <option>Offer</option>
          <option>Rejected</option>
        </select>
        <button className="edit-btn" onClick={handleEdit}>Edit</button>
        <button className="delete-btn" onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default JobItem;
