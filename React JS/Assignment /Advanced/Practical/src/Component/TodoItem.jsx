import React from "react";
import { useRecoilState } from "recoil";
import { todoListState } from "./State Management/Recoil/todoState";

function TodoItem({ todo }) {
  const [todos, setTodos] = useRecoilState(todoListState);

  const toggleComplete = () => {
    const updatedTodos = todos.map((item) =>
      item.id === todo.id
        ? { ...item, completed: !item.completed }
        : item
    );

    setTodos(updatedTodos);
  };

  const deleteTodo = () => {
    const updatedTodos = todos.filter((item) => item.id !== todo.id);
    setTodos(updatedTodos);
  };

  return (
    <div style={{ marginBottom: "10px" }}>
      <span
        onClick={toggleComplete}
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          cursor: "pointer",
          marginRight: "10px",
        }}
      >
        {todo.text}
      </span>
      <button onClick={deleteTodo}>Delete</button>
    </div>
  );
}

export default TodoItem;
