'use client';
import Link from 'next/link';
import { Bookmark, LucideHome, MessageCircle, Plus, Settings2, UserRound } from 'lucide-react';
const Navbar = () => {
  return (
    <div className="lg:w-64 p-10 border-r border-gray-200 flex flex-col justify-between fixed h-screen">
      <div>
        <div className="text-2xl font-bold">
          <Link href="/home" className="block w-fit mb-10 rounded-full hover:bg-gray-100 transition p-2">
            <h1 className="lg:hidden font-extrabold text-4xl">ri</h1>
            <h1 className="hidden lg:inline font-extrabold text-4xl">ripple</h1>
          </Link>
        </div>
        <nav className="flex flex-col space-y-4 text-lg lg:items-start items-center">
          <Link
            className="flex flex-row items-center w-fit gap-x-1.5 rounded-full hover:bg-gray-100 transition p-2"
            href="/home"
          >
            <LucideHome size={25} />
            <span className="hidden lg:inline">Home</span>
          </Link>
          <Link
            className="flex flex-row items-center w-fit gap-x-1.5 rounded-full hover:bg-gray-100 transition p-2"
            href="/direct-message"
          >
            <MessageCircle size={20} />
            <span className="hidden lg:inline">DMs</span>
          </Link>
          <Link
            className="flex flex-row items-center w-fit gap-x-1.5 rounded-full hover:bg-gray-100 transition p-2"
            href="/bookmarks"
          >
            <Bookmark size={25} />
            <span className="hidden lg:inline">Bookmarks</span>
          </Link>
          <Link
            className="flex flex-row items-center w-fit gap-x-1.5 rounded-full hover:bg-gray-100 transition p-2"
            href="/profile"
          >
            <UserRound size={25} />
            <span className="hidden lg:inline">Profile</span>
          </Link>
          <Link
            className="flex flex-row items-center w-fit gap-x-1.5 rounded-full hover:bg-gray-100 transition p-2"
            href="/settings"
          >
            <Settings2 size={25} />
            <span className="hidden lg:inline">Settings</span>
          </Link>
          <Link
            href="/post"
            className="flex items-center justify-center bg-black text-white rounded-full font-medium hover:bg-gray-800 transition
             w-10 h-10 lg:w-full lg:h-auto lg:px-4 lg:py-2"
          >
            <span className="lg:hidden text-xl font-bold">
              <Plus size={20} />
            </span>
            <span className="hidden lg:inline">POST</span>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
