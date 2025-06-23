'use client';
import Link from 'next/link';
import { useState } from 'react';
import { UserCredentialsType } from '../types/UserCredentialsType';

const SigninPage = () => {
  const [userCredentials, setUserCredentials] = useState<UserCredentialsType>({
    email: '',
    password: '',
  });
  const handleInputOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleOnSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(userCredentials);
    setUserCredentials({
      email: '',
      password: '',
    });
  };

  return (
    <div className="min-h-screen flex justify-center items-center px-4">
      <form className="w-full max-w-md p-8" onSubmit={handleOnSubmit}>
        <h2 className="text-4xl text-center font-bold my-6">Sign In</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            id="email"
            name="email"
            value={userCredentials.email}
            placeholder="you@email.com"
            required
            onChange={handleInputOnChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            id="password"
            name="password"
            placeholder="••••••••"
            value={userCredentials?.password}
            required
            onChange={handleInputOnChange}
          />
        </div>
        <button type="submit" className="w-full bg-black text-white py-2 rounded-md font-semibold hover:bg-gray-900">
          Sign In
        </button>
        <p className="text-sm text-center text-gray-600 mt-4">
          Don't have an account?{`  `}
          <Link href="/signup" className="text-black font-bold hover:underline">
            SignUp
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SigninPage;
