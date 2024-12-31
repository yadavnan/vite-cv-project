import React from "react";

const CVPreview = ({ generalInfo, education, workExperience }) => {
  return (
    <div className="cv-preview">
      <h2>Preview</h2>
      <div className="cv-section">
        <h4>General Information</h4>
        <p>Name: {generalInfo.name}</p>
        <p>Email: {generalInfo.email}</p>
        <p>Phone: {generalInfo.phone}</p>
      </div>
      <div className="cv-section">
        <h4>Education</h4>
        <p>School: {education.schoolName}</p>
        <p>Title of Study: {education.studyTitle}</p>
        <p>Study Dates: {education.studyDate}</p>
      </div>
      <div className="cv-section">
        <h4>Work Experience</h4>
        <p>Company: {workExperience.companyName}</p>
        <p>Position: {workExperience.positionTitle}</p>
        <p>Responsibilities: {workExperience.responsibilities}</p>
        <p>Work Dates: {workExperience.workDates}</p>
      </div>
    </div>
  );
};

export default CVPreview;


