'use client';
import SettingsCategory from './SettingsCategory';
import EditProfileSettingsPage from './EditProfileSettingsPage';
import { useState } from 'react';
import PreferenceSettingsPage from './PreferenceSettingsPage';
import PrivacySettingsPage from './PrivacySettingsPage';
import DataSettingsPage from './DataSettingsPage';

const SettingsPage = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const settingsCategoryCallback = (index: number) => {
    setCurrentIndex(index);
  };
  return (
    <>
      {/* For large screen only */}
      <div className="hidden lg:block">
        <div className="flex flex-row justify-center gap-8 items-start">
          <SettingsCategory settingsCategoryCallback={settingsCategoryCallback} />
          <div className="flex-1 min-h-[515px]">
            {currentIndex === 0 && <EditProfileSettingsPage />}
            {currentIndex === 1 && <PreferenceSettingsPage />}
            {currentIndex === 2 && <PrivacySettingsPage />}
            {currentIndex === 3 && <DataSettingsPage />}
          </div>
        </div>
      </div>
      {/* For medium and smaller screens */}
      <div className="flex flex-col items-center justify-center gap-8 lg:hidden">
        <div className="w-full max-w-2xl">
          <EditProfileSettingsPage />
        </div>
        <div className="w-full max-w-2xl">
          <PreferenceSettingsPage />
        </div>
        <div className="w-full max-w-2xl">
          <PrivacySettingsPage />
        </div>
        <div className="w-full max-w-2xl">
          <DataSettingsPage />
        </div>
      </div>
    </>
  );
};

export default SettingsPage;
