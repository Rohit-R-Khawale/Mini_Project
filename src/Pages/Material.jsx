import React from 'react';

const MaterialPost = () => {
    return (
        <div className="flex flex-col p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Material</h2>
            
            <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700">Title</label>
                <input
                    type="text"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
                    placeholder="Enter title"
                />
            </div>
            
            <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700">Description (optional)</label>
                <textarea
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
                    rows="4"
                    placeholder="Enter description"
                ></textarea>
                <div className="flex space-x-2 mt-2">
                    <button className="bg-gray-200 py-1 px-2 rounded-md">B</button>
                    <button className="bg-gray-200 py-1 px-2 rounded-md">I</button>
                    <button className="bg-gray-200 py-1 px-2 rounded-md">U</button>
                    <button className="bg-gray-200 py-1 px-2 rounded-md">List</button>
                    <button className="bg-gray-200 py-1 px-2 rounded-md">Format</button>
                </div>
            </div>

            <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-700">Attach</h3>
                <div className="flex space-x-4 mt-2">
                    <button className="flex items-center justify-center w-24 h-20 bg-gray-100 rounded-lg">Drive
                    
                    </button>
                    <button className="flex items-center justify-center w-24 h-20 bg-gray-100 rounded-lg">YouTube</button>
                    <button className="flex items-center justify-center w-24 h-20 bg-gray-100 rounded-lg">Create</button>
                    <button className="flex items-center justify-center w-24 h-20 bg-gray-100 rounded-lg">Upload</button>
                    <button className="flex items-center justify-center w-24 h-20 bg-gray-100 rounded-lg">Link</button>
                </div>
            </div>

            <div className="flex justify-between items-center border-t pt-4">
                <div className="flex flex-col">
                    <label className="block text-sm font-medium text-gray-700">For</label>
                    <select className="mt-1 border border-gray-300 rounded-md shadow-sm">
                        <option>ob jhg</option>
                        {/* More options can be added */}
                    </select>
                </div>
                <div className="flex flex-col">
                    <label className="block text-sm font-medium text-gray-700">Assign to</label>
                    <select className="mt-1 border border-gray-300 rounded-md shadow-sm">
                        <option>All students</option>
                        {/* More options can be added */}
                    </select>
                </div>
                <div className="flex flex-col">
                    <label className="block text-sm font-medium text-gray-700">Topic</label>
                    <select className="mt-1 border border-gray-300 rounded-md shadow-sm">
                        <option>No topic</option>
                        {/* More options can be added */}
                    </select>
                </div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Post</button>
            </div>
        </div>
    );
};

export default MaterialPost;