import { useTasks } from '../store/taskContext';
import TaskItem from './TaskItem';

const TaskList = () => {
  const { tasks } = useTasks();

  if (tasks.length === 0) {
    return (
      <p className="text-center text-gray-500 mt-10 dark:text-gray-400">
        No tasks yet. Add one above!
      </p>
    );
  }

  return (
    <div className="mt-6">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};


export default TaskList;