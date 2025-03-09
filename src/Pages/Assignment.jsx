import React, { useState } from 'react';


const Assignment = () => {
  const [title, setTitle] = useState('');
  const [instructions, setInstructions] = useState('');
  const [points, setPoints] = useState(100);
  const [dueDate, setDueDate] = useState('No due date');
  const [topic, setTopic] = useState('No topic');

  return (
    <div className="flex flex-col p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Assignment</h1>

      <div className="mb-6">
        <label className="block mb-2 text-sm font-semibold">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded-lg bg-white"
          placeholder="Title"
        />
      </div>

      <div className="mb-6">
        <label className="block mb-2 text-sm font-semibold">Instructions (optional)</label>
        <textarea
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          className="w-full h-32 p-2 border rounded-lg bg-white"
          placeholder="Instructions"
        />
        <div className="mt-2 flex space-x-2">
          <button className="p-2 bg-gray-200 rounded">B</button>
          <button className="p-2 bg-gray-200 rounded">I</button>
          <button className="p-2 bg-gray-200 rounded">U</button>
          <button className="p-2 bg-gray-200 rounded">⇅</button>
        </div>
      </div>

      <div className="mb-4">
        <label className="block mb-2 text-sm font-semibold">Attach</label>
        <div className="flex space-x-4">
          <button className="flex items-center justify-center p-2 bg-white border rounded-full">
            Drive
          </button>
          <button className="flex items-center justify-center p-2 bg-white border rounded-full">
            YouTube
          </button>
          <button className="flex items-center justify-center p-2 bg-white border rounded-full">
            Create
          </button>
          <button className="flex items-center justify-center p-2 bg-white border rounded-full">
            Upload
          </button>
          <button className="flex items-center justify-center p-2 bg-white border rounded-full">
            Link
          </button>
        </div>
      </div>

      {/* Right-side form */}
      <div className="flex flex-col space-y-4 w-64">
        <div>
          <label className="block mb-2 text-sm font-semibold">For</label>
          <select className="w-full p-2 border rounded-lg bg-white">
            <option>Student</option>
            <option>All Students</option>
          </select>
        </div>

        <div>
          <label className="block mb-2 text-sm font-semibold">Points</label>
          <select value={points} onChange={(e) => setPoints(e.target.value)} className="w-full p-2 border rounded-lg bg-white">
            {[...Array(101)].map((_, index) => (
              <option key={index} value={index}>{index}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block mb-2 text-sm font-semibold">Due</label>
          <select value={dueDate} onChange={(e) => setDueDate(e.target.value)} className="w-full p-2 border rounded-lg bg-white">
            <option>No due date</option>
          </select>
        </div>

        <div>
          <label className="block mb-2 text-sm font-semibold">Topic</label>
          <select value={topic} onChange={(e) => setTopic(e.target.value)} className="w-full p-2 border rounded-lg bg-white">
            <option>No topic</option>
          </select>
        </div>

        <button className="mt-4 p-2 bg-blue-500 text-white rounded-lg">Assign</button>
      </div>
    </div>
  );
};

export default Assignment;