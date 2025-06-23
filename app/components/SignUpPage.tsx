'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { UserCredentialsType } from '../types/UserCredentialsType';

const SignupPage = () => {
  const [step, setStep] = useState<number>(1);
  const [userCredentials, setUserCredentials] = useState<UserCredentialsType>({
    fullName: '',
    dateOfBirth: '',
    gender: '',
    location: '',
    username: '',
    email: '',
    password: '',
  });

  const handleInputOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;
    setUserCredentials((prevData)=>({
      ...prevData,
      [name]: value,
    }))
  }

  const handleOnSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(userCredentials);
    //TODO: register the user on the database and call the signin API
    setUserCredentials({
      fullName: '',
      dateOfBirth: '',
      gender: '',
      location: '',
      username: '',
      email: '',
      password: '',
    });
  };
  return (
    <div className="min-h-screen flex justify-center items-center px-4">
      <form className="w-full max-w-md p-8" onSubmit={handleOnSubmit}>
        <h2 className="text-4xl text-center font-bold my-6">Create your account</h2>
        {step === 1 && (
          <>
            <div className="my-2">
              <label className="block mb-1 text-sm font-medium">Full Name</label>
              <input
                type="text"
                name="fullName"
                required
                className="w-full px-2 py-2 border rounded mb-4"
                onChange={handleInputOnChange}
                value={userCredentials.fullName}
                placeholder="Enter your name"
              />
            </div>
            <div className="my-2">
              <label className="block mb-1 text-sm font-medium">Date of Birth</label>
              <input
                type="date"
                name="dateOfBirth"
                required
                className="w-full px-2 py-2 border rounded mb-4"
                onChange={handleInputOnChange}
                value={userCredentials.dateOfBirth}
              />
            </div>
          </>
        )}
        {step === 2 && (
          <>
            <div className="my-2">
              <label className="block mb-1 text-sm font-medium">Gender</label>
              <input
                type="text"
                name="gender"
                className="w-full px-2 py-2 border rounded mb-4"
                placeholder="Enter your gender"
                onChange={handleInputOnChange}
                value={userCredentials.gender}
              />
            </div>
            <div className="my-2">
              <label className="block mb-1 text-sm font-medium">Location</label>
              <input
                type="text"
                name="location"
                className="w-full px-2 py-2 border rounded mb-4"
                placeholder="Enter your location"
                onChange={handleInputOnChange}
                value={userCredentials.location}
              />
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <div className="my-2">
              <label className="block mb-1 text-sm font-medium">Username</label>
              <input
                type="username"
                name="username"
                required
                className="w-full px-2 py-2 border rounded mb-4"
                placeholder="username"
                onChange={handleInputOnChange}
                value={userCredentials.username}
              />
              <label className="block mb-1 text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                autoComplete="username"
                required
                className="w-full px-2 py-2 border rounded mb-4"
                placeholder="you@email.com"
                onChange={handleInputOnChange}
                value={userCredentials.email}
              />
            </div>
            <div className="my-2">
              <label className="block mb-1 text-sm font-medium">Password</label>
              <input
                type="password"
                name="password"
                autoComplete="new-password"
                className="w-full px-2 py-2 border rounded mb-4"
                placeholder="••••••••"
                onChange={handleInputOnChange}
                value={userCredentials.password}
              />
            </div>
          </>
        )}

        <div className="flex justify-between mt-4">
          <button
            type="button"
            onClick={() => setStep((prev) => prev - 1)}
            disabled={step === 1}
            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-900 transition disabled:opacity-20"
          >
            Back
          </button>
          {step === 3 ? (
            <button type="submit" className="bg-black text-white px-4 py-2 rounded hover:bg-gray-900 transition">
              Sign up
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setStep((prev) => prev + 1)}
              disabled={step === 3}
              className="bg-black text-white px-4 py-2 rounded hover:bg-gray-900 transition disabled:opacity-20"
            >
              Next
            </button>
          )}
        </div>
        <p className="text-sm text-center text-gray-600 mt-8">
          Already have an account?{`  `}
          <Link href="/signin" className="text-black font-bold hover:underline">
            SignIn
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignupPage;
