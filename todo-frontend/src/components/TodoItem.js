import { useState } from "react";
import "./TodoItem.css";

function TodoItem({ todo, onDelete, onUpdate }) {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description || "");

  const saveEdit = () => {
    if (!title.trim()) return;

    onUpdate(todo.id, {
      ...todo,
      title,
      description,
    });

    setEditing(false);
  };

  const toggleCompleted = () => {
    onUpdate(todo.id, {
      ...todo,
      completed: !todo.completed,
    });
  };

  return (
    <div className={`todo-card ${todo.completed ? "completed" : ""}`}>
      {editing ? (
        <>
          <input
            className="todo-input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            className="todo-input"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <div className="todo-actions">
            <button onClick={saveEdit}>💾 Save</button>
            <button onClick={() => setEditing(false)}>❌ Cancel</button>
          </div>
        </>
      ) : (
        <>
          <div className="todo-text">
            <strong>{todo.title}</strong>
            {todo.description && <p>{todo.description}</p>}
            <small>{new Date(todo.createdAt).toLocaleString()}</small>
          </div>

          <div className="todo-actions">
            <button onClick={toggleCompleted}>
              {todo.completed ? "↩ Mark Pending" : "✔ Mark Completed"}
            </button>
            <button onClick={() => setEditing(true)}>✏️ Edit</button>
            <button onClick={() => onDelete(todo.id)}>🗑 Delete</button>
          </div>
        </>
      )}
    </div>
  );
}

export default TodoItem;
