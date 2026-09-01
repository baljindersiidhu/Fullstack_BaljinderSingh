import { useTaskStats } from "../hooks/useTaskStats";

function TaskStats({ tasks }) {
  const { total, completed, remaining } = useTaskStats(tasks);

  return (
    <h2>
      MY TASKS ({remaining} remaining / {total} total)
    </h2>
  );
}

export default TaskStats;