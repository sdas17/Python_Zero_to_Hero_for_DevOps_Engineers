import Headers from './Headers'
import Taklist from './Taklist'
import TaskListdata from './TaskListdata'

const Empd = (data) => {
  console.log(data,'6')
  return (
    <div className="px-2 py-2">
        <Headers/>
        <Taklist/>
        <TaskListdata/>
    </div>
  )
}

export default Empd