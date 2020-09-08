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
          <div key={index}>{todo.text}</div>
        ))}
      </section>
    </>
  );
}

export default App;
