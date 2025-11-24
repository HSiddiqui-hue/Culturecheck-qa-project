// frontend/src/components/StoryForm.jsx
import { useState } from "react";

function StoryForm({ onSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !description.trim()) {
      setError("Title and description are required.");
      return;
    }

    onSubmit({
      title: title.trim(),
      description: description.trim(),
    });

    setTitle("");
    setDescription("");
    setError("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a Story</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <div style={{ marginBottom: "8px" }}>
        <label>
          Title <br />
          <input
            type="text"
            placeholder="Story title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{ width: "100%", padding: "4px" }}
          />
        </label>
      </div>

      <div style={{ marginBottom: "8px" }}>
        <label>
          Description <br />
          <textarea
            placeholder="Write your story here..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            style={{ width: "100%", padding: "4px" }}
          />
        </label>
      </div>

      <button type="submit">Save Story</button>
    </form>
  );
}

export default StoryForm;