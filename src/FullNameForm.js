import React, { useState } from "react";
import "./FullNameForm.css";

// import React, { useState } from 'react';

// const FullNameForm = () => {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [fullName, setFullName] = useState("");
//   const [error, setError] = useState("");

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     if (name === "firstName") {
//       setFirstName(value);
//     } else if (name === "lastName") {
//       setLastName(value);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Concatenate names while handling special characters and numbers
//     const sanitizedFirstName = firstName.replace(/[^a-zA-Z]/g, ""); // Allow only alphabets
//     const sanitizedLastName = lastName.replace(/[^a-zA-Z]/g, ""); // Allow only alphabets
//     const fullNameResult = `${sanitizedFirstName} ${sanitizedLastName}`;
//     setFullName(fullNameResult);
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="firstName">First Name:</label>
//         <input
//           type="text"
//           id="firstName"
//           name="firstName"
//           value={firstName}
//           onChange={handleInputChange}
//           required
//         />
//         <br />
//         <br />
//         <label htmlFor="lastName">Last Name:</label>
//         <input
//           type="text"
//           id="lastName"
//           name="lastName"
//           value={lastName}
//           onChange={handleInputChange}
//           required
//         />
//         <br />
//         <br />
//         <button type="submit">Submit</button>
//       </form>

//       {fullName && <div>Full Name: {fullName}</div>}
//     </div>
//   );
// };

// export default FullNameForm;

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
      const sanitizedFirstName = firstName.replace(/[^a-zA-Z]/g, ""); // Allow only alphabets
      const sanitizedLastName = lastName.replace(/[^a-zA-Z]/g, ""); // Allow only alphabets
      //     const fullNameResult = `${sanitizedFirstName} ${sanitizedLastName}`;
      //     setFullName(fullNameResult);
      const concatenatedName = `${sanitizedFirstName} ${sanitizedLastName}`;
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
