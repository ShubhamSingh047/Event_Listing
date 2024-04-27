import React, { useState } from 'react';

const AddActivityForm = ({ onAdd }) => {
  const [activity, setActivity] = useState('');
  const [label, setLabel] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!activity.trim() || !label.trim()) return; // Prevent adding empty activity or label
    onAdd({ activity, label });
    setActivity(''); // Clear input after adding activity
    setLabel(''); // Clear input after adding activity
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="activity">Activity Name:</label>
        <input
          type="text"
          id="activity"
          placeholder="Enter activity"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="hashtag">#hashTags:</label>
        <input
          type="text"
          id="hashtag"
          placeholder="Enter label"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
        />
      </div>
      <button type="submit">Add Activity</button>
    </form>
  );
};

export default AddActivityForm;
