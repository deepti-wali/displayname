import React, { useState } from "react";
import "./FullNameForm.css";

const FullNameForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const fullNameResult = `${firstName} ${lastName}`;
    setFullName(fullNameResult);
  };

  return (
    <div className="full-name-form">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div my="3px">
          <label htmlFor="lasttName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {fullName && (
        <div className="result">
          <h2>Full Name:</h2>
          <h3>{fullName}</h3>
        </div>
      )}
    </div>
  );
};
export default FullNameForm;
