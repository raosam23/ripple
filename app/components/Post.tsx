'use client';
import {
  Axe,
  Bookmark,
  CircleOff,
  Heart,
  HeartOff,
  LucideMessageCircleWarning,
  MessageCircleQuestion,
  PenBoxIcon,
  Share2Icon,
  ShieldAlert,
  Target,
} from 'lucide-react';
import { FaTwitter, FaInstagram, FaFacebook, FaReddit, FaLink } from 'react-icons/fa';
import Image from 'next/image';
import React, { useState } from 'react';

const Post = () => {
  const [showShareDropDown, setShowShareDropDown] = useState<boolean>(false);
  const [showReportDropDown, setShowReportDropDown] = useState<boolean>(false);
  return (
    <div className="border border-gray-300 rounded-md p-4 bg-white shadow-sm">
      <div className="flex items-center space-x-3 mb-2">
        <Image src={'/images/user_profile.png'} width={20} height={20} alt="User" />
        <div>
          <p className="font-semibold text-sm">Samarth Rao</p>
          <p className="text-xs text-gray-500">@samarthrao · 2h</p>
        </div>
      </div>
      <p className="text-gray-800 text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore accusantium quam ad quia laboriosam nostrum
        ipsam odio eos dolorem rerum velit aut assumenda architecto laudantium itaque magnam, corrupti consequuntur
        illum minima veritatis!
      </p>
      <div className="flex flex-row justify-between items-end">
        <div className="flex flex-row gap-6 items-center mt-2">
          <div className="flex items-center cursor-pointer gap-1 text-sm text-gray-600">
            <Heart className="hover:text-black transition" size={15} />
            <span>X</span>
          </div>
          <div className="flex items-center cursor-pointer gap-1 text-sm text-gray-600">
            <PenBoxIcon className="hover:text-black transition" size={15} />
            <span>Y</span>
          </div>
          <div className="flex items-center cursor-pointer gap-1 text-sm text-gray-600">
            <Bookmark className="hover:text-black transition" size={15} />
          </div>
          <div className="relative">
            <div
              className="flex items-center cursor-pointer gap-1 text-sm text-gray-600"
              onClick={() => {
                setShowReportDropDown(false);
                setShowShareDropDown((prev) => !prev);
              }}
            >
              <Share2Icon className="hover:text-black transition" size={15} />
            </div>
            {showShareDropDown && (
              <div
                className="absolute top-6 right-0 md:left-0 bg-white border-gray-300 rounded-3xl shadow-2xl text-sm z-10 w-44"
                onMouseLeave={() => setShowShareDropDown(!setShowShareDropDown)}
              >
                <ul className="divide-y divide-gray-200">
                  <li className="flex flex-row items-center gap-1 px-4 py-2 cursor-pointer hover:bg-gray-100 transition rounded-t-3xl">
                    Share on <FaTwitter />
                  </li>
                  <li className="flex flex-row items-center gap-1 px-4 py-2 cursor-pointer hover:bg-gray-100 transition">
                    Share on <FaInstagram />
                  </li>
                  <li className="flex flex-row items-center gap-1 px-4 py-2 cursor-pointer hover:bg-gray-100 transition">
                    Share on <FaFacebook />
                  </li>
                  <li className="flex flex-row items-center gap-1 px-4 py-2 cursor-pointer hover:bg-gray-100 transition">
                    Share on <FaReddit />
                  </li>
                  <li className="flex flex-row items-center gap-1 px-4 py-2 cursor-pointer hover:bg-gray-100 transition rounded-b-3xl">
                    Copy link <FaLink />
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className="relative">
            <div
              className="flex items-center cursor-pointer gap-1 text-sm text-gray-600"
              onClick={() => {
                setShowShareDropDown(false);
                setShowReportDropDown((prev) => !prev);
              }}
            >
              <ShieldAlert className="hover:text-black transition" size={15} />
            </div>
            {showReportDropDown && (
              <div
                className="absolute top-6 right-0 md:left-0 bg-white border-gray-300 rounded-3xl shadow-2xl text-sm z-10 w-44"
                onMouseLeave={() => setShowReportDropDown(!showReportDropDown)}
              >
                <ul className="divide-y divide-gray-200">
                  <li className="flex flex-row items-center gap-2.5 px-4 py-2 cursor-pointer hover:bg-gray-100 transition rounded-t-3xl">
                    <CircleOff size={20} />
                    It's spam
                  </li>
                  <li className="flex flex-row items-center gap-2.5 px-4 py-2 cursor-pointer hover:bg-gray-100 transition">
                    <HeartOff size={25} />
                    Hate speech or symbols
                  </li>
                  <li className="flex flex-row items-center gap-2.5 px-4 py-2 cursor-pointer hover:bg-gray-100 transition">
                    <LucideMessageCircleWarning size={25} />
                    Harassment or bullying
                  </li>
                  <li className="flex flex-row items-center gap-2.5 px-4 py-2 cursor-pointer hover:bg-gray-100 transition">
                    <Target size={25} />
                    False information
                  </li>
                  <li className="flex flex-row items-center gap-2.5 px-4 py-2 cursor-pointer hover:bg-gray-100 transition">
                    <Axe size={25} />
                    Violent or graphic content
                  </li>
                  <li className="flex flex-row items-center gap-2.5 px-4 py-2 cursor-pointer hover:bg-gray-100 transition rounded-b-3xl">
                    <MessageCircleQuestion size={25} />
                    Other
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <p className="hidden md:block text-gray-400 text-xs">Rippled from Earth</p>
      </div>
    </div>
  );
};

export default Post;
