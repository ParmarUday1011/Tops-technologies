import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { todoListState } from "./todoState";


function TodoInput() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useRecoilState(todoListState);

  const addTodo = () => {
    if (text.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setText("");
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        placeholder="Enter task..."
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>
    </div>
  );
}

export default TodoInput;
