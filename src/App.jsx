import AddTodo from "./features/todos/AddTodo";
import TodoList from "./features/todos/TodoList";
import { useDispatch, useSelector } from "react-redux";
import { resetTodo } from "./features/todos/todoSlice";

function App() {

  const dispatch = useDispatch()

  const todos = useSelector(state => state.todoApp.todos);
  const todoCounts = todos ? todos.filter(todo => !todo.completed).length : 0;

  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-gray-500">
      <header className="w-full text-center py-4 bg-[#03071e] text-white text-2xl flex justify-around">
        Todo List Application
        <div className="text-gray-500">Tasks Left: <span id="tasks-left">{todoCounts}</span></div>
      </header>
      <main className="flex-grow w-full max-w-4xl bg-gray-100 shadow-lg rounded p-4">
        <AddTodo />
        <TodoList />
      </main>
      <footer className="w-full text-center text-gray-500 py-2 px-4 bg-gray-200 text-xs flex items-center justify-between">
       
        <div className="text-[#b22222]">Created By: <a href="https://x.com/0xSkinny001">0xSkinny001</a></div>
        <button className="bg-red-500 text-white px-4 py-2 rounded text-xs" onClick={() => dispatch(resetTodo())}>
          Reset
        </button>
      </footer>
    </div>

  );
}

export default App;