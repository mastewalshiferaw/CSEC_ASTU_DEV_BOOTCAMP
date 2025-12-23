import { useTasks } from '../store/taskContext';

export default function Stats() {
  const { tasks } = useTasks();
  const completed = tasks.filter(t => t.completed).length;

  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded dark:text-white">
      <p>Total Tasks: {tasks.length}</p>
      <p>Completed: {completed}</p>
      <p>Remaining: {tasks.length - completed}</p>
    </div>
  );
}