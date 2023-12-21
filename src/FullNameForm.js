import React, { useState } from "react";
import "./FullNameForm.css";

const FullNameForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "firstName") {
      setFirstName(value);
    } else if (name === "lastName") {
      setLastName(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Concatenate names while handling special characters and numbers
    const sanitizedFirstName = firstName.replace(/[^a-zA-Z]/g, ""); // Allow only alphabets
    const sanitizedLastName = lastName.replace(/[^a-zA-Z]/g, ""); // Allow only alphabets
    const fullNameResult = `${sanitizedFirstName} ${sanitizedLastName}`;
    setFullName(fullNameResult);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={firstName}
          onChange={handleInputChange}
          required
        />
        <br />
        <br />
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={lastName}
          onChange={handleInputChange}
          required
        />
        <br />
        <br />
        <button type="submit">Submit</button>
        {fullName && <div>Full Name: {fullName}</div>}
      </form>
    </div>
  );
};

export default FullNameForm;
