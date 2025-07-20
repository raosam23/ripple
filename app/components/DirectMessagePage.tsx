'use client';
import { useState } from 'react';
import MessagePreview from './MessagePreview';
import ChatWindow from './ChatWindow';
import MessageInput from './MessageInput';

type ChatMessage = { from: string; message: string; time: string };

const DirectMessagePage = () => {
  const [selectedMessageId, setSelectedMessageId] = useState<number>(-1);
  const [chatData, setChatData] = useState<Record<number, ChatMessage[]>>({
    1: [
      { from: 'Alan Walker', message: 'Hey! Long time no talk.', time: '2h ago' },
      { from: 'me', message: 'Yeah! How’ve you been?', time: '1h 55m ago' },
      { from: 'Alan Walker', message: 'Pretty good. Just got back from a trip.', time: '1h 45m ago' },
    ],
    2: [
      { from: 'Emma Stone', message: 'Can we plan something for the weekend?', time: '3h ago' },
      { from: 'me', message: 'Sure! Movie or dinner?', time: '2h 50m ago' },
      { from: 'Emma Stone', message: 'Dinner sounds perfect 🍝', time: '2h 45m ago' },
    ],
    3: [
      { from: 'Michael Chen', message: 'Don’t forget the meeting at 5.', time: 'Yesterday' },
      { from: 'me', message: 'Yep, I’ll be there!', time: 'Yesterday' },
      { from: 'Michael Chen', message: 'Great. Looking forward to it.', time: 'Yesterday' },
    ],
  });

  const chatList = [
    { id: 1, name: 'Alan Walker', last_msg: 'Hey, how have you been?', time: '2 hours ago' },
    { id: 2, name: 'Emma Stone', last_msg: 'Let’s catch up soon!', time: '3 hours ago' },
    { id: 3, name: 'Michael Chen', last_msg: 'Meeting rescheduled to 5.', time: 'Yesterday' },
  ];

  const handleSendMessage = (message: string) => {
    if (selectedMessageId === -1) return;

    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const newMessage = { from: 'me', message, time };

    setChatData((prev) => ({
      ...prev,
      [selectedMessageId]: [...prev[selectedMessageId], newMessage],
    }));
  };

  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col sm:flex-row h-[90vh] border rounded-lg border-gray-400 overflow-hidden">
      {/* Sidebar */}
      <div className="w-full sm:w-1/3 border-r border-gray-200 bg-white h-full flex flex-col">
        <h2 className="text-lg font-semibold px-4 py-3 border-b border-gray-200">Direct Message</h2>
        <ul className="overflow-y-auto flex-1">
          {chatList.map((conv) => (
            <MessagePreview
              onClicked={() => setSelectedMessageId(conv.id)}
              key={conv.id}
              id={conv.id}
              name={conv.name}
              last_msg={conv.last_msg}
              time={conv.time}
            />
          ))}
        </ul>
      </div>

      {/* Chat Panel */}
      <div className="flex-1 bg-gray-50 flex flex-col justify-center items-center">
        {selectedMessageId === -1 ? (
          <p className="text-gray-400">Select a conversation to view a message...</p>
        ) : (
          <>
            <ChatWindow chatData={chatData[selectedMessageId]} />
            <MessageInput onSend={handleSendMessage} />
          </>
        )}
      </div>
    </div>
  );
};

export default DirectMessagePage;