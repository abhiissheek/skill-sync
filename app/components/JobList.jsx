// app/components/JobList.jsx
import React from 'react';

const JobList = ({ jobs }) => {
  if (!jobs || jobs.length === 0) {
    return <p className="text-center text-gray-500">No jobs found. Try again or refine your search.</p>;
  }
  
  return (
    <div className="space-y-4">
      {jobs.map(job => (
        <div key={job.id} className="p-6 bg-gray-50 rounded-lg shadow-md border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-800">{job.title}</h3>
          <p className="text-gray-600"><strong>Company:</strong> {job.company}</p>
          <p className="text-gray-600"><strong>Location:</strong> {job.location}</p>
          <p className="mt-2 text-sm text-gray-700">{job.description}</p>
        </div>
      ))}
    </div>
  );
};

export default JobList;