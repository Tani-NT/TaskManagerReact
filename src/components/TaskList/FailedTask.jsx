const FailedTask = ({data}) => {
  return (
    <div className="h-[80%] flex-shrink-0 w-[180px] p-[1.8vw] bg-zinc-600 rounded-md">
        <div className="flex justify-between text-[1.1vw]">
            <h3 className="bg-yellow-500 px-[1vw] rounded-sm">{data.category}</h3>
            <h4>{data.date}</h4>
        </div>
        <h2 className="mt-[1vw] font-bold text-[2vw]">{data.taskTitle}</h2>
        <p className="text-[1.2vw] mt-[1vw]">{data.taskDescription}</p>
        <div className="flex justify-between mt-[2vw]">
            <button className="bg-red-600 w-full px-[1vw] py-[.5vw] rounded-sm text-[1vw]">Mark as Failed</button>
        </div>
    </div>
  )
}

export default FailedTask
