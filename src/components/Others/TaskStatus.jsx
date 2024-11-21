const TaskStatus = ({data}) => {
  return (
    <div className="flex justify-between gap-3 mt-[2vw]">
      <div className="w-[45%] px-[2vw] py-[1vw] rounded-md bg-zinc-500">
        <h2 className="text-[2.5vw] font-semibold">{data.taskCounts.newTask}</h2>
        <h3 className="text-[2.5vw] font-semibold">New Task</h3>
      </div>
      <div className="w-[45%] px-[2vw] py-[1vw] rounded-md bg-zinc-600">
        <h2 className="text-[2.5vw] font-semibold">{data.taskCounts.completeTask}</h2>
        <h3 className="text-[2.5vw] font-semibold">Completed Task</h3>
      </div>
      <div className="w-[45%] px-[2vw] py-[1vw] rounded-md bg-zinc-700">
        <h2 className="text-[2.5vw] font-semibold">{data.taskCounts.acceptTask}</h2>
        <h3 className="text-[2.5vw] font-semibold">Accepted Task</h3>
      </div>
      <div className="w-[45%] px-[2vw] py-[1vw] rounded-md bg-zinc-800">
        <h2 className="text-[2.5vw] font-semibold">{data.taskCounts.failTask}</h2>
        <h3 className="text-[2.5vw] font-semibold">Failed Task</h3>
      </div>
    </div>
  )
}

export default TaskStatus
