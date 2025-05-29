import React, { useState } from "react";
import './style.css';

function App() {
  const [jobs, setJobs] = useState([]);
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");

  // Add job on form submit
  const addJob = (e) => {
    e.preventDefault();  // prevent page reload
    if (title.trim()) {
      // create job with unique id
      const newJob = {
        id: Date.now(),
        title: title.trim(),
        link: link.trim(),
        applied: false,
      };
      setJobs([...jobs, newJob]);
      setTitle("");
      setLink("");
    }
  };

  // Toggle applied status by id
  const toggleApplied = (id) => {
    setJobs(jobs.map(job =>
      job.id === id ? { ...job, applied: !job.applied } : job
    ));
  };

  // Delete job by id
  const deleteJob = (id) => {
    setJobs(jobs.filter(job => job.id !== id));
  };

  return (
    <div className="container">
      <h1>Job Tracker</h1>
      <form onSubmit={addJob}>
        <input
          type="text"
          placeholder="Job title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
        <input
          type="url"
          placeholder="Job link (optional)"
          value={link}
          onChange={e => setLink(e.target.value)}
        />
        <button type="submit">Add Job</button>
      </form>

      <ul className="job-list">
        {jobs.map(job => (
          <li key={job.id}>
            <span>
              {job.link ? (
                <a href={job.link} target="_blank" rel="noreferrer">{job.title}</a>
              ) : (
                job.title
              )}
            </span>
            <div>
              <button
                onClick={() => toggleApplied(job.id)}
                className={`toggle-applied ${job.applied ? 'applied' : ''}`}
              >
                {job.applied ? 'Applied' : 'Apply'}
              </button>
              <button onClick={() => deleteJob(job.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
