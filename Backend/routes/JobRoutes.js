const express = require("express");
const router = express.Router();
const {
    createJob,
    getJobs,
    updateJob,
    deleteJob,
    getJobById,
} = require("../controllers/jobController");

router.post("/create", createJob);

router.get("/", getJobs);

router.get("/:id", getJobById);

router.put("/:id", updateJob);

router.delete("/:id", deleteJob);

module.exports = router;
