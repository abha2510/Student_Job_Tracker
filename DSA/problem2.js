// Status Frequency Counter (Easy)
// Given an array of job applications with a status field, write a function that returns the count of each status.
// Example Output:
// {
//   Applied: 4,
//   Interview: 2,
//   Offer: 1,
//   Rejected: 3
// }

const jobs = [
    { status: "Applied" },
    { status: "Interview" },
    { status: "Applied" },
    { status: "Rejected" },
    { status: "Offer" },
    { status: "Applied" },
    { status: "Rejected" },
    { status: "Interview" },
    { status: "Rejected" },
    { status: "Applied" }
  ];
  
  function countStatuses(jobs) {
    const statusCount = {};
    
    for (let job of jobs) {
      const status = job.status;
      statusCount[status] = (statusCount[status] || 0) + 1;
    }
  
    return statusCount;
  }
  
  console.log(countStatuses(jobs));
  
