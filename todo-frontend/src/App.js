import { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { getTodos, addTodo, updateTodo, deleteTodo } from "./api/todoApi";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState(null);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const loadTodos = async () => {
    const res = await getTodos(filter);
    setTodos(res.data);
  };

  useEffect(() => {
    loadTodos();
  }, [filter]);

  return (
    <div className="app-container">
      <div className="app-header">
        <h1>Todo App</h1>

        <button
          className="theme-toggle"
          onClick={() =>
            setTheme(theme === "light" ? "dark" : "light")
          }
        >
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>
      </div>

      <TodoForm
        onAdd={async (todo) => {
          await addTodo(todo);
          loadTodos();
        }}
      />

      <div className="filters">
        <button
          className={filter === null ? "active" : ""}
          onClick={() => setFilter(null)}
        >
          All
        </button>

        <button
          className={filter === true ? "active" : ""}
          onClick={() => setFilter(true)}
        >
          Completed
        </button>

        <button
          className={filter === false ? "active" : ""}
          onClick={() => setFilter(false)}
        >
          Pending
        </button>
      </div>

      <TodoList
        todos={todos}
        onUpdate={async (id, todo) => {
          await updateTodo(id, todo);
          loadTodos();
        }}
        onDelete={async (id) => {
          await deleteTodo(id);
          loadTodos();
        }}
      />
    </div>
  );
}

export default App;
