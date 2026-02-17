import { useState } from "react";
import "./TodoForm.css";

function TodoForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    onAdd({ title, description, completed: false });
    setTitle("");
    setDescription("");
  };

  return (
    <form className="todo-form" onSubmit={submit}>
      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button type="submit">➕ Add</button>
    </form>
  );
}

export default TodoForm;
