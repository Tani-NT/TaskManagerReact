import { useContext } from "react"
import { AuthContext } from "../../context/AuthProvider"

const AllTask = () => {

  const [userData,setUserData] = useContext(AuthContext)
  return (
    <>
        <div className="bg-[#1c1c1c] mt-[1vw] p-[2vw] rounded">
            <div className="bg-red-400 mb-[1vw] rounded text-[1.5vw] py-[1vw] px-[1.5vw] flex">
                <h2 className="w-1/5 text-[1.4vw] font-semibold">Employee</h2>
                <h3 className="w-1/5 text-[1.4vw] font-semibold">New Task</h3>
                <h5 className="w-1/5 text-[1.4vw] font-semibold">Complete Task</h5>
                <h5 className="w-1/5 text-[1.4vw] font-semibold">Active Task</h5>
                <h5 className="w-1/5 text-[1.4vw] font-semibold">Failed Task</h5>
            </div>
            <div>
                {userData.map(function(elem, idx){
                    return <div key={idx} className="bg-zinc-700 mb-[1vw] rounded text-[1.5vw] px-[2vw] py-[1vw] flex border-[1px] border-white">
                    <h2 className="w-1/5 text-[1.4vw] font-medium">{elem.name}</h2>
                    <h3 className="w-1/5 text-[1.4vw] font-medium">{elem.taskCounts.newTask}</h3>
                    <h5 className="w-1/5 text-[1.4vw] font-medium">{elem.taskCounts.completeTask}</h5>
                    <h5 className="w-1/5 text-[1.4vw] font-medium">{elem.taskCounts.active}</h5>
                    <h5 className="w-1/5 text-[1.4vw] font-medium">{elem.taskCounts.failTask}</h5>
                </div>
                })} 
            </div>
        </div>
    </>
  )
}

export default AllTask
