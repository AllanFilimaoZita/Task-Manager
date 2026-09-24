

function TaskList({ tasks }) {
  return (

    <div className="mt-6 space-y-4">

        { tasks.map((task) => (

            <div 
                key={task.id}
                className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
            >

                <div className="flex items-start justify-between gap-4">

                    <div>

                        <h2 className="text-lg font-semibold text-gray-900">{task.title}</h2>

                        <p className="mt-2 text-sm text-gray-600">{task.description}</p>
                    </div>

                    <span className="rounded-full bg-yellow-100 px-3 text-sm font-medium text-yellow-700">{task.status}</span>

                </div>

                <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4">

                    <span className="tex-sm text-gray-500">Prioridades: {task.priority}</span>

                    <span className="text-sm text-gray-500">{task.due_date || "Sem Prazo"}</span>

                </div>

            </div>

        ))}

    </div>

  )
  
}

export default TaskList
