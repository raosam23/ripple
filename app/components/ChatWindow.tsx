'use client';
import React from 'react';

interface ChatMessage {
  from: string;
  message: string;
  time: string;
}

interface ChatWindowProps {
  chatData: ChatMessage[];
}

const ChatWindow: React.FC<ChatWindowProps> = ({ chatData }) => {
  return (
    <div className="w-full h-full flex flex-1 overflow-y-auto flex-col justify-end px-6 py-4 gap-3">
      {chatData.map((msg, idx) => (
        <div
          key={idx}
          className={`max-w-xs px-4 py-2 text-sm rounded-2xl ${
            msg.from === 'me'
              ? 'bg-black text-white self-end rounded-br-sm'
              : 'bg-gray-300 text-gray-900 self-start rounded-bl-sm'
          }`}
        >
          <p>{msg.message}</p>
          <span className={`text-xs block mt-1 ${msg.from === 'me' ? 'text-gray-200' : 'text-gray-600'}`}>
            {msg.time}
          </span>
        </div>
      ))}
    </div>
  );
};

export default ChatWindow;
