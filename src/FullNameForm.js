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

    // Regular expression to check for special characters or numbers
    const regex = /^[a-zA-Z\s]+$/;

    if (!regex.test(firstName) || !regex.test(lastName)) {
      setError("Please use only letters in the first and last name fields.");
      setFullName("");
    } else {
      const concatenatedName = `${firstName} ${lastName}`;
      setFullName(concatenatedName);
      setError("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            First Name:
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Last Name:
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <button type="submit">Submit</button>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {fullName && (
          <div>
            <p>Full Name: {fullName}</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default FullNameForm;
