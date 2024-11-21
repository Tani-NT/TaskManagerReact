import AllTask from "../Others/AllTask"
import CreateTask from "../Others/CreateTask"
import Header from "../Others/Header"

const AdminDashboard = (props) => {
  return (
    <div className="w-full h-full p-[2vw]">
        <Header changeUser={props.changeUser}/>
        <CreateTask/>
        <AllTask/>
    </div>
  )
}

export default AdminDashboard
