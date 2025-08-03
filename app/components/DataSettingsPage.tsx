'use client';

import React from 'react';

const DataSettingsPage = () => {
  return (
    <div className="flex-1 space-y-6 mt-10 p-4">
      <h2 className="font-bold text-3xl mb-8">Data & Activity</h2>

      <div className="space-y-1">
        <h3 className="text-sm font-bold text-black">Download your data</h3>
        <p className="text-sm text-gray-500">
          You can request a copy of your data including posts, profile, and activity.
        </p>
        <button className="bg-black w-fit text-white px-4 py-1 rounded-4xl cursor-pointer hover:bg-gray-700 transition-colors">
          Request Data Download
        </button>
      </div>

      <div className="space-y-1">
        <h3 className="text-sm font-bold text-black">Clear search history</h3>
        <p className="text-sm text-gray-500">Delete all previous searches from your account.</p>
        <button className="bg-black w-fit text-white px-4 py-1 rounded-4xl cursor-pointer hover:bg-gray-700 transition-colors">
          Clear History
        </button>
      </div>

      <div className="space-y-1">
        <h3 className="text-sm font-bold text-black">Login activity</h3>
        <p className="text-sm text-gray-500">View recent devices and sessions used to access your account.</p>
        <button className="bg-black w-fit text-white px-4 py-1 rounded-4xl cursor-pointer hover:bg-gray-700 transition-colors">
          View Login Activity
        </button>
      </div>

      <div className="space-y-1">
        <h3 className="text-sm font-bold text-black">Ad personalization</h3>
        <label className="flex items-end gap-2">
          <input className="w-5 h-5 text-black cursor-pointer" type="checkbox" />
          <span className="text-sm text-gray-500">Use my activity to personalize ads.</span>
        </label>
      </div>
    </div>
  );
};

export default DataSettingsPage;
