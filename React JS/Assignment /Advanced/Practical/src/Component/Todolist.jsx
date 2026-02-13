import React from 'react'
import { useRecoilValue } from 'recoil';
import { todoListState } from './State Management/Recoil/todoState';
import TodoItem from './TodoItem';

export default function Todolist() {
    const todos = useRecoilValue(todoListState);
  return (
    <div>
        {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  )
}
