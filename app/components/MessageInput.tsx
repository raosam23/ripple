'use client';
import React, { useState } from 'react';
import { SendHorizonal } from 'lucide-react';

interface MessageInputProps {
  onSend: (message: string) => void;
}

const MessageInput: React.FC<MessageInputProps> = ({ onSend }) => {
  const [text, setText] = useState('');

  const handleSend = () => {
    if (text.trim()) {
      onSend(text);
      setText('');
    }
  };

  return (
    <div className="w-full flex items-center mt-2 gap-3 p-2">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={1}
        placeholder="Type in a message..."
        className="flex-1 resize-none border border-gray-300 rounded-4xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500 text-sm"
      />
      <button
        onClick={handleSend}
        className="flex bg-black text-white px-4 py-2 rounded-4xl text-sm hover:bg-gray-900 transition"
      >
        <SendHorizonal />
      </button>
    </div>
  );
};

export default MessageInput;
