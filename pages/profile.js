import Image from "next/image";
import { useState } from "react";
import Avatar from "../public/Assets/Images/news/avatar.png";

export default function Profile() {
  // Simulate user data (In real case, fetch this from an API)
  const [user, setUser] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "+123 456 789",
    address: "123 Main St, City, Country",
    password: "password123",
    joinDate: "Tue, July 07, 2024",
    username: "johndoe",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  return (
    <div className="relative min-h-screen pb-20 bg-gray-100">
      {/* Background Image Section */}
      <div
        className="relative w-full sm:h-[346px] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/Assets/Images/news/Background.png")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <h1 className="text-white text-4xl font-bold">Profile Page</h1>
        </div>
      </div>

      {/* Profile Card */}
      <div className="relative z-10 -mt-20 mx-auto max-w-6xl w-full bg-white shadow-lg border rounded-lg p-6">
        {/* Welcome and Join Date */}
        <div className="mb-10">
          <h2 className="text-3xl font-semibold text-orange-500">
            Welcome to Xnarx
          </h2>
          <p className="text-gray-400">{user.joinDate}</p>
        </div>

        {/* User Info and Edit Button */}
        <div className="flex justify-between items-center mb-10">
          {/* User Info */}
          <div className="flex items-center space-x-4">
            <Image
              src={Avatar} // Random avatar from the internet
              alt="User Avatar"
              width={80}
              height={80}
              className="rounded-full"
            />
            <div>
              <h2 className="text-2xl font-bold text-gray-800">
                {user.firstName} {user.lastName}
              </h2>
              <p className="text-gray-500 text-lg">{user.email}</p>
            </div>
          </div>

          {/* Edit/Save Button */}
          <button
            onClick={handleEditToggle}
            className={`${
              isEditing ? "bg-green-500" : "bg-orange-500"
            } text-white px-6 py-2 rounded-lg hover:opacity-90 transition-colors`}
          >
            {isEditing ? "Save" : "Edit"}
          </button>
        </div>

        {/* Form Fields */}
        <div className="space-y-4">
          {/* First Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* First Name */}
            <div>
              <label className="block text-gray-700 font-medium">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={user.firstName}
                onChange={handleInputChange}
                disabled={!isEditing}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 bg-gray-100 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            {/* Last Name */}
            <div>
              <label className="block text-gray-700 font-medium">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={user.lastName}
                onChange={handleInputChange}
                disabled={!isEditing}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 bg-gray-100 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Email */}
            <div>
              <label className="block text-gray-700 font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleInputChange}
                disabled={!isEditing}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 bg-gray-100 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            {/* Phone */}
            <div>
              <label className="block text-gray-700 font-medium">Phone</label>
              <input
                type="text"
                name="phone"
                value={user.phone}
                onChange={handleInputChange}
                disabled={!isEditing}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 bg-gray-100 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
          </div>

          {/* Third Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Address */}
            <div>
              <label className="block text-gray-700 font-medium">Address</label>
              <input
                type="text"
                name="address"
                value={user.address}
                onChange={handleInputChange}
                disabled={!isEditing}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 bg-gray-100 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            {/* Password */}
            <div>
              <label className="block text-gray-700 font-medium">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={user.password}
                  disabled={!isEditing}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 bg-gray-100 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
                {/* Show/Hide Password Toggle */}
                {isEditing && (
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 text-gray-500"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
