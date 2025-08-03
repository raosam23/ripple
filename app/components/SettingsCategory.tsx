'use client';
import { useState } from 'react';

const SettingsCategory = (props: {settingsCategoryCallback : (num: number) => void}) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const handleOnClick = (index: number) => {
    setSelectedIndex(index);
    props.settingsCategoryCallback(index);
  }
  return (
    <div className="flex w-1/4 flex-col max-w-6xl m-auto px-4 py-8">
      <ul className="space-y-5 font-medium text-sm text-gray-700 w-fit">
        <li
          className={`cursor-pointer px-3 py-2 rounded-3xl transition-colors duration-150 ${
            selectedIndex === 0 ? 'bg-black text-white' : 'hover:bg-gray-200'
          }`}
          onClick={() => handleOnClick(0)}
        >
          Profile settings
        </li>
        <li
          className={`cursor-pointer px-3 py-2 rounded-3xl transition-colors duration-150 ${
            selectedIndex === 1 ? 'bg-black text-white' : 'hover:bg-gray-200'
          }`}
          onClick={() => handleOnClick(1)}
        >
          Account and Preferences
        </li>
        <li
          className={`cursor-pointer px-3 py-2 rounded-3xl transition-colors duration-150 ${
            selectedIndex === 2 ? 'bg-black text-white' : 'hover:bg-gray-200'
          }`}
          onClick={() => handleOnClick(2)}
        >
          Privacy and Security
        </li>
        <li
          className={`cursor-pointer px-3 py-2 rounded-3xl transition-colors duration-150 ${
            selectedIndex === 3 ? 'bg-black text-white' : 'hover:bg-gray-200'
          }`}
          onClick={() => handleOnClick(3)}
        >
          Data and Activity
        </li>
      </ul>
    </div>
  );
};

export default SettingsCategory;
