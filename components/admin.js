"use client"
import React, { useState } from 'react';

const AdminDashboard = () => {
  // Sample data - in real app, this would come from your backend
  const [users, setUsers] = useState([
    { id: 1, name: 'AJTIMEPYRO', email: 'aj@example.com', role: 'admin' },
    { id: 2, name: 'ABHISHEK', email: 'abhi@example.com', role: 'publisher' },
    { id: 3, name: 'ALOK JHA', email: 'alom@example.com', role: 'user' },
  ]);

  const [events, setEvents] = useState([
    { id: 1, title: 'Hackfest', date: '2024-07-15', status: 'published' },
    { id: 2, title: 'Cobe Cubicles', date: '2024-08-20', status: 'draft' },
  ]);

  const [activeTab, setActiveTab] = useState('users');
  const [searchTerm, setSearchTerm] = useState('');

  const handleRoleChange = (userId, newRole) => {
    setUsers(users.map(user => 
      user.id === userId ? { ...user, role: newRole } : user
    ));
  };

  const handleRemoveUser = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  const handleDeleteEvent = (eventId) => {
    setEvents(events.filter(event => event.id !== eventId));
  };

  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const UserManagement = () => (
    <div className="space-y-4">
      <div className="relative">
        <input
          type="text"
          placeholder="Search users..."
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid gap-4">
        {filteredUsers.map(user => (
          <div key={user.id} className="bg-white p-4 rounded-lg shadow">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold">{user.name}</h3>
                <p className="text-sm text-gray-500">{user.email}</p>
              </div>
              <div className="flex items-center gap-2">
                <select
                  value={user.role}
                  onChange={(e) => handleRoleChange(user.id, e.target.value)}
                  className="px-2 py-1 border rounded-lg focus:ring-2 focus:ring-blue-500"
                >
                  <option value="user">User</option>
                  <option value="publisher">Publisher</option>
                  <option value="admin">Admin</option>
                </select>
                <button 
                  onClick={() => handleRemoveUser(user.id)}
                  className="p-1 text-red-600 hover:bg-red-100 rounded-lg"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const EventManagement = () => (
    <div className="space-y-4">
      <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
        </svg>
        Add New Event
      </button>

      <div className="grid gap-4">
        {events.map(event => (
          <div key={event.id} className="bg-white p-4 rounded-lg shadow">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold">{event.title}</h3>
                <p className="text-sm text-gray-500">{event.date}</p>
                <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                  event.status === 'published' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  {event.status}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-1 text-gray-600 hover:bg-gray-100 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                  </svg>
                </button>
                <button 
                  onClick={() => handleDeleteEvent(event.id)}
                  className="p-1 text-red-600 hover:bg-red-100 rounded-lg"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="p-6 max-w-6xl mx-auto bg-black">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      
      {/* Tabs */}
      <div className="border-b mb-6">
        <div className="flex gap-4">
          <button
            onClick={() => setActiveTab('users')}
            className={`pb-2 px-1 ${
              activeTab === 'users'
                ? 'border-b-2 border-blue-500 text-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            User Management
          </button>
          <button
            onClick={() => setActiveTab('events')}
            className={`pb-2 px-1 ${
              activeTab === 'events'
                ? 'border-b-2 border-blue-500 text-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Event Management
          </button>
        </div>
      </div>
      
      {/* Tab Content */}
      <div>
        {activeTab === 'users' ? <UserManagement /> : <EventManagement />}
      </div>
    </div>
  );
};

export default AdminDashboard;