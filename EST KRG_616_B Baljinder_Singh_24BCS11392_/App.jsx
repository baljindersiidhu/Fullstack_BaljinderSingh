import { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title: title,
          body: body,
          userId: 1
        })
      }
    );

    if (response.ok) {
      setMessage("Data submitted successfully!");
      setTitle("");
      setBody("");
    }
  };

  return (
    <div className="container">
      <div className="form-box">
        <h2>Create Post</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            placeholder="Enter Body"
            rows="5"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />

          <button type="submit">Submit</button>
        </form>

        <p className="message">{message}</p>
      </div>
    </div>
  );
}

export default App;