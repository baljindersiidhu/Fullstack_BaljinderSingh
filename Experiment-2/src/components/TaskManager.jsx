import { useReducer } from "react";
import TaskStats from "./TaskStats";
import AddTaskForm from "./AddTaskForm";
import TaskList from "./TaskList";

const initialTasks = [
  {
    id: 1,
    title: "Finish DBMS assignment",
    completed: false,
  },
  {
    id: 2,
    title: "Revise React hooks",
    completed: false,
  },
  {
    id: 3,
    title: "Submit lab report",
    completed: true,
  },
];

function taskReducer(state, action) {
  switch (action.type) {
  

    case "ADD_TASK":
      return [
        ...state,
        {
          id: Date.now(),
          title: action.payload,
          completed: false,
        },
      ];

    case "TOGGLE_TASK":
      return state.map((task) =>
        task.id === action.payload
          ? {
              ...task,
              completed: !task.completed,
            }
          : task
      );

    case "DELETE_TASK":
      return state.filter(
        (task) => task.id !== action.payload
      );

    default:
      return state;
  }
}

function TaskManager() {
  const [tasks, dispatch] = useReducer(
    taskReducer,
    initialTasks
  );

  return (
    <section>
      <TaskStats tasks={tasks} />

      <AddTaskForm dispatch={dispatch} />

      <TaskList
        tasks={tasks}
        dispatch={dispatch}
      />
    </section>
  );
}

export default TaskManager;