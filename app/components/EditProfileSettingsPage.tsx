import React from 'react';

const EditProfileSettingsPage = () => {
  return (
    <div className="flex-1 space-y-6 mt-10 p-4">
      <h2 className="font-bold text-3xl mb-8">Edit Profile</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Full Name</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-4 py-2 text-sm"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Username</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-4 py-2 text-sm"
            placeholder="@username"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            className="w-full border border-gray-300 rounded px-4 py-2 text-sm"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            className="w-full border border-gray-300 rounded px-4 py-2 text-sm"
            placeholder="••••••••"
          />
        </div>
        <button className="bg-black w-fit text-white px-4 py-1 rounded-4xl cursor-pointer hover:bg-gray-700 transition-colors">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default EditProfileSettingsPage;
