import React, { useState, useEffect } from "react";

const Education = ({ updateEducation, defaultEducation }) => {
  const [schoolName, setSchoolName] = useState("");
  const [studyTitle, setStudyTitle] = useState("");
  const [studyDate, setStudyDate] = useState("");

  useEffect(() => {
    if (defaultEducation) {
      setSchoolName(defaultEducation.schoolName || "");
      setStudyTitle(defaultEducation.studyTitle || "");
      setStudyDate(defaultEducation.studyDate || "");
    }
  }, [defaultEducation]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateEducation({ schoolName, studyTitle, studyDate });
  };

  return (
    <div className="form-section">
      <h2>Education</h2>
     ` <form onSubmit={handleSubmit}>
  <div>
    <label htmlFor="schoolName">School/University Name</label>
    <input
      id="schoolName"
      type="text"
      placeholder="School Name"
      value={schoolName}
      onChange={(e) => setSchoolName(e.target.value)}
      required
    />
  </div>

  <div>
    <label htmlFor="studyTitle">Title of Study</label>
    <input
      id="studyTitle"
      type="text"
      placeholder="Title of Study"
      value={studyTitle}
      onChange={(e) => setStudyTitle(e.target.value)}
      required
    />
  </div>

  <div>
    <label htmlFor="studyDate">Date</label>
    <input
      id="studyDate"
      type="date"
      value={studyDate}
      onChange={(e) => setStudyDate(e.target.value)}
      required
    />
  </div>
 

  <button type="submit">Save</button>
</form>`

    </div>
  );
};

export default Education;



