// Question: Given an array of job applications:
// {
//   company: "Google",
//   role: "SDE Intern",
//   appliedDate: "2025-04-01"
// }

// Task: Sort jobs by appliedDate (latest first).

const jobs = [
    { company: "Google", role: "SDE Intern", appliedDate: "2025-04-01" },
    { company: "Amazon", role: "SDE Intern", appliedDate: "2025-04-05" },
    { company: "Meta", role: "Frontend Intern", appliedDate: "2025-03-28" }
  ];
  
  jobs.sort((a, b) => new Date(b.appliedDate) - new Date(a.appliedDate));
  
  console.log(jobs);
  