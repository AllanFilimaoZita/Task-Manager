import { useEffect } from "react";
import { getTasks } from "./services/taskService";

function App() {

  useEffect(() => {

    async function loadTasks() {
      
      const tasks = await getTasks();

      console.log(tasks)

    }
    
    loadTasks()
  }, [])

  return (

    <div>

      <h1 className="text-4xl font-bold">
        Task Manager
      </h1>
      
    </div>

  )

}

export default App
