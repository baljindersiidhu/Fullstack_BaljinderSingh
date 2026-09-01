import TaskItem from "./TaskItem";

function TaskList({ tasks, dispatch }) {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          dispatch={dispatch}
        />
      ))}
    </ul>
  );
}

export default TaskList;