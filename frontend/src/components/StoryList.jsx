// frontend/src/components/StoryList.jsx

function StoryList({ stories, onDelete }) {
  if (!stories || stories.length === 0) {
    return <p>No stories yet. Add one above.</p>;
  }

  return (
    <div>
      <h2>Stories</h2>
      {stories.map((story) => (
        <div
          key={story.id}
          style={{
            border: "1px solid #ccc",
            padding: "8px",
            marginBottom: "8px",
            borderRadius: "4px",
          }}
        >
          <h3>{story.title}</h3>
          <p>{story.description}</p>

          <button
            onClick={() => onDelete(story.id)}
            style={{ marginTop: "4px" }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default StoryList;