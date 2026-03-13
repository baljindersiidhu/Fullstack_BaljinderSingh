import React, { useState } from "react";

function UserForm() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>

      <h2>User Information Form</h2>

      <form onSubmit={handleSubmit}>

      <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br /><br />
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br /><br />
        <label>Age:</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <br /><br />
        <button type="submit">Submit</button>
      </form>
   {submitted && (
        <div>
          <h3>Submitted Information</h3>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
          <p>Age: {age}</p>
        </div>
      )}

    </div>
  );
}

export default UserForm;