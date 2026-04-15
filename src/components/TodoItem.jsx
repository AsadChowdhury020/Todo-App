function TodoItem({ todo, index, deleteTodo }) {
  return (
    <li className="flex justify-between items-center bg-gray-100 p-2 rounded">
      <span>{todo}</span>
      <button
        onClick={() => deleteTodo(index)}
        className="bg-red-500 text-white px-2 py-1 rounded"
      >
        Delete
      </button>
    </li>
  );
}

export default TodoItem;