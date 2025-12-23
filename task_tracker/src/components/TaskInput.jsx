import { useState } from 'react';
import { useTasks } from '../store/taskContext';

export default function TaskInput() {
  const [text, setText] = useState('');
  const { addTask } = useTasks();

  const handleAdd = () => {
    addTask(text);
    setText('');
  };

  return (
    <div className="flex gap-2 mb-4">
      <input 
        className="border p-2 flex-1 rounded dark:bg-gray-800 dark:text-white"
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="New task..."
      />
      <button onClick={handleAdd} className="bg-blue-600 text-white px-4 py-2 rounded">Add Task</button>
    </div>
  );
}