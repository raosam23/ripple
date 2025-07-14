import { PenIcon } from 'lucide-react';
import React from 'react';
PenIcon;

const ComposePost = () => {
  return (
    <div className="border border-gray-300 p-2 mb-6 bg-white shadow-sm rounded-md">
      <textarea
        placeholder="What is happening???"
        className="w-full resize-none border-none focus:ring-0 focus:outline-none text-md"
        rows={3}
      />
      <div className="flex justify-end mt-2">
        <button className="flex items-center cursor-pointer gap-2 bg-black text-white px-4 py-1 rounded-full text-md font-bold hover:bg-gray-800 transition">
          <PenIcon size={20} />
          Post
        </button>
      </div>
    </div>
  );
};

export default ComposePost;
