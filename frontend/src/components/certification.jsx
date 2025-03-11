import React from 'react';

const Certificate = ({ userName, courseName }) => {
  return (
    <div>
      <h1>Certificate of Completion</h1>
      <p>This certifies that <strong>{userName}</strong> has successfully completed the course <strong>{courseName}</strong>.</p>
    </div>
  );
};

export default Certificate;
