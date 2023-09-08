import { useDash } from "../contexts/Dashboardcontext"
import Task from "./Task"

const Tasks = () => {
  const {tasks} = useDash()  
  return (
    <div>
      {tasks.map((task)=>{
        return <Task key={task.id} task={task}/>
      } )}
    </div>
  )
}

export default Tasks
