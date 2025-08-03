import React from 'react'

const PreferenceSettingsPage = () => {

  return (
    <div className='flex-1 space-y-6 mt-10 p-4'>
        <h2 className='font-bold text-3xl'>Account Preferences</h2>
        <div className='flex flex-row items-center space-x-10 my-5'>
            <label htmlFor="theme" className='font-semibold'>Theme</label>
            <select name="" id="" className='font-semibold appearance-none bg-gray-200 p-3 rounded-2xl cursor-pointer focus:outline-none focus:ring-1 focus:ring-gray-700 hover:bg-gray-400 transition-all'>
                <option value="default">System default</option>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
            </select>
        </div>
        <div className='flex flex-row items-center space-x-10 my-5'>
            <label htmlFor="language" className='font-semibold'>Language</label>
            <select name="" id="" className='font-semibold appearance-none bg-gray-200 p-3 rounded-2xl cursor-pointer focus:outline-none focus:ring-1 focus:ring-gray-700 hover:bg-gray-400 transition-all'>
                <option value="">English</option>
                <option value="">Spanish</option>
                <option value="">French</option>
                <option value="">German</option>
            </select>
        </div>
        <div className='flex flex-row items-center space-x-10 my-5'>
            <input type="checkbox" />
            <label htmlFor="">Enable email notifications</label>
        </div>
        {/* Save Button */}
        <div>
            <button className='bg-black w-fit text-white px-4 py-1 rounded-4xl cursor-pointer hover:bg-gray-700 transition-colors'>Save</button>
        </div>
    </div>
  )
}

export default PreferenceSettingsPage