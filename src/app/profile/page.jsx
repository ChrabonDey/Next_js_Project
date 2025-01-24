import React from 'react';
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const ProfilePage = async () => {
  // Fetch the user data from the server
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  // Destructure required user details
  const { email, given_name, picture } = user;

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg p-6 w-96">
        <div className="flex flex-col items-center">
            <h1 className='text-4xl font-bold'>Welcome to your Profile <span  className='text-blue-400'>{given_name}</span></h1>
          {/* Display profile picture */}
          {picture ? (
            <img
              src={picture}
              alt={`${given_name}'s profile`}
              className="w-24 h-24 rounded-full mb-4"
            />
          ) : (
            <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center mb-4">
              <span className="text-gray-500 text-sm">No Image</span>
            </div>
          )}

          {/* Display given name */}
          <h1 className="text-2xl font-semibold mb-2">{given_name || "User"}</h1>

          {/* Display email */}
          <p className="text-gray-600">{email || "No Email Available"}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
