import React, { useState } from "react";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import WorkExperience from "./components/WorkExperience";
import CVPreview from "./components/CVPreview";
import "./styles/app.css";

const App = () => {
  const [generalInfo, setGeneralInfo] = useState({});
  const [education, setEducation] = useState({});
  const [workExperience, setWorkExperience] = useState({});
  const [isEditing, setIsEditing] = useState(true); // To toggle between form and preview

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSubmit = () => {
    setIsEditing(false); // Switch to preview mode
  };

  return (
    <div className="app-container">
      <h1>CV Generator</h1>
      <div className="form-preview-container">
        {isEditing ? (
          <div className="form-container">
            <GeneralInfo
              updateGeneralInfo={setGeneralInfo}
              defaultGeneralInfo={generalInfo} // Pass data for editing
            />
            <Education
              updateEducation={setEducation}
              defaultEducation={education} // Pass data for editing
            />
            <WorkExperience
              updateWorkExperience={setWorkExperience}
              defaultWorkExperience={workExperience} // Pass data for editing
            />
            <button onClick={handleSubmit} className="submit-button">
              Submit
            </button>
          </div>
        ) : (
          <div className="preview-container">
            <CVPreview
              generalInfo={generalInfo}
              education={education}
              workExperience={workExperience}
            />
            <button onClick={handleEdit} className="edit-button">
              Edit
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;

