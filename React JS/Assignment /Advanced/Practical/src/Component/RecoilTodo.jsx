import React from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Recoil Todo App</h2>
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default App;
