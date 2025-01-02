import React from "react";

const CVPreview = ({ generalInfo, education, workExperience }) => {
  return (
    <div className="cv-preview">
      <h2>Preview</h2>
      <div className="cv-section">
        <h4>General Information</h4>
        <p>Name: {generalInfo.name || "N/A"}</p>
        <p>Email: {generalInfo.email || "N/A"}</p>
        <p>Phone: {generalInfo.phone || "N/A"}</p>
      </div>
      <div className="cv-section">
        <h4>Education</h4>
        <p>School: {education.schoolName || "N/A"}</p>
        <p>Title of Study: {education.studyTitle || "N/A"}</p>
        <p>Study Dates: {education.studyDate || "N/A"}</p>
      </div>
      <div className="cv-section">
        <h4>Work Experience</h4>
        <p>Company: {workExperience.companyName || "N/A"}</p>
        <p>Position: {workExperience.positionTitle || "N/A"}</p>
        <p>Responsibilities: {workExperience.responsibilities || "N/A"}</p>
        <p>
          Work Dates:{" "}
          {workExperience.startDate && workExperience.endDate
            ? `${workExperience.startDate} - ${workExperience.endDate}`
            : "N/A"}
        </p>
        <p>Location: {`${workExperience.city || "N/A"}, ${workExperience.country || "N/A"}`}</p>
      </div>
    </div>
  );
};

export default CVPreview;
