'use client';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { EditIcon } from 'lucide-react';

const ProfilePage = () => {
  const router = useRouter();
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="lg:flex lg:items-center lg:space-x-10 space-y-4 lg:space-y-0">
        <Image className='rounded-full' src="/images/user_profile.png" alt="profile-pic" width={100} height={100} />
        <div>
          {/* TODO: get name dynamically from db */}
          <h1 className="text-3xl font-bold">FULL_NAME</h1>
          {/* TODO: get usesrname from db */}
          <p className="text-gray-500">@username</p>
          {/* TODO: (optional) get bio from db */}
          <p className="mt-2 text-gray-700 text-sm leading-relaxed">
            bio: Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, modi aperiam natus nam porro
            molestiae, sequi optio, ratione quisquam cupiditate eaque eligendi nihil accusantium minus tenetur placeat
            incidunt accusamus maiores recusandae? Ut.
          </p>
          <button className="flex items-center gap-2 mt-4 px-4 py-1 text-sm border rounded-full hover:bg-gray-100 transition" onClick={() => router.push('/edit-profile')}>
            <EditIcon size={15} />Edit Profile
          </button>
        </div>
      </div>
      <div className="flex flex-row gap-10 my-3 text-sm text-gray-600">
        <span>
          <strong>256</strong> Posts
        </span>
        <span>
          <strong>256</strong> Followers
        </span>
        <span>
          <strong>256</strong> Following
        </span>
      </div>
      <div className="w-full">
        <hr className="my-6 border-t border-gray-200 w-full mx-auto" />
      </div>
      <section className="mt-10">
        <h2 className="text-lg font-semibold mb-4">Your Posts</h2>
        {/* TODO: get posts from db */}
        <div className="p-4 text-center text-gray-500">No posts yet.</div>
      </section>
    </div>
  );
};

export default ProfilePage;
