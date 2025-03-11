import React, { useState } from 'react';

const CourseForm = () => {
  const [title, setTitle] = useState('');
  const [videoURL, setVideoURL] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ title, videoURL });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Course Title:</label>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      <label>Video URL:</label>
      <input type="url" value={videoURL} onChange={(e) => setVideoURL(e.target.value)} />
      <button type="submit">Save Course</button>
    </form>
  );
};

export default CourseForm;
