function TaskList({ tasks }) {
  return (
    <div className="space-y-4">
      {tasks.map((task) => {
        return (
          <div
            key={task.id}
            className="rounded-2xl border border-gray-800 bg-gray-900 p-6 shadow-lg"
          >

            <div className="flex items-start justify-between gap-4">

              <div>
                
                <h2 className="text-lg font-semibold text-white">
                  {task.title}
                </h2>

                <p className="mt-2 text-sm leading-6 text-gray-400">
                  {task.description}
                </p>

              </div>
            </div>

            <div className="mt-5 flex items-center justify-between border-t border-gray-800 pt-4">
              <span className="text-sm text-gray-400">
                Prioridade:
                  {task.priority}
                </span>

              <span className="text-sm text-gray-400">
                {task.due_date}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TaskList;