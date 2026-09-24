import { useEffect, useState } from "react";
import { getTasks } from "./services/taskService";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    console.log("🔥 useEffect executou");

    async function loadTasks() {
      console.log("📡 Buscando tasks...");

      const data = await getTasks();

      console.log("📦 Tasks recebidas:", data);

      setTasks(data);
    }

    loadTasks();
  }, []);

  return (
    <div>
      <h1 className="text-4xl font-bold">Task Manager</h1>

      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
