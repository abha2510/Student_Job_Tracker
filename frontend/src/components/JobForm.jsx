import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createJob, getJobById, updateJob } from "../services/api";


const JobForm = () => {
  const [formData, setFormData] = useState({
    company: "",
    role: "",
    status: "Applied",
    appliedDate: "",
    link: "",
  });
  const [showSnackbar, setShowSnackbar] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        await updateJob(id, formData);
      } else {
        await createJob(formData);
      }

      setShowSnackbar(true);
      setTimeout(() => {
        setShowSnackbar(false);
        navigate("/jobs");
      }, 1500);
    } catch (error) {
      console.error("Error submitting job:", error);
    }
  };

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const { data } = await getJobById(id);
        console.log("Fetched job data:", data);
        
        setFormData({
          company: data.company,
          role: data.role,
          status: data.status,
          appliedDate: data.appliedDate.split("T")[0],
          link: data.link || "",
        });
      } catch (err) {
        console.error("Error fetching job to edit:", err);
      }
    };

    if (id) {
      fetchJob();
    }
  }, [id]);

  return (
    <div>
      <form className="job-form" onSubmit={handleSubmit}>
        <input name="company" value={formData.company} placeholder="Company" className="form-input" required onChange={handleChange} />
        <input name="role" value={formData.role} placeholder="Role" className="form-input" required onChange={handleChange} />
        <select name="status" value={formData.status} className="form-input" onChange={handleChange}>
          <option>Applied</option>
          <option>Interview</option>
          <option>Offer</option>
          <option>Rejected</option>
        </select>
        <input type="date" name="appliedDate" value={formData.appliedDate} className="form-input" required onChange={handleChange} />
        <input name="link" value={formData.link} placeholder="Link (optional)" className="form-input" onChange={handleChange} />
        <button type="submit" className="form-input">
          {id ? "Update Job" : "Add Job"}
        </button>
      </form>

      {showSnackbar && (
        <div className="snackbar">
          ✅ Job {id ? "Updated" : "Created"} Successfully!
        </div>
      )}
    </div>
  );
};

export default JobForm;
