'use client';
import Link from 'next/link';
import { Bookmark, LucideHome, MessageCircle, Settings2, UserRound } from 'lucide-react';
import { usePathname } from 'next/navigation';
const Navbar = () => {
  return (
    <div className="w-64 p-10 border-r border-gray-200 flex flex-col justify-between fixed h-screen">
      <div>
        <div className="text-2xl font-bold mb-10">
          <Link href="/home">
            <h1 className="font-extrabold text-4xl">ripple</h1>
          </Link>
        </div>
        <nav className="flex flex-col space-y-4 text-lg">
          <Link className="flex flex-row items-center gap-x-1.5" href="/home">
            <LucideHome size={25} />
            Home
          </Link>
          <Link className="flex flex-row items-center gap-x-1.5" href="/direct-message">
            <MessageCircle size={20} /> DMs
          </Link>
          <Link className="flex flex-row items-center gap-x-1.5" href="/bookmarks">
            <Bookmark size={25} />
            Bookmarks
          </Link>
          <Link className="flex flex-row items-center gap-x-1.5" href="/profile">
            <UserRound size={25} />
            Profile
          </Link>
          <Link className="flex flex-row items-center gap-x-1.5" href="/settings">
            <Settings2 size={25} />
            Settings
          </Link>
          <Link
            href="/post"
            className="bg-black text-white px-4 py-2 rounded-full text-center font-medium hover:bg-gray-800 transition"
          >
            POST
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
