import { useEffect, useState } from "react";
import { createTask } from "../services/taskService"

function TaskForm({ onTaskCreated, editingTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("pending");
  const [priority, setPriority] = useState("medium");
  const [date, setDate] = useState("");

  useEffect(() => {

    if (editingTask) {

      setTitle(editingTask.title);
      setDescription(editingTask.description);
      setStatus(editingTask.status);
      setPriority(editingTask.priority);
      setDate(editingTask.due_date);

    }
    
  }, [editingTask])

  async function handleSubmit(e) {

    e.preventDefault();

    const task = {
        title: title,
        description: description,
        status: status,
        priority: priority,
        due_date: date || null,
    };

    try {
        
        const data = await createTask(task);

        console.log("Tarefa criada: ", data);

        onTaskCreated(data)

        setTitle("");
        setDescription("");
        setStatus("Pending");
        setPriority("medium");
        setDate("")

    } catch (error) {
        console.error("Erro ao criar tarefa:", error);
    }
  }

  return (

    <div className="min-h-screen bg-gray-950 px-4 py-10 sm:py-16">
      
      <form
        onSubmit={handleSubmit}
        className="mx-auto w-full max-w-xl rounded-2xl bg-gray-900/60 p-6 ring-1 ring-white/10 sm:p-8"
      >
        <div className="mb-8 border-b border-white/10 pb-8">

          <h2 className="text-3xl font-semibold tracking-tighter text-balance text-white">
            Criar nova tarefa
          </h2>

          <p className="mt-2 text-base/7 text-gray-400">
            Preencha os campos abaixo para adicionar uma nova tarefa.
          </p>

        </div>

        <div className="space-y-6">

          <div>

            <label
              htmlFor="title"
              className="block text-sm/6 font-medium text-white"
            >
              Título
            </label>

            <input
              type="text"
              name="title"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="ex. Estudar JavaScript..."
              className="mt-2 block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 transition placeholder:text-gray-500 hover:outline-white/20 focus:outline-2 focus:-outline-offset-2 focus:outline-sky-400 sm:text-sm/6"
            />

          </div>

          <div>

            <label
              htmlFor="description"
              className="block text-sm/6 font-medium text-white"
            >
              Descrição
            </label>

            <textarea
              name="description"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="4"
              placeholder="ex. Aprender uma nova tecnologia..."
              className="mt-2 block w-full resize-none rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 transition placeholder:text-gray-500 hover:outline-white/20 focus:outline-2 focus:-outline-offset-2 focus:outline-sky-400 sm:text-sm/6"
            />

          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">

            <div>

              <label
                htmlFor="status"
                className="block text-sm/6 font-medium text-white"
              >
                Estado
              </label>

              <select
                name="status"
                id="status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="mt-2 block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 transition scheme-dark hover:outline-white/20 focus:outline-2 focus:-outline-offset-2 focus:outline-sky-400 sm:text-sm/6"
              >
                <option value="" disabled>
                  Selecionar estado
                </option>
                <option value="pending">Pendente</option>
                <option value="in_progress">Em progresso</option>
                <option value="completed">Concluída</option>
              </select>

            </div>

            <div>

              <label
                htmlFor="priority"
                className="block text-sm/6 font-medium text-white"
              >
                Prioridade
              </label>

              <select
                name="priority"
                id="priority"
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                className="mt-2 block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 transition scheme-dark hover:outline-white/20 focus:outline-2 focus:-outline-offset-2 focus:outline-sky-400 sm:text-sm/6"
              >
                <option value="" disabled>
                  Selecionar prioridade
                </option>
                <option value="low">Baixa</option>
                <option value="medium">Média</option>
                <option value="high">Alta</option>
              </select>

            </div>

          </div>

          <div>

            <label
              htmlFor="due_date"
              className="block text-sm/6 font-medium text-white"
            >
              Data de vencimento
            </label>

            <input
              type="date"
              name="due_date"
              id="due_date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="mt-2 block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 transition scheme-dark hover:outline-white/20 focus:outline-2 focus:-outline-offset-2 focus:outline-sky-400 sm:text-sm/6"
            />

          </div>

          <div className="pt-2">

            <button
              type="submit"
              className="w-full rounded-full bg-sky-500 px-4 py-2 text-sm/6 font-semibold text-white transition hover:bg-sky-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
            >
              Criar tarefa
            </button>

          </div>

        </div>

      </form>

    </div>
    
  );
  
}

export default TaskForm;