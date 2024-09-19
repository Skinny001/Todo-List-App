import { useState } from 'react';
import { useDispatch } from 'react-redux'; 
import { addTodo } from './todoSlice';

const  AddTodo = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      dispatch(addTodo({
        id: Date.now(),
        title,
        description,
        completed: false,
      }));
      setTitle('');
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
      <label className="font-bold">New Todo Task</label>
      <input
        type="text"
        placeholder="Enter task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border rounded px-2 py-1 outline-green-500"
      />
      <textarea
        placeholder="Enter task description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border rounded px-2 py-1 outline-green-500"
      />
      <button type="submit" className="bg-[#3c096c]  hover:bg-[#5a189a]  text-white px-4 py-2 rounded font-normal text-lg">
        Add Task
      </button>
    </form>
  ); 
}

export default AddTodo;
