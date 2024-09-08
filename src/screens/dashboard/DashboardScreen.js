import React, { useState } from 'react';

const users = [
  { id: 1, name: 'Steve', lastMessage: 'Hi Charles', time: '1:56 PM', status: 'Online' },
  { id: 2, name: 'Alice', lastMessage: 'See you soon', time: '12:45 PM', status: 'Offline' },
  { id: 3, name: 'Alice', lastMessage: 'See you soon', time: '12:45 PM', status: 'Offline' },
  { id: 4, name: 'Alice', lastMessage: 'See you soon', time: '12:45 PM', status: 'Offline' },
  { id: 5, name: 'Alice', lastMessage: 'See you soon', time: '12:45 PM', status: 'Offline' },
  { id: 6, name: 'Alice', lastMessage: 'See you soon', time: '12:45 PM', status: 'Offline' },
  { id: 7, name: 'Alice', lastMessage: 'See you soon', time: '12:45 PM', status: 'Offline' },
  { id: 8, name: 'Alice', lastMessage: 'See you soon', time: '12:45 PM', status: 'Offline' },
  { id: 9, name: 'Alice', lastMessage: 'See you soon', time: '12:45 PM', status: 'Offline' },
  { id: 10, name: 'Alice', lastMessage: 'See you soon', time: '12:45 PM', status: 'Offline' },
  { id: 11, name: 'Alice', lastMessage: 'See you soon', time: '12:45 PM', status: 'Offline' },
  { id: 12, name: 'Alice', lastMessage: 'See you soon', time: '12:45 PM', status: 'Offline' },
  { id: 13, name: 'Alice', lastMessage: 'See you soon', time: '12:45 PM', status: 'Offline' },
  // Add more users if needed
];

const initialMessages = {
  1: [
    { text: 'Hi Charles', sender: 'received' },
    { text: 'Hi Steve', sender: 'sent' },
  ],
  2: [
    { text: 'See you soon', sender: 'received' },
  ],
};

const DashboardScreen = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState(initialMessages);

  const handleSendMessage = () => {
    if (message.trim() === '') return;

    setMessages((prevMessages) => ({
      ...prevMessages,
      [selectedUser.id]: [
        ...(prevMessages[selectedUser.id] || []),
        { text: message, sender: 'sent' },
      ],
    }));

    setMessage('');
  };

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  const handleBackToDashboard = () => {
    // Implement navigation logic here, e.g., redirect to dashboard
    window.location.href = '/dashboard';
  };

  return (
    <div className="h-full w-full flex flex-col lg:flex-row">
      {/* Sidebar (User List) */}
      {!selectedUser && (
        <div className="w-full md:px-20 px-0 lg:w-full bg-white border-r border-gray-300 flex-shrink-0">
          {/* Search Input */}
          <div className="p-2">
            <input
              type="text"
              placeholder="Search"
              className="w-full p-2 bg-gray-200 rounded-lg focus:outline-none"
            />
          </div>

          {/* Users List */}
          <div className="overflow-y-auto h-[calc(100vh-128px)]">
            {users.map((user) => (
              <div
                key={user.id}
                className={`flex items-center p-4 cursor-pointer hover:bg-gray-100 ${selectedUser?.id === user.id ? 'bg-gray-200' : ''}`}
                onClick={() => handleUserClick(user)}
              >
                <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                <div className="ml-4 flex-1">
                  <h3 className="text-md font-semibold text-blue-500">{user.name}</h3>
                  <p className="text-sm text-gray-500 truncate text-blue-800">{user.lastMessage}</p>
                </div>
                <div className="text-xs text-blue-500">{user.time}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Chat Area */}
      {selectedUser && (
        <div className="flex-1 flex flex-col bg-white md:px-10 px-0">
          {/* Chat Header */}
          <div className="p-4 bg-white border-b border-gray-300 flex items-center px-5">
          <div className="flex justify-end items-center mx-2">
          <svg 
              onClick={handleBackToDashboard} 
              className="w-8 h-8 cursor-pointer" 
              viewBox="0 0 1024 1024"
              fill="currentColor"
            >
              <path d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"/>
              <path d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"/>
            </svg>
          </div>

            <div className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0"></div>
            <div className="ml-4">
              <h3 className="font-semibold text-lg">{selectedUser.name}</h3>
              <p className="text-sm text-gray-500">{selectedUser.status}</p>
            </div>
          </div>

          {/* Chat Messages */}
          <div className='px-5 py-1'>
            {messages[selectedUser.id]?.map((msg, index) => (
              <div key={index} className={`flex ${msg.sender === 'sent' ? 'justify-end' : 'justify-start'} mb-4`}>
                <div className={`p-3 rounded-lg shadow-md ${msg.sender === 'sent' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Chat Input */}
          <div className="fixed bottom-0 left-0 right-0 p-4 border-t border-gray-300 flex items-center bg-white">
            <input
              type="text"
              placeholder="Type a message"
              className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button
              className="ml-2 text-blue-500"
              onClick={handleSendMessage}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardScreen;
