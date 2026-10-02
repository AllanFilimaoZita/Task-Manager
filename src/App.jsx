import { useEffect, useState } from "react";
import { getTasks } from "./services/taskService";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {

    async function loadTasks() {

      try {
          
        const data = await getTasks();

        console.log(data);

        setTasks(data);

      } catch (error) {

        setError(error)
        console.log(error)
        
      } finally {

        setLoading(false);

      }
    }

    loadTasks();
  }, []);

  function handleTaskCreated(novaTask) {
    setTasks((prevTask) => [...prevTask, novaTask])
  }

  function handleEdit(task) {
    setEditingTask(task)

    console.log(task)
  }

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

        {
          loading
          ? "⏳ Carregando tarefas..."
          : error
          ? "❌ Não foi possível carregar as tarefas."
          : tasks.length === 0
          ? "📭 Nenhuma tarefa encontrada."
          : <TaskList tasks={tasks} onEdit={handleEdit} />
        }

        <TaskForm
          onTaskCreated={handleTaskCreated}
          editingTask={editingTask}
        />
        
      </div>
    </main>
  );
}

export default App;