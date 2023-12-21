import React, { useState } from "react";
import "./FullNameForm.css";

const FullNameForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  const handleFirstNameChange = (e) => {
    const value = e.target.value;

    if (/^[a-zA-Z]+$/.test(value) || value === "") {
      setFirstName(value);
    }
  };

  const handleLastNameChange = (e) => {
    const value = e.target.value;

    if (/^[a-zA-Z]+$/.test(value) || value === "") {
      setLastName(value);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const resultFullName = `${firstName} ${lastName}`;
    setFullName(resultFullName);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={handleFirstNameChange}
            required
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={handleLastNameChange}
            required
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>

      {fullName && (
        <div>
          <p>Full Name:{fullName}</p>
        </div>
      )}
    </div>
  );
};

export default FullNameForm;
