import React, { useState } from 'react';

const ProfileScreen = () => {
  const [profileImage, setProfileImage] = useState('https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png');

  const [name, setName] = useState('');;
  const [email, setEmail] = useState('');;
  const [oldPassword, setOldPassword] = useState('');;
  const [password, setPassword] = useState('');;
  const [confirmedPassword, setConfirmPassword] = useState('');;
  

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission, including profile picture upload
    console.log('');
  };

  return (
    <div className="p-6 flex flex-col items-center overflow-hidden">
      <h1 className="text-3xl font-bold mb-6">Profile Screen</h1>

      <div className="bg-white shadow-md rounded-lg p-6 max-w-lg w-screen">
        <div className="flex flex-col items-center mb-6">
          <img
            src={profileImage}
            alt="Profile"
            className="w-24 h-24 rounded-full border-2 border-gray-300 mb-4"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="mb-4"
          />
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm font-semibold mb-1">name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm font-semibold mb-1">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="old-password" className="text-sm font-semibold mb-1">Old Password</label>
            <input
              type="password"
              name="old-password"
              id="old-password"
              onChange={(e) => setOldPassword(e.target.value)}
              value={oldPassword}
              className="p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="new-password" className="text-sm font-semibold mb-1">New Password</label>
            <input
              type="password"
              name="new-password"
              id="new-password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="confirm-password" className="text-sm font-semibold mb-1">Confirm Password</label>
            <input
              type="password"
              name="confirm-password"
              id="confirm-password"
              value={confirmedPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="p-2 border border-gray-300 rounded-md"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfileScreen;
