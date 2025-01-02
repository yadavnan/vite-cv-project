import React, { useState, useEffect } from "react";

const GeneralInfo = ({ updateGeneralInfo, defaultGeneralInfo }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // Populate the fields with existing data when switching to edit mode
  useEffect(() => {
    if (defaultGeneralInfo) {
      setName(defaultGeneralInfo.name || "");
      setEmail(defaultGeneralInfo.email || "");
      setPhone(defaultGeneralInfo.phone || "");
    }
  }, [defaultGeneralInfo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateGeneralInfo({ name, email, phone });
  };

  return (
    <div className="form-section">
      <h2>General Information</h2>
      <form onSubmit={handleSubmit}>
  <div>
    <label htmlFor="name">Name</label>
    <input
      id="name"
      type="text"
      placeholder="Name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      required
    />
  </div>

  <div>
    <label htmlFor="email">Email</label>
    <input
      id="email"
      type="email"
      placeholder="Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
    />
  </div>

  <div>
    <label htmlFor="phone">Phone</label>
    <input
      id="phone"
      type="tel"
      placeholder="Phone"
      value={phone}
      onChange={(e) => setPhone(e.target.value)}
      pattern="^[0-9]{10}$" // Optional: Regex for phone number validation
      required
    />
  </div>

  <button type="submit">Save</button>
</form>

    </div>
  );
};


export default GeneralInfo;


