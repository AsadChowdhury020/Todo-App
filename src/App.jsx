import { useState } from "react";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (!input) return;
    setTodos([...todos, input]);
    setInput("");
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      
      <div className="bg-white p-6 rounded-xl shadow w-full max-w-md">
        
        <h1 className="text-2xl font-bold text-center mb-4">
          Todo App
        </h1>

        <div className="flex gap-2 mb-4">
          <input
            className="flex-1 border p-2 rounded"
            type="text"
            placeholder="Enter task"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            onClick={addTodo}
            className="bg-blue-500 text-white px-4 rounded"
          >
            Add
          </button>
        </div>

        <TodoList todos={todos} deleteTodo={deleteTodo} />

      </div>
    </div>
  );
}

export default App;