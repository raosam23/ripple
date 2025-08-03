'use client';

import React from 'react';

const PrivacySettingsPage = () => {
  return (
    <div className='flex-1 space-y-6 mt-10 p-4'>
      <h2 className='font-bold text-3xl mb-8'>Privacy and Security</h2>
      {/* Profile visibility */}
      <div className='flex flex-row items-center space-x-10 my-5'>
        <label htmlFor="" className='font-semibold'>Who can view your profile</label>
        <select name="" id="" className='font-semibold appearance-none bg-gray-200 p-3 rounded-2xl cursor-pointer focus:outline-none focus:ring-1 focus:ring-gray-700 hover:bg-gray-400 transition-all'>
          <option value="">Everyone</option>
          <option value="">Followers only</option>
          <option value="">Only me</option>
        </select>
      </div>
      {/* Message Permissions */}
      <div className='flex flex-row items-center space-x-10 my-5'>
        <label htmlFor="" className='font-semibold'>Who can send you messages</label>
        <select name="" id="" className='font-semibold appearance-none bg-gray-200 p-3 rounded-2xl cursor-pointer focus:outline-none focus:ring-1 focus:ring-gray-700 hover:bg-gray-400 transition-all'>
          <option value="">Everyone</option>
          <option value="">People you follow</option>
          <option value="">No one</option>
        </select>
      </div>
      {/* Blocked users */}
      <div>
        <label htmlFor="">Blocked users</label>
        <div>No blocked users</div>
      </div>
      {/* Button to save changes */}
      <div>
        <button className='bg-black w-fit text-white px-4 py-1 rounded-4xl cursor-pointer hover:bg-gray-700 transition-colors'>Save changes</button>
      </div>
    </div>
  );
};

export default PrivacySettingsPage;
