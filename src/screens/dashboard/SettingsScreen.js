import React, { useState } from 'react';

const SettingsScreen = () => {
  const [muteNotifications, setMuteNotifications] = useState(false);
  const [enableVibration, setEnableVibration] = useState(false);
  const [status, setStatus] = useState('');
  const [lastSeenVisibility, setLastSeenVisibility] = useState('Everyone');
  const [profilePhotoVisibility, setProfilePhotoVisibility] = useState('Everyone');
  const [statusVisibility, setStatusVisibility] = useState('Everyone');

  const handleMuteNotificationsChange = () => {
    setMuteNotifications(prevState => !prevState);
  }

  const handleEnableVibrationChange = () => {
    setEnableVibration(prevState => !prevState);
  }

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  }

  const handlePrivacyChange = (e, setter) => {
    setter(e.target.value);
  }

  return (
    <div className="flex flex-col items-center overflow-hidden">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>

      <div className="bg-white shadow-md rounded-lg p-6 max-w-lg w-screen">
        {/* Notifications Section */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Notification Settings</h2>
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="mute-notifications"
              checked={muteNotifications}
              onChange={handleMuteNotificationsChange}
              className="mr-3"
            />
            <label htmlFor="mute-notifications" className="text-sm font-medium">Mute Notifications</label>
          </div>
        </div>

        {/* Mobile Vibration Section */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Mobile Vibration</h2>
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="enable-vibration"
              checked={enableVibration}
              onChange={handleEnableVibrationChange}
              className="mr-3"
            />
            <label htmlFor="enable-vibration" className="text-sm font-medium">Enable Vibration</label>
          </div>
        </div>

        {/* Profile Settings */}
        <div className="mb-6">
          <div className="mb-4">
            <label htmlFor="status" className="text-sm font-medium block mb-2">Status</label>
            <input
              type="text"
              id="status"
              value={status}
              onChange={handleStatusChange}
              className="border rounded-md p-2 w-full"
            />
          </div>
        </div>

        {/* Privacy Settings */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Privacy Settings</h2>
          <div className="mb-4">
            <label htmlFor="last-seen-visibility" className="text-sm font-medium block mb-2">Last Seen</label>
            <select
              id="last-seen-visibility"
              value={lastSeenVisibility}
              onChange={(e) => handlePrivacyChange(e, setLastSeenVisibility)}
              className="border rounded-md p-2 w-full"
            >
              <option value="Everyone">Everyone</option>
              <option value="My Contacts">My Contacts</option>
              <option value="Nobody">Nobody</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="profile-photo-visibility" className="text-sm font-medium block mb-2">Profile Photo</label>
            <select
              id="profile-photo-visibility"
              value={profilePhotoVisibility}
              onChange={(e) => handlePrivacyChange(e, setProfilePhotoVisibility)}
              className="border rounded-md p-2 w-full"
            >
              <option value="Everyone">Everyone</option>
              <option value="My Contacts">My Contacts</option>
              <option value="Nobody">Nobody</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="status-visibility" className="text-sm font-medium block mb-2">Status</label>
            <select
              id="status-visibility"
              value={statusVisibility}
              onChange={(e) => handlePrivacyChange(e, setStatusVisibility)}
              className="border rounded-md p-2 w-full"
            >
              <option value="Everyone">Everyone</option>
              <option value="My Contacts">My Contacts</option>
              <option value="Nobody">Nobody</option>
            </select>
          </div>
        </div>

        {/* Other Necessary Sections */}
        <div className="mb-6">
          <form>
            <button
              type="submit"
              className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
            >
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SettingsScreen;
