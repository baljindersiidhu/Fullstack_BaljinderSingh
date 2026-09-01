import React from "react";

const TaskItem = React.memo(function TaskItem({
  task,
  dispatch,
}) {
  console.log("TaskItem rendered:", task.id);

  return (
    <li>
      <span
    onClick={() =>
         dispatch({
         type: "TOGGLE_TASK",
     payload: task.id,
          })
        }
    style={{
textDecoration: task.completed
            ? "line-through"
        : "none",
        }}
      >
    {task.completed ? "☑" : "☐"} {task.title}
      </span>

      <button
        onClick={() =>
        dispatch({
            type: "DELETE_TASK",
        payload: task.id,
          })
        }
      >
        Delete
      </button>
    </li>
  );
});

export default TaskItem;