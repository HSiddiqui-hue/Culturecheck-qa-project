// frontend/src/App.jsx
import { useState } from "react";
import StoryForm from "./components/StoryForm";
import StoryList from "./components/StoryList";

function App() {
  const [stories, setStories] = useState([]);

  const addStory = (newStory) => {
    setStories((prev) => [
      ...prev,
      { id: Date.now(), ...newStory },
    ]);
  };

  const deleteStory = (id) => {
    setStories((prev) => prev.filter((story) => story.id !== id));
  };

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "16px" }}>
      <h1>CultureCheck – Story Board</h1>
      <p>
        Simple app for submitting cultural stories – used to practise software
        testing, bug reporting, and QA workflows.
      </p>

      <StoryForm onSubmit={addStory} />
      <hr style={{ margin: "16px 0" }} />
      <StoryList stories={stories} onDelete={deleteStory} />
    </div>
  );
}

export default App;