import React, { useState } from "react";
import "./App.css";

type FormElem = React.FormEvent<HTMLFormElement>;

interface Todo {
  text: string;
  isComplete: boolean;
}

function App(): JSX.Element {
  const [value, setValue] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleSubmit = (e: FormElem): void => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };

  const addTodo = (text: string): void => {
    const newTodo: Todo[] = [...todos, { text, isComplete: false }];
    setTodos(newTodo);
  };

  const completeTodo = (index: number): void => {
    const newTodos: Todo[] = [...todos];
    newTodos[index].isComplete = !newTodos[index].isComplete;
    setTodos(newTodos);
  };

  const removeTodo = (index: number): void => {
    const currentTodos: Todo[] = [...todos];
    // const updatedTodos: Todo[] = currentTodos.filter((todo: Todo, todoIndex: number) => todoIndex !== index);
    currentTodos.splice(index, 1);
    setTodos(currentTodos);
  }

  return (
    <>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <button type="submit">Add a Todo</button>
      </form>
      <section>
        {todos.map((todo: Todo, index: number) => (
          <div key={index}>
            <div style={{ textDecoration: todo.isComplete ? "line-through" : ''}}>{todo.text}</div>
            <button type="button" onClick={(): void => completeTodo(index)}>
              {todo.isComplete ? "Mark todo incomplete" : "Mark todo complete"}
            </button>
            <button type="button" onClick={(): void => removeTodo(index)}>Remove todo</button>
          </div>
        ))}
      </section>
    </>
  );
}

export default App;
