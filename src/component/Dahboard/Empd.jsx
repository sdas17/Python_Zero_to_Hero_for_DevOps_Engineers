import Headers from './Headers'
import Taklist from './Taklist'
import TaskListdata from './TaskListdata'

const Empd = (data) => {
  console.log(data,'6')
  return (
    <div className="px-2 py-2">
        <Headers data={data}/>
        <Taklist data={data}/>
        <TaskListdata data={data.employeedata}/>
    </div>
  )
}

export default Empd