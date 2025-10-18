
const TaskListdata = () => {
  return (
    <div className='mt-10 py-5 px-5'>
      <div
        id='tasklist'
        className='flex items-start gap-5 overflow-x-auto flex-nowrap'
      >
       <div className='h-full w-[300px] bg-yellow-400 flex-shrink-0 p-6 rounded-md shadow-md'>
         
          <div className='flex justify-between items-center'>
            <h1 className="text-xl font-bold bg-red-600 text-white px-3 py-1 rounded-md">High</h1>
            <h4 className="text-sm text-white">20 feb 2024</h4>
          </div>
           <div className="mb-4 mt-3">
            <h2 className="text-white text-xl font-semibold mb-2">Make a youtube video</h2>
            <p className="text-white">Learn a</p>
          </div>
        </div>
         
      </div>
    </div>
  );
};

export default TaskListdata;
