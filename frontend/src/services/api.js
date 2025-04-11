import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000", 
});

export const fetchJobs = () => API.get("/job");
export const createJob = (jobData) => API.post("/job/create", jobData);
export const updateJob = (id, updatedData) => API.put(`/job/${id}`, updatedData);
export const deleteJob = (id) => API.delete(`/job/${id}`);
export const getJobById = (id) => API.get(`/job/${id}`);

