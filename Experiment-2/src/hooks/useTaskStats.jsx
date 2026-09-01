import { useMemo } from "react";

export function useTaskStats(tasks) {
  return useMemo(() => {
    console.log("Calculating task statistics...");

    const total = tasks.length;

    const completed = tasks.filter(
      (task) => task.completed
    ).length;

    const remaining = total - completed;

    return {
      total,
      completed,
      remaining,
    };
  }, [tasks]);
}