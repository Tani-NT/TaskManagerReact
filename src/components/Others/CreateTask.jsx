import { useContext, useState } from "react"
import { AuthContext } from "../../context/AuthProvider"

const CreateTask = () => {

    const [userData,setUserData] = useContext(AuthContext)

    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [date, setDate] = useState('')
    const [assignTo, setAssignTo] = useState('')
    const [category, setCategory] = useState('')
    const [newTask, setNewTask] = useState({})

    const submitHandler = (e) => {
        e.preventDefault()
        setNewTask({taskTitle, taskDescription, date, category, active: false, fail: false, newTask: true, complete: false})

        userData.forEach(function(elem){
            if(assignTo == elem.name){
                elem.tasks.push(newTask)
                elem.taskCounts.newTask = elem.taskCounts.newTask + 1
                console.log(elem)
            }
        })
        setUserData(userData)
        console.log(userData)
        setTaskTitle('')
        setTaskDescription('')
        setDate('')
        setAssignTo('')
        setCategory('')
    }


  return (
    <div className="bg-[#1c1c1c] mt-[2vw] p-[2vw] rounded">
            <form onSubmit={(e) => submitHandler(e)} className="flex flex-wrap w-full items-start justify-between">
                <div className="w-1/2">
                    <div>
                        <h3 className="text-[1.5vw] text-gray-300 mb-0.5">Task Title</h3>
                        <input
                        value={taskTitle}
                        onChange={(e) => setTaskTitle(e.target.value)}
                        type="text" className="border-[1px] w-4/5 outline-none px-[.8vw] py-[.6vw] bg-transparent mb-[1.5vw] text-[1.5vw] border-gray-400 rounded-sm" placeholder="Make a UI Design" />
                    </div>
                    <div>
                        <h3 className="text-[1.5vw] text-gray-300 mb-0.5">Date</h3>
                        <input
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="border-[1px] w-4/5 outline-none px-[.8vw] py-[.6vw] bg-transparent mb-[1.5vw] text-[1.5vw] border-gray-400 rounded-sm" type="date" name="date" id="date" />
                    </div>
                    <div>
                        <h3 className="text-[1.5vw] text-gray-300 mb-0.5">Assign to</h3>
                        <input
                        value={assignTo}
                        onChange={(e) => setAssignTo(e.target.value)}
                        className="border-[1px] w-4/5 outline-none px-[.8vw] py-[.6vw] bg-transparent mb-[1.5vw] text-[1.5vw] border-gray-400 rounded-sm" type="text" placeholder="Eg:- Employee Name" />
                    </div>
                    <div>
                        <h3 className="text-[1.5vw] text-gray-300 mb-0.5">Category</h3>
                        <input
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="border-[1px] w-4/5 outline-none px-[.8vw] py-[.6vw] bg-transparent mb-[1.5vw] text-[1.5vw] border-gray-400 rounded-sm" type="text" name="category" id="category" placeholder="Eg:- Design, Development" />
                    </div>
                </div>
                <div className="w-1/2 flex flex-col items-start">
                    <h3 className="text-[1.5vw] text-gray-300 mb-1">Description</h3>
                    <textarea
                    value={taskDescription}
                    onChange={(e) => setTaskDescription(e.target.value)}
                    className="border-[1px] w-full outline-none px-[.8vw] py-[.6vw] bg-transparent mb-[1vw] text-[1.5vw] border-gray-400 rounded-sm" name="description" cols='30' rows='10' placeholder="Write your Decription here.." id="description"></textarea>
                    <input className="w-full bg-emerald-500 font-semibold outline-none px-[.8vw] py-[.6vw] mb-[1vw] text-[1.5vw] rounded-sm" type="submit" value="Create Task" />
                </div>
            </form>
        </div>
  )
}

export default CreateTask
