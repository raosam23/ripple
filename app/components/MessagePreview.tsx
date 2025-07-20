'use client';
import React from 'react'

type Props = {
  id: number;
  name: string;
  last_msg: string;
  time: string;
  onClicked: () => void;
};

const MessagePreview = ({ id, name, last_msg, time, onClicked }: Props) => {
  return (
    <li key={id} className="px-4 py-3 hover:bg-gray-100 cursor-pointer" onClick={onClicked}>
      <p className="font-medium">{name}</p>
      <p className="text-sm text-gray-500 truncate">{last_msg}</p>
      <span className="text-xs text-gray-400">{time}</span>
    </li>
  );
};

export default MessagePreview