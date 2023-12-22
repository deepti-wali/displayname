import React, { useState } from "react";
import "./FullNameForm.css";

// const FullNameForm = () => {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [fullName, setFullName] = useState("");

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

//       {/* {fullName && <p>Full Name: {fullName}</p>} */}
//       <p>Full Name: {fullName}</p>
//     </div>
//   );
// };

// export default FullNameForm;
function FullNameForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  const handleConcatenate = (e) => {
    e.preventDefault();
    const sanitizedFirstName = firstName.replace(/[^A-Za-z]/gi, "");
    const sanitizedLastName = lastName.replace(/[^A-Za-z]/gi, "");
    const concatenatedName = `${sanitizedFirstName} ${sanitizedLastName}`;
    setFullName(concatenatedName);
  };

  return (
    <div>
      <form onSubmit={handleConcatenate}>
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            required
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            required
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">submit</button>
      </form>
      <p>Full Name: {fullName}</p>
    </div>
  );
}

export default FullNameForm;
