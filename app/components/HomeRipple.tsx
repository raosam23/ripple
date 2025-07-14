import React from 'react';
import ComposePost from './ComposePost';
import Post from './Post';

const HomeRipple = () => {
  return (
    <div className="w-full max-w-3xl mx-auto px-3 sm:px-6 py-6">
      <h1 className="text-2xl font-bold mb-4">Home</h1>
      <ComposePost />
      <div className="space-y-4">
        {[1, 2, 3, 4, 5].map((id: number) => (
          <Post key={id} />
        ))}
      </div>
    </div>
  );
};

export default HomeRipple;
