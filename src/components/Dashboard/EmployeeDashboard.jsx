import Header from "../Others/Header"
import TaskStatus from "../Others/TaskStatus"
import TaskList from "../TaskList/TaskList"

const EmployeeDashboard = (props) => {
  return (
    <div className="p-[3vw] bg-[#1c1c1c] h-screen">
      <Header changeUser={props.changeUser} data= {props.data}/>
      <TaskStatus data= {props.data}/>
      <TaskList data= {props.data}/>
    </div>
  )
}

export default EmployeeDashboard
