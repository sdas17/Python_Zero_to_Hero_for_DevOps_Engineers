import Headers from './Headers'
import Taklist from './Taklist'
import TaskListdata from './TaskListdata'

const Empd = () => {
  return (
    <div className="px-2 py-2">
        <Headers></Headers>
        <Taklist/>
        <TaskListdata/>
    </div>
  )
}

export default Empd