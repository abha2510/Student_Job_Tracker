// Detect Duplicate Applications (Medium)
// Write a function that checks if there are duplicate applications based on a 
// combination of company + role, ignoring case sensitivity.


function hasDuplicateApplications(jobs) {
    const seen = new Set();
  
    for (let job of jobs) {
      const key = `${job.company.toLowerCase()}-${job.role.toLowerCase()}`;
  
      if (seen.has(key)) {
        return true; 
      }
  
      seen.add(key);
    }
  
    return false;
  }
  const jobs = [
    { company: "Google", role: "SDE Intern" },
    { company: "Amazon", role: "SDE Intern" },
    { company: "google", role: "SDE Intern" } 
  ];
  
  console.log(hasDuplicateApplications(jobs)); 
  