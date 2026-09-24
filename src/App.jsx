import { useEffect, useState } from "react";
import { getTasks } from "./services/taskService";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {

    async function loadTasks() {

      const data = await getTasks();

      console.log(data);

      setTasks(data);
    }

    loadTasks();
  }, []);

  return (

    <main className="min-h-screen bg-gray-950 px-4 py-10 text-white">

      <div className="mx-auto max-w-3xl">

        <header className="mb-8">

          <h1 className="text-3xl font-bold tracking-tight">
            Task Manager
          </h1>

          <p className="mt-2 text-gray-400">
            Organiza e acompanha as tuas tarefas.
          </p>
        </header>

        <TaskList tasks={tasks} />
      </div>
    </main>
  );
}

export default App;