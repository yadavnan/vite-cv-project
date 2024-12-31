import React, { useState, useEffect } from "react";

const WorkExperience = ({ updateWorkExperience, defaultWorkExperience }) => {
  const [companyName, setCompanyName] = useState("");
  const [positionTitle, setPositionTitle] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const [startDate, setStartDate] = useState(""); // New state for start date
  const [endDate, setEndDate] = useState(""); // New state for end date
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");

  useEffect(() => {
    if (defaultWorkExperience) {
      setCompanyName(defaultWorkExperience.companyName || "");
      setPositionTitle(defaultWorkExperience.positionTitle || "");
      setResponsibilities(defaultWorkExperience.responsibilities || "");
      setStartDate(defaultWorkExperience.startDate || ""); // Populate start date
      setEndDate(defaultWorkExperience.endDate || ""); // Populate end date
      setCountry(defaultWorkExperience.country || "");
      setCity(defaultWorkExperience.city || "");
    }
  }, [defaultWorkExperience]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateWorkExperience({
      companyName,
      positionTitle,
      responsibilities,
      startDate, // Include start date in submission
      endDate, // Include end date in submission
      country,
      city,
    });
  };

  return (
    <div className="form-section">
      <h2>Work Experience</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="companyName">Company Name</label>
          <input
            id="companyName"
            type="text"
            placeholder="Company Name"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="positionTitle">Position Title</label>
          <input
            id="positionTitle"
            type="text"
            placeholder="Position Title"
            value={positionTitle}
            onChange={(e) => setPositionTitle(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="responsibilities">Main Responsibilities</label>
          <textarea
            id="responsibilities"
            placeholder="Main Responsibilities"
            value={responsibilities}
            onChange={(e) => setResponsibilities(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="startDate">Start Date</label>
          <input
            id="startDate"
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
            min="2000-01-01"
            max="2024-12-31"
          />
        </div>

        <div>
          <label htmlFor="endDate">End Date</label>
          <input
            id="endDate"
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
            min="2000-01-01"
            max="2024-12-31"
          />
        </div>

        <div>
          <label htmlFor="country">Country</label>
          <input
            id="country"
            type="text"
            placeholder="Country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="city">City</label>
          <input
            id="city"
            type="text"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </div>

        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default WorkExperience;
