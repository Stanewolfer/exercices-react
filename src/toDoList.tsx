import React, { useState } from "react";
import "./toDoList.css";

interface Todo {
  id: number;
  task: string;
}

const ToDoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      const newTodo: Todo = {
        id: Date.now(),
        task: inputValue.trim()
      };
      setTodos([...todos, newTodo]);
      setInputValue("");
    }
  };

  const handleDeleteTodo = (id: number) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
    setCompletedTodos([...completedTodos, todos.find(todo => todo.id === id)!]);
  };

  return (
    <div className="container">
      <h1>To-Do List</h1>
      <input
        type="text"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
      <button onClick={handleAddTodo}>+</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
             <button className="clear" onClick={() => handleDeleteTodo(todo.id)}></button>
            {todo.task}
          </li>
        ))}
      </ul>
      <div className="separator"></div>
      <h1>Completed</h1>
      <ul className="completed-todos">
        {completedTodos.map(todo => (
          <li key={todo.id}>
            <button className="clear">✓</button>
            <p>{todo.task}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
