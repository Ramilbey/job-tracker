import React, { useState } from "react";

function App() {
  const [jobs, setJobs] = useState([]);
  const [input, setInput] = useState("");

  const addJob = () => {
    if (input.trim()) {
      setJobs([...jobs, { title: input, applied: false }]);
      setInput("");
    }
  };
  const toggleApplied = (index) => {
    const newJobs = [...jobs];
    newJobs[index].applied = !newJobs[index].applied;
    setJobs(newJobs);
  };
  const deleteJob = index => {
    setJobs(jobs.filter((_, i)=>i !==index))
  }
  return (
    <div style={{ padding: '20px' }}>
    <h2>Job Application Tracker</h2>
    <input 
      value={input} 
      onChange={e => setInput(e.target.value)} 
      placeholder="Enter job title" 
    />
    <button onClick={addJob}>Add Job</button>
    <ul>
      {jobs.map((job, i) => (
        <li key={i}>
          <span 
            style={{ textDecoration: job.applied ? 'line-through' : 'none' }}
            onClick={() => toggleApplied(i)}
          >
            {job.title}
          </span>
          <button onClick={() => deleteJob(i)}>❌</button>
        </li>
      ))}
    </ul>
  </div>
  );
}

export default App;
