'use client';
import React, { useState } from 'react';
import { UserCredentialsType } from '../types/UserCredentialsType';
import { useRouter } from 'next/navigation';
type EditProfileType = Omit<UserCredentialsType, 'email' | 'password'> & {
  profilePic?: File | '';
};

const EditProfile = () => {
  const router = useRouter();
  const [editUserData, setEditUserData] = useState<EditProfileType>({
    username: '',
    fullName: '',
    bio: '',
    profilePic: '',
  });
  const [profilePic, setProfilePic] = useState<File | null>(null);

  const clearEditFormDataAndReroute = () => {
    setEditUserData({
      username: '',
      fullName: '',
      bio: '',
    });
    router.back();
  };
  const handleFormOnChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setEditUserData((prevData: EditProfileType) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    //TODO: api to submit form and edit userdata from database
    console.log(editUserData);
    clearEditFormDataAndReroute();
  };
  return (
    <div className="mx-auto px-6 py-10 max-w-xl my-10">
      <h1 className="text-center lg:text-left text-2xl font-bold mb-6">Edit your profile</h1>
      <form onSubmit={handleFormSubmit} className="space-y-6">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium mb-1">
            Full Name
          </label>
          <input
            className="w-full border rounded px-2 py-2"
            type="text"
            placeholder="Your full name"
            name="fullName"
            value={editUserData.fullName}
            onChange={handleFormOnChange}
          />
        </div>
        <div>
          <label htmlFor="username" className="block text-sm font-medium mb-1">
            Username
          </label>
          <input
            className="w-full border rounded px-2 py-2"
            type="text"
            placeholder="@username"
            name="username"
            value={editUserData.username}
            onChange={handleFormOnChange}
          />
        </div>
        <div>
          <label htmlFor="bio" className="block text-sm font-medium mb-1">
            Bio
          </label>
          <input
            className="w-full border rounded px-2 py-2"
            type="text"
            placeholder="Tell us about yourself"
            name="bio"
            value={editUserData.bio}
            onChange={handleFormOnChange}
          />
        </div>
        <div>
          <label htmlFor="profilePic" className="block text-sm font-medium mb-1">
            Image
          </label>
          <label
            htmlFor="profilePic"
            className="block w-full border border-gray-400 text-gray-500 rounded px-4 py-2 text-center cursor-pointer hover:bg-gray-50 transition"
          >
            {profilePic ? profilePic.name : 'Click to upload an image'}
          </label>
          <input
            type="file"
            id='profilePic'
            name='profilePic'
            className="hidden"
            placeholder="Upload image here"
            accept="image/*"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              const file = event.target.files?.[0] || null;
              setProfilePic(file);
              if (file) {
                setEditUserData((prevData) => ({
                  ...prevData,
                  profilePic: file,
                }));
              }
            }}
          />
        </div>
        <div className="flex justify-center lg:justify-end gap-3">
          <button
            type="button"
            onClick={clearEditFormDataAndReroute}
            className="w-32 border border-gray-400 text-gray-700 px-3 py-2 rounded-4xl hover:bg-gray-100 transition"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="w-32 border border-gray-400 text-gray-700 px-3 py-2 rounded-4xl hover:bg-gray-100 transition"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
