import Headers from "./Headers"

const Admin = () => {
  return (
    <div className="h-screen w-full">
        <Headers/>
        <div className="flex gap-8 p-6">
            {/* Form Section */}
            <div className="border-4 border-gray-700 p-6 rounded-xl bg-gray-900/50 shadow-xl mt-10 w-1/3">
                <form className="flex flex-col space-y-3">
                    <label className="text-white font-medium">Task Title</label>
                    <input 
                        className="bg-gray-800 text-white placeholder-gray-400 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-600"
                        placeholder="make a ui design"
                    />
                    <label className="text-white font-medium">Description</label>
                    <textarea 
                        className="bg-gray-800 text-white placeholder-gray-400 rounded-md p-2 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-gray-600"
                        placeholder="Enter task description"
                    />
                    <label className="text-white font-medium">Date</label>
                    <input 
                        type="date" 
                        className="bg-gray-800 text-white rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-600"
                    />
                    <label className="text-white font-medium">Assign to</label>
                    <input 
                        type="text" 
                        className="bg-gray-800 text-white placeholder-gray-400 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-600"
                        placeholder="please assign"
                    />
                    <label className="text-white font-medium">Category</label>
                    <input 
                        type="text" 
                        className="bg-gray-800 text-white placeholder-gray-400 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-600"
                        placeholder="please assign"
                    />
                    <button 
                        className="bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors duration-200"
                    >
                        Create Task
                    </button>
                </form>
            </div>

            {/* Tasks Cards Section */}
            <div className="flex-1 mt-10 grid grid-cols-2 gap-6">
                {/* Task Card 1 */}
                <div className="border-2 border-gray-700 rounded-lg bg-gray-900/50 p-4 shadow-md">
                    <div className="flex justify-between items-start mb-3">
                        <h3 className="text-white font-semibold">UI Design Task</h3>
                        <button className="text-gray-400 hover:text-red-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                    <p className="text-gray-300 text-sm mb-4">Create a modern dashboard interface with dark theme</p>
                    <div className="flex justify-between items-center">
                        <span className="text-gray-400 text-sm">Due: Feb 25, 2024</span>
                        <div className="flex gap-2">
                            <button className="bg-green-600 text-white px-3 py-1 rounded-md text-sm hover:bg-green-700">Accept</button>
                            <button className="bg-red-600 text-white px-3 py-1 rounded-md text-sm hover:bg-red-700">Reject</button>
                        </div>
                    </div>
                </div>

                {/* Task Card 2 */}
                <div className="border-2 border-gray-700 rounded-lg bg-gray-900/50 p-4 shadow-md">
                    <div className="flex justify-between items-start mb-3">
                        <h3 className="text-white font-semibold">API Integration</h3>
                        <button className="text-gray-400 hover:text-red-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                    <p className="text-gray-300 text-sm mb-4">Implement REST API endpoints for user authentication</p>
                    <div className="flex justify-between items-center">
                        <span className="text-gray-400 text-sm">Due: Mar 1, 2024</span>
                        <div className="flex gap-2">
                            <button className="bg-green-600 text-white px-3 py-1 rounded-md text-sm hover:bg-green-700">Accept</button>
                            <button className="bg-red-600 text-white px-3 py-1 rounded-md text-sm hover:bg-red-700">Reject</button>
                        </div>
                    </div>
                </div>

                {/* Task Card 3 */}
                <div className="border-2 border-gray-700 rounded-lg bg-gray-900/50 p-4 shadow-md">
                    <div className="flex justify-between items-start mb-3">
                        <h3 className="text-white font-semibold">Testing</h3>
                        <button className="text-gray-400 hover:text-red-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                    <p className="text-gray-300 text-sm mb-4">Write unit tests for core components</p>
                    <div className="flex justify-between items-center">
                        <span className="text-gray-400 text-sm">Due: Mar 5, 2024</span>
                        <div className="flex gap-2">
                            <button className="bg-green-600 text-white px-3 py-1 rounded-md text-sm hover:bg-green-700">Accept</button>
                            <button className="bg-red-600 text-white px-3 py-1 rounded-md text-sm hover:bg-red-700">Reject</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Admin