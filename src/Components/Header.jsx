import Link from 'next/link';
import React from 'react';
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";

const Header = async () => {
  // Fetch the session and user information
  const { getUser, isAuthenticated } = getKindeServerSession();
  const user = await getUser(); // Fetch user details
  const isUserAuthenticated = await isAuthenticated(); // Check if the user is authenticated

  return (
    <div className="navbar bg-base-100 my-4 px-5 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <Link href='/post' className='hover:text-blue-400 hover:border-b-2'>All Post</Link>
            <Link href='/' className='hover:text-blue-400 hover:border-b-2'>Home</Link>
            {isUserAuthenticated && <Link href='/profile' className='hover:text-blue-400 hover:border-b-2'>User Profile</Link>}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Next <span className='text-blue-400'>Blog</span></a>
      </div>

      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-3 md:gap-4">
          <Link href='/' className='hover:text-blue-400 hover:border-b-2'>Home</Link>
          <Link href='/post ' className='hover:text-blue-400 hover:border-b-2'>All Post</Link>
           <Link href='/profile' className='hover:text-blue-400 hover:border-b-2'>User Profile</Link>
        </ul>
      </div>

      <div className="navbar-end flex gap-4">
        {isUserAuthenticated ? (
          // If authenticated, show Logout button
          <LogoutLink className="btn">Log out</LogoutLink>
        ) : (
          // If not authenticated, show Sign in and Sign up buttons
          <>
              <LoginLink className='btn'>Sign in</LoginLink>
              <RegisterLink className='btn'>Sign up</RegisterLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
