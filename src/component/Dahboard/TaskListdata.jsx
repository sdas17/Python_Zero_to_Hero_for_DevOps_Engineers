
const TaskListdata = ({data}) => {






  return (
    <div className='mt-10 py-5 px-5'>
      <div
        id='tasklist'
        className='flex items-start gap-5 overflow-x-auto flex-nowrap'
      >
        {Array.isArray(data.tasks) && data.tasks.map((item, index) =>(
                 <div              key={index}
className='h-full w-[300px] bg-yellow-400 flex-shrink-0 p-6 rounded-md shadow-md'>
 <div className='flex justify-between items-center'>
            <h1 className="text-xl font-bold bg-red-600 text-white px-3 py-1 rounded-md">{item.taskCategory}</h1>
            <h4 className="text-sm text-white">{item.taskDate}</h4>
          </div>
           <div className="mb-4 mt-3">
            <h2 className="text-white text-xl font-semibold mb-2">                {item.taskTitle}
</h2>
            <p className="text-white">{item.taskDescription}</p>
          </div>
</div>
        ))}
      
         
      </div>
    </div>
  );
};

export default TaskListdata;
