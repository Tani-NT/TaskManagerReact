import AcceptTask from "./AcceptTask"
import CompleteTask from "./CompleteTask"
import FailedTask from "./FailedTask"
import NewTask from "./NewTask"

const TaskList = ({data}) => {
  return (
    <div id="tasklist" className="h-[55%] bg-zinc-800 px-[2vw] overflow-x-auto flex justify-start items-center flex-nowrap gap-5 w-full mt-[2vw] rounded-md">
      {data.tasks.map((elem, idx) => {
        if(elem.acceptTask){
          return <AcceptTask key={idx} data={elem}/>
        }
        if(elem.newTask){
          return <NewTask key={idx} data={elem}/>
        }
        if(elem.failTask){
          return <FailedTask key={idx} data={elem}/>
        }
        if(elem.completeTask){
          return <CompleteTask key={idx} data={elem}/>
        }
      })}
    </div> 
  )
}

export default TaskList
